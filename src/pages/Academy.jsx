import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { MonitorPlay, Users, Zap, CheckCircle2, TerminalSquare, ArrowRight, Star, ChevronDown, Cpu, Workflow, Globe, BookOpen, Code2, Sparkles } from 'lucide-react';
import { LeadModal } from '../components/LeadModal';
import { SEO } from '../components/SEO';
import { AnimatedCounter } from '../components/DataVis';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

/* ── 3D Academy Hero Shape ──────────────────────────────── */
const AcademyHeroShape = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * 0.06;
            ref.current.rotation.y = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
            <mesh ref={ref} scale={1.8}>
                <octahedronGeometry args={[1, 2]} />
                <MeshDistortMaterial
                    color="#FFCE3B"
                    emissive="#FFCE3B"
                    emissiveIntensity={0.1}
                    distort={0.2}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.85}
                    wireframe
                    transparent
                    opacity={0.5}
                />
            </mesh>
        </Float>
    );
};

const AcademyHero3D = () => (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.5 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <pointLight position={[-5, -3, -5]} intensity={0.3} color="#FFCE3B" />
            <AcademyHeroShape />
        </Canvas>
    </div>
);

/* ── FAQ Accordion ──────────────────────────────────────── */
const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <motion.div
        className="glass-card"
        style={{ padding: 0, cursor: 'pointer', overflow: 'hidden' }}
        onClick={onClick}
        whileHover={{ borderColor: 'rgba(255,206,59,0.2)' }}
    >
        <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', margin: 0, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{question}</h4>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} color="var(--text-secondary)" />
            </motion.div>
        </div>
        <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
        >
            <p style={{ padding: '0 2rem 1.5rem 2rem', margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{answer}</p>
        </motion.div>
    </motion.div>
);

const Academy = () => {
    const { scrollYProgress } = useScroll();
    const yAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContext, setModalContext] = useState('');
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        { q: 'Do I need coding experience to join?', a: 'No. Our programs are designed for operators, executives, and business owners. We teach the logic behind automation, not code syntax. If you can think in systems, you can build with us.' },
        { q: 'What tools do I need before starting?', a: "You'll need a laptop, a stable internet connection, and free accounts on n8n (or Make.com) and OpenAI. We provide setup guides and templates for everything else." },
        { q: 'How is this different from a YouTube tutorial?', a: 'We teach production-grade systems, not toy demos. Every workflow is built to handle real business logic: error handling, retry mechanisms, authentication, and scale. This is the same methodology we use for enterprise clients.' },
        { q: 'What happens after the webinar?', a: 'You get lifetime access to templates, recordings, and our private community. We also offer follow-up office hours for participants who want hands-on guidance deploying their systems.' },
        { q: 'Can my entire team join?', a: 'Absolutely. The Corporate & Team Training option is designed for exactly that. We audit your existing processes and build a custom curriculum tailored to your tech stack and business objectives.' },
        { q: 'What kind of ROI can I expect?', a: 'Our average client saves 42.5 hours/week in manual labor through automation. Many participants build their first revenue-generating automation within the first session.' },
    ];

    return (
        <AnimatedPage>
            <SEO title="Digiton Academy" canonicalUrl="/academy" />
            {/* POWERFUL HERO */}
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '200px', position: 'relative', overflow: 'hidden' }}>
                <AcademyHero3D />

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
                    {/* Laser Beams */}
                    <div className="laser-beam laser-beam-h" style={{ top: '30%', left: 0, width: '100%', animationDuration: '4s' }} />
                    <div className="laser-beam laser-beam-h" style={{ top: '70%', left: 0, width: '80%', animationDuration: '5s', animationDelay: '1s', opacity: 0.5 }} />
                    <div className="laser-beam laser-beam-v" style={{ left: '20%', top: 0, height: '100%', animationDuration: '6s' }} />
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

            {/* ══════════════════════════════════════════════
                NEW: RESULTS & STATISTICS
            ══════════════════════════════════════════════ */}
            <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { val: 842, suffix: '+', label: 'Students Trained' },
                            { val: 12, suffix: '', label: 'Countries Reached' },
                            { val: 97, suffix: '%', label: 'Completion Rate' },
                            { val: 42, suffix: 'h', label: 'Avg. Hours Saved/Week' },
                        ].map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
                                    <AnimatedCounter from={0} to={stat.val} suffix={stat.suffix} />
                                </div>
                                <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                            </motion.div>
                        ))}
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

            {/* ══════════════════════════════════════════════
                NEW: WHAT YOU'LL ACTUALLY BUILD
            ══════════════════════════════════════════════ */}
            <section style={{ padding: '8rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="label-mono text-accent block mb-4">HANDS-ON PROJECTS</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>What You'll Actually Build.</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>Not theory. Not demos. Production-grade systems you deploy during the program.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: Cpu, title: 'AI Lead Qualifier', desc: 'A webhook-triggered pipeline that scores inbound leads using GPT-4, enriches data from LinkedIn, and routes qualified prospects directly to your CRM.', tag: 'LLM + Webhook + CRM' },
                            { icon: Workflow, title: 'Automated Report Pipeline', desc: 'Pull data from Google Sheets, Stripe, and analytics APIs. Generate executive summaries via LLM and deliver PDF reports to Slack every Monday.', tag: 'Data Pipeline + LLM' },
                            { icon: BookOpen, title: 'Knowledge Base Agent', desc: 'RAG-powered assistant trained on your company documents. Answers internal questions, surfaces SOPs, and escalates to humans when confidence is low.', tag: 'RAG + Vector DB' },
                            { icon: Globe, title: 'Multi-Channel Content Engine', desc: 'Repurpose one blog post into 8 social media assets, email sequences, and SEO-optimized variations — all automated with n8n.', tag: 'Content + Social' },
                            { icon: Code2, title: 'Client Onboarding Flow', desc: 'Trigger-based system that sends welcome emails, creates project folders, provisions accounts, and schedules kickoff calls — zero manual work.', tag: 'Automation + Email' },
                            { icon: Sparkles, title: 'Custom AI Employee', desc: 'Build a full conversational agent with tool access: it reads databases, sends emails, books meetings, and makes logical decisions autonomously.', tag: 'Agentic AI + Tools' },
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glow-card"
                                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ background: 'rgba(255,206,59,0.08)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255,206,59,0.15)' }}>
                                    <project.icon size={24} color="var(--accent)" />
                                </div>
                                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{project.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
                                <span className="label-mono" style={{ color: 'var(--accent)', fontSize: '9px' }}>{project.tag}</span>
                            </motion.div>
                        ))}
                    </div>
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

            {/* ══════════════════════════════════════════════
                NEW: TOOLS & TECHNOLOGIES STACK
            ══════════════════════════════════════════════ */}
            <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="label-mono text-accent block mb-4">TECH STACK</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>Tools You'll Master</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {['n8n', 'Make.com', 'OpenAI', 'GPT-4', 'Supabase', 'Zapier', 'Stripe API', 'Google Sheets API', 'Slack API', 'Pinecone', 'LangChain', 'Webhooks', 'REST APIs', 'Vector DBs', 'Prompt Engineering'].map((tool, i) => (
                            <motion.div
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                whileHover={{ borderColor: 'rgba(255,206,59,0.4)', scale: 1.05 }}
                                style={{
                                    padding: '0.7rem 1.5rem', borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                                    fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                                    color: 'var(--text-secondary)', letterSpacing: '0.05em',
                                    transition: 'all 0.3s ease', cursor: 'default'
                                }}
                            >
                                {tool}
                            </motion.div>
                        ))}
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

            {/* ══════════════════════════════════════════════
                NEW: TESTIMONIALS / SOCIAL PROOF 
            ══════════════════════════════════════════════ */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="label-mono text-accent block mb-4">WHAT THEY SAY</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>Results from <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>the Trenches</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: 'Maria C.', role: 'COO, SaaS Startup', quote: "We automated our entire onboarding flow in one session. What used to take 3 hours per client now happens in 90 seconds. The ROI was immediate.", rating: 5 },
                            { name: 'Thomas R.', role: 'Agency Owner', quote: "Brandon's training gave us the confidence to offer AI automation as a service. Our retainer value increased by 3x within two months.", rating: 5 },
                            { name: 'Ana S.', role: 'Head of Operations', quote: "The production-quality approach sets this apart. Every automation we built handles edge cases, retries, and error logging. This isn't a toy workshop.", rating: 5 },
                            { name: 'David L.', role: 'Founder, E-commerce', quote: "I walked in knowing nothing about APIs. I left with 4 live automations processing orders, generating reports, and sending personalized follow-ups to my customers.", rating: 5 },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glow-card"
                                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ display: 'flex', gap: '2px', marginBottom: '1.5rem' }}>
                                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                                        <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />
                                    ))}
                                </div>
                                <p style={{ color: 'var(--text-primary)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '2rem', flexGrow: 1, fontStyle: 'italic' }}>"{testimonial.quote}"</p>
                                <div>
                                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, margin: 0, fontSize: '1rem' }}>{testimonial.name}</p>
                                    <p className="label-mono" style={{ margin: '0.25rem 0 0 0', fontSize: '10px' }}>{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CORE OFFERINGS - BENTO STYLE */}
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
                                <button
                                    onClick={() => { setModalContext('Trimonthly Webinars'); setIsModalOpen(true); }}
                                    className="btn btn-primary" style={{ padding: '1rem 2rem', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                                >
                                    Secure Your Seat
                                </button>
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
                                <button
                                    onClick={() => { setModalContext('Corporate & Team Training'); setIsModalOpen(true); }}
                                    className="btn btn-glass" style={{ padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600, background: 'rgba(255,255,255,0.05)' }}
                                >
                                    Request Proposal
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                NEW: FAQ SECTION
            ══════════════════════════════════════════════ */}
            <section style={{ padding: '8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="label-mono text-accent block mb-4">COMMON QUESTIONS</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>Frequently Asked</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFAQ === i}
                                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                            />
                        ))}
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

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                context={modalContext}
            />
        </AnimatedPage>
    );
};

export default Academy;
