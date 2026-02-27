import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mic, Send, Volume2, VolumeX, MicOff } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Requires VITE_GEMINI_API_KEY in .env
const apiKey = 'AIzaSyCPF6wegBIU0V9B6FbXxGGQoY8yNKK74kU' || import.meta.env.VITE_GEMINI_API_KEY || '';
// genAI is instantiated inside handleSend to prevent page crashes if key is missing


export const VoiceChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am the Digiton AI Architect. You can type or speak to me.' }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [isThinking, setIsThinking] = useState(false);

    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    // Initialize Speech Recognition
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                handleSend(transcript);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const speakText = (text) => {
        if (!voiceEnabled || !('speechSynthesis' in window)) return;

        window.speechSynthesis.cancel(); // cancel previous
        const utterance = new SpeechSynthesisUtterance(text);

        // Try to find a good English voice
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Google') && v.lang.includes('en')) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    };

    const toggleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            setInput('');
            try {
                recognitionRef.current?.start();
                setIsListening(true);
            } catch (e) {
                console.error("Microphone error:", e);
                setIsListening(false);
            }
        }
    };

    const handleSend = async (textToSend = input) => {
        if (!textToSend.trim()) return;
        if (!apiKey) {
            alert("Gemini API Key is not configured in .env yet!");
            return;
        }

        const userMsg = { role: 'user', content: textToSend };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsThinking(true);

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            // Build system context
            const systemPrompt = "You are the Digiton Voice Assistant. You help users understand Digiton's AI transformation services, Academy, and engineering solutions. Be concise, professional, and slightly futuristic. Don't use heavy markdown formatting since your response might be spoken out loud.";

            const prompt = `${systemPrompt}\n\nUser: ${textToSend}`;
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
            if (voiceEnabled) {
                speakText(responseText);
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred connecting to the neural network." }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{
                            position: 'absolute',
                            bottom: '5rem',
                            right: 0,
                            width: '350px',
                            height: '500px',
                            background: 'rgba(10, 10, 12, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 206, 59, 0.2)',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,206,59,0.1)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,206,59,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
                                <span className="label-mono text-primary" style={{ fontSize: '0.9rem' }}>Digiton Voice AI</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => setVoiceEnabled(!voiceEnabled)} style={{ color: voiceEnabled ? 'var(--accent)' : 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                                    {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                </button>
                                <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((msg, idx) => (
                                <div key={idx} style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    background: msg.role === 'user' ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                                    color: msg.role === 'user' ? 'black' : 'var(--text-primary)',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '12px',
                                    maxWidth: '85%',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.5,
                                    border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.1)' : 'none'
                                }}>
                                    {msg.content}
                                </div>
                            ))}
                            {isThinking && (
                                <div style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', gap: '4px' }}>
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'var(--bg-primary)' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '0.5rem', alignItems: 'center' }}>
                                <button
                                    onClick={toggleListen}
                                    style={{
                                        background: isListening ? 'var(--accent)' : 'transparent',
                                        color: isListening ? 'black' : 'var(--text-secondary)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {isListening ? <Mic size={18} /> : <MicOff size={18} />}
                                </button>

                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type or speak..."
                                    style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: '0.95rem' }}
                                />

                                <button
                                    onClick={() => handleSend()}
                                    style={{
                                        background: 'var(--accent)',
                                        color: 'black',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'black',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(255,206,59,0.3), 0 0 0 1px rgba(255,206,59,0.5)',
                    zIndex: 9999
                }}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>
        </div>
    );
};
