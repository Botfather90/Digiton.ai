import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Eye, TrendingUp } from 'lucide-react';

const values = [
    {
        title: "Relentless Support",
        desc: "We don't just hand over keys. We maintain, monitor, and optimize our systems continuously ensuring 99.9% uptime and immediate block-resolution.",
        icon: <Zap size={24} className="text-accent" />
    },
    {
        title: "Engineering Excellence",
        desc: "No duct-tape solutions. Everything we build is production-ready, scalable architecture designed to handle enterprise volume from day one.",
        icon: <Cpu size={24} className="text-accent" />
    },
    {
        title: "Radical Transparency",
        desc: "You see exactly what we build, how it works, and why it makes you money. No black boxes. Full technical clarity.",
        icon: <Eye size={24} className="text-accent" />
    },
    {
        title: "Asymmetric Returns",
        desc: "We measure our success by your ROI. We deploy capital-efficient automation that generates massive, quantifiable value.",
        icon: <TrendingUp size={24} className="text-accent" />
    }
];

export const ValuesSection = () => {
    return (
        <section style={{ padding: '8rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="label-mono text-accent">Core Operating Principles</span>
                <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginTop: '1rem' }}>Our <span style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>Values</span></h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {values.map((val, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '32px',
                            padding: '3rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {val.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                                {val.title}
                            </h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                            {val.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
