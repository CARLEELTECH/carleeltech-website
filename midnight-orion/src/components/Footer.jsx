import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #0066cc, transparent)', opacity: 0.5 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="footer-grid">
                    <div>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>CARLEELTECH</h4>
                        <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Engineering the future with AI, Robotics, and Automation.
                        </p>
                    </div>
                    <div>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#ccc' }}>System</h5>
                        <ul className="footer-links">
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#ccc' }}>Connect</h5>
                        <ul className="footer-links">
                            {/* PASTE YOUR LINKS INSIDE THE href="" BELOW */}
                            <li><a href="https://linkedin.com/in/carleeltech" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/carleeltech" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#ccc' }}>Contact</h5>
                        <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem' }}>systems@carleeltech.com</p>
                        <button style={{ color: '#4d94ff', fontSize: '0.9rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Initiate Call: JIMOH</button>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #222', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#555' }}>
                    <p>&copy; 2026 CARLEELTECH. All Systems Operational.</p>
                    <p>Designed by DeepMind Agent</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
