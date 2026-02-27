import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, Database, Brain } from 'lucide-react';

export const RAGVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Connecting Lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <motion.path d="M 20% 50% L 40% 50%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
                <motion.path d="M 40% 50% L 60% 50%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1 }} />
                <motion.path d="M 60% 50% L 80% 50%" stroke="var(--accent)" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 1 }} />
                
                {/* Data Chunks */}
                <motion.rect x="25%" y="48%" width="15" height="15" fill="var(--accent)" rx="4" animate={{ x: ["0%", "15vw"], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
                <motion.rect x="45%" y="48%" width="15" height="15" fill="#27C93F" rx="4" animate={{ x: ["0%", "15vw"], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.5 }} />
            </svg>

            {/* Nodes */}
            <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <FileText size={28} color="white" />
                </motion.div>
                <span className="label-mono" style={{ mt: 2, fontWeight: 600, marginTop: '8px' }}>Documents</span>
            </div>

            <div style={{ position: 'absolute', left: '40%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.5 }} style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(16, 163, 127, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(16, 163, 127, 0.5)' }}>
                    <Layers size={28} color="#10a37f" />
                </motion.div>
                <span className="label-mono" style={{ mt: 2, fontWeight: 600, marginTop: '8px' }}>Embeddings</span>
            </div>

            <div style={{ position: 'absolute', left: '60%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1 }} style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(0, 107, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 107, 255, 0.5)' }}>
                    <Database size={28} color="#006bff" />
                </motion.div>
                <span className="label-mono" style={{ mt: 2, fontWeight: 600, marginTop: '8px' }}>Vector DB</span>
            </div>

            <div style={{ position: 'absolute', left: '80%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.5 }} style={{ width: 80, height: 80, borderRadius: 24, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(255, 206, 59, 0.3)' }}>
                    <Brain size={36} color="black" />
                </motion.div>
                <span className="label-mono" style={{ mt: 2, fontWeight: 600, marginTop: '12px', color: 'var(--accent)' }}>Synthesis</span>
            </div>
            
        </div>
    );
};
