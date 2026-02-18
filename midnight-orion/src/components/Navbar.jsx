import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Expertise', href: '#expertise' },
        { name: 'Robotics', href: '#robotics' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="container nav-content">
                <a href="#" className="logo-area">
                    <img src="/logo.png" alt="CarleelTech Logo" className="logo-img" />
                    <span className="logo-text">
                        CarleelTech
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-jimoh-nav">
                        <MessageSquare size={16} />
                        <span>Ask JIMOH</span>
                    </button>
                </div>

                {/* Mobile Toggle (Simplified for this example) */}
                <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}>
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
