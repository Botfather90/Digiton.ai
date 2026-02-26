import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { MonitorPlay, Users, Zap, CheckCircle2 } from 'lucide-react';

const Academy = () => {
    const { scrollYProgress } = useScroll();
    const yAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <AnimatedPage>
            {/* POWERFUL HERO */}
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.5, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute', top: '-20%', left: '-10%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(255,206,59,0.15) 0%, transparent 70%)', filter: 'blur(100px)' }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 2 }}
                        style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}
                    />
                    {/* Horizontal Beam Overlay */}
                    <motion.div
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,206,59,0.3), transparent)', opacity: 0.5, zIndex: 0 }}
                    />
                </div>

                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%)', zIndex: 0, pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div variants={fadeUpVariant} style={{ textAlign: 'center' }}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.6rem 2rem', borderRadius: '100px', marginBottom: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)', letterSpacing: '0.2em' }}>
                            <Zap size={14} /> DIGITON TRAINING PROGRAMS
                        </span>

                        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            Master <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)', display: 'inline-block' }}>
                                Automation.
                            </span>
                        </h1>

                        <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            Stop reading about AI. Start building with it. We train operators, executives, and entire teams to architect operations that <strong className="text-primary font-normal">compound in value</strong>.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#webinars" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                                View Webinars
                            </a>
                            <a href="#corporate" className="btn btn-glass" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                                Team Training
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATEMENT SEPARATOR */}
            <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="text-accent" size={24} /> <span style={{ fontSize: '1.2rem' }}>No Coding Required</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="text-accent" size={24} /> <span style={{ fontSize: '1.2rem' }}>Agentic Workflows</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="text-accent" size={24} /> <span style={{ fontSize: '1.2rem' }}>Real-World Logic</span>
                    </div>
                </div>
            </section>

            {/* CORE OFFERINGS - BENTO STYLE */}
            <section className="container" style={{ padding: '10rem 0' }}>
                <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '-0.03em' }}>Choose Your <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Path</span></h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* OFFERING 1: TRIMONTHLY WEBINARS */}
                    <div id="webinars" className="glass-card group" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '600px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                            opacity: 0.5, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s ease'
                        }} className="group-hover:scale-x-100" />

                        <div style={{ marginBottom: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'rgba(255,206,59,0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--accent)' }}>
                                    <MonitorPlay size={32} />
                                </div>
                                <span className="label-mono text-secondary">Intense & Tactical</span>
                            </div>

                            <h3 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Trimonthly <br />Webinars</h3>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
                                A deep-dive 4-hour online sprint held every 3 months. We build live, dissect complex n8n workflows, and show you exactly how to structure agentic LLM pipelines.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Live build-alongs (n8n, Make, OpenAI)
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Q&A and architecture teardowns
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Access to workflow templates
                                </li>
                            </ul>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <span className="label-mono text-secondary block mb-1">Registration Fee</span>
                                <span style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>€200</span>
                            </div>
                            <a href="https://calendly.com/digiton/webinar" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                Secure Your Seat
                            </a>
                        </div>
                    </div>

                    {/* OFFERING 2: TEAM TRAINING */}
                    <div id="corporate" className="glass-card group" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '600px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                            background: 'linear-gradient(90deg, transparent, #FFF, transparent)',
                            opacity: 0.2, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s ease'
                        }} className="group-hover:scale-x-100" />

                        <div style={{ marginBottom: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', color: 'var(--text-primary)' }}>
                                    <Users size={32} />
                                </div>
                                <span className="label-mono text-secondary">In-Person or Online</span>
                            </div>

                            <h3 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Corporate & <br />Team Training</h3>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
                                Designed for executives and operator teams. We audit your existing processes and build a tailored curriculum to train your staff on implementing compound automation.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Tailored to your specific industry constraints
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Solo executive mapping or full team workshops
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Available in-person (Lisbon HQ) or remote
                                </li>
                            </ul>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <span className="label-mono text-secondary block mb-1">Tailored Pricing</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>Upon Consultation</span>
                            </div>
                            <a href="https://calendly.com/contact-digiton" target="_blank" rel="noreferrer" className="btn btn-glass" style={{ padding: '1rem 2rem' }}>
                                Request Proposal
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* COACH */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div variants={fadeUpVariant} style={{ textAlign: 'center' }}>
                        <span className="label-mono text-accent block mb-4">THE ARCHITECT</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', letterSpacing: '-0.03em' }}>Led by Brandon da Costa</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Founder of Digiton. Guides the end-to-end AI transformation of organizations across 3 continents, from dental networks to government archives.
                        </p>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '3rem' }}>
                            With 8 years in tech and marketing, he builds the automated systems that replace manual labor. The training programs teach exactly what he practices in the trenches every day.
                        </p>
                        <LeadMagnetCTA text="Book Discovery Call" variant="primary" />
                    </motion.div>
                </div>
            </section>

        </AnimatedPage>
    );
};

export default Academy;
