import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage } from '../../components/AnimatedPage';
import { InteractiveText } from '../../components/InteractiveText';

const ServicePageTemplate = ({ title, subtitle, price, description, features }) => {
    return (
        <AnimatedPage>
            <section style={{ minHeight: '100vh', paddingTop: '15rem', paddingBottom: '8rem', position: 'relative' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label-mono text-accent" style={{ marginBottom: '2rem', display: 'inline-block' }}>Service Architecture</span>
                        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
                            <InteractiveText text={title} />
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px' }}>
                            {subtitle}
                        </p>

                        <div className="flex-col md:flex-row" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <a href="https://calendly.com/contact-digiton" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                Deploy System
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '1rem 0' }}>
                                <span className="label-mono">Starting at {price}</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid-cols-1 lg:grid-cols-2" style={{ display: 'grid', gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ position: 'sticky', top: '10rem', height: 'fit-content' }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Use Case</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                {description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            {features.map((feat, idx) => (
                                <div key={idx} style={{ padding: '2rem', background: 'rgba(10,10,12,0.5)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>0{idx + 1} - {feat.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{feat.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default ServicePageTemplate;
