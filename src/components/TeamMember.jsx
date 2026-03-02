import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, ArrowRight, X } from 'lucide-react';

export const TeamMember = ({ name, role, description, image, links = {}, delay = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return (
        <>
            {/* Base Card */}
            <motion.div
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="beam-border"
                style={{
                    position: 'relative',
                    background: 'var(--bg-secondary)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    isolation: 'isolate'
                }}
            >
                {/* Photo — Full Width, Top Half */}
                <div style={{
                    width: '100%',
                    height: '320px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.03)'
                }}>
                    {image ? (
                        <motion.img
                            src={image}
                            alt={name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                display: 'block'
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '4rem', fontFamily: 'var(--font-mono)',
                            color: 'var(--text-tertiary)',
                            background: 'linear-gradient(135deg, rgba(255,206,59,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                        }}>
                            {initials}
                        </div>
                    )}
                    {/* Gradient overlay at bottom of photo */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
                        background: 'linear-gradient(to top, var(--bg-secondary), transparent)',
                        pointerEvents: 'none'
                    }} />
                </div>

                {/* Info Section */}
                <div style={{ padding: '1.5rem 2rem 2rem', position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h3 style={{
                                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                                margin: '0 0 0.4rem 0',
                                letterSpacing: '-0.02em',
                                lineHeight: 1.2,
                                color: 'var(--text-primary)'
                            }}>{name}</h3>
                            <span className="label-mono" style={{
                                display: 'block',
                                color: 'var(--accent)',
                                fontSize: '0.8rem'
                            }}>{role}</span>
                        </div>
                        {links.linkedin && (
                            <div style={{ color: 'var(--text-tertiary)', marginTop: '4px' }}>
                                <Linkedin size={18} />
                            </div>
                        )}
                    </div>

                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        marginTop: '1.25rem', fontSize: '0.8rem',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                        color: 'var(--text-secondary)'
                    }}>
                        View Profile <ArrowRight size={14} />
                    </div>
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
                            background: 'rgba(4,4,5,0.85)',
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
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="beam-border"
                            style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '32px',
                                padding: '0',
                                maxWidth: '700px',
                                width: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                isolation: 'isolate'
                            }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                                    background: 'rgba(0,0,0,0.5)', border: 'none',
                                    borderRadius: '50%', width: '40px', height: '40px',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    color: 'white', cursor: 'pointer', zIndex: 10,
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <X size={18} />
                            </button>

                            {/* Large Photo */}
                            <div style={{
                                width: '100%', height: '350px',
                                overflow: 'hidden', position: 'relative'
                            }}>
                                {image ? (
                                    <img
                                        src={image}
                                        alt={name}
                                        style={{
                                            width: '100%', height: '100%',
                                            objectFit: 'cover', objectPosition: 'top center'
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%', height: '100%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '5rem', fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-tertiary)',
                                        background: 'linear-gradient(135deg, rgba(255,206,59,0.05), rgba(255,255,255,0.02))'
                                    }}>
                                        {initials}
                                    </div>
                                )}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
                                    background: 'linear-gradient(to top, var(--bg-secondary), transparent)',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Content */}
                            <div style={{ padding: '2rem 3rem 3rem' }}>
                                <h3 style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    margin: '0 0 0.5rem 0',
                                    letterSpacing: '-0.03em', lineHeight: 1
                                }}>{name}</h3>
                                <span className="label-mono" style={{
                                    display: 'block', color: 'var(--accent)',
                                    fontSize: '1rem', marginBottom: '1.5rem'
                                }}>{role}</span>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <p style={{
                                        fontSize: '1.15rem', color: 'var(--text-secondary)',
                                        lineHeight: 1.7, marginBottom: '2rem'
                                    }}>
                                        {description}
                                    </p>

                                    {/* Social Links */}
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {links.linkedin && (
                                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                                                className="btn" style={{
                                                    padding: '0.75rem 1.5rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    color: 'var(--text-primary)',
                                                    display: 'flex', alignItems: 'center', gap: '0.75rem'
                                                }}>
                                                <Linkedin size={18} /> LinkedIn
                                            </a>
                                        )}
                                        {links.email && (
                                            <a href={`mailto:${links.email}`}
                                                className="btn" style={{
                                                    padding: '0.75rem 1.5rem',
                                                    background: 'transparent',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    color: 'var(--text-primary)',
                                                    display: 'flex', alignItems: 'center', gap: '0.75rem'
                                                }}>
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
