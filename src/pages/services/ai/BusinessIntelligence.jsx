import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../../../components/AnimatedPage';
import { LeadMagnetCTA } from '../../../components/LeadMagnetCTA';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { BIVis } from '../../../components/animations/BIVis';
import { SEO } from '../../../components/SEO';

const BusinessIntelligence = () => {
    return (
        <AnimatedPage>
            <SEO title="Business Intelligence" canonicalUrl="/services/ai/business-intelligence" />
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)' }}>
                            <BarChart3 size={14} /> AI TRANSFORMATION CORE
                        </span>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            Business <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>Intelligence.</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            Raw data is useless. We build automated ETL pipelines and real-time executive dashboards so you actually know your numbers, margins, and operational bottlenecks.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <BIVis />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                            <LineChart size={32} className="text-primary" />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Live Dashboarding</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
                            Custom React/Next.js dashboards or Looker Studio integrations pulling normalized data from your entire tech stack into one unified mission control.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', background: 'var(--accent)', borderRadius: '32px', padding: '3rem', color: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div className="label-mono" style={{ background: 'rgba(0,0,0,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>Automated Insights</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--bg-primary)' }}>AI Analyst</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.6 }}>
                            We connect LLMs to your SQL databases so executives can simply 'chat' with their financial data to generate instant reports.
                        </p>
                    </motion.div>

                </div>
            </section>

            <section style={{ padding: '8rem 0' }}>
                <LeadMagnetCTA text="Unify Your Data" variant="primary" />
            </section>
        </AnimatedPage>
    );
};

export default BusinessIntelligence;
