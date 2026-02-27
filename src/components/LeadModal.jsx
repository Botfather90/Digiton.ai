import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

export const LeadModal = ({ isOpen, onClose, context }) => {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Mock API call to save lead
        setTimeout(() => {
            const newLead = {
                ...formData,
                context,
                date: new Date().toISOString(),
                id: Math.random().toString(36).substr(2, 9)
            };
            
            // Save to localStorage so admin panel can read it
            const existing = JSON.parse(localStorage.getItem('digiton_leads') || '[]');
            localStorage.setItem('digiton_leads', JSON.stringify([newLead, ...existing]));
            
            setStatus('success');
            
            // Auto close after 3 seconds
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', role: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 999 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', maxWidth: '500px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', zIndex: 1000, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                    >
                        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.5rem' }}>
                            <X size={20} />
                        </button>

                        <div style={{ marginBottom: '2rem' }}>
                            <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', marginBottom: '1rem', display: 'inline-block' }}>
                                {context}
                            </span>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Secure Your Spot</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Enter your details to pre-register and receive automated updates.</p>
                        </div>

                        {status === 'success' ? (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <CheckCircle2 size={48} color="#27C93F" style={{ margin: '0 auto 1rem auto' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Request Received</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We've sent a confirmation email to {formData.email}.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                                    <input 
                                        required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Work Email</label>
                                    <input 
                                        required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Company / Role</label>
                                    <input 
                                        required type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                                
                                <button 
                                    type="submit" disabled={status === 'loading'}
                                    style={{ width: '100%', padding: '1.25rem', borderRadius: '12px', background: 'var(--accent)', color: 'black', border: 'none', fontSize: '1.1rem', fontWeight: 600, cursor: status === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', transition: 'transform 0.2s', opacity: status === 'loading' ? 0.7 : 1 }}
                                    onMouseOver={(e) => { if(status !== 'loading') e.currentTarget.style.transform = 'scale(1.02)' }}
                                    onMouseOut={(e) => { if(status !== 'loading') e.currentTarget.style.transform = 'scale(1)' }}
                                >
                                    {status === 'loading' ? <Loader2 size={24} className="animate-spin" /> : <><Send size={20} /> Send Request</>}
                                </button>
                                <p style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
                                    By submitting, you agree to receive automated updates. Details are securely transmitted to the Digiton.ai Admin backend.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
