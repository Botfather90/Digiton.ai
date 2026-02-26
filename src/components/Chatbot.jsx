import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Initiating connection... I am the Digiton AI Agent.' },
        { id: 2, type: 'bot', text: 'How can we automate your workflow today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: input }]);
        setInput('');

        // Mock bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: 'Processing your request. To deeply analyze this use case, please book a discovery call via the terminal above.'
            }]);
        }, 1000);
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'absolute',
                            bottom: '5rem',
                            right: 0,
                            width: '350px',
                            background: 'rgba(10, 10, 12, 0.85)',
                            backdropFilter: 'blur(30px)',
                            WebkitBackdropFilter: 'blur(30px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.25rem 1.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
                                    <motion.div animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', inset: 0, background: 'var(--accent)', borderRadius: '50%' }} />
                                </div>
                                <span className="label-mono" style={{ color: 'var(--text-primary)' }}>Terminal Active</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div style={{ height: '300px', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '85%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '12px',
                                        background: msg.type === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(255,206,59,0.1)',
                                        border: msg.type === 'user' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,206,59,0.2)',
                                        color: msg.type === 'user' ? 'var(--text-primary)' : 'var(--accent)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.5,
                                        fontFamily: msg.type === 'bot' ? 'var(--font-mono)' : 'var(--font-body)'
                                    }}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Execute command..."
                                    style={{
                                        width: '100%',
                                        background: 'rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '100px',
                                        padding: '0.75rem 3rem 0.75rem 1rem',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.85rem',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'rgba(255,206,59,0.5)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        position: 'absolute',
                                        right: '0.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'var(--text-primary)',
                                        color: 'var(--bg-primary)',
                                        border: 'none',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    border: 'none',
                    color: 'var(--bg-primary)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(255,206,59,0.3)',
                    position: 'relative'
                }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}

                {/* Pulse ring when closed */}
                {!isOpen && (
                    <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            border: '2px solid var(--accent)',
                            pointerEvents: 'none'
                        }}
                    />
                )}
            </motion.button>
        </div>
    );
};
