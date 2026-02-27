import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../components/AnimatedPage';
import { ArrowRight, X } from 'lucide-react';
import ReactDOM from 'react-dom';

const Blog = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            date: 'Feb 2026', tag: 'AI', title: 'How AI Agents Are Replacing Traditional Automation', excerpt: 'Why static workflows are dying and intelligent, autonomous agents are the future of business operations.',
            content: [
                { type: 'h2', text: 'The Death of Linear Workflows' },
                { type: 'p', text: 'For the last decade, platforms like Zapier and Make have dominated the automation landscape by allowing developers to connect APIs together. But these systems share a critical flaw: they are deterministic. They require exact, predefined inputs to produce expected outputs. The moment data enters the pipeline in an unexpected format, the entire system crashes.' },
                { type: 'p', text: 'Enter autonomous agents. By placing large language models (LLMs) at the center of the execution loop, we shift from "if-this-then-that" logic to goal-oriented task execution. An agent doesn\'t follow a rigid path; it receives an objective, analyzes the available tools, and determines the optimal sequence of actions to achieve that goal.' },
                { type: 'h2', text: 'Building Resilient Infrastructure' },
                { type: 'p', text: 'When building the new Digiton architecture, we implemented a semantic routing layer that catches unexpected inputs, parses their intent, and dynamically formats the payload before it ever reaches the final destination. This single architectural shift reduced our client error rates by 94% across 100+ active automated pipelines.' }
            ]
        },
        {
            date: 'Feb 2026', tag: 'Technology', title: 'The RAG Revolution: Making Your Data Actually Useful', excerpt: 'How retrieval-augmented generation transforms unstructured documents into queryable knowledge systems.',
            content: [
                { type: 'h2', text: 'Beyond the Context Window' },
                { type: 'p', text: 'The fundamental limitation of modern LLMs isn\'t reasoning capability—it\'s memory. While context windows are expanding, stuffing 100,000 tokens of raw company data into every single prompt is computationally expensive, prone to hallucination, and incredibly slow.' },
                { type: 'p', text: 'Retrieval-Augmented Generation (RAG) solves this by separating the knowledge base from the reasoning engine. We ingest PDFs, Slack logs, emails, and codebases into dedicated vector databases like Pinecone. When a user asks a question, the system first retrieves only the semantically relevant chunks of data, injecting them as context before generating the final response.' }
            ]
        },
        {
            date: 'Jan 2026', tag: 'Company', title: 'From Marketing Agency to AI Venture Studio', excerpt: 'The story of Digiton\'s evolution - from SEO and social media to building intelligent systems across 3 continents.',
            content: [
                { type: 'h2', text: 'The Agency Model is Broken' },
                { type: 'p', text: 'When we founded Digiton, our core value proposition was generating attention. We built high-performance websites, engineered complex SEO architectures, and managed millions in programmatic ad spend. But as we scaled our clients, we noticed a consistent pattern: we were driving leads into broken systems.' },
                { type: 'p', text: 'Sales teams couldn\'t keep up. Customer support was drowning. Onboarding processes were entirely manual. The attention we generated was leaking through operational cracks.' },
                { type: 'h2', text: 'Engineering Operations' },
                { type: 'p', text: 'We realized that the true bottleneck for our clients wasn\'t top-of-funnel acquisition, but mid-funnel operations. This realization triggered our pivot. We rebuilt our internal team, heavily recruiting systems architects, machine learning engineers, and integration specialists. Today, we don\'t just generate demand—we build the robotic infrastructure required to capture, process, and monetize it autonomously.' }
            ]
        },
        {
            date: 'Jan 2026', tag: 'Automation', title: 'n8n vs Zapier vs Make: The Honest Comparison', excerpt: 'After building 100+ workflows, here\'s what actually matters when choosing your automation platform.',
            content: [
                { type: 'h2', text: 'The Illusion of Choice' },
                { type: 'p', text: 'The automation market is crowded, but for enterprise-grade deployments, the choices narrow drastically. We constantly get asked why we prefer n8n over established players like Zapier or Make.' },
                { type: 'p', text: 'The answer comes down to three factors: self-hosting capabilities, fair execution pricing, and the ability to drop into writing raw JavaScript nodes when the visual builders fail.' },
                { type: 'h2', text: 'Execution Economics' },
                { type: 'p', text: 'If you are running a high-volume pipeline processing thousands of webhook payloads daily, Zapier will bankrupt you. Make offers better pricing, but its scenario execution limits can cause severe bottlenecks during unexpected traffic spikes. By deploying n8n on custom AWS architecture, we decouple execution costs from the software license entirely.' }
            ]
        }
    ];

    return (
        <AnimatedPage>
            <section className="hero-section container" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
                <motion.div variants={fadeUpVariant} className="hero-badge" style={{ marginBottom: '2rem' }}>
                    <span className="label-mono">Insights</span>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="hero-content text-center" style={{ alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ textTransform: 'none' }}>The <span className="text-gradient">Blog</span></h1>
                    <p className="hero-subhead mt-6" style={{ margin: '0 auto', maxWidth: '600px' }}>
                        Thoughts on AI, automation, engineering, and building the future of business operations.
                    </p>
                </motion.div>
            </section>

            <section className="section-py container" style={{ paddingTop: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Featured Article */}
                    <motion.div
                        variants={fadeUpVariant}
                        layoutId={`article-0`}
                        onClick={() => setSelectedArticle({ ...articles[0], index: 0 })}
                        style={{ gridColumn: '1 / -1', background: 'rgba(10,10,12,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '4rem', display: 'flex', flexDirection: 'column', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                        className="group hover:border-accent transition-colors"
                    >
                        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%', background: 'radial-gradient(circle at right, rgba(255,206,59,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <motion.span layoutId={`date-0`} className="label-mono text-secondary">{articles[0].date}</motion.span>
                                <span className="text-secondary" style={{ fontSize: '0.6rem' }}>◆</span>
                                <motion.span layoutId={`tag-0`} className="label-mono text-accent">{articles[0].tag}</motion.span>
                            </div>
                            <motion.h3 layoutId={`title-0`} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, maxWidth: '800px', transition: 'color 0.2s', color: 'var(--text-primary)' }}>{articles[0].title}</motion.h3>
                            <motion.p layoutId={`excerpt-0`} className="text-secondary" style={{ maxWidth: '600px', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: 'auto' }}>{articles[0].excerpt}</motion.p>

                            <div style={{ marginTop: '3rem', alignSelf: 'flex-start' }}>
                                <div className="icon-box" style={{ margin: 0, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <ArrowRight size={24} className="text-accent group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Articles Grid */}
                    {articles.slice(1).map((article, idx) => {
                        const actualIdx = idx + 1;
                        return (
                            <motion.div
                                key={actualIdx}
                                variants={fadeUpVariant}
                                layoutId={`article-${actualIdx}`}
                                onClick={() => setSelectedArticle({ ...article, index: actualIdx })}
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '3rem', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                                className="group hover:bg-glass-bg hover:border-accent/30 transition-all"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <motion.span layoutId={`date-${actualIdx}`} className="label-mono text-secondary">{article.date}</motion.span>
                                    <motion.span layoutId={`tag-${actualIdx}`} className="label-mono text-accent" style={{ marginLeft: 'auto' }}>{article.tag}</motion.span>
                                </div>
                                <motion.h3 layoutId={`title-${actualIdx}`} style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.2, transition: 'color 0.2s', color: 'var(--text-primary)' }}>{article.title}</motion.h3>
                                <motion.p layoutId={`excerpt-${actualIdx}`} className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>{article.excerpt}</motion.p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Read Article <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <AnimatePresence>
                {selectedArticle && typeof document !== 'undefined' && ReactDOM.createPortal(
                    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, pointerEvents: 'none' }}>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArticle(null)}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 0, pointerEvents: 'auto' }}
                        />

                        {/* Modal Container */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '4rem 2rem 2rem 2rem', pointerEvents: 'none', overflowY: 'auto' }}>
                            <motion.div
                                layoutId={`article-${selectedArticle.index}`}
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '32px',
                                    width: '100%',
                                    maxWidth: '800px',
                                    pointerEvents: 'auto',
                                    position: 'relative',
                                    marginTop: '2rem',
                                    marginBottom: '4rem',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    style={{
                                        position: 'absolute', top: '2rem', right: '2rem',
                                        background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%',
                                        width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        color: 'var(--text-primary)', cursor: 'pointer', zIndex: 10
                                    }}
                                    className="hover:bg-white/10 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                {/* Article Header */}
                                <div style={{ padding: '4rem 4rem 3rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'var(--bg-secondary)', borderRadius: '32px 32px 0 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                        <motion.span layoutId={`date-${selectedArticle.index}`} className="label-mono text-secondary">{selectedArticle.date}</motion.span>
                                        <span className="text-secondary" style={{ fontSize: '0.6rem' }}>◆</span>
                                        <motion.span layoutId={`tag-${selectedArticle.index}`} className="label-mono text-accent">{selectedArticle.tag}</motion.span>
                                    </div>
                                    <motion.h3 layoutId={`title-${selectedArticle.index}`} style={{ fontSize: '3rem', letterSpacing: '-0.02em', margin: '0 0 2rem 0', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                                        {selectedArticle.title}
                                    </motion.h3>
                                    <motion.p layoutId={`excerpt-${selectedArticle.index}`} style={{ fontSize: '1.25rem', color: 'var(--accent)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                        {selectedArticle.excerpt}
                                    </motion.p>
                                </div>

                                {/* Article Content Placeholder */}
                                <div style={{ padding: '4rem' }}>
                                    {(selectedArticle.content || []).map((block, i) => {
                                        if (block.type === 'h2') {
                                            return <h2 key={i} style={{ fontSize: '2rem', margin: '3rem 0 1.5rem 0', color: 'var(--text-primary)' }}>{block.text}</h2>;
                                        }
                                        if (block.type === 'p') {
                                            return <p key={i} style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{block.text}</p>;
                                        }
                                        return null;
                                    })}

                                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'rgba(255,206,59,0.05)', borderRadius: '24px', border: '1px solid rgba(255,206,59,0.2)', textAlign: 'center' }}>
                                        <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Want to build this?</h4>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We engineer these exact systems for enterprise clients every day.</p>
                                        <button className="btn btn-primary" onClick={() => window.location.href = '/discovery'} style={{ padding: '1rem 2.5rem' }}>Book a Discovery Call</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>,
                    document.body
                )}
            </AnimatePresence>

            <section className="section-py container" style={{ borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <motion.div variants={fadeUpVariant}>
                    <h2>Stay updated</h2>
                    <p className="text-secondary mt-4 mb-8" style={{ maxWidth: '500px', margin: '0 auto 2rem auto' }}>Subscribe to our newsletter for the latest insights directly to your inbox.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                        <input type="email" placeholder="Enter email address" className="input-field" style={{ margin: 0, borderRadius: '100px', padding: '1rem 1.5rem' }} />
                        <button className="btn btn-primary" style={{ flexShrink: 0 }}>Subscribe</button>
                    </div>
                </motion.div>
            </section>
        </AnimatedPage>
    );
};

export default Blog;
