import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Maximize, GitMerge } from 'lucide-react';

const Robotics = () => {
    return (
        <section id="robotics" className="robotics-section">
            {/* Background circuit lines decoration */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
                <svg style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M0,100 Q400,150 800,100 T1600,100"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="container robotics-grid">

                {/* Visual / Diagram */}
                <div className="glass schematic-box flex-center">

                    <div className="schematic-inner flex-center" style={{ flexDirection: 'column', padding: '2rem' }}>
                        <div className="flex-between" style={{ width: '100%', fontSize: '0.75rem', fontFamily: 'monospace', color: '#888', marginBottom: '1rem' }}>
                            <span>SCHEMATIC_V2</span>
                            <span style={{ color: 'limegreen' }}>ACTIVE</span>
                        </div>

                        {/* Simulated Robotic Arm Points */}
                        <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                            <motion.div
                                animate={{ rotate: [0, 10, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ position: 'absolute', bottom: '2rem', left: '25%', width: '8px', height: '120px', background: '#999', borderRadius: '4px', transformOrigin: 'bottom' }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, -30, 20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '100px', background: '#bbb', borderRadius: '4px', transformOrigin: 'bottom' }}
                                >
                                    <div style={{ position: 'absolute', top: '-15px', left: '-12px', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #0066cc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0066cc', borderRadius: '50%' }} />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Nodes */}
                            <div className="glass-card" style={{ position: 'absolute', top: '20px', right: '20px', padding: '1rem' }}>
                                <Cpu color="#444" size={24} />
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '4px', background: '#ddd', borderRadius: '2px', marginTop: '1rem', overflow: 'hidden' }}>
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{ width: '30%', height: '100%', background: 'rgba(0,102,204,0.5)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Maximize size={20} color="#0066cc" />
                        <span style={{ fontWeight: 'bold', color: '#888', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Applied Mechatronics</span>
                    </div>

                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Intelligent Robotics
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                        We don't just write code; we build systems that move. Our robotics division focuses on high-precision automation, human-machine interaction, and AI-assisted decision making in physical environments.
                    </p>

                    <ul style={{ marginBottom: '2rem' }}>
                        {['Autonomous Navigation', 'Precise Manipulation', 'Sensor Fusion', 'Real-time Telemetry'].map((item) => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                                <div style={{ width: '8px', height: '8px', background: '#0066cc', borderRadius: '50%' }} />
                                <span style={{ fontWeight: '500', color: '#444' }}>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button style={{
                        padding: '12px 30px', border: '1px solid #ccc', borderRadius: '50px',
                        background: 'transparent', fontWeight: '600', color: '#333', cursor: 'pointer'
                    }}>
                        View Schematics
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Robotics;
