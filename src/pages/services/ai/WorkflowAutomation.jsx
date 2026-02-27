import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../../../components/AnimatedPage';
import { LeadMagnetCTA } from '../../../components/LeadMagnetCTA';
import { Network, Zap, Cpu, ArrowRight } from 'lucide-react';
import { WorkflowVis } from '../../../components/animations/WorkflowVis';
import { SEO } from '../../../components/SEO';

const WorkflowAutomation = () => {
    return (
        <AnimatedPage>
            <SEO title="Workflow Automation" canonicalUrl="/services/ai/workflow-automation" />
            {/* HER0 */}
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
                {/* Background Grid & Beams */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

                <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', left: '20%', width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, var(--accent), transparent)', opacity: 0.5, zIndex: 0 }}
                />
                <motion.div
                    animate={{ y: ['200%', '-100%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
                    style={{ position: 'absolute', right: '30%', width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)', opacity: 0.3, zIndex: 0 }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)' }}>
                            <Network size={14} /> AI TRANSFORMATION CORE
                        </span>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            Workflow <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>Automation.</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            We connect your tools and kill your manual work. Custom n8n and Make.com architectures that eliminate data silos and automate complex sequences across 50+ platforms.
                        </p>

                        <a href="#architecture" className="btn btn-glass" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                            Explore Architecture
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CAPABILITIES / BENTO GRID */}
            <section id="architecture" className="container" style={{ padding: '8rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="label-mono text-accent block mb-4">THE INFRASTRUCTURE</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>System <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Capabilities</span></h2>
                </div>

                <div style={{ marginBottom: '6rem' }}>
                    <WorkflowVis />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>

                    {/* BENTO 1: Data Sync */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                    >
                        {/* Abstract Background Animation */}
                        <motion.div
                            animate={{ x: [0, -100, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '200%', backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5, zIndex: 0 }}
                        />
                        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                                <Cpu size={32} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Multi-Node Syncing</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
                                Bidirectional syncing between your CRM, billing pipeline, and marketing stack. A record updated in Salesforce instantly propagates to Moloni and Klaviyo without human intervention.
                            </p>
                        </div>
                    </motion.div>

                    {/* BENTO 2: Webhooks (Accent) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', background: 'var(--accent)', borderRadius: '32px', padding: '3rem', color: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div className="label-mono" style={{ background: 'rgba(0,0,0,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>Zero Latency</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--bg-primary)' }}>Event-Driven Webhooks</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.6 }}>
                            We don't rely on 15-minute polling windows. Our architectures use raw webhooks to trigger instant executions the second a payload drops.
                        </p>
                    </motion.div>

                    {/* BENTO 3: Error Handling */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        style={{ gridColumn: 'span 4', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <Zap size={32} className="text-accent mb-6" />
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Error Handling</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Fallback logic, automated retries, and instant Slack notifications if an API goes down. Your systems heal themselves.</p>
                    </motion.div>

                    {/* BENTO 4: Custom Nodes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        style={{ gridColumn: 'span 8', background: 'rgba(4,4,5,1)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', right: '-10%', top: '-20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,206,59,0.05) 0%, transparent 70%)', zIndex: 0 }}
                        />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Custom Node Development</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Not every SaaS has a pre-built integration. We write custom HTTP modules, authentication handlers, and graphQL querying logic to connect proprietary legacy systems.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span className="label-mono" style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>REST API</span>
                                <span className="label-mono" style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>GraphQL</span>
                                <span className="label-mono" style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>SOAP</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ROI / STATS */}
            <section style={{ padding: '6rem 0', background: 'rgba(255,206,59,0.02)', borderTop: '1px solid rgba(255,206,59,0.1)', borderBottom: '1px solid rgba(255,206,59,0.1)' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '4rem', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <div style={{ fontSize: '4rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '-0.05em' }}>42.5h</div>
                        <div className="label-mono text-secondary">Avg Weekly Time Saved</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <div style={{ fontSize: '4rem', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '-0.05em' }}>100+</div>
                        <div className="label-mono text-secondary">Workflows Deployed</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div style={{ fontSize: '4rem', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '-0.05em' }}>99.9%</div>
                        <div className="label-mono text-secondary">Uptime SLA</div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '8rem 0' }}>
                <LeadMagnetCTA text="Audit Your Workflows" variant="primary" />
            </section>
        </AnimatedPage>
    );
};

export default WorkflowAutomation;
