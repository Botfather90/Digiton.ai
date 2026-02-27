import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { ValuesSection } from '../components/ValuesSection';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

const About = () => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
    });
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const timeline = [
        { year: '2018', event: 'Founded as AI Marketing Agency', desc: 'Started with SEO, social media, and content marketing. Building the foundation of digital marketing expertise.' },
        { year: '2023', event: 'AI Integration Begins', desc: 'Started integrating AI tools into marketing workflows. First automation projects with n8n and custom APIs.' },
        { year: '2024', event: 'Venture Studio Evolution', desc: 'Formal pivot to AI Transformation Venture Studio. Registered Digiton Dynamics OÜ in Estonia. Expanded to 30+ clients.' },
        { year: '2025', event: 'Government & Enterprise', desc: 'Landed Angola government partnership (HSA Archive). Enterprise clients like Chazemo EV (586+ stations). Massive delivered value.' },
        { year: '2026', event: 'Global Expansion', desc: 'UAE market entry. Series A preparation. Building the next generation of AI-powered business infrastructure.' }
    ];

    return (
        <AnimatedPage>
            <section className="hero-section container" style={{ minHeight: '60vh' }}>
                <motion.div variants={fadeUpVariant} className="hero-badge">
                    <span className="label-mono">About Us</span>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="hero-content text-left" style={{ alignItems: 'flex-start', textAlign: 'left', maxWidth: '1000px', margin: '0' }}>
                    <h1 style={{ textTransform: 'none' }}>Built different.<br /><span className="text-gradient">By design.</span></h1>
                </motion.div>
            </section>

            <section className="section-py container" style={{ paddingTop: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.p variants={fadeUpVariant} className="mb-12" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', lineHeight: 1.4, color: 'var(--text-primary)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                        Digiton Dynamics started as a digital marketing agency. SEO, social media, email campaigns. <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>We were good at it.</span> Eight years of experience, 100+ campaigns launched, and real results.
                    </motion.p>
                    <motion.p variants={fadeUpVariant} className="text-secondary mb-12" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                        But we saw something bigger. Every client we worked with was drowning in manual processes. They'd spend hours on tasks that should take minutes. Data lived in silos. Teams duplicated work. The technology existed to fix this - nobody was deploying it properly.
                    </motion.p>
                    <motion.div variants={fadeUpVariant} style={{ background: 'rgba(255,206,59,0.05)', border: '1px solid rgba(255,206,59,0.2)', padding: '3rem', borderRadius: '24px', marginBottom: '3rem' }}>
                        <p className="text-primary" style={{ fontSize: '1.5rem', lineHeight: 1.6, margin: 0 }}>
                            So we evolved. From marketing agency to <span className="label-mono text-accent" style={{ fontSize: '1.2rem' }}>AI Transformation Venture Studio.</span> We didn't abandon marketing - we supercharged it with AI while expanding into full business automation. Today, we build the intelligent systems that run businesses across 3 continents.
                        </p>
                    </motion.div>
                    <motion.p variants={fadeUpVariant} className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
                        Registered in Estonia (EU), operating from Lisbon, with expanding operations in Angola and the UAE. We're a distributed team of developers, designers, and AI specialists who believe every business deserves intelligent operations.
                    </motion.p>
                </div>
            </section>

            <ValuesSection />

            {/* Horizontal Scroll Timeline */}
            <div ref={timelineRef} style={{ height: '400vh', position: 'relative' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}>

                    <div style={{ position: 'absolute', top: '15vh', left: '5vw', zIndex: 10 }}>
                        <span className="label-mono text-accent block mb-4">Timeline</span>
                        <h2>Our Evolution</h2>
                    </div>

                    <motion.div style={{ x: xTransform, display: 'flex', gap: '4rem', paddingLeft: '20vw', alignItems: 'center', height: '100%' }}>
                        {timeline.map((item, idx) => (
                            <div key={idx} style={{
                                minWidth: '50vw',
                                height: '50vh',
                                background: 'rgba(10,10,12,0.8)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '24px',
                                padding: '4rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div className="label-mono text-gradient-accent" style={{ fontSize: '2rem', fontWeight: 600 }}>{item.year}</div>
                                <div>
                                    <h3 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{item.event}</h3>
                                    <p className="text-secondary" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* Philosophy Section */}
            <section className="container" style={{ padding: '8rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div variants={fadeUpVariant} style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>The Digiton Standard</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 auto 3rem auto' }}>
                        We believe that software should be an asset, not a liability. If an automation doesn't unequivocally free up time, eliminate human error, or directly increase revenue, we don't build it.
                        We operate on clear metrics, transparent architecture, and definitive results. This is the new standard of operations.
                    </p>
                    <div style={{ width: '80px', height: '2px', background: 'var(--accent)', margin: '0 auto', opacity: 0.8 }} />
                </motion.div>
            </section>

            {/* Global Scale Banner */}
            <section style={{ position: 'relative', minHeight: '50vh', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'center' }}>
                        <motion.div variants={fadeUpVariant}>
                            <div className="label-mono text-accent mb-4">Systems Deployed</div>
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>300+</div>
                        </motion.div>
                        <motion.div variants={fadeUpVariant} transition={{ delay: 0.1 }}>
                            <div className="label-mono text-accent mb-4">Total ROI Generated</div>
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>Massive</div>
                        </motion.div>
                        <motion.div variants={fadeUpVariant} transition={{ delay: 0.2 }}>
                            <div className="label-mono text-accent mb-4">Global Presence</div>
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.05em', color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem' }}>
                                4 <span style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: 'normal' }}>Continents</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '4rem 0' }}>
                <LeadMagnetCTA />
            </section>
        </AnimatedPage>
    );
};

export default About;
