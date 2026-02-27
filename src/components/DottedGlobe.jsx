import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GlobePoints = () => {
    const pointsRef = useRef();

    // Generate points for a sphere
    const [positions, colors] = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorBase = new THREE.Color('#FFCE3B'); // Accent yellow
        const colorDim = new THREE.Color('#333333');  // Dark grey

        for (let i = 0; i < count; i++) {
            // Fibonacci sphere distribution
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const r = 2.5; // Radius
            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Mix colors randomly for depth, biased towards yellow
            const mixRatio = Math.random() > 0.3 ? 1 : 0;
            const mixedColor = colorDim.clone().lerp(colorBase, mixRatio);
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.03} vertexColors={true} transparent opacity={0.8} />
        </points>
    );
};

export const DottedGlobe = () => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <GlobePoints />
                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};
