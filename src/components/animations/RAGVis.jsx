import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, Database, Brain } from 'lucide-react';

const PipelineNode = ({ icon: Icon, label, color, borderColor, delay = 0, isMain = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, delay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', flex: 1 }}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 1.15 : 1,
                    boxShadow: isMain
                        ? ['0 0 15px rgba(255,206,59,0.2)', '0 0 35px rgba(255,206,59,0.5)', '0 0 15px rgba(255,206,59,0.2)']
                        : isHovered
                            ? `0 0 25px ${borderColor}55`
                            : `0 0 8px ${borderColor}33`
                }}
                transition={isMain ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
                style={{
                    width: isMain ? 72 : 60, height: isMain ? 72 : 60,
                    borderRadius: isMain ? 20 : 14,
                    background: color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', border: `1.5px solid ${borderColor}`,
                    backdropFilter: 'blur(10px)', cursor: 'pointer'
                }}
            >
                <Icon size={isMain ? 30 : 24} color={isMain ? 'black' : 'white'} />
            </motion.div>
            <span className="label-mono" style={{
                fontWeight: 600, fontSize: '8px',
                color: isMain ? 'var(--accent)' : 'var(--text-secondary)',
                textAlign: 'center'
            }}>
                {label}
            </span>
        </motion.div>
    );
};

export const RAGVis = () => {
    return (
        <div style={{
            width: '100%', minHeight: '220px', maxHeight: '350px',
            position: 'relative',
            background: 'var(--bg-primary)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem 1.5rem'
        }}>
            {/* Dot grid background */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.06,
                backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)',
                backgroundSize: '20px 20px', pointerEvents: 'none'
            }} />

            {/* Pipeline layout — horizontal on desktop, wraps on mobile */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                width: '100%', maxWidth: '500px',
                position: 'relative', zIndex: 2,
                flexWrap: 'wrap', justifyContent: 'center'
            }}>
                <PipelineNode icon={FileText} label="DOCUMENTS" color="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.15)" delay={0} />

                {/* Arrow connector */}
                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                        width: '30px', height: '2px',
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,206,59,0.4))',
                        flexShrink: 0, borderRadius: '2px'
                    }}
                />

                <PipelineNode icon={Layers} label="EMBEDDINGS" color="rgba(16,163,127,0.15)" borderColor="rgba(16,163,127,0.4)" delay={0.3} />

                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{
                        width: '30px', height: '2px',
                        background: 'linear-gradient(90deg, rgba(16,163,127,0.3), rgba(0,107,255,0.4))',
                        flexShrink: 0, borderRadius: '2px'
                    }}
                />

                <PipelineNode icon={Database} label="VECTOR DB" color="rgba(0,107,255,0.15)" borderColor="rgba(0,107,255,0.4)" delay={0.6} />

                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    style={{
                        width: '30px', height: '2px',
                        background: 'linear-gradient(90deg, rgba(0,107,255,0.3), rgba(255,206,59,0.6))',
                        flexShrink: 0, borderRadius: '2px'
                    }}
                />

                <PipelineNode icon={Brain} label="SYNTHESIS" color="var(--accent)" borderColor="var(--accent)" delay={0.9} isMain />
            </div>

            {/* Traveling data particle */}
            <motion.div
                animate={{ left: ['5%', '90%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute', width: '8px', height: '8px',
                    borderRadius: '50%', background: 'var(--accent)',
                    boxShadow: '0 0 12px rgba(255,206,59,0.6)',
                    top: '50%', transform: 'translateY(-50%)',
                    zIndex: 3, pointerEvents: 'none'
                }}
            />
        </div>
    );
};
