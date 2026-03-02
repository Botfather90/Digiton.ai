import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage } from '../../components/AnimatedPage';
import { InteractiveText } from '../../components/InteractiveText';
import { ArrowRight } from 'lucide-react';

const ServicePageTemplate = ({ title, subtitle, price, description, features, VisualComponent }) => {
    return (
        <AnimatedPage>
            <section style={{ minHeight: '100vh', paddingTop: '14rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                        style={{
                            position: 'absolute',
                            width: '3px', height: '3px', borderRadius: '50%',
                            background: 'var(--accent)',
                            left: `${10 + i * 15}%`,
                            top: `${15 + (i % 3) * 20}%`,
                            pointerEvents: 'none'
                        }}
                    />
                ))}

                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label-mono text-accent" style={{
                            marginBottom: '2rem', display: 'inline-block',
                            background: 'rgba(255,206,59,0.05)', padding: '0.5rem 1rem',
                            borderRadius: '100px', border: '1px dashed rgba(255,206,59,0.3)'
                        }}>Service Architecture</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
                            <InteractiveText text={title} />
                        </h1>
                        <p style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px' }}>
                            {subtitle}
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap' }}>
                            <a href="https://calendly.com/contact-digiton" target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary" style={{ padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Deploy System <ArrowRight size={18} />
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0.5rem 0' }}>
                                <span className="label-mono">Starting at {price}</span>
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gap: '4rem' }} className="grid-cols-1 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ position: 'sticky', top: '10rem', height: 'fit-content' }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Use Case</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem', marginBottom: '3rem' }}>
                                {description}
                            </p>

                            {/* Unique Page Animation Container */}
                            {VisualComponent && (
                                <div className="beam-border" style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    minHeight: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    isolation: 'isolate'
                                }}>
                                    <VisualComponent />
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            {features.map((feat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4 }}
                                    className="beam-border"
                                    style={{
                                        padding: '2rem',
                                        background: 'var(--bg-secondary)',
                                        borderRadius: '20px',
                                        isolation: 'isolate'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                        <span className="label-mono" style={{ color: 'var(--accent)', fontSize: '1rem' }}>0{idx + 1}</span>
                                        <h4 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>{feat.title}</h4>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>{feat.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default ServicePageTemplate;
