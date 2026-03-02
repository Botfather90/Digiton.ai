import React from 'react';
import { motion } from 'framer-motion';

export const PlatformVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Ambient glow */}
            <motion.div
                animate={{ opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ position: 'absolute', width: '300px', height: '200px', background: 'radial-gradient(circle, rgba(255,206,59,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            {/* Wireframe UI dropping into place */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80 }}
                style={{
                    width: '360px', height: '280px', background: 'rgba(255,255,255,0.02)',
                    borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative', zIndex: 1, padding: '1rem',
                    display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                }}
            >
                {/* Header Navbar */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    style={{ width: '100%', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px rgba(255,206,59,0.3)' }} />
                    <div style={{ width: 60, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.15)' }} />
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                        <div style={{ width: 30, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
                        <div style={{ width: 30, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '0.75rem', flex: 1 }}>
                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                        style={{ width: '80px', height: '100%', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column', gap: '0.4rem', padding: '0.4rem', border: '1px solid rgba(255,255,255,0.04)' }}
                    >
                        {[0.12, 0.08, 0.08, 0.06].map((opacity, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                                style={{ width: '100%', height: 14, borderRadius: 4, background: `rgba(255,255,255,${opacity})` }}
                            />
                        ))}
                    </motion.div>

                    {/* Main Content Area */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {/* Chart Section */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                            style={{ width: '100%', height: '80px', borderRadius: '8px', background: 'rgba(255,206,59,0.06)', border: '1px solid rgba(255,206,59,0.12)', position: 'relative', overflow: 'hidden' }}
                        >
                            {/* Shimmer effect */}
                            <motion.div
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '30%', background: 'linear-gradient(90deg, transparent, rgba(255,206,59,0.1), transparent)' }}
                            />
                            {/* Mini chart bars */}
                            <div style={{ position: 'absolute', bottom: '8px', left: '8px', right: '8px', display: 'flex', gap: '3px', alignItems: 'flex-end', height: '50px' }}>
                                {[30, 50, 35, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.8 + i * 0.05, type: 'spring' }}
                                        style={{ flex: 1, background: i === 8 ? 'var(--accent)' : 'rgba(255,255,255,0.08)', borderRadius: '2px' }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Cards Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', flex: 1 }}>
                            {[0.8, 1.0, 1.2, 1.4].map((delay, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 80, delay }}
                                    style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '3px' }}
                                >
                                    <div style={{ width: '60%', height: 5, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ width: '80%', height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.05)' }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
