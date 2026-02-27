import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { Search, Share2, Mail, Layers, Zap, FileText, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Marketing = () => {
    const { scrollYProgress } = useScroll();
    const yAnim = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const services = [
        { title: 'SEO & Organic Growth', body: 'Data-driven SEO strategies that delivered 1844% traffic increases. Technical optimization, content strategy, and link building powered by AI analysis.', highlight: '1844% Traffic Increase', link: '/services/marketing/seo-organic' },
        { title: 'Social Media Dynamics', body: 'Hyper-targeted paid and organic social campaigns. We build automated funnels that convert attention into revenue across Meta, LinkedIn, and TikTok.', highlight: 'Multi-channel Automation', link: '/services/marketing/social-dynamics' },
        { title: 'Intelligent Lifecycle', body: 'Predictive email flows. We use AI to segment audiences, predict churn, and craft personalized emails that generate consistent ROI.', highlight: 'Predictive Segmentation', link: '/services/marketing/intelligent-lifecycle' },
        { title: 'Brand Architecture', body: 'Premium visual identities that command authority in your market. From logo design to complete brand guidelines and digital presence.', highlight: 'Premium Positioning', link: '/services/marketing/brand-architecture' },
        { title: 'High-Velocity Web', body: 'High-performance websites built for conversion. Awwwards-winning aesthetics combined with lightning-fast modern tech stacks.', highlight: 'Conversion-Optimized', link: '/services/marketing/high-velocity-web' },
        { title: 'Content Engines', body: 'AI-assisted content engines that produce high-quality, authoritative pieces at scale. Blogs, whitepapers, social copy, and video scripts.', highlight: 'Scale + Quality', link: '/services/marketing/content-engines' }
    ];

    return (
        <AnimatedPage>
            <SEO title="Marketing Ecosystems" canonicalUrl="/services/marketing" />
            
            {/* HER0 */}
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '140px' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--accent)', opacity: 0.05, zIndex: 0 }} />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '60vw', height: '60vw',
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                        opacity: 0.15,
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-block', border: '1px solid rgba(255,206,59,0.2)' }}>
                            Performance Marketing
                        </span>
                        <motion.h1
                            whileHover={{ color: 'var(--accent)', textShadow: '0 0 30px rgba(255,206,59,0.5)', transition: { duration: 0.3 } }}
                            style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: 0, color: 'var(--accent)', cursor: 'default' }}
                        >
                            Attention.
                        </motion.h1>
                        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: 0, color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>
                            Engineered.
                        </h1>
                        <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--text-primary)', marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0 auto', lineHeight: 1.6 }}>
                            We started as a digital marketing agency. 100+ campaigns. Millions in revenue. Now, we bring intelligent automation to every acquisition channel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Asymmetrical Dynamic Grid */}
            <section style={{ padding: '8rem 0', position: 'relative', background: 'var(--bg-primary)' }} className="container">
                <motion.div style={{ y: yAnim }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>
                        {services.map((service, idx) => {
                            // Asymmetrical logic
                            let colSpan = 'span 4'; // Default
                            if (idx === 0) colSpan = 'span 8';
                            if (idx === 1) colSpan = 'span 4';
                            if (idx === 2) colSpan = 'span 6';
                            if (idx === 3) colSpan = 'span 6';
                            if (idx === 4) colSpan = 'span 4';
                            if (idx === 5) colSpan = 'span 8';

                            return (
                                <Link to={service.link} key={idx} className="mobile-col-span-12" style={{ gridColumn: colSpan, display: 'block', textDecoration: 'none' }}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        style={{
                                            background: idx % 3 === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.02)',
                                            color: idx % 3 === 0 ? 'var(--bg-primary)' : 'var(--text-primary)',
                                            border: idx % 3 === 0 ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
                                            borderRadius: '32px',
                                            padding: '3rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '100%'
                                        }}
                                        className={`group hover:scale-[1.02] transition-transform duration-500`}
                                    >
                                        <div>
                                            <div className="label-mono" style={{
                                                marginBottom: '2rem',
                                                display: 'inline-block',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '100px',
                                                background: idx % 3 === 0 ? 'rgba(0,0,0,0.1)' : 'rgba(255,206,59,0.1)',
                                                color: idx % 3 === 0 ? 'var(--bg-primary)' : 'var(--accent)',
                                                fontWeight: 600
                                            }}>
                                                {service.highlight}
                                            </div>
                                            <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>{service.title}</h3>
                                        </div>
                                        <div style={{ marginTop: '2rem' }}>
                                            <p style={{ fontSize: '1.1rem', color: idx % 3 === 0 ? 'rgba(0,0,0,0.7)' : 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{service.body}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Testimonials Marquee Removed per user request */}

            {/* Methodology / What We Do Section */}
            <section style={{ padding: '10rem 0' }} className="container">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span className="label-mono text-accent">The Formula</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1rem' }}>How We Grow <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Brands</span></h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {[
                            { step: '01', title: 'Data Infrastructure', desc: 'Before spending a cent, we build the measurement architecture. Server-side tracking, unified CRM data, and real-time BI dashboards so every action is quantifiable.' },
                            { step: '02', title: 'Content Velocity', desc: 'We deploy localized AI agents to scale high-quality content production across SEO and social channels, establishing immediate market authority.' },
                            { step: '03', title: 'Programmatic Acquisition', desc: 'Highly segmented, multi-platform campaigns (Meta, Google, LinkedIn) that adapt in real-time based on API-fed conversion data.' },
                            { step: '04', title: 'Lifecycle Automation', desc: 'The funnel doesn\'t end at the click. We architect predictive email and SMS flows to maximize LTV and reduce churn autonomously.' }
                        ].map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50, borderColor: 'rgba(255,255,255,0.05)' }}
                                whileInView={{ opacity: 1, x: 0, borderColor: 'var(--accent)' }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                style={{
                                    display: 'flex', gap: '3rem', alignItems: 'flex-start',
                                    padding: '3rem', background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative', overflow: 'hidden'
                                }}
                                className="flex-col md:flex-row group"
                            >
                                {/* Animated active glow strictly to highlight the border state */}
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
                                    style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at left, var(--accent) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none', opacity: 0 }}
                                />

                                <div style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--accent)', lineHeight: 0.8, fontWeight: 800, position: 'relative', zIndex: 1 }}>
                                    {phase.step}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{phase.title}</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{phase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Massive Metric Banner */}
            <section style={{ padding: '10rem 0', background: 'var(--accent)', color: 'var(--bg-primary)', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', top: '-50%', right: '-20%', opacity: 0.1, pointerEvents: 'none' }}
                >
                    <svg width="800" height="800" viewBox="0 0 100 100">
                        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
                    </svg>
                </motion.div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', lg: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
                            <div style={{ flex: 1 }}>
                                <div className="label-mono" style={{ marginBottom: '2rem', letterSpacing: '0.2em', fontWeight: 600 }}>CASE STUDY: PORTFOLIO PORTUGAL</div>
                                <h2 style={{ fontSize: 'clamp(6rem, 15vw, 16rem)', letterSpacing: '-0.05em', lineHeight: 0.8, margin: '0 0 1rem 0', fontWeight: 800 }}>
                                    1844%
                                </h2>
                                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>Traffic Increase in 4 Months</h3>
                            </div>

                            <div style={{ flex: 1, background: 'rgba(0,0,0,0.05)', padding: '3rem', borderRadius: '32px', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.1)' }}>
                                <p style={{ fontSize: '1.25rem', margin: '0 0 2rem 0', fontWeight: 500, lineHeight: 1.6 }}>
                                    Traditional agencies build websites. We build <span style={{ fontWeight: 700 }}>conversion engines</span>.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-primary)', borderRadius: '50%' }} /> Technical SEO architecture scaling
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-primary)', borderRadius: '50%' }} /> Automated programmatic content streams
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-primary)', borderRadius: '50%' }} /> Zero-click vulnerability mitigation
                                    </li>
                                </ul>
                                <Link to="/contact" className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '1.25rem 2rem', fontSize: '1.1rem', borderRadius: '100px', background: 'var(--bg-primary)', color: 'var(--accent)', fontWeight: 600 }}>
                                    Deploy Your Strategy
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Marketing;
