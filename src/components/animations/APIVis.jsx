import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ArrowRightLeft } from 'lucide-react';

export const APIVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Background Grid */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

            {/* Central Packets Link */}
            <div style={{ position: 'absolute', width: '60%', height: '80px', borderTop: '2px dashed rgba(255,255,255,0.2)', borderBottom: '2px dashed rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRightLeft size={32} color="var(--text-secondary)" style={{ opacity: 0.5 }} />
            </div>

            {/* Packets */}
            <motion.div 
                animate={{ x: ['-20vw', '20vw'], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '50%', transform: 'translateY(-200%)', width: '24px', height: '8px', borderRadius: '4px', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}
            />
            <motion.div 
                animate={{ x: ['20vw', '-20vw'], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                style={{ position: 'absolute', top: '50%', transform: 'translateY(100%)', width: '24px', height: '8px', borderRadius: '4px', background: '#27C93F', boxShadow: '0 0 10px #27C93F' }}
            />

            {/* Systems */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', zIndex: 1 }}>
                
                {/* Legacy System */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <div style={{ width: 100, height: 100, borderRadius: 24, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
                        <Database size={48} color="var(--text-secondary)" />
                    </div>
                    <span className="label-mono">Legacy CRM</span>
                </motion.div>

                {/* Modern System */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <div style={{ width: 100, height: 100, borderRadius: 24, background: 'rgba(255,206,59,0.05)', border: '1px solid rgba(255,206,59,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', boxShadow: '0 0 30px rgba(255, 206, 59, 0.1)' }}>
                        <Server size={48} color="var(--accent)" />
                    </div>
                    <span className="label-mono" style={{ color: 'var(--accent)' }}>Modern Cloud</span>
                </motion.div>

            </div>
        </div>
    );
};
