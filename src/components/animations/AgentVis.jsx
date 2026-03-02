import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mail, Calendar, MessageSquare, Database } from 'lucide-react';

const GlowNode = ({ icon: Icon, label, color, x, y, delay = 0, size = 64 }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay }}
        style={{
            position: 'absolute', left: `${x}%`, top: `${y}%`,
            transform: 'translate(-50%, -50%)', display: 'flex',
            flexDirection: 'column', alignItems: 'center', zIndex: 3
        }}
    >
        <motion.div
            animate={{ boxShadow: ['0 0 10px rgba(255,206,59,0.1)', '0 0 25px rgba(255,206,59,0.3)', '0 0 10px rgba(255,206,59,0.1)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
            style={{
                width: size, height: size, borderRadius: 16,
                background: color, display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Icon size={size * 0.44} color="white" />
        </motion.div>
        <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="label-mono"
            style={{ marginTop: '0.6rem', fontWeight: 600, fontSize: '10px', letterSpacing: '0.1em' }}
        >
            {label}
        </motion.span>
    </motion.div>
);

const GlowLine = ({ d, color = 'rgba(255,206,59,0.4)', delay = 0 }) => (
    <>
        {/* Glow layer */}
        <motion.path
            d={d} stroke={color} strokeWidth="4" fill="transparent"
            filter="url(#glow)" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay, duration: 1.2, ease: 'easeOut' }}
        />
        {/* Sharp line */}
        <motion.path
            d={d} stroke={color} strokeWidth="1.5" fill="transparent"
            strokeDasharray="6,4" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay, duration: 1 }}
        />
    </>
);

const DataParticle = ({ cx1, cy1, cx2, cy2, delay = 0, color = 'var(--accent)' }) => (
    <motion.circle
        r="4" fill={color}
        animate={{ cx: [cx1, cx2], cy: [cy1, cy2], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
        <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
    </motion.circle>
);

export const AgentVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Dot grid */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Radial glow behind central node */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,206,59,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
            />

            {/* Pulsing rings */}
            <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', border: '2px solid var(--accent)' }}
            />
            <motion.div
                animate={{ scale: [1, 3], opacity: [0.15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid var(--accent)' }}
            />

            {/* SVG Connections */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <GlowLine d="M 50% 50% L 25% 22%" delay={0.5} />
                <GlowLine d="M 50% 50% L 75% 22%" delay={0.7} />
                <GlowLine d="M 50% 50% L 25% 78%" delay={0.9} />
                <GlowLine d="M 50% 50% L 75% 78%" delay={1.1} />

                <DataParticle cx1="50%" cy1="50%" cx2="25%" cy2="22%" delay={0} />
                <DataParticle cx1="50%" cy1="50%" cx2="75%" cy2="22%" delay={0.6} />
                <DataParticle cx1="50%" cy1="50%" cx2="25%" cy2="78%" delay={1.2} color="#27C93F" />
                <DataParticle cx1="50%" cy1="50%" cx2="75%" cy2="78%" delay={1.8} color="#6480FF" />
            </svg>

            {/* Central Agent Node */}
            <GlowNode icon={Bot} label="AI AGENT" color="rgba(255,206,59,0.15)" x={50} y={50} size={80} />

            {/* Satellite Nodes */}
            <GlowNode icon={Mail} label="EMAIL" color="rgba(99,91,255,0.2)" x={25} y={22} delay={0.4} />
            <GlowNode icon={Calendar} label="CALENDAR" color="rgba(16,163,127,0.2)" x={75} y={22} delay={0.6} />
            <GlowNode icon={Database} label="DATABASE" color="rgba(0,107,255,0.2)" x={25} y={78} delay={0.8} />
            <GlowNode icon={MessageSquare} label="CHAT" color="rgba(255,95,86,0.2)" x={75} y={78} delay={1.0} />

            <div style={{ position: 'absolute', bottom: '1.5rem', textAlign: 'center', width: '100%', zIndex: 4 }}>
                <span className="label-mono" style={{ background: 'rgba(0,0,0,0.6)', padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>AUTONOMOUS TOOL EXECUTION</span>
            </div>
        </div>
    );
};
