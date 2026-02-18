import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Layers, Cpu } from 'lucide-react';

const services = [
    {
        icon: <Bot size={28} />,
        title: "AI-Powered Systems",
        desc: "Intelligent agents and decision-making cores designed to automate complex cognitive tasks."
    },
    {
        icon: <Cpu size={28} />,
        title: "Robotics & Mechatronics",
        desc: "Bridging the gap between software and the physical world with advanced kinematic systems."
    },
    {
        icon: <Workflow size={28} />,
        title: "Workflow Automation",
        desc: "Orchestrating backend processes with N8N to handle leads, routing, and notifications seamlessly."
    },
    {
        icon: <Layers size={28} />,
        title: "Integrated Solutions",
        desc: "End-to-end hardware and software architectures built for scalability and performance."
    }
];

const Services = () => {
    return (
        <section id="expertise" className="services-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Core Capabilities</h2>
                    <div style={{ width: '100px', height: '4px', background: '#0066cc', margin: '0 auto 2rem', borderRadius: '2px' }} />
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#666' }}>
                        CARLEELTECH fuses artificial intelligence with engineering to build living, breathing systems, and active workflows with robots.
                    </p>
                </motion.div>

                <div className="service-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card"
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#222' }}>{service.title}</h3>
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
