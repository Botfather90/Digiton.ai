import React from 'react';
import { motion } from 'framer-motion';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

const Discovery = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8rem 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background elements specific to the landing page feel */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,206,59,0.03) 0%, transparent 60%)', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="label-mono text-accent">Begin Transformation</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Let's Engineer Your <br />
                        <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Unfair Advantage.</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
                        Complete the short diagnostic below to see exactly how much time and capital you're leaving on the table.
                    </p>
                </motion.div>

                {/* Embed the Lead Magnet component directly onto the page */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <LeadMagnetCTA embedded={true} />
                </motion.div>
            </div>
        </div>
    );
};

export default Discovery;
