import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* ── City data for arcs and pulses ──────────────────────── */
const cities = [
    { name: 'Tallinn', lat: 59.44, lng: 24.75 },
    { name: 'Lisbon', lat: 38.72, lng: -9.14 },
    { name: 'London', lat: 51.51, lng: -0.13 },
    { name: 'New York', lat: 40.71, lng: -74.01 },
    { name: 'Dubai', lat: 25.20, lng: 55.27 },
    { name: 'Singapore', lat: 1.35, lng: 103.82 },
    { name: 'São Paulo', lat: -23.55, lng: -46.63 },
    { name: 'Tokyo', lat: 35.68, lng: 139.69 },
];

const RADIUS = 2.5;

const latLngToVec3 = (lat, lng, r = RADIUS) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
    );
};

/* ── Globe Points ───────────────────────────────────────── */
const GlobePoints = () => {
    const pointsRef = useRef();

    const [positions, colors, sizes] = useMemo(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const colorBase = new THREE.Color('#FFCE3B');
        const colorDim = new THREE.Color('#2A2A30');
        const colorWhite = new THREE.Color('#FFFFFF');

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = RADIUS * Math.cos(theta) * Math.sin(phi);
            const y = RADIUS * Math.sin(theta) * Math.sin(phi);
            const z = RADIUS * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Latitude-based size variation
            const latFactor = Math.abs(y / RADIUS);
            sizes[i] = 0.015 + latFactor * 0.02;

            // Color: mix accent, white, and dim
            const rand = Math.random();
            let mixedColor;
            if (rand > 0.85) mixedColor = colorBase.clone();
            else if (rand > 0.7) mixedColor = colorWhite.clone().multiplyScalar(0.6);
            else mixedColor = colorDim.clone().lerp(colorBase, Math.random() * 0.3);

            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        return [positions, colors, sizes];
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.getElapsedTime() * 0.04;
            pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.015) * 0.08;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.025} vertexColors transparent opacity={0.85} sizeAttenuation blending={THREE.AdditiveBlending} />
        </points>
    );
};

/* ── Atmosphere Halo (Fresnel-like glow) ────────────────── */
const Atmosphere = () => {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (ref.current) {
            const pulse = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02;
            ref.current.scale.setScalar(pulse);
        }
    });

    return (
        <mesh ref={ref} scale={1}>
            <sphereGeometry args={[RADIUS * 1.15, 64, 64]} />
            <meshBasicMaterial
                color="#FFCE3B"
                transparent
                opacity={0.04}
                side={THREE.BackSide}
            />
        </mesh>
    );
};

/* ── Connection Arcs between cities ─────────────────────── */
const CityArc = ({ from, to, progress }) => {
    const curve = useMemo(() => {
        const start = latLngToVec3(from.lat, from.lng);
        const end = latLngToVec3(to.lat, to.lng);

        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        mid.normalize().multiplyScalar(RADIUS + dist * 0.35);

        return new THREE.QuadraticBezierCurve3(start, mid, end);
    }, [from, to]);

    const points = useMemo(() => curve.getPoints(50), [curve]);
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

    return (
        <line geometry={geometry}>
            <lineBasicMaterial color="#FFCE3B" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
        </line>
    );
};

/* ── City Pulse Dots ────────────────────────────────────── */
const CityPulse = ({ city }) => {
    const ref = useRef();
    const pos = useMemo(() => latLngToVec3(city.lat, city.lng, RADIUS * 1.01), [city]);

    useFrame(({ clock }) => {
        if (ref.current) {
            const pulse = 1 + Math.sin(clock.getElapsedTime() * 2 + city.lat) * 0.5;
            ref.current.scale.setScalar(pulse);
        }
    });

    return (
        <mesh ref={ref} position={pos}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshBasicMaterial color="#FFCE3B" transparent opacity={0.9} />
        </mesh>
    );
};

/* ── Traveling Particles along arcs ─────────────────────── */
const ArcParticle = ({ from, to, speed = 1, delay = 0 }) => {
    const ref = useRef();

    const curve = useMemo(() => {
        const start = latLngToVec3(from.lat, from.lng);
        const end = latLngToVec3(to.lat, to.lng);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        mid.normalize().multiplyScalar(RADIUS + dist * 0.35);
        return new THREE.QuadraticBezierCurve3(start, mid, end);
    }, [from, to]);

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = ((clock.getElapsedTime() * speed * 0.2 + delay) % 1);
            const point = curve.getPoint(t);
            ref.current.position.copy(point);
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.03, 6, 6]} />
            <meshBasicMaterial color="#FFCE3B" transparent opacity={0.9} />
        </mesh>
    );
};

/* ── Arc connections ────────────────────────────────────── */
const arcs = [
    { from: cities[0], to: cities[1] }, // Tallinn → Lisbon
    { from: cities[1], to: cities[3] }, // Lisbon → New York
    { from: cities[2], to: cities[4] }, // London → Dubai
    { from: cities[4], to: cities[5] }, // Dubai → Singapore
    { from: cities[3], to: cities[6] }, // New York → São Paulo
    { from: cities[5], to: cities[7] }, // Singapore → Tokyo
    { from: cities[0], to: cities[2] }, // Tallinn → London
];

/* ── Exported Component ─────────────────────────────────── */
export const DottedGlobe = () => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.6} />
                <pointLight position={[-10, -5, -10]} intensity={0.3} color="#FFCE3B" />

                <GlobePoints />
                <Atmosphere />

                {arcs.map((arc, i) => (
                    <React.Fragment key={i}>
                        <CityArc from={arc.from} to={arc.to} />
                        <ArcParticle from={arc.from} to={arc.to} speed={0.8 + i * 0.15} delay={i * 0.14} />
                    </React.Fragment>
                ))}

                {cities.map((city, i) => (
                    <CityPulse key={i} city={city} />
                ))}

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.4}
                    autoRotate
                    autoRotateSpeed={0.4}
                />
            </Canvas>
        </div>
    );
};
