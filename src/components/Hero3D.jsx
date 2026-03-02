import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Orbiting Particles Ring ────────────────────────────── */
const ParticleRing = ({ count = 80, radius = 2.8, speed = 0.3, color = '#FFCE3B', size = 0.025 }) => {
    const ref = useRef();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
        return pos;
    }, [count, radius]);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * speed;
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.3;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={size} color={color} transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} />
        </points>
    );
};

/* ── Central Morphing Shape ─────────────────────────────── */
const MorphShape = () => {
    const meshRef = useRef();
    const glowRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.08;
            meshRef.current.rotation.y = t * 0.12;
            meshRef.current.rotation.z = t * 0.05;
        }
        if (glowRef.current) {
            glowRef.current.rotation.x = -t * 0.06;
            glowRef.current.rotation.y = -t * 0.09;
            const pulse = 1 + Math.sin(t * 1.5) * 0.05;
            glowRef.current.scale.setScalar(pulse * 1.6);
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <group>
                {/* Inner glow shell */}
                <mesh ref={glowRef} scale={1.6}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial color="#FFCE3B" transparent opacity={0.03} side={THREE.BackSide} />
                </mesh>

                {/* Primary Shape — TorusKnot with distortion */}
                <mesh ref={meshRef} scale={1.2}>
                    <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
                    <MeshDistortMaterial
                        color="#FFCE3B"
                        emissive="#FFCE3B"
                        emissiveIntensity={0.15}
                        distort={0.25}
                        speed={1.5}
                        roughness={0.15}
                        metalness={0.9}
                        wireframe
                        transparent
                        opacity={0.7}
                    />
                </mesh>

                {/* Secondary Shell — subtle wobble */}
                <mesh scale={1.8}>
                    <icosahedronGeometry args={[1, 2]} />
                    <MeshWobbleMaterial
                        color="#FFFFFF"
                        factor={0.15}
                        speed={0.8}
                        wireframe
                        transparent
                        opacity={0.06}
                    />
                </mesh>
            </group>
        </Float>
    );
};

/* ── Floating Micro Particles ───────────────────────────── */
const FloatingDust = ({ count = 200 }) => {
    const ref = useRef();

    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const sz = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
            sz[i] = Math.random() * 0.015 + 0.005;
        }
        return [pos, sz];
    }, [count]);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * 0.02;
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#FFFFFF" transparent opacity={0.3} sizeAttenuation blending={THREE.AdditiveBlending} />
        </points>
    );
};

/* ── Exported Component ─────────────────────────────────── */
export const Hero3D = () => {
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0, pointerEvents: 'none', opacity: 0.7
        }}>
            <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFFFFF" />
                <pointLight position={[-5, -5, -5]} intensity={0.4} color="#FFCE3B" />
                <pointLight position={[3, -3, 2]} intensity={0.3} color="#6480FF" />

                <MorphShape />
                <ParticleRing count={100} radius={2.8} speed={0.3} color="#FFCE3B" size={0.025} />
                <ParticleRing count={60} radius={3.4} speed={-0.2} color="#FFFFFF" size={0.015} />
                <ParticleRing count={40} radius={4.0} speed={0.15} color="#FFD95C" size={0.02} />
                <FloatingDust count={150} />
            </Canvas>
        </div>
    );
};
