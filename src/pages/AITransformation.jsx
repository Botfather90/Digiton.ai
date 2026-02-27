import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { ChevronRight } from 'lucide-react';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

const AITransformation = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    const { scrollYProgress: pageScroll } = useScroll();
    const yAnim = useTransform(pageScroll, [0, 1], [0, -100]);

    const services = [
        { title: 'Workflow Automation', body: 'End-to-end business process automation using n8n. We\'ve built 100+ custom workflows that eliminate manual tasks and connect your entire tech stack.', tags: ['n8n', 'API', 'Monitoring'], link: '/services/ai/workflow-automation' },
        { title: 'Custom AI Agents', body: 'Intelligent agents that understand context, make decisions, and execute actions across your business tools. Connected to Slack, ClickUp, CRMs, and more.', tags: ['Agents', 'MCP', 'Autonomous'], link: '/services/ai/custom-agents' },
        { title: 'RAG & Knowledge', body: 'Transform your documents, transcripts, and data into queryable AI knowledge bases. Pinecone vector search with semantic understanding.', tags: ['Vector DB', 'Semantic Search'], link: '/services/ai/rag-knowledge' },
        { title: 'Business Intelligence', body: 'Real-time dashboards and automated reporting that turn raw data into actionable insights. From Klaviyo analytics to EV charging station monitoring.', tags: ['Dashboards', 'Pipelines'], link: '/services/ai/business-intelligence' },
        { title: 'Platform Dev', body: 'Full-stack applications built with modern technologies. Flutter mobile apps, Next.js web platforms, Supabase/Firebase backends.', tags: ['Next.js', 'Flutter', 'Supabase'], link: '/services/ai/platform-dev' },
        { title: 'API & Integration', body: '50+ platform integrations orchestrated seamlessly. We connect the tools you already use into a unified, intelligent ecosystem.', tags: ['Webhooks', 'Event-Driven'], link: '/services/ai/api-integration' }
    ];

    const processSteps = [
        { num: '01', title: 'Discovery & Audit', body: 'We map every manual process, data flow, and pain point. Most businesses have 40+ automatable touchpoints they don\'t even realize.' },
        { num: '02', title: 'Architecture Design', body: 'Custom system architecture designed for your specific stack. We plan integrations, data models, error handling, and scaling paths.' },
        { num: '03', title: 'Rapid Build & Deploy', body: 'Iterative development with weekly deployments. You see results in days, not months. Production-ready from sprint one.' },
        { num: '04', title: 'Monitor & Optimize', body: 'Continuous monitoring, performance tuning, and expansion. Our systems learn and improve over time.' }
    ];

    return (
        <AnimatedPage>
            <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '140px 2rem 0 2rem' }} className="container">
                <motion.div variants={fadeUpVariant} style={{ maxWidth: '1200px' }}>
                    <h1 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 1, letterSpacing: '-0.04em', textTransform: 'none', margin: 0 }}>
                        We don't digitize.<br /><span className="text-gradient">We rebuild.</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: '800px', lineHeight: 1.6 }}>
                        Complete AI automation ecosystems that transform how businesses operate. Not tools. Not templates. Production systems handling real volume.
                    </p>
                </motion.div>
            </section>

            <section style={{ padding: '8rem 0', position: 'relative' }} className="container">
                <motion.div style={{ y: yAnim }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
                        {services.map((service, idx) => {
                            // First two are wider, the rest are a bit more compact but still large
                            const colSpan = idx < 2 ? 'span 6' : 'span 4';

                            return (
                                <Link to={service.link} key={idx} style={{ gridColumn: colSpan, display: 'block', textDecoration: 'none' }}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        style={{
                                            background: idx === 1 ? 'var(--accent)' : 'rgba(255,255,255,0.02)',
                                            border: `1px solid ${idx === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'}`,
                                            borderRadius: '32px',
                                            padding: '3rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '100%'
                                        }}
                                        className={`group ${idx !== 1 ? 'hover:border-accent/40' : ''} transition-colors`}
                                    >
                                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                                            {service.tags.map((tag, i) => (
                                                <span key={i} className="label-mono" style={{ color: idx === 1 ? 'var(--bg-primary)' : 'var(--accent)', background: idx === 1 ? 'rgba(0,0,0,0.1)' : 'rgba(255,206,59,0.05)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: idx === 1 ? '600' : 'normal' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 style={{ fontSize: '2rem', letterSpacing: '-0.02em', margin: '0 0 1.5rem 0', transition: 'color 0.2s', color: idx === 1 ? 'var(--bg-primary)' : 'var(--text-primary)', position: 'relative', zIndex: 1 }} className={idx !== 1 ? 'group-hover:text-accent' : ''}>
                                            {service.title} <ChevronRight style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5rem', opacity: 0.5 }} />
                                        </h3>
                                        <p style={{ fontSize: '1.1rem', color: idx === 1 ? 'rgba(0,0,0,0.7)' : 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, margin: 0, position: 'relative', zIndex: 1, fontWeight: idx === 1 ? '500' : 'normal' }}>
                                            {service.body}
                                        </p>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            <section ref={sectionRef} style={{ padding: '10rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }} className="container">
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '8rem' }}
                    >
                        <span className="label-mono text-accent block mb-4">How we build</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Our Methodology</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', position: 'relative' }}>
                        {/* Connecting Line Base */}
                        <div style={{ position: 'absolute', top: '40px', left: '0', right: '0', height: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />

                        {/* Connecting Line Active Fill */}
                        <motion.div
                            style={{
                                position: 'absolute', top: '40px', left: '0', height: '2px',
                                background: 'var(--accent)', zIndex: 1,
                                originX: 0, scaleX: scrollYProgress // Scroll-linked filling animation
                            }}
                        />

                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.8 }}
                                style={{ position: 'relative', display: 'flex', flexDirection: 'column', zIndex: 2 }}
                            >
                                <motion.div
                                    whileInView={{
                                        boxShadow: ['0 0 0px var(--accent)', '0 0 30px var(--accent)', '0 0 10px var(--accent)'],
                                        borderColor: ['rgba(255,255,255,0.1)', 'var(--accent)', 'var(--accent)']
                                    }}
                                    viewport={{ margin: "-200px", once: true }}
                                    transition={{ duration: 1.5, delay: idx * 0.5 }}
                                    style={{
                                        width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-primary)',
                                        border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
                                        marginBottom: '3rem', zIndex: 2, position: 'relative',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {step.num}
                                </motion.div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', paddingRight: '1rem', lineHeight: 1.2 }}>{step.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingRight: '2rem' }}>{step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transition/Buffer Marquee */}
            <div style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px', background: 'linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px', background: 'linear-gradient(-90deg, var(--bg-secondary) 0%, transparent 100%)', zIndex: 2 }} />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ width: "fit-content", display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                >
                    {[...Array(10)].map((_, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', margin: '0 3rem', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            DESIGN <span style={{ color: 'var(--accent)', margin: '0 3rem', opacity: 0.5 }}>/</span> DEPLOY <span style={{ color: 'var(--accent)', margin: '0 3rem', opacity: 0.5 }}>/</span> SCALE <span style={{ color: 'var(--accent)', margin: '0 3rem', opacity: 0.5 }}>/</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="container">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                    <div className="label-mono" style={{ marginBottom: '2rem', letterSpacing: '0.2em' }}>START BUILDING</div>
                    <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', letterSpacing: '-0.05em', lineHeight: 0.9, margin: 0, color: 'transparent', WebkitTextStroke: '2px rgba(255,206,59,0.5)', backgroundImage: 'linear-gradient(180deg, var(--text-primary), transparent)', WebkitBackgroundClip: 'text' }}>
                        Ready to automate?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '2rem auto 4rem auto' }}>
                        Stop drowning in manual processes. Let's build the intelligent systems your business needs to scale.
                    </p>
                    <LeadMagnetCTA text="Book a Discovery Call" variant="primary" />
                </motion.div>
            </section>
        </AnimatedPage>
    );
};

export default AITransformation;
