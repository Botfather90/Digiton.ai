import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/logo.png" alt="Digiton Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>digiton.ai</span>
                        </Link>
                        <p className="text-secondary" style={{ maxWidth: '280px', fontSize: '0.9rem' }}>
                            AI Transformation Venture Studio. Registered in Estonia (EU). Operations in Portugal, Angola, and UAE.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 className="label-mono">Services</h4>
                        <Link to="/ai-transformation" className="text-secondary hover:text-primary transition-colors">AI Transformation</Link>
                        <Link to="/marketing" className="text-secondary hover:text-primary transition-colors">Marketing</Link>
                        <Link to="/work" className="text-secondary hover:text-primary transition-colors">Work</Link>
                        <Link to="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 className="label-mono">Company</h4>
                        <Link to="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
                        <Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 className="label-mono">Connect</h4>
                        <a href="mailto:contact@digiton.ai" className="text-secondary hover:text-primary transition-colors">contact@digiton.ai</a>
                        <a href="tel:+351964779966" className="text-secondary hover:text-primary transition-colors">+351 964 779 966</a>
                        <p className="text-secondary">R. Natalia Correia 1, Lisboa</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 Digiton Dynamics OÜ. All rights reserved. | Estonia (EU)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
