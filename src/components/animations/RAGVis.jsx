import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, Database, Brain } from 'lucide-react';

const PipelineNode = ({ icon: Icon, label, color, borderColor, x, delay = 0, isMain = false }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay }}
        style={{
            position: 'absolute', left: `${x}%`, top: '50%',
            transform: 'translate(-50%, -50%)', display: 'flex',
            flexDirection: 'column', alignItems: 'center', zIndex: 3
        }}
    >
        <motion.div
            animate={isMain
                ? { boxShadow: ['0 0 15px rgba(255,206,59,0.2)', '0 0 35px rgba(255,206,59,0.5)', '0 0 15px rgba(255,206,59,0.2)'] }
                : { boxShadow: [`0 0 8px ${borderColor}33`, `0 0 18px ${borderColor}55`, `0 0 8px ${borderColor}33`] }
            }
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                width: isMain ? 80 : 64, height: isMain ? 80 : 64,
                borderRadius: isMain ? 24 : 16,
                background: color, display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: `1px solid ${borderColor}`,
                backdropFilter: 'blur(10px)'
            }}
        >
            <Icon size={isMain ? 36 : 28} color={isMain ? 'black' : 'white'} />
        </motion.div>
        <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.3 }}
            className="label-mono"
            style={{ marginTop: '0.7rem', fontWeight: 600, fontSize: '9px', color: isMain ? 'var(--accent)' : 'var(--text-secondary)' }}
        >
            {label}
        </motion.span>
    </motion.div>
);

export const RAGVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Connection flow */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                    <filter id="ragGlow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                    <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,206,59,0.6)" />
                    </linearGradient>
                </defs>

                {[
                    { d: 'M 20% 50% L 40% 50%', delay: 0.5 },
                    { d: 'M 40% 50% L 60% 50%', delay: 0.9 },
                    { d: 'M 60% 50% L 80% 50%', delay: 1.3 },
                ].map((line, i) => (
                    <React.Fragment key={i}>
                        <motion.path d={line.d} stroke="url(#ragGrad)" strokeWidth="4" fill="transparent" filter="url(#ragGlow)" strokeLinecap="round"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: line.delay, duration: 1 }} />
                        <motion.path d={line.d} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="transparent" strokeDasharray="6,4"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: line.delay, duration: 0.8 }} />
                    </React.Fragment>
                ))}

                {/* Data chunk particles */}
                <motion.rect width="12" height="12" fill="var(--accent)" rx="3" filter="url(#ragGlow)"
                    animate={{ x: ['18%', '38%', '58%', '78%'], y: ['48%', '48%', '48%', '48%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
                <motion.rect width="10" height="10" fill="#27C93F" rx="3" filter="url(#ragGlow)"
                    animate={{ x: ['18%', '38%', '58%', '78%'], y: ['50%', '50%', '50%', '50%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }} />
            </svg>

            <PipelineNode icon={FileText} label="DOCUMENTS" color="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.15)" x={20} delay={0} />
            <PipelineNode icon={Layers} label="EMBEDDINGS" color="rgba(16,163,127,0.15)" borderColor="rgba(16,163,127,0.4)" x={40} delay={0.3} />
            <PipelineNode icon={Database} label="VECTOR DB" color="rgba(0,107,255,0.15)" borderColor="rgba(0,107,255,0.4)" x={60} delay={0.6} />
            <PipelineNode icon={Brain} label="SYNTHESIS" color="var(--accent)" borderColor="var(--accent)" x={80} delay={0.9} isMain />
        </div>
    );
};
