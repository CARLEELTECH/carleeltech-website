import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
    {
        title: "Neuro-Orchestrator",
        category: "AI Workflow",
        desc: "A centralized N8N-powered brain for routing over 10,000 daily events across distributed systems.",
        link: "#"
    },
    {
        title: "Project: SENTINEL",
        category: "Robotics",
        desc: "Autonomous surveillance rover prototype with vision-based obstruction avoidance.",
        link: "#"
    },
    {
        title: "Voice-01 Agent",
        category: "Voice AI",
        desc: "Low-latency voice assistant capabale of handling complex engineering queries in real-time.",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="flex-between" style={{ marginBottom: '3rem', alignItems: 'flex-end' }}>
                    <div>
                        <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Builds & Deployments</h2>
                        <p style={{ color: '#888' }}>Live systems engineered by CARLEELTECH</p>
                    </div>
                    <button style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0066cc',
                        fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer'
                    }}>
                        View Github <Github size={20} />
                    </button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'block', textDecoration: 'none' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="glass-card group"
                                style={{ cursor: 'pointer', height: '100%' }}
                            >
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover-visible">
                                    <ExternalLink color="#0066cc" />
                                </div>

                                <div className="project-tag">
                                    {project.category}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#222' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {project.desc}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontFamily: 'monospace', color: '#999' }}>
                                    <Layers size={14} /> <span>v1.0.4 - STABLE</span>
                                </div>

                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px',
                                    background: 'linear-gradient(90deg, #0066cc, transparent)', transform: 'scaleX(0)',
                                    transformOrigin: 'left', transition: 'transform 0.5s'
                                }} className="hover-line" />
                            </motion.div>
                        </a>
                    ))}
                </div>

                <style>{`
            .glass-card:hover .group-hover-visible { opacity: 1 !important; }
            .glass-card:hover .hover-line { transform: scaleX(1) !important; }
        `}</style>
            </div>
        </section>
    );
};

export default Projects;
