import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../../../components/AnimatedPage';
import { LeadMagnetCTA } from '../../../components/LeadMagnetCTA';
import { Share2, Users, MessageSquare, Flame } from 'lucide-react';
import { SEO } from '../../../components/SEO';

const SocialMediaDynamics = () => {
    return (
        <AnimatedPage>
            <SEO title="Social Media Dynamics" canonicalUrl="/services/marketing/social-dynamics" />
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

                {/* Organic Nodes Animation */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', left: '10%', top: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,206,59,0.15) 0%, transparent 70%)', zIndex: 0 }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)' }}>
                            <Share2 size={14} /> PERFORMANCE MARKETING
                        </span>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            Social Media <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>Dynamics.</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            We don't just 'post'. We build interconnected social acquisition engines. Hyper-targeted paid campaigns and organic loops that predict algorithm shifts across Meta, LinkedIn, and TikTok.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                            <BarChart2 size={32} className="text-primary" />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Algorithmic Paid Media</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
                            We use AI to run multivariate testing on thousands of ad creatives simultaneously, continuously shifting budget to the highest-converting variations in real-time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', background: 'var(--accent)', borderRadius: '32px', padding: '3rem', color: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div className="label-mono" style={{ background: 'rgba(0,0,0,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>Social Sniper</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--bg-primary)' }}>Intent Scanning</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.6 }}>
                            Our proprietary systems scan social platforms for buyer-intent keywords and automatically deploy agents to reply or DM with high-value assets.
                        </p>
                    </motion.div>

                </div>
            </section>

            <section style={{ padding: '8rem 0' }}>
                <LeadMagnetCTA text="Audit Your Acquisition" variant="primary" />
            </section>
        </AnimatedPage>
    );
};

export default SocialMediaDynamics;
