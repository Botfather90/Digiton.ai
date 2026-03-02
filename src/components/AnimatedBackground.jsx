import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Particle = ({ delay, x, y, size, duration, drift }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 0.6, 0.3, 0.7, 0],
            scale: [0, 1, 0.8, 1.1, 0],
            x: [0, drift, -drift * 0.5, drift * 0.3, 0],
            y: [0, -drift * 0.7, drift * 0.3, -drift, 0]
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: 'easeInOut'
        }}
        style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: `0 0 ${size * 2}px rgba(255, 206, 59, 0.4)`,
        }}
    />
);

export const AnimatedBackground = () => {
    const particles = useMemo(() =>
        Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 15,
            duration: Math.random() * 12 + 10,
            drift: Math.random() * 40 + 15,
        })), []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1,
            background: 'var(--bg-primary)'
        }}>
            {/* Aurora Ribbon 1 */}
            <div className="aurora-ribbon aurora-ribbon-1" />

            {/* Aurora Ribbon 2 */}
            <div className="aurora-ribbon aurora-ribbon-2" />

            {/* Ambient Glow Orb */}
            <motion.div
                animate={{
                    x: ['0vw', '20vw', '-10vw', '15vw', '0vw'],
                    y: ['0vh', '15vh', '-5vh', '10vh', '0vh'],
                    scale: [1, 1.3, 0.9, 1.1, 1],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(255,206,59,0.04) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    borderRadius: '50%',
                }}
            />

            {/* Secondary cold orb */}
            <motion.div
                animate={{
                    x: ['0vw', '-15vw', '10vw', '-5vw', '0vw'],
                    y: ['0vh', '-10vh', '20vh', '-15vh', '0vh'],
                    scale: [1, 0.8, 1.2, 0.9, 1],
                }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(100,130,255,0.03) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                }}
            />

            {/* Particle Field */}
            {particles.map(p => (
                <Particle key={p.id} {...p} />
            ))}

            {/* Moving dot grid with pulse */}
            <motion.div
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    backgroundPosition: { duration: 80, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
                }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Scanline overlay */}
            <div className="scanline-overlay" />
        </div>
    );
};
