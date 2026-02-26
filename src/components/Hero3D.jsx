import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AbstractShape = () => {
    const sphereRef = useRef();

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
                <MeshDistortMaterial
                    color="#FFCE3B"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                />
            </Sphere>
        </Float>
    );
};

export const Hero3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD95C" />
                <AbstractShape />
            </Canvas>
        </div>
    );
};
