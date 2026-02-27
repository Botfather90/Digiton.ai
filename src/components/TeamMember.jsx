import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

export const TeamMember = ({ name, role, description, image, links = {}, delay = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const layoutId = `team-member-${name.replace(/\s+/g, '-').toLowerCase()}`;
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return (
        <>
            {/* Base Card */}
            <motion.div
                layoutId={layoutId}
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                whileHover={{ y: -10 }}
                style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.5rem',
                    cursor: 'pointer'
                }}
                className="group hover:border-accent/40 hover:bg-glass-bg transition-all duration-500"
            >
                {/* Abstract Top Right Gradient */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', background: 'radial-gradient(circle at top right, rgba(255,206,59,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

                {/* Hover Beam Effect */}
                <motion.div
                    variants={{
                        initial: { x: '-100%', opacity: 0 },
                        hover: { x: '250%', opacity: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                    style={{
                        position: 'absolute',
                        top: 0, bottom: 0, left: 0,
                        width: '30%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,206,59,0.15) 50%, transparent 100%)',
                        transform: 'skewX(-20deg)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                    {/* Avatar */}
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
                        overflow: 'hidden'
                    }}>
                        {image ? (
                            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            initials
                        )}
                    </div>
                    {links.linkedin && (
                        <div style={{ color: 'var(--text-tertiary)' }} className="group-hover:text-accent transition-colors">
                            <Linkedin size={20} />
                        </div>
                    )}
                </div>

                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{name}</h3>
                    <span className="label-mono" style={{ display: 'block', color: 'var(--accent)', fontSize: '0.9rem' }}>{role}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }} className="group-hover:text-primary transition-colors">
                    View Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </motion.div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(4,4,5,0.8)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            zIndex: 999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            layoutId={layoutId}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '32px',
                                padding: '4rem',
                                maxWidth: '700px',
                                width: '100%',
                                position: 'relative',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1fr)',
                                gap: '3rem'
                            }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '2rem', cursor: 'pointer', lineHeight: 1 }}
                                className="hover:text-primary transition-colors"
                            >
                                ×
                            </button>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                                    <div style={{
                                        width: '100px', height: '100px', borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
                                        overflow: 'hidden'
                                    }}>
                                        {image ? (
                                            <div style={{ position: 'relative', width: '100%', paddingBottom: '125%', overflow: 'hidden' }}>
                                                <motion.img
                                                    src={image}
                                                    alt={name}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.4 }}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                        ) : (
                                            initials
                                        )}
                                    </div>
                                    <motion.div>
                                        <motion.h3 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em', lineHeight: 1 }}>{name}</motion.h3>
                                        <motion.span className="label-mono" style={{ display: 'block', color: 'var(--accent)', fontSize: '1.1rem' }}>{role}</motion.span>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '3rem' }}>
                                        {description}
                                    </p>

                                    {/* Social Links */}
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {links.linkedin && (
                                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <Linkedin size={18} /> LinkedIn
                                            </a>
                                        )}
                                        {links.email && (
                                            <a href={`mailto:${links.email}`} className="btn" style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <Mail size={18} /> Email
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
