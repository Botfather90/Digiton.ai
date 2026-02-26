import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HorizontalCaseStudies = ({ studies }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    // Translate the container horizontally based on scroll progress
    // Calculate width: Each card is ~85vw + gap. 
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 - (100 / studies.length)}%`]);

    <div ref={containerRef} style={{ height: `${studies.length * 80 + 100}vh`, position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <motion.div style={{ x, display: 'flex', gap: '4vw', paddingLeft: '5vw', alignItems: 'center', height: '100%' }}>

                {/* Fixed Introduction Item inside the scroll */}
                <div style={{ minWidth: '40vw', padding: '2rem 4rem 2rem 0' }}>
                    <span className="label-mono text-accent block mb-4">Proof of Work</span>
                    <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', marginTop: '0.5rem', lineHeight: 0.9, letterSpacing: '-0.04em' }}>Case <br /><span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>Studies</span></h2>
                    <p style={{ marginTop: '2rem', fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>
                        We don't just talk about potential. We deploy systems that generate measurable value. Here is our proof of work.
                    </p>
                </div>

                {studies.map((study, idx) => (
                    <div key={idx} style={{
                        minWidth: '55vw',
                        height: '65vh',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '4rem',
                        background: 'rgba(255,255,255,0.03)', // Lighter background as requested
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        {/* Accent Glow */}
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0, bottom: 0, width: '50%',
                            background: `radial-gradient(circle at right, rgba(255,206,59,0.08) 0%, transparent 60%)`,
                            zIndex: 0, pointerEvents: 'none'
                        }} />

                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span className="label-mono" style={{ color: 'var(--bg-primary)', background: 'var(--accent)', padding: '0.5rem 1.5rem', borderRadius: '100px', fontWeight: 600 }}>{study.tag}</span>
                                <div style={{ fontSize: '10rem', fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.05em' }}>
                                    0{idx + 1}
                                </div>
                            </div>
                            <div style={{ marginTop: 'auto' }}>
                                <h3 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: '0 0 1rem 0', lineHeight: 1, letterSpacing: '-0.03em' }}>{study.client}</h3>
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                    <div style={{ width: '2px', height: '60px', background: 'var(--accent)' }} />
                                    <div>
                                        <p style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', fontWeight: 500 }}>{study.title}</p>
                                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: 0 }}>{study.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
};
