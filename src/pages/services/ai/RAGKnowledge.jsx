import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage, fadeUpVariant } from '../../../components/AnimatedPage';
import { LeadMagnetCTA } from '../../../components/LeadMagnetCTA';
import { Database, FolderSearch, KeyRound, Network } from 'lucide-react';
import { RAGVis } from '../../../components/animations/RAGVis';
import { SEO } from '../../../components/SEO';

const RAGKnowledge = () => {
    return (
        <AnimatedPage>
            <SEO title="RAG Knowledge Systems" canonicalUrl="/services/ai/rag-knowledge" />
            <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div variants={fadeUpVariant}>
                        <span className="label-mono text-accent" style={{ background: 'rgba(255,206,59,0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,206,59,0.2)' }}>
                            <Database size={14} /> AI TRANSFORMATION CORE
                        </span>

                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 2rem 0', textTransform: 'uppercase' }}>
                            RAG & <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>Knowledge.</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                            Turn your dead documents into an interactive brain. We build secure Retrieval-Augmented Generation (RAG) systems that let teams instantly query thousands of SOPs, PDFs, and historical slack threads.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ padding: '8rem 0' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <RAGVis />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(300px, auto)' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                            <FolderSearch size={32} className="text-primary" />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Vector Search Architecture</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
                            We use Pinecone and Supabase pgvector to chunk, embed, and index your company's data. Our systems retrieve context instantly based on semantic meaning, not just exact keywords.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', background: 'var(--accent)', borderRadius: '32px', padding: '3rem', color: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div className="label-mono" style={{ background: 'rgba(0,0,0,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>Zero Hallucinations</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--bg-primary)' }}>100% Citation</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.6 }}>
                            Every answer generated by the system includes a direct hotlink to the specific page of the PDF or Slack thread it pulled the information from.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        style={{ gridColumn: 'span 4', background: 'var(--bg-secondary)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <KeyRound size={32} className="text-accent mb-6" />
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Access Controls</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Enterprise-grade authentication ensures employees only get answers drawn from documents they have permission to view.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        style={{ gridColumn: 'span 8', background: 'rgba(4,4,5,1)', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '16px', marginBottom: '2rem' }}>
                                <Network size={32} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Live Sync Pipelines</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                                We don't just upload a PDF once. We build webhooks that monitor your Google Drive, Notion, and Confluence. When you update a doc, the vector database updates milliseconds later.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <section style={{ padding: '8rem 0' }}>
                <LeadMagnetCTA text="Deploy Your Knowledge OS" variant="primary" />
            </section>
        </AnimatedPage>
    );
};

export default RAGKnowledge;
