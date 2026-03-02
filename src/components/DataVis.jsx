import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedCounter = ({ from = 0, to, duration = 2, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                const easeOut = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOut * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return (
        <span ref={nodeRef}>
            {prefix}{count}{suffix}
        </span>
    );
};

const OrbitalNode = ({ label, detail, color, angle, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: 'spring', stiffness: 80 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="orbital-node"
            style={{ width: '100%', maxWidth: '280px' }}
        >
            <motion.div
                animate={{
                    borderColor: isHovered ? color : 'rgba(255,255,255,0.08)',
                    boxShadow: isHovered ? `0 0 30px ${color}33, 0 8px 32px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.3)'
                }}
                transition={{ duration: 0.3 }}
                className="beam-border"
                style={{
                    background: 'rgba(10,10,12,0.95)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    isolation: 'isolate'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.3 : 1,
                            boxShadow: isHovered ? `0 0 20px ${color}` : `0 0 8px ${color}55`
                        }}
                        style={{
                            width: '12px', height: '12px', borderRadius: '50%',
                            background: color, flexShrink: 0
                        }}
                    />
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>{label}</h4>
                </div>
                <motion.div
                    initial={false}
                    animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                    style={{ overflow: 'hidden' }}
                >
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.75rem 0 0 0', lineHeight: 1.5 }}>
                        {detail}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export const AIMindmap = () => {
    const nodes = [
        { label: 'Data Ingestion', detail: 'Connecting to unstructured sources: PDFs, Slack channels, Email inboxes, and raw databases.', color: '#FFCE3B' },
        { label: 'Vectorization', detail: 'Transforming text into embeddings (Pinecone, pgvector) for semantic retrieval.', color: '#A78BFA' },
        { label: 'Agentic Logic', detail: 'LangGraph/CrewAI orchestration. Re-prompting, validation, and multi-step reasoning.', color: '#60A5FA' },
        { label: 'Automated Action', detail: 'Executing API calls to CRMs (HubSpot), payment gateways (Stripe), and sending client emails.', color: '#34D399' }
    ];

    return (
        <div className="workflow-orbital" style={{
            width: '100%',
            position: 'relative',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
            padding: '3rem 1rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden'
        }}>
            {/* Dot grid background */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.08,
                backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)',
                backgroundSize: '28px 28px', pointerEvents: 'none'
            }} />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 15, 0],
                        opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    style={{
                        position: 'absolute',
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: 'var(--accent)',
                        left: `${15 + i * 14}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        pointerEvents: 'none'
                    }}
                />
            ))}

            {/* Central Hub */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80 }}
                className="orbital-center"
                style={{
                    width: '160px', height: '160px',
                    background: 'var(--bg-secondary)',
                    border: '2px solid rgba(255,206,59,0.3)',
                    borderRadius: '50%',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 10, position: 'relative',
                    boxShadow: '0 0 60px rgba(255,206,59,0.15), 0 0 120px rgba(255,206,59,0.05)'
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <div className="label-mono text-accent" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>Digiton Core</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.1 }}>LLM<br />Engine</div>
                </div>
                {/* Pulsing rings */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1.6], opacity: [0.4, 0.15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                    style={{ position: 'absolute', inset: -3, border: '1px solid var(--accent)', borderRadius: '50%', pointerEvents: 'none' }}
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1.5], opacity: [0.3, 0.1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                    style={{ position: 'absolute', inset: -3, border: '1px solid rgba(255,206,59,0.5)', borderRadius: '50%', pointerEvents: 'none' }}
                />
            </motion.div>

            {/* Connection lines (SVG) */}
            <svg style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                zIndex: 1, pointerEvents: 'none', overflow: 'visible'
            }} className="workflow-lines">
                <defs>
                    <linearGradient id="connGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,206,59,0.3)" />
                        <stop offset="100%" stopColor="rgba(255,206,59,0.05)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Nodes in a responsive grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                width: '100%',
                maxWidth: '900px',
                position: 'relative',
                zIndex: 5
            }}>
                {nodes.map((node, i) => (
                    <OrbitalNode key={node.label} {...node} delay={0.5 + i * 0.15} />
                ))}
            </div>
        </div>
    );
};
