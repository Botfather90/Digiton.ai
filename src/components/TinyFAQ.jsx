import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: "What services does Digiton.ai offer?",
        a: "Digiton.ai specializes in digital marketing solutions, including AI automation, SEO, web design, and more, tailored to enhance business performance."
    },
    {
        q: "How does AI automation benefit your digital marketing strategy?",
        a: "AI automates repetitive tasks, providing data-driven insights and executing campaigns automatically, saving you hours of manual work."
    },
    {
        q: "What makes Digiton.ai unique in the digital marketing space?",
        a: "We don't just consult; we actually build and deploy the systems. We focus entirely on tangible, revenue-generating automated systems with a proven track record."
    },
    {
        q: "How can I start working with Digiton.ai?",
        a: "Simply book a free discovery call. We'll audit your current operations and provide a clear plan of action tailored to your business."
    }
];

export const TinyFAQ = () => {
    const [openIdx, setOpenIdx] = useState(0); // First one open by default

    return (
        <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Got Questions?<br />We've Got Answers!</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faqs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div
                                key={idx}
                                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                                style={{
                                    background: 'rgba(10,10,12,0.8)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    border: isOpen ? '1px solid rgba(255,206,59,0.8)' : '1px solid rgba(255,255,255,0.05)',
                                    boxShadow: isOpen ? '0 0 30px rgba(255,206,59,0.1) inset' : 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>{faq.q}</h3>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: isOpen ? 'var(--accent)' : 'rgba(255,206,59,0.1)',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: isOpen ? 'var(--bg-primary)' : 'var(--accent)',
                                        transition: 'all 0.3s ease',
                                        flexShrink: 0,
                                        marginLeft: '1rem'
                                    }}>
                                        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: 'auto', opacity: 1, marginTop: '2rem' }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '90%' }}>
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
