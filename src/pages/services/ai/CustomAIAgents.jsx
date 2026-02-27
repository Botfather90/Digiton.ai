import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../../../components/AnimatedPage';
import { LeadMagnetCTA } from '../../../components/LeadMagnetCTA';
import { Bot, Terminal, ShieldAlert, GitBranch } from 'lucide-react';
import { AgentVis } from '../../../components/animations/AgentVis';
import { SEO } from '../../../components/SEO';

const CustomAIAgents = () => {
    return (
        <AnimatedPage>
            <SEO title="Custom AI Agents" canonicalUrl="/services/ai/custom-agents" />
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', right: '-20%', top: '-20%', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(255,206,59,0.05) 0%, transparent 60%)', zIndex: 0 }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)' }}>
                            <Bot size={14} /> AI TRANSFORMATION CORE
                        </span>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            Custom AI <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>Agents.</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            We build digital employees. Autonomous AI agents that don't just chat, but actively execute tasks, manage inboxes, process leads, and coordinate your operations 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <AgentVis />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                            <Terminal size={32} className="text-primary" />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Tool Execution</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
                            Our agents use the Model Context Protocol (MCP) and custom APIs to read your databases, send emails via Gmail/Outlook, and update project management software automatically.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', background: 'var(--accent)', borderRadius: '32px', padding: '3rem', color: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div className="label-mono" style={{ background: 'rgba(0,0,0,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>Multi-Step Reasoning</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--bg-primary)' }}>Autonomous Logic</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.6 }}>
                            Configured with self-correction boundaries so they can dynamically solve problems instead of failing when a rigid script breaks.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        style={{ gridColumn: 'span 4', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <ShieldAlert size={32} className="text-accent mb-6" />
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Human-in-the-Loop</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Critical actions require mandatory Slack/Teams approvals before execution, ensuring absolute safety.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        style={{ gridColumn: 'span 8', background: 'rgba(4,4,5,1)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                                <GitBranch size={32} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Agent Pipelines</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                                We deploy "Swarm" architectures where multiple specialized agents collaborate. A researcher agent finds leads, a copywriter agent drafts emails, and a sender agent deploys them.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <section style={{ padding: '8rem 0' }}>
                <LeadMagnetCTA text="Hire Your First AI Worker" variant="primary" />
            </section>
        </AnimatedPage>
    );
};

export default CustomAIAgents;
