import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { Mail, Phone, MapPin } from 'lucide-react';
import { DottedGlobe } from '../components/DottedGlobe';

const Contact = () => {
    return (
        <AnimatedPage>
            <section className="hero-section container" style={{ minHeight: '60vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem', paddingBottom: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <motion.div variants={fadeUpVariant} className="hero-badge" style={{ alignSelf: 'flex-start' }}>
                        <span className="label-mono">Contact</span>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="hero-content text-left" style={{ alignItems: 'flex-start', textAlign: 'left', maxWidth: '600px', margin: '0' }}>
                        <h1 style={{ textTransform: 'none', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Let's build<br /><span className="text-gradient">something great.</span></h1>
                        <p className="hero-subhead mt-6" style={{ marginLeft: 0, maxWidth: '500px' }}>
                            Whether you need AI automation, marketing strategy, or a complete digital transformation - we're ready to talk.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={fadeUpVariant} style={{ width: '100%', height: '400px', position: 'relative' }}>
                    {/* The Globe Map */}
                    <DottedGlobe />
                </motion.div>
            </section>

            <section className="section-py container" style={{ paddingTop: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">

                    <motion.div variants={fadeUpVariant}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Contact Details</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div className="icon-box" style={{ margin: 0 }}><Mail size={20} /></div>
                                <div>
                                    <div className="label-mono text-secondary mb-2">Email</div>
                                    <a href="mailto:contact@digiton.ai" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>contact@digiton.ai</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div className="icon-box" style={{ margin: 0 }}><Phone size={20} /></div>
                                <div>
                                    <div className="label-mono text-secondary mb-2">Phone</div>
                                    <a href="tel:+351964779966" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>+351 964 779 966</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div className="icon-box" style={{ margin: 0 }}><MapPin size={20} /></div>
                                <div>
                                    <div className="label-mono text-secondary mb-2">Location</div>
                                    <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>R. Natalia Correia 1, Lisboa<br /><span className="text-secondary">Portugal 2620-390</span></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div variants={fadeUpVariant} className="glass-card" style={{ padding: '3rem' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="label-mono block mb-2 text-secondary">Name</label>
                                <input type="text" className="input-field" required />
                            </div>
                            <div>
                                <label className="label-mono block mb-2 text-secondary">Email</label>
                                <input type="email" className="input-field" required />
                            </div>
                            <div>
                                <label className="label-mono block mb-2 text-secondary">Company</label>
                                <input type="text" className="input-field" />
                            </div>
                            <div>
                                <label className="label-mono block mb-2 text-secondary">Message</label>
                                <textarea className="input-field" rows="4" required style={{ resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-4" style={{ alignSelf: 'flex-start' }}>
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;
