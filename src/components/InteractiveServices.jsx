import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const InteractiveServices = ({ services }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} style={{ position: 'relative', height: `${services.length * 100}vh` }}>
            {/* Animated Yellow Background Lines */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: ["-100%", "200%"],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 80 + 10}%`,
                            width: '1px',
                            height: '50vh',
                            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
                            filter: 'blur(2px)'
                        }}
                    />
                ))}
            </div>

            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
                    {services.map((srv, index) => {
                        const start = index / services.length;
                        const end = (index + 1) / services.length;

                        const y = useTransform(scrollYProgress, [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)], ["100%", "0%", "0%", "-100%"]);
                        const opacity = useTransform(scrollYProgress, [Math.max(0, start - 0.1), start, end - 0.05, Math.min(1, end + 0.1)], [0, 1, 1, 0]);
                        const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.95, 1]);

                        const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

                        // 30/60/10 Rule: Make the 'Full Platform Development' card the yellow accent card
                        const isAccentCard = index === 2;

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '0',
                                    right: '0',
                                    transform: 'translateY(-50%)',
                                    y: smoothY,
                                    opacity,
                                    scale,
                                    pointerEvents: 'auto',
                                    willChange: 'transform, opacity' // Performance optimization
                                }}
                            >
                                <Link to={srv.path} style={{ display: 'block', textDecoration: 'none' }}>
                                    <motion.div
                                        whileHover="hover"
                                        initial="initial"
                                        style={{
                                            padding: '4rem',
                                            background: isAccentCard ? 'var(--accent)' : 'rgba(10, 10, 12, 0.8)',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            borderRadius: '32px',
                                            border: `1px solid ${isAccentCard ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'}`,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '4rem',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            color: isAccentCard ? 'var(--bg-primary)' : 'var(--text-primary)'
                                        }}
                                    >
                                        {/* Removed flashing border animation based on feedback */}

                                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '1.5rem' }}>
                                                <span className="label-mono" style={{ color: isAccentCard ? 'rgba(0,0,0,0.5)' : 'var(--text-tertiary)', fontSize: '1.25rem' }}>
                                                    0{index + 1}
                                                </span>
                                                <h3 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: 0, letterSpacing: '-0.03em', color: isAccentCard ? 'var(--bg-primary)' : 'var(--text-primary)' }}>
                                                    {srv.title}
                                                </h3>
                                            </div>
                                            <p style={{ fontSize: '1.25rem', color: isAccentCard ? 'rgba(0,0,0,0.7)' : 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
                                                {srv.desc}
                                            </p>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2rem', position: 'relative', zIndex: 1, minWidth: '200px' }}>
                                            <motion.div
                                                variants={{
                                                    initial: { x: 0, backgroundColor: isAccentCard ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.03)' },
                                                    hover: { x: 10, backgroundColor: isAccentCard ? 'var(--bg-primary)' : 'var(--accent)', color: isAccentCard ? 'var(--text-primary)' : 'var(--bg-primary)' }
                                                }}
                                                transition={{ duration: 0.3 }}
                                                style={{
                                                    width: '80px', height: '80px',
                                                    borderRadius: '50%',
                                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                                    color: isAccentCard ? 'var(--bg-primary)' : 'var(--text-primary)'
                                                }}
                                            >
                                                <ArrowRight size={32} />
                                            </motion.div>
                                            <span className="label-mono" style={{ color: isAccentCard ? 'rgba(0,0,0,0.8)' : 'var(--text-primary)' }}>{srv.price}</span>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Progress Indicator */}
                <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'var(--accent)',
                                originY: 0,
                                scaleY: scrollYProgress,
                                boxShadow: '0 0 10px var(--accent)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
