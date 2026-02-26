import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
    // Generate an array of background abstract elements
    const elements = Array.from({ length: 6 });

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1, // Keep it strictly behind all content
            background: 'var(--bg-primary)'
        }}>

            {/* Base ambient noise/texture could go here if needed, but keeping it clean for now */}

            {elements.map((_, i) => {
                // Randomize starting positions and animation paths for organic feel
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                const size = Math.random() * 40 + 20; // 20vw to 60vw
                const duration = Math.random() * 20 + 20; // 20s to 40s
                const delay = Math.random() * -20; // Start at different times

                return (
                    <motion.div
                        key={i}
                        animate={{
                            x: [
                                `${randomX}vw`,
                                `${(randomX + 30) % 100}vw`,
                                `${(randomX - 20 + 100) % 100}vw`,
                                `${randomX}vw`
                            ],
                            y: [
                                `${randomY}vh`,
                                `${(randomY - 30 + 100) % 100}vh`,
                                `${(randomY + 40) % 100}vh`,
                                `${randomY}vh`
                            ],
                            scale: [1, 1.2, 0.8, 1],
                            opacity: [0.03, 0.06, 0.02, 0.03]
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay
                        }}
                        style={{
                            position: 'absolute',
                            width: `${size}vw`,
                            height: `${size}vw`,
                            background: i % 2 === 0
                                ? 'radial-gradient(circle, var(--accent) 0%, transparent 60%)'
                                : 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)',
                            filter: 'blur(80px)',
                            borderRadius: '50%',
                        }}
                    />
                );
            })}

            {/* Subtle moving grid overlay */}
            <motion.div
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.5
                }}
            />
        </div>
    );
};
