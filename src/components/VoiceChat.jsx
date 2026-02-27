import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mic, Send, Volume2, VolumeX, MicOff, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Requires VITE_GEMINI_API_KEY in .env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

export const VoiceChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am the Digiton AI Architect. You can type or speak to me.' }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [isThinking, setIsThinking] = useState(false);
    const [speechError, setSpeechError] = useState('');

    // Floating balloon notifications state
    const [notifications, setNotifications] = useState([]);
    const notificationIdRef = useRef(0);

    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    // Initial greeting balloon
    useEffect(() => {
        const timer = setTimeout(() => {
            addNotification("Hey! Do you need help?");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const addNotification = (text) => {
        const id = notificationIdRef.current++;
        setNotifications(prev => [...prev, { id, text }]);

        // Remove after 6 seconds (enough time for it to float up and disappear)
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 6000);
    };

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
                setSpeechError('');
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Speech Recognition Error:", event.error);
                if (event.error === 'not-allowed') {
                    setSpeechError('Microphone access denied.');
                } else if (event.error === 'no-speech') {
                    setSpeechError('No speech detected.');
                } else {
                    setSpeechError(`Error: ${event.error}`);
                }
                setIsListening(false);
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

        const voices = window.speechSynthesis.getVoices();
        // Try to pick a Portuguese or English voice, prefer Google/premium voices
        const preferredVoice = voices.find(v => (v.lang.includes('pt') || v.lang.includes('en-GB') || v.lang.includes('en-US')) && v.name.includes('Google')) || voices.find(v => v.lang.includes('pt')) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    };

    const toggleListen = () => {
        setSpeechError('');
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            setInput('');
            try {
                recognitionRef.current?.start();
                setIsListening(true);
            } catch (e) {
                console.error("Microphone start error:", e);
                setSpeechError('Could not start microphone.');
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
        setSpeechError('');

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const systemPrompt = "You are the Digiton Voice Assistant. You help users understand Digiton's AI transformation services, Academy, and engineering solutions. Be concise, professional, and slightly futuristic. Don't use heavy markdown formatting since your response might be spoken out loud. You can speak English or Portuguese depending on the user's input language.";

            const prompt = `${systemPrompt}\n\nUser: ${textToSend}`;
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);

            // Pop up a balloon notification if the UI is closed (or even if open, as it adds dynamic feel)
            if (!isOpen) {
                addNotification(responseText.length > 60 ? responseText.substring(0, 60) + "..." : responseText);
            }

            if (voiceEnabled) {
                speakText(responseText);
            }
        } catch (error) {
            console.error("Gemini Error:", error);
            let userMsg = "An error occurred connecting to the neural network.";
            if (error.message && error.message.includes('403') && error.message.includes('reported as leaked')) {
                userMsg = "My API key has been revoked by Google. The owner needs to update it in the .env.local file.";
            } else if (error.status === 403) {
                userMsg = "My API key is invalid or was revoked by Google. Please update it.";
            }

            setMessages(prev => [...prev, { role: 'assistant', content: userMsg }]);
            if (!isOpen) addNotification("Connection error.");
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>

            {/* Floating Balloons Area */}
            <div style={{ position: 'absolute', bottom: '80px', right: '0px', width: '250px', display: 'flex', flexDirection: 'column-reverse', pointerEvents: 'none', gap: '10px' }}>
                <AnimatePresence>
                    {notifications.map(note => (
                        <motion.div
                            key={note.id}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: -40, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                            transition={{ duration: 4, ease: "easeOut" }}
                            style={{
                                background: 'rgba(10, 10, 12, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 206, 59, 0.3)',
                                padding: '1rem',
                                borderRadius: '16px 16px 0px 16px',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                                pointerEvents: 'auto',
                                cursor: 'pointer'
                            }}
                            onClick={() => setIsOpen(true)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
                                <span className="label-mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>Digiton AI</span>
                            </div>
                            {note.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

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
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'active' ? 'var(--accent)' : 'red', boxShadow: '0 0 10px var(--accent)' }} />
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

                        {/* Speech Error Banner */}
                        <AnimatePresence>
                            {speechError && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ background: 'rgba(255, 95, 86, 0.1)', color: '#FF5F56', padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255, 95, 86, 0.2)' }}
                                >
                                    <AlertCircle size={14} /> {speechError}
                                </motion.div>
                            )}
                        </AnimatePresence>

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
                                    {isListening ? <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}><Mic size={18} /></motion.div> : <MicOff size={18} />}
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

