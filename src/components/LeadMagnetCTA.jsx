import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Briefcase, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LeadMagnetCTA = ({ text = "Book Discovery Call", variant = "primary", embedded = false }) => {
    // If embedded, default to open so the form shows immediately
    const [isOpen, setIsOpen] = useState(embedded);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ industry: '', goal: '' });

    const handleNext = () => setStep(step + 1);

    // Simulate finding Calendly link after audit
    const handleComplete = () => {
        window.open('https://calendly.com/brandon-digiton/30min', '_blank');
        if (!embedded) {
            setIsOpen(false);
        }
        // Reset after short delay so it's fresh if reopened or for next user
        setTimeout(() => {
            setStep(1);
            setFormData({ industry: '', goal: '' });
        }, 500);
    };

    const isPrimary = variant === "primary";

    const formContent = (
        <motion.div
            initial={embedded ? { opacity: 0, y: 20 } : { scale: 0.95, y: 20 }}
            animate={embedded ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }}
            exit={embedded ? { opacity: 0 } : { scale: 0.95, y: 20 }}
            style={{
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '32px',
                padding: '3rem',
                maxWidth: '600px', width: '100%',
                margin: embedded ? '0 auto' : undefined,
                position: 'relative',
                boxShadow: embedded ? 'none' : '0 25px 50px -12px rgba(0,0,0,0.5)'
            }}
        >
            {!embedded && (
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute', top: '1.5rem', right: '1.5rem',
                        background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                        cursor: 'pointer', padding: '0.5rem'
                    }}
                    className="hover:text-primary transition-colors"
                >
                    <X size={24} />
                </button>
            )}

            {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="label-mono text-accent mb-4 block">Free AI Audit</div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                        What's your primary industry?
                    </h3>
                    <p className="text-secondary mb-8" style={{ fontSize: '1.1rem' }}>
                        Help us tailor our discovery call to your specific operational bottlenecks.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {['Healthcare / Medical', 'E-Commerce / Retail', 'SaaS / Tech', 'Agency / Services', 'Finance / Law', 'Other'].map((ind) => (
                            <button
                                key={ind}
                                onClick={() => { setFormData({ ...formData, industry: ind }); handleNext(); }}
                                className="hover:border-accent hover:bg-[rgba(255,206,59,0.05)] transition-all"
                                style={{
                                    padding: '1.5rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '16px',
                                    color: 'var(--text-primary)',
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '1rem'
                                }}
                            >
                                <Briefcase size={20} className="text-secondary" />
                                {ind}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="label-mono text-accent mb-4 block">Process Discovery</div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                        What is your biggest operational bottleneck?
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                        {[
                            { id: 'lead_gen', label: 'Lead Generation & Qualification' },
                            { id: 'data_entry', label: 'Manual Data Entry & Syncing' },
                            { id: 'customer_support', label: 'Customer Support & Onboarding' },
                            { id: 'content', label: 'Content Creation at Scale' }
                        ].map((goal) => (
                            <button
                                key={goal.id}
                                onClick={() => { setFormData({ ...formData, goal: goal.id }); handleNext(); }}
                                className="hover:border-accent hover:bg-[rgba(255,206,59,0.05)] transition-all"
                                style={{
                                    padding: '1.5rem 2rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '16px',
                                    color: 'var(--text-primary)',
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '1rem'
                                }}
                            >
                                <TargetIcon id={goal.id} />
                                {goal.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center" style={{ padding: '2rem 0' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        style={{ width: '80px', height: '80px', margin: '0 auto 2rem auto', border: '2px dashed var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Zap size={32} className="text-accent" />
                    </motion.div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Customizing Your Blueprint...</h3>
                    <p className="text-secondary mb-8" style={{ fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                        Based on your ({formData.industry || 'specified'}) industry, we're generating a custom automation blueprint for our call.
                    </p>
                    <button
                        onClick={handleComplete}
                        className="btn btn-primary"
                        style={{ padding: '1.25rem 3rem', fontSize: '1.2rem', borderRadius: '100px' }}
                    >
                        Book Calendly Slot
                    </button>
                </motion.div>
            )}

        </motion.div>
    );

    if (embedded) {
        return formContent;
    }

    return (
        <Link
            to="/discovery"
            className={`btn ${isPrimary ? 'btn-primary' : ''}`}
            style={!isPrimary ? {
                padding: '1.25rem 2.5rem',
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
                borderRadius: '100px',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
            } : { cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            onMouseOver={(e) => {
                if (!isPrimary) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.background = 'rgba(255,206,59,0.05)';
                }
            }}
            onMouseOut={(e) => {
                if (!isPrimary) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                }
            }}
        >
            {text}
            <ArrowRight size={18} />
        </Link>
    );
};

// Helper icon
const TargetIcon = ({ id }) => {
    switch (id) {
        case 'lead_gen': return <Search size={20} className="text-accent" />;
        case 'data_entry': return <Zap size={20} className="text-accent" />;
        case 'customer_support': return <Briefcase size={20} className="text-accent" />;
        case 'content': return <Search size={20} className="text-accent" />;
        default: return <Search size={20} className="text-accent" />;
    }
}
