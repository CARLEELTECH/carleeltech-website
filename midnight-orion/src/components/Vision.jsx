import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section id="vision" style={{ padding: '4rem 0', position: 'relative', zIndex: 10 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card"
                    style={{
                        padding: '3rem',
                        maxWidth: '900px',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 102, 204, 0.2)',
                        background: 'rgba(255, 255, 255, 0.6)'
                    }}
                >
                    <h3 style={{
                        fontSize: '1rem',
                        marginBottom: '1.5rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#0066cc'
                    }}>
                        Mission Statement
                    </h3>
                    <p style={{
                        fontSize: '1.5rem',
                        lineHeight: '1.5',
                        color: '#222',
                        fontWeight: '500',
                        fontFamily: 'var(--font-main)' // Using font from variables if strictly needed, or just inherit
                    }}>
                        "At CARLEELTECH, innovation meets dedication — shaping the future of engineering with every partner and who joins us."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
export default Vision;
