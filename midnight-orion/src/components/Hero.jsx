import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Ambience */}
            <div className="hero-bg-orb" style={{ top: 0, right: 0, width: '500px', height: '500px', background: 'rgba(0,100,255,0.1)' }} />
            <div className="hero-bg-orb" style={{ bottom: 0, left: 0, width: '400px', height: '400px', background: 'rgba(100,0,255,0.05)' }} />

            <div className="container hero-grid">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
                    >
                        <div style={{ height: '1px', width: '50px', background: '#0066cc' }}></div>
                        <span style={{ color: '#0066cc', fontWeight: '700', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase' }}>Engineering the Future</span>
                    </motion.div>

                    <h1 className="hero-title">
                        CARLEELTECH
                    </h1>

                    <p className="hero-subtitle">
                        Architecting intelligent <strong style={{ color: '#0066cc' }}>AI workflows</strong>,
                        building advanced <strong style={{ color: '#0066cc' }}>robotics</strong>, and
                        engineering the next generation of automation systems.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                            Explore Builds <ArrowRight size={18} />
                        </a>
                        <a href="#vision" style={{
                            padding: '1rem 2rem', borderRadius: '50px', border: '1px solid #aaa',
                            background: 'transparent', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit',
                            textDecoration: 'none', color: 'inherit', display: 'inline-block'
                        }}>
                            Our Vision
                        </a>
                    </div>
                </motion.div>

                {/* Right: Interactive Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ position: 'relative' }}
                >
                    {/* Main Card */}
                    <motion.div
                        whileHover={{ rotateY: 5, rotateX: 5 }}
                        className="glass-card"
                        style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 20 }}
                    >
                        <div className="flex-between">
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>System Status</h3>
                                <p style={{ color: 'green', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', marginTop: '5px' }}>
                                    <span style={{ width: '8px', height: '8px', background: 'limegreen', borderRadius: '50%' }}></span> Online
                                </p>
                            </div>
                            <Cpu style={{ color: '#0066cc', opacity: 0.8 }} size={40} />
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Metric 1 */}
                            <div>
                                <div className="flex-between" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                                    <span>AI Core (JIMOH)</span>
                                    <span>98%</span>
                                </div>
                                <div style={{ height: '8px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "98%" }}
                                        transition={{ duration: 2, delay: 1 }}
                                        style={{ height: '100%', background: '#0066cc', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>

                            {/* Metric 2 */}
                            <div>
                                <div className="flex-between" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                                    <span>Robotic Response</span>
                                    <span>12ms</span>
                                </div>
                                <div style={{ height: '8px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 2, delay: 1.2 }}
                                        style={{ height: '100%', background: '#4d94ff', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#999' }}>ID: CLT-8849-X</span>
                            <Activity size={16} color="#4d94ff" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
