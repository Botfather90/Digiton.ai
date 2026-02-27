import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { path: '/ai-transformation', label: 'AI Transformation' },
        { path: '/marketing', label: 'Marketing' },
        { path: '/work', label: 'Work' },
        { path: '/blog', label: 'Blog' },
        { path: '/academy', label: 'Academy' },
        { path: '/about', label: 'About' },
    ];

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="navbar" style={{ position: 'relative', overflow: 'hidden' }}>

                {/* Scanning Beam Animation */}
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    style={{
                        position: 'absolute',
                        top: 0, bottom: 0, left: 0,
                        width: '40%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,206,59,0.05) 50%, transparent 100%)',
                        transform: 'skewX(-20deg)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                />

                <Link to="/" className="nav-logo" style={{ marginLeft: '1rem', marginRight: '1rem', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src="/logo.png" alt="Digiton Logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </Link>

                <nav className="nav-links" style={{ position: 'relative', zIndex: 1 }}>
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="nav-active-bg"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span style={{ position: 'relative', zIndex: 2 }}>{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <Link to="/discovery" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem', marginLeft: '1rem', position: 'relative', zIndex: 1 }}>
                    Let's Talk
                </Link>
            </div>
        </motion.header>
    );
};

export default Navbar;
