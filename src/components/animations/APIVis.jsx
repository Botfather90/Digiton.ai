import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ArrowRightLeft } from 'lucide-react';

export const APIVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Background grid */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px), linear-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            {/* Central connection tunnel */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                    <filter id="apiGlow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>

                {/* Tunnel outline */}
                <motion.line x1="25%" y1="42%" x2="75%" y2="42%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4,8"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 1 }} />
                <motion.line x1="25%" y1="58%" x2="75%" y2="58%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4,8"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 1 }} />

                {/* Glow line */}
                <motion.line x1="25%" y1="50%" x2="75%" y2="50%" stroke="rgba(255,206,59,0.15)" strokeWidth="6" filter="url(#apiGlow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.2 }} />

                {/* Traveling packets — forward */}
                <motion.rect width="20" height="6" rx="3" fill="var(--accent)" filter="url(#apiGlow)"
                    animate={{ x: ['22%', '72%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    y="49%" />
                {/* Traveling packets — return */}
                <motion.rect width="16" height="5" rx="3" fill="#27C93F" filter="url(#apiGlow)"
                    animate={{ x: ['72%', '22%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.8 }}
                    y="50.5%" />
            </svg>

            {/* Center icon */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', zIndex: 2, opacity: 0.15 }}
            >
                <ArrowRightLeft size={48} color="var(--text-secondary)" />
            </motion.div>

            {/* Systems */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', zIndex: 3 }}>
                <motion.div
                    initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, type: 'spring' }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <motion.div
                        animate={{ boxShadow: ['0 0 8px rgba(255,255,255,0.05)', '0 0 20px rgba(255,255,255,0.1)', '0 0 8px rgba(255,255,255,0.05)'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ width: 100, height: 100, borderRadius: 24, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}
                    >
                        <Database size={48} color="var(--text-secondary)" />
                    </motion.div>
                    <span className="label-mono">LEGACY CRM</span>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <motion.div
                        animate={{ boxShadow: ['0 0 10px rgba(255,206,59,0.1)', '0 0 30px rgba(255,206,59,0.25)', '0 0 10px rgba(255,206,59,0.1)'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ width: 100, height: 100, borderRadius: 24, background: 'rgba(255,206,59,0.05)', border: '1px solid rgba(255,206,59,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}
                    >
                        <Server size={48} color="var(--accent)" />
                    </motion.div>
                    <span className="label-mono" style={{ color: 'var(--accent)' }}>MODERN CLOUD</span>
                </motion.div>
            </div>
        </div>
    );
};
