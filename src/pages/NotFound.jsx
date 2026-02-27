import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <AnimatedPage>
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Grid & Gradient */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '80vw', height: '80vw',
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 40%)',
                        filter: 'blur(100px)',
                        opacity: 0.05,
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" style={{ position: 'relative' }}>
                        {/* 404 Text */}
                        <h1 style={{
                            fontSize: 'clamp(8rem, 20vw, 20rem)',
                            lineHeight: 0.8,
                            letterSpacing: '-0.05em',
                            margin: 0,
                            color: 'var(--bg-primary)',
                            WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                            userSelect: 'none'
                        }}>
                            404
                        </h1>

                        {/* Overlay Content */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '100px', marginBottom: '2rem' }}>
                                <AlertTriangle size={20} className="text-accent" />
                                <span className="label-mono" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>System Malfunction</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" transition={{ delay: 0.2 }} style={{ marginTop: '2rem', maxWidth: '600px' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Page Not Found</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            The endpoint you are trying to reach does not exist in our current architecture. It may have been deprecated or moved.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                                Return Home
                            </Link>
                            <Link to="/ai-transformation" className="btn btn-glass" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default NotFound;
