import React from 'react';
import { motion } from 'framer-motion';

export const BIVis = () => {
    const bars = [
        { height: 40, color: 'rgba(255,255,255,0.08)' },
        { height: 60, color: 'rgba(255,255,255,0.08)' },
        { height: 45, color: 'rgba(255,255,255,0.08)' },
        { height: 75, color: 'rgba(255,255,255,0.1)' },
        { height: 55, color: 'rgba(255,255,255,0.08)' },
        { height: 85, color: 'rgba(255,206,59,0.3)' },
        { height: 95, color: 'var(--accent)' },
    ];

    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '4rem 2.5rem 2rem 2.5rem' }}>
            {/* Grid background */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Ambient glow */}
            <motion.div
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ position: 'absolute', top: '20%', right: '20%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,206,59,0.3) 0%, transparent 70%)', filter: 'blur(50px)' }}
            />

            {/* Bars */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end', height: '80%', zIndex: 1, width: '100%', justifyContent: 'center' }}>
                {bars.map((bar, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.height}%` }}
                        transition={{ duration: 1.2, delay: i * 0.12, type: 'spring', stiffness: 60 }}
                        style={{
                            width: '40px',
                            background: bar.color,
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            position: 'relative',
                            border: i === bars.length - 1 ? '1px solid rgba(255,206,59,0.3)' : 'none',
                            boxShadow: i === bars.length - 1 ? '0 0 20px rgba(255,206,59,0.15)' : 'none'
                        }}
                    >
                        {/* Shimmer on accent bars */}
                        {i >= bars.length - 2 && (
                            <motion.div
                                animate={{ y: ['-100%', '200%'], opacity: [0, 0.3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                            />
                        )}

                        {i === bars.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8 }}
                                className="label-mono"
                                style={{ position: 'absolute', top: '-32px', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent)', fontWeight: 700, fontSize: '12px', whiteSpace: 'nowrap', textShadow: '0 0 10px rgba(255,206,59,0.3)' }}
                            >
                                +240%
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Overlay Growth Line */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}>
                <defs>
                    <filter id="biGlow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                <motion.path
                    d="M 80 320 Q 180 280 280 260 T 420 200 T 560 130 T 680 60"
                    stroke="#27C93F" strokeWidth="3" fill="transparent" filter="url(#biGlow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                />
                {/* Growth dots */}
                <motion.circle cx="680" cy="60" r="6" fill="#27C93F" filter="url(#biGlow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5, type: 'spring' }}
                />
            </svg>

            {/* Bottom label */}
            <div style={{ position: 'absolute', bottom: '1rem', textAlign: 'center', width: '100%', zIndex: 3 }}>
                <span className="label-mono" style={{ background: 'rgba(0,0,0,0.6)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '9px' }}>REVENUE INTELLIGENCE</span>
            </div>
        </div>
    );
};
