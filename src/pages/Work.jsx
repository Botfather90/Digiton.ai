import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';
import { SEO } from '../components/SEO';

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            client: 'Medical Family',
            industry: 'Healthcare / Dental',
            desc: 'Premium digital transformation for luxury dental clinic network. Built flagship platform with cinematic GSAP motion, AI receptionist answering calls 24/7, and automated booking systems leading to a 34% increase in appointments.',
            details: {
                problem: 'Manual appointment booking, missed calls losing patients, no review management, weak online presence.',
                solution: [
                    'AI receptionist answering calls 24/7',
                    'Automated appointment scheduling & reminders',
                    'Post-treatment review request automation',
                    '7-day social media content system',
                    'Google Business Profile optimization'
                ],
                results: [
                    '34% increase in bookings within 60 days',
                    'Google reviews: 3.8 → 4.6 stars',
                    'Zero missed calls (previously 30%+ went to voicemail)'
                ],
                metric: 'Continuous Retainer'
            }
        },
        {
            client: 'The Email Marketers (TEM)',
            industry: 'SaaS / Marketing Agency',
            desc: 'Built complete AI operations infrastructure. RAG-powered email brief generation, Klaviyo reporting automation, and custom GPT models. Reduced 4-hour tasks to 15 minutes. 27 automation pipelines deployed.',
            details: {
                problem: '30+ clients, each needing weekly newsletters, QA checks, campaign tracking. Manual process taking 100+ hours/week across the team.',
                solution: [
                    'Automated newsletter content research and gathering (n8n + AI)',
                    'Campaign QA workflow: auto-checks copy, design links, Klaviyo setup',
                    'Custom ClickUp integration: Google Doc → Figma → Klaviyo pipeline',
                    'QA scoring system with automated task creation'
                ],
                results: [
                    'QA time reduced from 4 hours to 15 minutes per campaign',
                    'Newsletter research automated (was 2hrs, now 5 minutes)',
                    'Zero missed campaign deadlines since deployment'
                ],
                metric: 'Funding Secured'
            }
        },
        {
            client: 'Chazemo EV',
            industry: 'EV Infrastructure',
            desc: 'Business intelligence platform for EV charging stations across Portugal. Replaced legacy software. Automated subscription management for 600+ clients and Moloni invoicing. Significant uncollected revenue recovered.',
            details: {
                problem: 'New company entering Portuguese EV market. Needed brand identity, technical platform, and market positioning against incumbents.',
                solution: [
                    'Complete brand identity and visual language',
                    'Technical platform for managing EV charging stations',
                    'Market research identifying 50+ target real estate developers',
                    'Interactive proposal system for investor presentations'
                ],
                results: [
                    'Brand launched from zero to market-ready in 6 weeks',
                    '10 qualified developer leads generated in first month',
                    'USP defined: Pre-installations + 60% power efficiency'
                ],
                metric: 'Development & Marketing Scope'
            }
        },
        {
            client: 'HSA Archive',
            industry: 'Government / Culture',
            desc: 'First AI-native African oral history platform. Processed 60+ hours of video and 1000+ transcript pages via RAG and Pinecone. Real-time bilingual AI chat interface deployed as an offline-first PWA for the Angola Government.',
            details: {
                problem: 'Physical archive of 50,000+ historical documents deteriorating. No digital preservation system. Government mandate to digitize.',
                solution: [
                    'Digital archiving platform (scan → OCR → categorize → store)',
                    'AI-powered document classification',
                    'Search system across 50K+ records',
                    'User access management for government officials'
                ],
                results: [
                    'Processing capacity: 500+ documents/day (was 50/day manual)',
                    '10x digitization speed',
                    'Government contract secured'
                ],
                metric: 'MVP Deployment'
            }
        },
        {
            client: 'Águas de Gondomar',
            industry: 'Municipal Utility',
            desc: 'Automated customer service operations for a major water utility provider. Deployed advanced WhatsApp chatbots capable of handling billing inquiries, meter readings, and service disruptions autonomously.',
            details: {
                problem: 'Legacy operational systems, manual reporting, customer service bottlenecks.',
                solution: [
                    'Operational automation workflows',
                    'Customer communication WhatsApp AI system',
                    'Reporting and analytics dashboard',
                    'Process optimization across departments'
                ],
                results: [
                    'Reduced manual reporting time by 70%',
                    'Improved customer response times',
                    'Streamlined internal operations'
                ],
                metric: 'Public Tender Project'
            }
        },
        {
            client: 'Ceano',
            industry: 'Hospitality',
            desc: 'End-to-end digital automation for an Angola-based restaurant. Automated booking systems, WhatsApp integrations, and reputation management pipelines, reducing no-show rates by 35% and increasing online bookings by 45%.',
            details: {
                problem: 'No online presence, no booking system, no review management. Losing business to competitors with better digital presence.',
                solution: [
                    'Complete marketing automation system',
                    'Online booking and reservation management',
                    'Google reviews automation',
                    'Email marketing campaigns to past diners'
                ],
                results: [
                    'Online presence from zero to visible',
                    'Automated booking reducing phone call volume',
                    'Repeat customer campaigns driving 28% return visits'
                ],
                metric: 'Growth Optimization'
            }
        },
        {
            client: 'FCN5',
            industry: 'Premium Spirits',
            desc: 'Complete brand digitization for premium Portuguese gin. Built e-commerce presence, multi-stage Klaviyo automation flows, and an AI-powered Instagram DM funnel via ManyChat to drive direct-to-consumer sales.',
            details: {
                problem: 'Premium product, but no automated marketing pipeline. Relying on manual outreach and word-of-mouth.',
                solution: [
                    'E-commerce automation (Shopify integration)',
                    'Email marketing flows (welcome, abandoned cart, win-back)',
                    'Social media content system',
                    'Influencer outreach pipeline'
                ],
                results: [
                    'Automated marketing pipeline running 24/7',
                    'Email revenue contribution increased significantly',
                    'Consistent brand presence across channels'
                ],
                metric: 'E-commerce Scale'
            }
        },
        {
            client: 'EstudYate',
            industry: 'Marine / EdTech',
            desc: 'AI-powered nautical certification platform. Engineered a cross-platform Flutter application backed by Firebase and Python, featuring RAG-driven learning modules and automated adaptive testing systems.',
            details: {
                problem: 'Education platform idea with no technical execution. Needed app development, brand identity, and go-to-market strategy.',
                solution: [
                    'Cross-platform application architecture',
                    'RAG-driven learning module ingestion',
                    'Subscription model architecture',
                    'Market research and go-to-market strategy'
                ],
                results: [
                    'Platform MVP built to specification',
                    'Validated learning algorithms via beta cohort',
                    'Ready for public launch phase'
                ],
                metric: 'Development Scope'
            }
        }
    ];

    return (
        <AnimatedPage>
            <SEO title="Our Work & Case Studies" canonicalUrl="/work" />

            {/* Hero */}
            <section style={{ minHeight: '80vh', padding: '120px 0 4rem 0', position: 'relative', overflow: 'hidden' }} className="container">
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                        style={{
                            position: 'absolute',
                            width: '3px', height: '3px', borderRadius: '50%',
                            background: 'var(--accent)',
                            left: `${10 + i * 11}%`,
                            top: `${20 + (i % 4) * 15}%`,
                            pointerEvents: 'none'
                        }}
                    />
                ))}

                <motion.div variants={fadeUpVariant} style={{ maxWidth: '1200px' }}>
                    <span className="label-mono text-accent" style={{
                        background: 'rgba(255,206,59,0.05)', padding: '0.5rem 1rem',
                        borderRadius: '100px', border: '1px dashed rgba(255,206,59,0.3)',
                        display: 'inline-block', marginBottom: '2rem'
                    }}>Proof of Work</span>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                        lineHeight: 0.9, letterSpacing: '-0.05em',
                        textTransform: 'uppercase', margin: 0
                    }}>
                        Artifacts<br />of <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>Scale</span>
                    </h1>
                    <p style={{ marginTop: '2rem', fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Real systems. Real results. Every project below is a deployed automation generating measurable value.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section style={{ padding: '2rem 0 10rem 0' }} className="container">
                <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            onClick={() => setSelectedProject({ ...project, index: idx })}
                            className="beam-border"
                            style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '320px',
                                isolation: 'isolate'
                            }}
                        >
                            {/* Accent glow */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '40%', height: '40%',
                                background: 'radial-gradient(circle at top right, rgba(255,206,59,0.06) 0%, transparent 70%)',
                                pointerEvents: 'none', zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <span className="label-mono" style={{
                                        color: 'var(--accent)', background: 'rgba(255,206,59,0.08)',
                                        padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem'
                                    }}>
                                        {project.industry}
                                    </span>
                                    <motion.div
                                        whileHover={{ x: 3, y: -3 }}
                                        style={{
                                            width: '40px', height: '40px', borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.05)',
                                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }}
                                    >
                                        <ArrowUpRight size={18} color="var(--text-secondary)" />
                                    </motion.div>
                                </div>

                                <h3 style={{
                                    fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                                    letterSpacing: '-0.02em',
                                    margin: '0 0 1rem 0', lineHeight: 1.1
                                }}>
                                    {project.client}
                                </h3>

                                <p style={{
                                    color: 'var(--text-secondary)', lineHeight: 1.6,
                                    margin: 0, flexGrow: 1,
                                    display: '-webkit-box', WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                                    fontSize: '0.95rem'
                                }}>
                                    {project.desc}
                                </p>

                                <div style={{
                                    marginTop: '1.5rem', paddingTop: '1.5rem',
                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    fontSize: '0.8rem', textTransform: 'uppercase',
                                    letterSpacing: '0.08em', color: 'var(--text-secondary)'
                                }}>
                                    View Case Study <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Individual Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'fixed', inset: 0,
                                background: 'rgba(4,4,5,0.9)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                zIndex: 100
                            }}
                        />

                        {/* Modal */}
                        <div style={{
                            position: 'fixed', inset: 0, zIndex: 101,
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            padding: '2rem', pointerEvents: 'none'
                        }}>
                            <motion.div
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="beam-border"
                                style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '32px',
                                    padding: '3.5rem',
                                    width: '100%',
                                    maxWidth: '900px',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    pointerEvents: 'auto',
                                    position: 'relative',
                                    isolation: 'isolate'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        position: 'absolute', top: '1.5rem', right: '1.5rem',
                                        background: 'rgba(255,255,255,0.05)', border: 'none',
                                        borderRadius: '50%', width: '44px', height: '44px',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        color: 'var(--text-primary)', cursor: 'pointer', zIndex: 10
                                    }}
                                >
                                    <X size={20} />
                                </button>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <span className="label-mono" style={{
                                            color: 'var(--accent)', background: 'rgba(255,206,59,0.1)',
                                            padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem',
                                            marginBottom: '1rem', display: 'inline-block'
                                        }}>
                                            {selectedProject.industry}
                                        </span>
                                        <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1, color: 'var(--text-primary)' }}>
                                            {selectedProject.client}
                                        </h3>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span className="label-mono text-secondary" style={{ display: 'block', marginBottom: '0.25rem' }}>Value Delivered</span>
                                        <span style={{ fontSize: '1.25rem', color: 'var(--accent)', fontWeight: 600 }}>{selectedProject.details.metric}</span>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 2.5rem 0', maxWidth: '800px' }}>
                                    {selectedProject.desc}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}>
                                    {/* Problem */}
                                    <div style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', borderLeft: '3px solid rgba(255,206,59,0.4)' }}>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.75rem' }}>The Bottleneck</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>{selectedProject.details.problem}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.25rem' }}>Engineered Solution</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {selectedProject.details.solution.map((item, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                                    <span style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}>▹</span>
                                                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Business Impact</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {selectedProject.details.results.map((item, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                                    <span style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}>◆</span>
                                                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                                    <a href="https://calendly.com/contact-digiton" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1rem' }}>
                                        Solve A Similar Problem →
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </AnimatedPage>
    );
};

export default Work;
