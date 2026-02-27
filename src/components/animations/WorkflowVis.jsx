import React from 'react';
import { motion } from 'framer-motion';
import { Webhook, Brain, Database, Mail, Zap } from 'lucide-react';

export const WorkflowVis = () => {
    const nodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: { delay: i * 0.5, type: 'spring', stiffness: 100 }
        })
    };

    const pulseVariants = {
        pulse: { boxShadow: ['0 0 0 0 rgba(255, 206, 59, 0.4)', '0 0 0 20px rgba(255, 206, 59, 0)'], transition: { duration: 1.5, repeat: Infinity } }
    };

    const Node = ({ icon: Icon, label, color, delayIdx, x, y }) => (
        <motion.div
            custom={delayIdx}
            initial="hidden"
            animate="visible"
            style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}
        >
            <motion.div 
                variants={pulseVariants}
                animate="pulse"
                style={{ width: '64px', height: '64px', borderRadius: '16px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <Icon size={28} color="white" />
            </motion.div>
            <span className="label-mono" style={{ marginTop: '0.75rem', fontWeight: 600 }}>{label}</span>
        </motion.div>
    );

    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            {/* Connection Lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <motion.path 
                    d="M 15% 50% L 35% 30%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" fill="transparent"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }}
                />
                <motion.path 
                    d="M 15% 50% L 35% 70%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" fill="transparent"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }}
                />
                <motion.path 
                    d="M 35% 30% L 65% 50%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" fill="transparent"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1 }}
                />
                <motion.path 
                    d="M 35% 70% L 65% 50%" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,5" fill="transparent"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 1 }}
                />
                <motion.path 
                    d="M 65% 50% L 85% 50%" stroke="var(--accent)" strokeWidth="3" fill="transparent"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5, duration: 0.5 }}
                />

                {/* Animated Data Packets */}
                <motion.circle r="4" fill="var(--accent)"
                    animate={{ cx: ["15%", "35%"], cy: ["50%", "30%"] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.circle r="4" fill="var(--accent)"
                    animate={{ cx: ["15%", "35%"], cy: ["50%", "70%"] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 3.5 }}
                />
                <motion.circle r="4" fill="#27C93F"
                    animate={{ cx: ["65%", "85%"], cy: ["50%", "50%"] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
            </svg>

            <Node icon={Webhook} label="Stripe Webhook" color="rgba(99, 91, 255, 0.8)" delayIdx={0} x={15} y={50} />
            <Node icon={Brain} label="LLM Filter" color="rgba(16, 163, 127, 0.8)" delayIdx={1} x={35} y={30} />
            <Node icon={Database} label="CRM Update" color="rgba(0, 107, 255, 0.8)" delayIdx={2} x={35} y={70} />
            <Node icon={Zap} label="n8n Core" color="var(--accent)" delayIdx={3} x={65} y={50} />
            <Node icon={Mail} label="Client Auth Email" color="rgba(255, 95, 86, 0.8)" delayIdx={4} x={85} y={50} />
            
        </div>
    );
};
