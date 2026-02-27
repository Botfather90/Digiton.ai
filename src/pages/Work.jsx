import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Work = () => {
    const { scrollYProgress } = useScroll();
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
            <section style={{ minHeight: '90vh', padding: '120px 0 6rem 0', position: 'relative' }} className="container">
                <motion.div variants={fadeUpVariant} style={{ maxWidth: '1200px' }}>
                    <h1 style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.05em', textTransform: 'uppercase', margin: 0 }}>
                        Artifacts<br />of <span className="text-secondary" style={{ fontStyle: 'italic' }}>Scale</span>
                    </h1>
                </motion.div>
            </section>

            <section style={{ padding: '4rem 0 10rem 0' }} className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            layoutId={`project-${idx}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            onClick={() => setSelectedProject({ ...project, index: idx })}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '32px',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '350px'
                            }}
                            className="group hover:border-accent/30 transition-colors"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <motion.span layoutId={`industry-${idx}`} className="label-mono" style={{ color: 'var(--text-primary)', background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem' }}>
                                    {project.industry}
                                </motion.span>
                                <ArrowRight className="text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                            </div>

                            <motion.h3 layoutId={`title-${idx}`} style={{ fontSize: '2rem', letterSpacing: '-0.02em', margin: '0 0 1.5rem 0', lineHeight: 1.1 }}>
                                {project.client}
                            </motion.h3>

                            <motion.p layoutId={`desc-${idx}`} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {project.desc}
                            </motion.p>
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
                                position: 'fixed', inset: 0, background: 'rgba(10,10,12,0.9)',
                                backdropFilter: 'blur(10px)', zIndex: 100
                            }}
                        />

                        {/* Modal Container */}
                        <div style={{ position: 'fixed', inset: 0, zIndex: 101, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', pointerEvents: 'none' }}>
                            <motion.div
                                layoutId={`project-${selectedProject.index}`}
                                style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid rgba(255,206,59,0.2)',
                                    borderRadius: '32px',
                                    padding: '4rem',
                                    width: '100%',
                                    maxWidth: '1000px',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    pointerEvents: 'auto',
                                    position: 'relative'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        position: 'absolute', top: '2rem', right: '2rem',
                                        background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%',
                                        width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        color: 'var(--text-primary)', cursor: 'pointer', zIndex: 10
                                    }}
                                    className="hover:bg-white/10 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <motion.span layoutId={`industry-${selectedProject.index}`} className="label-mono" style={{ color: 'var(--accent)', background: 'rgba(255,206,59,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', marginBottom: '1rem', display: 'inline-block' }}>
                                            {selectedProject.industry}
                                        </motion.span>
                                        <motion.h3 layoutId={`title-${selectedProject.index}`} style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1, color: 'var(--text-primary)' }}>
                                            {selectedProject.client}
                                        </motion.h3>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span className="label-mono text-secondary block mb-1">Value Delivered</span>
                                        <span style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 600 }}>{selectedProject.details.metric}</span>
                                    </div>
                                </div>

                                <motion.p layoutId={`desc-${selectedProject.index}`} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 3rem 0', maxWidth: '800px' }}>
                                    {selectedProject.desc}
                                </motion.p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
                                    {/* Problem Section */}
                                    <div style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid rgba(255,255,255,0.1)' }}>
                                        <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '1rem' }}>The Bottleneck</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>{selectedProject.details.problem}</p>
                                    </div>

                                    {/* Built Section */}
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.5rem' }}>Engineered Solution</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {selectedProject.details.solution.map((item, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)' }}>
                                                    <span className="text-secondary" style={{ marginTop: '4px' }}>▹</span>
                                                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Results Section */}
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Business Impact</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {selectedProject.details.results.map((item, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-primary)' }}>
                                                    <span className="text-accent" style={{ marginTop: '4px' }}>◆</span>
                                                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                                    <button className="btn btn-primary" onClick={() => window.location.href = '/discovery'} style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                                        Solve A Similar Problem
                                    </button>
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
