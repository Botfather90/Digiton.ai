import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { MonitorPlay, Users, Zap, CheckCircle2, TerminalSquare, ArrowRight } from 'lucide-react';

const Academy = () => {
    const { scrollYProgress } = useScroll();
    const yAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <AnimatedPage>
            {/* POWERFUL HERO */}
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '200px', position: 'relative', overflow: 'hidden' }}>
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
                    {/* Horizontal Beams Overlay */}
                    <motion.div
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute', top: '30%', left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,206,59,0.8), transparent)', opacity: 0.8, zIndex: 0, boxShadow: '0 0 20px rgba(255,206,59,0.5)' }}
                    />
                    <motion.div
                        animate={{ x: ['200%', '-200%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
                        style={{ position: 'absolute', top: '70%', left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', opacity: 0.5, zIndex: 0 }}
                    />
                    {/* Vertical Beam */}
                    <motion.div
                        animate={{ y: ['-200%', '200%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute', left: '20%', top: 0, width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, rgba(255,206,59,0.5), transparent)', opacity: 0.6, zIndex: 0 }}
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
                            <a href="#offerings" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                                View Offerings
                            </a>
                            <a href="#curriculum" className="btn btn-glass" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                                See Curriculum
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* QUICK HIGHLIGHTS */}
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

            {/* WHO IS THIS FOR? */}
            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="label-mono text-accent block mb-4">THE AUDIENCE</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '2rem' }}>Built for the bold.</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>This isn't theory. This is the exact playbook we use to build multi-agent systems for enterprise clients. If you want to replace manual labor with scalable systems, this is for you.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card" style={{ padding: '3rem' }}>
                        <h3 className="text-primary" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Founders & Executives</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Stop paying for headcount when a webhook can do the job faster, cheaper, and without errors.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card" style={{ padding: '3rem' }}>
                        <h3 className="text-primary" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Operations Teams</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Escape the spreadsheet. Learn how to map, build, and deploy automated data pipelines that update themselves.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card" style={{ padding: '3rem' }}>
                        <h3 className="text-primary" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Agency Owners</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Differentiate your offer. Implement AI backends for your clients and increase your retainer value.</p>
                    </motion.div>
                </div>
            </section>

            {/* THE PILLARS (What you walk away with) */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span className="label-mono text-accent block mb-4">THE OUTCOME</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>What you walk away with.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ background: 'rgba(255,206,59,0.1)', color: 'var(--accent)', padding: '1rem', borderRadius: '16px' }}>
                                <TerminalSquare size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Infrastructure Setup</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Your own self-hosted automation environment. We show you how to set up n8n and Make.com architectures that don't cost thousands a month in SaaS fees.</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px' }}>
                                <Zap size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Agentic Engineering Skills</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>It's not just ChatGPT prompts. It's connecting OpenAI assistants to webhooks, giving them tools to read Google Sheets, send emails, and make logical decisions autonomously.</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px' }}>
                                <MonitorPlay size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Production-Ready Systems</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>You leave with actual, functioning workflows deployed for your business. Lead processing, customer onboarding, data extraction—built and running.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CURRICULUM */}
            <section id="curriculum" className="container" style={{ padding: '10rem 0', position: 'relative', zIndex: 1 }}>
                {/* SVG Animated Connection Line */}
                <div style={{ position: 'absolute', left: '50%', top: '25%', bottom: '15%', width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: -1, transform: 'translateX(-50%)' }}>
                    <motion.div
                        animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: '100%', background: 'var(--accent)', boxShadow: '0 0 15px var(--accent)' }}
                    />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem auto' }}>
                    <span className="label-mono text-accent block mb-4">THE FRAMEWORK</span>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '-0.03em', marginBottom: '2rem' }}>The Knowledge Blueprint.</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.6 }}>Whether you take the intense Webinar Sprint or the customized Corporate Training, this is the core curriculum we adapt to your needs.</p>
                </div>

                <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {[
                        { step: "01", title: "API Logic & Architecture", desc: "Understanding JSON, webhooks, and how the internet actually communicates beneath the UI." },
                        { step: "02", title: "Node-Based Automations", desc: "Mastering n8n and Make.com. Triggers, custom HTTP requests, routing, and error handling." },
                        { step: "03", title: "LLM Orchestration", desc: "Moving beyond basic text generation. Structuring prompts for JSON extraction, summarization, and tone mapping." },
                        { step: "04", title: "Building Autonomous Agents", desc: "Giving LLMs tools. Creating agents that can decide when to search the web, when to read a database, and when to ask a human for approval." },
                        { step: "05", title: "Deployment & Scaling", desc: "Securing your webhooks, managing server loads, and ensuring your systems don't break in production." }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card group" style={{ padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <span className="label-mono text-accent" style={{ fontSize: '2rem', opacity: 0.5 }}>{item.step}</span>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CORE OFFERINGS - BENTO STYLE (MOVED TO BOTTOM) */}
            <section id="offerings" style={{ padding: '10rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '-0.03em' }}>Choose Your <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Path</span></h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                        {/* OFFERING 1: TRIMONTHLY WEBINARS */}
                        <div className="glass-card group" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '600px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', background: 'rgba(4,4,5,1)' }}>
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
                                    A deep-dive 4-hour online sprint held every 3 months. We build live, dissect complex workflows, and show you exactly how to structure agentic pipelines.
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Live build-alongs
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Architecture teardowns
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        <CheckCircle2 className="text-accent" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Access to templates
                                    </li>
                                </ul>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <span className="label-mono text-secondary block mb-1">Registration</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>Join Waitlist</span>
                                </div>
                                <a href="https://calendly.com/digiton/webinar" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                    Secure Your Seat
                                </a>
                            </div>
                        </div>

                        {/* OFFERING 2: TEAM TRAINING */}
                        <div className="glass-card group" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '600px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', background: 'rgba(4,4,5,1)' }}>
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
                                        <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Tailored constraints
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Full team workshops
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        <CheckCircle2 className="text-secondary" size={20} style={{ flexShrink: 0, marginTop: '4px' }} /> Remote or Lisbon HQ
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
                </div>
            </section>

            {/* COACH */}
            <section style={{ padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
