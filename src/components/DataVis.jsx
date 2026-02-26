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
                // easeOutQuart
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

export const AIMindmap = () => {
    const [activeNode, setActiveNode] = useState(null);

    const nodes = [
        {
            id: 'ingestion',
            label: 'Data Ingestion',
            detail: 'Connecting to unstructured sources: PDFs, Slack channels, Email inboxes, and raw databases.',
            color: '#FFCE3B',
            x: 18,
            y: 25
        },
        {
            id: 'processing',
            label: 'Vectorization',
            detail: 'Transforming text into embeddings (Pinecone, pgvector) for semantic retrieval.',
            color: '#FFFFFF',
            x: 82,
            y: 25
        },
        {
            id: 'agent',
            label: 'Agentic Logic',
            detail: 'LangGraph/CrewAI orchestration. Re-prompting, validation, and multi-step reasoning.',
            color: '#FFFFFF',
            x: 82,
            y: 75
        },
        {
            id: 'execution',
            label: 'Automated Action',
            detail: 'Executing API calls to CRMs (HubSpot), payment gateways (Stripe), and sending client emails.',
            color: '#FFCE3B',
            x: 18,
            y: 75
        }
    ];

    return (
        <div style={{ width: '100%', height: '500px', position: 'relative', marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>

            {/* Background Grid Noise */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Central Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{
                    position: 'absolute',
                    width: '160px', height: '160px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(255,206,59,0.3)',
                    borderRadius: '50%',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 10,
                    boxShadow: '0 0 80px rgba(255,206,59,0.15)',
                    cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveNode('core')}
                onMouseLeave={() => setActiveNode(null)}
            >
                <div style={{ textAlign: 'center' }}>
                    <div className="label-mono text-accent" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Digiton Core</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)' }}>LLM Engine</div>
                </div>

                {/* Pulsing rings */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1.5], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    style={{ position: 'absolute', inset: -2, border: '1px solid var(--accent)', borderRadius: '50%', pointerEvents: 'none' }}
                />
            </motion.div>

            {/* Connecting Lines SVG */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                <defs>
                    <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="lineGradIdle" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {nodes.map((node, i) => {
                    const isActive = activeNode === node.id || activeNode === 'core';
                    return (
                        <motion.line
                            key={`line-${node.id}`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                            x1="50%" y1="50%"
                            x2={`${node.x}%`} y2={`${node.y}%`}
                            stroke={isActive ? "url(#lineGradActive)" : "url(#lineGradIdle)"}
                            strokeWidth={isActive ? "3" : "1"}
                            strokeDasharray={isActive ? "none" : "4 4"}
                            style={{ transition: 'all 0.3s ease' }}
                        />
                    );
                })}
            </svg>

            {/* Structured Nodes */}
            {nodes.map((node, i) => {
                const isActive = activeNode === node.id;

                return (
                    <motion.div
                        key={`node-${node.id}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + (i * 0.2), type: 'spring' }}
                        style={{
                            position: 'absolute',
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: activeNode === node.id ? 20 : 5,
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                    >
                        <motion.div
                            animate={{
                                scale: isActive ? 1.05 : 1,
                                borderColor: isActive ? node.color : 'rgba(255,255,255,0.1)'
                            }}
                            style={{
                                background: 'rgba(10,10,12,0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                width: '260px',
                                cursor: 'pointer',
                                boxShadow: isActive ? `0 10px 40px ${node.color}33` : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                <motion.div animate={{ opacity: isActive ? 1 : 0.5 }} style={{ width: '12px', height: '12px', borderRadius: '50%', background: node.color, boxShadow: isActive ? `0 0 20px ${node.color}` : 'none' }} />
                                <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{node.label}</h4>
                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '1rem 0 0 0', lineHeight: 1.5 }}>
                                    {node.detail}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};
