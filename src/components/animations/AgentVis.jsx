import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mail, Calendar, MessageSquare, Database } from 'lucide-react';

export const AgentVis = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Pulsing Background Rings */}
            <motion.div 
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', border: '2px solid var(--accent)', zIndex: 0 }}
            />
            <motion.div 
                animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', border: '1px solid var(--accent)', zIndex: 0 }}
            />

            {/* Central Agent Node */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                style={{ width: '100px', height: '100px', borderRadius: '24px', background: 'var(--bg-secondary)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, boxShadow: '0 0 30px rgba(255, 206, 59, 0.2)' }}
            >
                <Bot size={48} className="text-accent" />
            </motion.div>

            {/* Satellites */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                {/* Lines */}
                <svg style={{ width: '100%', height: '100%' }}>
                    {/* Top Left */}
                    <motion.path d="M 50% 50% L 30% 25%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <motion.circle r="4" fill="var(--accent)" animate={{ cx: ["50%", "30%"], cy: ["50%", "25%"] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    
                    {/* Top Right */}
                    <motion.path d="M 50% 50% L 70% 25%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <motion.circle r="4" fill="var(--accent)" animate={{ cx: ["50%", "70%"], cy: ["50%", "25%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                    
                    {/* Bottom Left */}
                    <motion.path d="M 50% 50% L 30% 75%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <motion.circle r="4" fill="var(--accent)" animate={{ cx: ["50%", "30%"], cy: ["50%", "75%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
                    
                    {/* Bottom Right */}
                    <motion.path d="M 50% 50% L 70% 75%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <motion.circle r="4" fill="var(--accent)" animate={{ cx: ["50%", "70%"], cy: ["50%", "75%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }} />
                </svg>

                {/* Satellite Nodes */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ position: 'absolute', left: '30%', top: '25%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Mail size={24} color="var(--text-primary)" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ position: 'absolute', left: '70%', top: '25%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Calendar size={24} color="var(--text-primary)" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: 'absolute', left: '30%', top: '75%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Database size={24} color="var(--text-primary)" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ position: 'absolute', left: '70%', top: '75%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <MessageSquare size={24} color="var(--text-primary)" />
                </motion.div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '2rem', textAlign: 'center', width: '100%' }}>
                <span className="label-mono" style={{ background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '100px' }}>AUTONOMOUS TOOL EXECUTION</span>
            </div>
        </div>
    );
};
