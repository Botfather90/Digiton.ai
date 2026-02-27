import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, FileText, Settings, LogOut } from 'lucide-react';
import { SEO } from '../components/SEO';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const [activeTab, setActiveTab] = useState('leads');
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        // Load leads from local storage mock DB
        const storedLeads = JSON.parse(localStorage.getItem('digiton_leads') || '[]');
        setLeads(storedLeads);
        
        // Check session
        if (sessionStorage.getItem('digiton_admin') === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'contact@digiton.ai' && password === 'L3novo01!') {
            setIsAuthenticated(true);
            sessionStorage.setItem('digiton_admin', 'true');
            setError('');
        } else {
            setError('Invalid credentials.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('digiton_admin');
    };

    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', padding: '2rem' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', width: '100%', maxWidth: '400px' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(255,206,59,0.1)', color: 'var(--accent)', padding: '1rem', borderRadius: '50%', display: 'inline-block', marginBottom: '1rem' }}>
                            <Lock size={32} />
                        </div>
                        <h1 style={{ fontSize: '2rem', margin: 0 }}>Terminal Access</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Restricted Area</p>
                    </div>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <input type="email" placeholder="System Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none' }}
                            />
                        </div>
                        <div>
                            <input type="password" placeholder="Passkey" value={password} onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none' }}
                            />
                        </div>
                        {error && <p style={{ color: '#ff3333', fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>{error}</p>}
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Authenticate</button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', display: 'flex' }}>
            <SEO title="Admin Console | Digiton" canonicalUrl="/admin" />
            
            {/* Sidebar */}
            <aside style={{ width: '280px', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 className="label-mono text-accent" style={{ fontSize: '1.2rem', margin: 0 }}>DIGITON ADMIN</h2>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>v1.0.0</span>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <button 
                        onClick={() => setActiveTab('leads')}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: activeTab === 'leads' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', borderRadius: '12px', color: activeTab === 'leads' ? 'var(--accent)' : 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontWeight: activeTab === 'leads' ? 600 : 400 }}
                    >
                        <Users size={20} /> Captured Leads
                    </button>
                    <button 
                        onClick={() => setActiveTab('blogs')}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: activeTab === 'blogs' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', borderRadius: '12px', color: activeTab === 'blogs' ? 'var(--accent)' : 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontWeight: activeTab === 'blogs' ? 600 : 400 }}
                    >
                        <FileText size={20} /> Blog Generator
                    </button>
                </nav>

                <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left', marginTop: 'auto' }}>
                    <LogOut size={20} /> Secure Logout
                </button>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '4rem', overflowY: 'auto' }}>
                {activeTab === 'leads' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Captured Leads</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>View requests from Academy waitlists and team training proposals.</p>

                        {leads.length === 0 ? (
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '24px', border: '1px dashed rgba(255,255,255,0.1)', textAlign: 'center' }}>
                                <Users size={48} color="var(--text-secondary)" style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
                                <h3>No leads captured yet.</h3>
                                <p style={{ color: 'var(--text-tertiary)' }}>Signups from the Academy page will appear here.</p>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {leads.map((lead, i) => (
                                    <div key={i} style={{ background: 'var(--bg-secondary)', padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.25rem 0' }}>{lead.name}</h4>
                                            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                <span>{lead.email}</span> • <span>{lead.role}</span>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="label-mono" style={{ background: 'rgba(255,206,59,0.1)', color: 'var(--accent)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', display: 'inline-block', marginBottom: '0.5rem' }}>
                                                {lead.context}
                                            </span>
                                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
                                                {new Date(lead.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'blogs' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>AI SEO Blog Engine</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Generate 1,500+ word technical articles utilizing Google Gemini.</p>

                        <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <FileText size={24} color="var(--accent)" />
                                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Content Generator</h3>
                            </div>
                            
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Module architecture under construction pending Gemini API script integration.</p>
                            
                            {/* Placeholder for generation form */}
                            <div style={{ opacity: 0.5, pointerEvents: 'none' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Target Keyword / Topic</label>
                                    <input type="text" placeholder="e.g. B2B Workflow Automation in n8n" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' }} />
                                </div>
                                <button className="btn btn-primary" style={{ padding: '1rem 2rem', opacity: 0.5 }}>Run Neural Generation</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default Admin;
