import React from 'react';
import { motion } from 'framer-motion';

export const PlatformVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Wireframe UI dropping into place */}
            <div style={{ width: '360px', height: '280px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden' }}>
                
                {/* Header Navbar */}
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    style={{ width: '100%', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', gap: '0.5rem' }}
                >
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--accent)' }} />
                    <div style={{ width: 60, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.2)' }} />
                </motion.div>

                <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                    {/* Sidebar */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                        style={{ width: '80px', height: '100%', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem' }}
                    >
                        <div style={{ width: '100%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                        <div style={{ width: '100%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                        <div style={{ width: '100%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                    </motion.div>

                    {/* Main Content Area */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Hero / Chart Section */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                            style={{ width: '100%', height: '80px', borderRadius: '8px', background: 'rgba(255,206,59,0.1)', border: '1px solid rgba(255,206,59,0.2)', position: 'relative', overflow: 'hidden' }}
                        >
                             <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
                        </motion.div>

                        {/* Cards Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
                                style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }} 
                            />
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 100, delay: 1.0 }}
                                style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }} 
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
