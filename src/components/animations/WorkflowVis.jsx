import React from 'react';
import { motion } from 'framer-motion';
import { Webhook, Brain, Database, Mail, Zap } from 'lucide-react';

const GlowNode = ({ icon: Icon, label, color, x, y, delay = 0 }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay }}
        style={{
            position: 'absolute', left: `${x}%`, top: `${y}%`,
            transform: 'translate(-50%, -50%)', display: 'flex',
            flexDirection: 'column', alignItems: 'center', zIndex: 2
        }}
    >
        <motion.div
            animate={{ boxShadow: [`0 0 8px ${color}33`, `0 0 20px ${color}66`, `0 0 8px ${color}33`] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                width: 64, height: 64, borderRadius: 16,
                background: color + '22', display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: `1px solid ${color}55`,
                backdropFilter: 'blur(8px)'
            }}
        >
            <Icon size={28} color="white" />
        </motion.div>
        <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="label-mono"
            style={{ marginTop: '0.5rem', fontWeight: 600, fontSize: '9px' }}
        >
            {label}
        </motion.span>
    </motion.div>
);

export const WorkflowVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Connection Lines with glow */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                    <filter id="wfGlow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>

                {/* Paths with glow */}
                {[
                    { d: 'M 15% 50% L 35% 30%', delay: 0.3 },
                    { d: 'M 15% 50% L 35% 70%', delay: 0.5 },
                    { d: 'M 35% 30% L 62% 50%', delay: 0.8 },
                    { d: 'M 35% 70% L 62% 50%', delay: 1.0 },
                    { d: 'M 62% 50% L 85% 50%', delay: 1.3 },
                ].map((line, i) => (
                    <React.Fragment key={i}>
                        <motion.path d={line.d} stroke="rgba(255,206,59,0.3)" strokeWidth="4" fill="transparent" filter="url(#wfGlow)" strokeLinecap="round"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: [0, 0.4] }} transition={{ delay: line.delay, duration: 1 }} />
                        <motion.path d={line.d} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="transparent" strokeDasharray="6,4"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: line.delay, duration: 0.8 }} />
                    </React.Fragment>
                ))}

                {/* Traveling data particles */}
                <motion.circle r="4" fill="var(--accent)" filter="url(#wfGlow)"
                    animate={{ cx: ['15%', '35%', '62%'], cy: ['50%', '30%', '50%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.circle r="4" fill="#27C93F" filter="url(#wfGlow)"
                    animate={{ cx: ['15%', '35%', '62%'], cy: ['50%', '70%', '50%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
                <motion.circle r="5" fill="var(--accent)" filter="url(#wfGlow)"
                    animate={{ cx: ['62%', '85%'], cy: ['50%', '50%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
            </svg>

            <GlowNode icon={Webhook} label="STRIPE WEBHOOK" color="#635BFF" x={15} y={50} delay={0} />
            <GlowNode icon={Brain} label="LLM FILTER" color="#10A37F" x={35} y={30} delay={0.3} />
            <GlowNode icon={Database} label="CRM UPDATE" color="#006BFF" x={35} y={70} delay={0.5} />
            <GlowNode icon={Zap} label="N8N CORE" color="#FFCE3B" x={62} y={50} delay={0.8} />
            <GlowNode icon={Mail} label="CLIENT EMAIL" color="#FF5F56" x={85} y={50} delay={1.1} />
        </div>
    );
};
