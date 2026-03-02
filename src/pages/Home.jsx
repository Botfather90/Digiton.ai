import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage } from '../components/AnimatedPage';
import { ChevronRight, TerminalSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { InteractiveText } from '../components/InteractiveText';
import { AnimatedCounter, AIMindmap } from '../components/DataVis';
import { TeamMember } from '../components/TeamMember';
import { HorizontalCaseStudies } from '../components/HorizontalCaseStudies';
import { InteractiveServices } from '../components/InteractiveServices';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { SEO } from '../components/SEO';
import { TinyFAQ } from '../components/TinyFAQ';
import { Hero3D } from '../components/Hero3D';
import { InteractiveWorldMap } from '../components/InteractiveWorldMap';

const Home = () => {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
    const yAnim = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacityAnim = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

    const socialProofLogos = [
        "Medical Family", "Chazemo EV", "TEM Agency", "HSA Archive", "FCN5 Gin",
        "Ceano", "Aguas de Gondomar", "Wipark Lisbon", "Estudyate", "Alcacer Property",
        "LL Catering", "DigitalFC", "Bubble Surprise", "Unplugify"
    ];

    return (
        <AnimatedPage>
            <SEO title="Digiton Home" canonicalUrl="/" />
            {/* More Normal but Premium Hero */}
            <section style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '100px 5vw 0 5vw', justifyContent: 'center' }}>
                <Hero3D />
                {/* Laser Beam Sweeps */}
                <div className="laser-beam laser-beam-h" style={{ top: '22%', left: 0, width: '40%', animationDuration: '5s' }} />
                <div className="laser-beam laser-beam-h" style={{ top: '78%', left: 0, width: '25%', animationDuration: '7s', animationDelay: '2s', opacity: 0.5 }} />
                <div className="laser-beam laser-beam-v" style={{ left: '15%', top: 0, height: '35%', animationDuration: '6s' }} />
                <div className="laser-beam laser-beam-v" style={{ right: '12%', top: 0, height: '40%', animationDuration: '8s', animationDelay: '3s', opacity: 0.4 }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '2rem' }}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.05)', padding: '0.5rem 1rem', borderRadius: '100px', border: '1px dashed rgba(255,206,59,0.3)' }}>AI Transformation Agency</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '2rem', textTransform: 'uppercase', cursor: 'default' }}
                    >
                        <motion.span whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.4)', transition: { duration: 0.2 } }}>We</motion.span> <motion.span whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.4)', transition: { duration: 0.2 } }}>don't</motion.span> <motion.span whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.4)', transition: { duration: 0.2 } }}>talk</motion.span> <motion.span whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.4)', transition: { duration: 0.2 } }}>about</motion.span> <motion.span whileHover={{ color: 'var(--accent)', textShadow: '0 0 20px rgba(255,206,59,0.4)', transition: { duration: 0.2 } }} className="text-accent">AI.</motion.span> <br />
                        <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>We deploy it.</span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                        <LeadMagnetCTA text="Book Discovery Call" variant="primary" />
                    </motion.div>
                </div>
            </section>

            {/* Premium Social Proof Marquee */}
            <div style={{ padding: '3rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px',
                    background: 'linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)', zIndex: 2
                }} />
                <div style={{
                    position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px',
                    background: 'linear-gradient(-90deg, var(--bg-secondary) 0%, transparent 100%)', zIndex: 2
                }} />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ width: "fit-content", display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                >
                    {[...socialProofLogos, ...socialProofLogos].map((client, idx) => (
                        <div key={idx} style={{
                            display: 'flex', alignItems: 'center', margin: '0 4rem',
                            fontFamily: 'var(--font-display)', fontSize: '2rem',
                            color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}>
                            {client}
                            <span style={{ color: 'var(--accent)', margin: '0 4rem', opacity: 0.5 }}>/</span>
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* Services Overview */}
            <section style={{ position: 'relative', marginTop: '4rem' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="label-mono text-accent">What We Build</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1rem' }}>Service <br /><span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Architecture</span></h2>
                    </motion.div>
                </div>

                <InteractiveServices services={[
                    { title: "AI Employees", desc: "Your next hire isn't human. AI agents that handle reception, booking, follow-ups, and reporting - 24/7. No sick days. No onboarding.", path: "/services/ai-employees" },
                    { title: "Automation Workflows", desc: "We connect your tools and kill your manual work. n8n, Make.com, Zapier, Supabase. Average client saves 42.5 hours/week.", path: "/services/automation-workflows" },
                    { title: "Full Platform Development", desc: "React, Next.js, Python, Flutter. We build the app, dashboard, or platform your business needs. From MVP to production in weeks.", path: "/services/platform-development" },
                    { title: "Fractional CTO", desc: "Need technical leadership without the £150K salary? Architecture decisions, team management, code reviews. Cancel anytime.", path: "/services/fractional-cto" },
                    { title: "Marketing Automation", desc: "Klaviyo flows, email sequences, social media systems, content repurposing, AI campaigns. Your marketing runs itself.", path: "/services/marketing-automation" },
                    { title: "Web3 Development", desc: "Move smart contracts (Sui/Aptos), DeFi protocols, NFT platforms, blockchain auth. 14 grant applications across 10+ chains.", path: "/services/web3" }
                ]} />
            </section>

            {/* Stats / By The Numbers */}
            <section style={{ padding: '8rem 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'center' }}>
                        {[
                            { val: 10, prefix: "", suffix: "x", label: "ROI Average" },
                            { val: 30, prefix: "", suffix: "+", label: "Global Clients" },
                            { val: 100, prefix: "", suffix: "+", label: "Automated Workflows" },
                            { val: 12, prefix: "", suffix: "", label: "Products Shipped" }
                        ].map((stat, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
                                    <AnimatedCounter from={0} to={stat.val} prefix={stat.prefix} suffix={stat.suffix} />
                                </div>
                                <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies & Products (Horizontal Scroll or Staggered) */}
            <section style={{ padding: '10rem 0', position: 'relative' }}>
                <div className="container">
                    <div style={{ marginBottom: '6rem' }}>
                        <span className="label-mono text-accent">Proof of Work</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1rem' }}>Case <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Studies</span></h2>
                    </div>
                </div>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {[
                        { client: "Medical Family", tag: "Healthcare", title: "AI Receptionist & Booking Automations", result: "34% increase in bookings within 60 days. Zero missed calls.", size: 'large' },
                        { client: "TEM", tag: "Agency", title: "Full Campaign QA Pipeline", result: "QA time reduced from 4 hours to 15 minutes per campaign.", size: 'small' },
                        { client: "Chazemo", tag: "EV Infrastructure", title: "Platform Build & Market Outreach", result: "Brand launched from zero to market-ready in 6 weeks.", size: 'small' }
                    ].map((study, idx) => (
                        <motion.div key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`beam-border ${study.size === 'large' ? 'lg:col-span-2' : 'col-span-1'}`}
                            style={{
                                position: 'relative',
                                background: 'var(--bg-secondary)',
                                borderRadius: '28px',
                                overflow: 'hidden',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '380px',
                                cursor: 'pointer',
                                isolation: 'isolate'
                            }}
                            onClick={() => navigate('/work')}
                        >
                            {/* Accent gradient glow */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0, width: '50%', height: '50%',
                                background: 'radial-gradient(circle at top right, rgba(255,206,59,0.06) 0%, transparent 70%)',
                                pointerEvents: 'none', zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
                                    <span className="label-mono" style={{ color: 'var(--bg-primary)', background: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>{study.tag}</span>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <ArrowRight className="text-secondary" size={20} />
                                    </motion.div>
                                </div>
                                <div style={{ marginTop: '3rem' }}>
                                    <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '0 0 1rem 0', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{study.client}</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500, margin: '0 0 0.5rem 0' }}>{study.title}</p>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>{study.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <Link to="/work" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>View All Case Studies →</Link>
                </div>
            </section>

            {/* Automated Operations Visualization */}
            <section style={{ padding: '8rem 0', background: 'rgba(4,4,5,0.8)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>Intelligent <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Operations</span></h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>We build autonomous systems that retrieve, process, and act on your data.</p>
                    </div>
                    <AIMindmap />
                </div>
            </section>

            {/* Team Section */}
            <section style={{ padding: '10rem 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
                        <span className="label-mono text-accent">The Architects</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1rem' }}>Our <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Team</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>We are a compact strike team of engineers, growth experts, and operators.</p>
                    </div>

                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <TeamMember
                            name="Brandon da Costa"
                            role="CEO & AI Architect"
                            description="8 years in marketing and tech. Built websites since 11. Now builds the AI systems that replace the manual work he used to do."
                            image="/team/brandon.jpg"
                            delay={0}
                        />
                        <TeamMember
                            name="Sasha Rodrigues"
                            role="Co-founder, Head of Growth"
                            description="Ex-Reddit Marketing. Community growth specialist. Drives market adoption across 8 industries."
                            image="/team/sasha.png"
                            delay={0.2}
                        />
                        <TeamMember
                            name="Woohyuck"
                            role="CTO"
                            description="Full-stack engineer. Builds the platforms, ships the code, breaks the production servers (and fixes them secretly)."
                            image="/team/woohyuck.jpg"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Blog Preview Section */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <div>
                            <span className="label-mono text-accent">Latest Perspectives</span>
                            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginTop: '1rem', letterSpacing: '-0.03em' }}>Essays on <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Automation</span></h2>
                        </div>
                        <Link to="/blog" className="btn btn-glass hidden md:inline-flex">View All Notes</Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'The Post-SaaS Era is Here', excerpt: 'Why vertical AI agents are replacing horizontal software tools at an unprecedented rate.', date: 'Oct 14' },
                            { title: 'Anatomy of an AI Receptionist', excerpt: 'Breaking down the prompt chaining required to handle infinite call trees flawlessly.', date: 'Oct 02' },
                            { title: 'Marketing Without Marketers', excerpt: 'How we build end-to-end programmatic SEO and social engines that need zero supervision.', date: 'Sep 28' }
                        ].map((post, idx) => (
                            <Link to="/blog" key={idx} className="group" style={{ display: 'block', padding: '3rem', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease' }}>
                                <motion.div whileHover={{ scale: 1.02, y: -5 }} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{post.date}</span>
                                    <h3 style={{ fontSize: '1.75rem', margin: '1rem 0', lineHeight: 1.2, color: 'var(--text-primary)' }} className="group-hover:text-accent transition-colors">{post.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{post.excerpt}</p>
                                    <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="group-hover:text-accent transition-colors">
                                        Read Essay <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ marginTop: '3rem', textAlign: 'center' }} className="md:hidden">
                        <Link to="/blog" className="btn btn-glass">View All Notes</Link>
                    </div>
                </div>
            </section>

            {/* Global Presence / Location */}
            <section style={{ padding: '10rem 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gap: '6rem', alignItems: 'center' }} className="lg:grid-cols-2 grid-cols-1">
                        <div>
                            <span className="label-mono text-accent">Where We Operate</span>
                            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginTop: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Global Trust. <br /><span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Local Context.</span></h2>
                            <p style={{ marginTop: '2rem', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
                                We are headquartered in Estonia with a primary operations hub in Lisbon, Portugal. Our distributed structure allows us to deploy automation systems for clients across 8 different countries with complete legal and data compliance.
                            </p>

                            <div style={{ display: 'flex', gap: '4rem', marginTop: '4rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Estonia</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>Tallinn</p>
                                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>HQ & Legal</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Portugal</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>Lisbon</p>
                                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Operations</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Visualization */}
                        <div style={{ position: 'relative', aspectRatio: '16/9', background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                            <InteractiveWorldMap />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tiny FAQ Section */}
            <TinyFAQ />

            {/* Final Brutalist CTA */}
            <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }} className="container">
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,206,59,0.05) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '2rem' }}>Audit your <br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>operations.</span></h2>
                    <LeadMagnetCTA text="Book Discovery Call" variant="primary" />
                </motion.div>
            </section>
        </AnimatedPage>
    );
};


export default Home;
