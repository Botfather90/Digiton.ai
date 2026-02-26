import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

const Academy = () => {
    const { scrollYProgress } = useScroll();
    const yAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <AnimatedPage>
            {/* HERO */}
            <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                            <pattern id="academyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            </pattern>
                            <radialGradient id="academyGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#academyGrid)" />
                        <motion.circle
                            cx="80%" cy="20%" r="50%" fill="url(#academyGlow)"
                            animate={{ cx: ['80%', '70%', '80%'], cy: ['20%', '30%', '20%'] }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.circle
                            cx="20%" cy="80%" r="60%" fill="url(#academyGlow)"
                            animate={{ cx: ['20%', '30%', '20%'], cy: ['80%', '70%', '80%'] }}
                            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            style={{ opacity: 0.6 }}
                        />
                    </svg>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%)', zIndex: 0, pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div variants={fadeUpVariant} style={{ textAlign: 'center' }}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-block', border: '1px solid rgba(255,206,59,0.2)' }}>
                            Intensive Training
                        </span>
                        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0' }}>
                            The AI Automation <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)', display: 'inline-block' }}>
                                {"Bootcamp.".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.5)' }}
                                        transition={{ duration: 0.1 }}
                                        style={{ display: 'inline-block', cursor: 'default' }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-primary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                            Learn to leverage cutting-edge AI. From automating operational workflows to building your own intelligent systems. No coding experience required. Two days, hands-on, in Lisbon or Online.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="https://calendly.com/digiton/discovery" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                Apply For Next Cohort
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHO IS THIS FOR */}
            <section className="container" style={{ padding: '6rem 0' }}>
                <motion.div variants={fadeUpVariant} style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '3rem' }}>Who is this for?</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem' }}>
                            <div className="text-secondary" style={{ fontSize: '1.5rem' }}>01</div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>You run a business and know AI matters, but haven't found the right way in yet.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem' }}>
                            <div className="text-secondary" style={{ fontSize: '1.5rem' }}>02</div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>You're an operator, not a developer. You want to build real things with AI anyway.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem' }}>
                            <div className="text-secondary" style={{ fontSize: '1.5rem' }}>03</div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>You've tried ChatGPT, maybe dabbled in basic Zaps. You want the next level of compounding automation.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* WHAT YOU WALK AWAY WITH */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <motion.div variants={fadeUpVariant} style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>What you walk away with</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <motion.div variants={fadeUpVariant} style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="label-mono text-accent mb-4">01. Setup</div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Your own AI ecosystem</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Installed, configured, and built around your actual business operations. Not a demo. Yours.</p>
                        </motion.div>

                        <motion.div variants={fadeUpVariant} style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="label-mono text-accent mb-4">02. Skills</div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Cutting-edge Workflows</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>The ability to leverage platforms like n8n, Make, and LLM APIs for any kind of knowledge work. No coding required.</p>
                        </motion.div>

                        <motion.div variants={fadeUpVariant} style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="label-mono text-accent mb-4">03. Systems</div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>A framework that compounds</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Previous participants see their productivity continuously increasing in the weeks after. This is not a one-off workshop.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="container" style={{ padding: '8rem 0' }}>
                <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>How the two days work</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    {/* Day 1 */}
                    <motion.div variants={fadeUpVariant}>
                        <div className="label-mono text-secondary mb-2">Day 1</div>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Foundations</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Learn to direct agentic AI. By end of day, you have a working environment, a clear plan and are ready for Day 2.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Full environment setup with hands-on guidance
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Agentic AI foundations: think in workflows, not prompts
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Build your first working project by end of day
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Define your Day 2 problem with coach feedback
                            </li>
                        </ul>
                    </motion.div>

                    {/* Day 2 */}
                    <motion.div variants={fadeUpVariant}>
                        <div className="label-mono text-secondary mb-2">Day 2</div>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Build Sprint</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Pick a real problem from your work. Build a real solution. Demo it.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Choose a real bottleneck from your business operations
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Full-day build session with hands-on technical coaching
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Demo what you built to the peer group
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span className="text-accent" style={{ fontSize: '0.8rem' }}>◆</span> Leave with a working automation system you keep using
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* STATEMENT */}
            <section style={{ padding: '8rem 0', background: 'var(--accent)', color: 'var(--bg-primary)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div variants={fadeUpVariant}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem' }}>
                            Something shifted.
                        </h2>
                        <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
                            AI doesn't just assist anymore. It operates. Workflows, coordination, systems that compound. Most people's perception of AI lags reality by over a year. The gap between businesses who get this and businesses who don't is about to become enormous.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* COACH & DATES */}
            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>

                    {/* Dates */}
                    <motion.div variants={fadeUpVariant}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Choose your dates</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
                                <div className="label-mono text-accent mb-2">Remote Cohort</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>April 15 – 16, 2026</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>2-day intensive via Zoom</p>
                            </div>
                            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
                                <div className="label-mono text-accent mb-2">In-Person</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>May 08 – 09, 2026</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Lisbon HQ • 2-day intensive + logic mapping</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '3rem' }}>
                            <a href="https://calendly.com/digiton/discovery" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', width: '100%', textAlign: 'center' }}>
                                Register Interest
                            </a>
                        </div>
                    </motion.div>

                    {/* Coach */}
                    <motion.div variants={fadeUpVariant}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Meet your head coach</h2>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Brandon da Costa</h3>
                            <div className="label-mono text-secondary mb-4">CEO & AI Architect, Digiton</div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                Founder of Digiton Dynamics. Guides the end-to-end AI transformation of organizations across 3 continents, from dental networks to government archives.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                With 8 years in tech and marketing, he builds the automated systems that replace the manual work he used to do. He builds agentic organizations that bring AI into daily operations for real businesses, generating hundreds of thousands of euros in value.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                                The bootcamp teaches exactly what he practices.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Academy;
