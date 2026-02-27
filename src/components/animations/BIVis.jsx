import React from 'react';
import { motion } from 'framer-motion';

export const BIVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '4rem 2rem 0 2rem' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Bars */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', height: '100%', zIndex: 1 }}>
                {[40, 60, 45, 80, 55, 95].map((height, i) => (
                    <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1, type: 'spring' }}
                        style={{ 
                            width: '40px', 
                            background: i === 5 ? 'var(--accent)' : 'rgba(255,255,255,0.1)', 
                            borderTopLeftRadius: '8px', 
                            borderTopRightRadius: '8px',
                            position: 'relative'
                        }}
                    >
                        {i === 5 && (
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                                className="label-mono" style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent)', fontWeight: 600 }}
                            >
                                +240%
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Overlay Line Graph */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}>
                <motion.path 
                    d="M 100 300 Q 200 200 300 250 T 500 150 T 700 80"
                    stroke="#27C93F" strokeWidth="4" fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                />
            </svg>
        </div>
    );
};
