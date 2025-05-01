// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../styles/Navbar.css';

const navbarSections = [
    { id: 'intro', title: 'Welcome' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    // { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
];

const Navbar = ({ scrollToSection, currentSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    
    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        // Prevent scrolling when menu is open
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (index) => {
        scrollToSection(index);
        setMenuOpen(false);
    };

    return (
        <nav ref={navRef} className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">Berwyn</div>
            
            {/* Mobile Hamburger Button */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            
            {/* Desktop and Mobile Navigation */}
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {navbarSections.map((section, index) => (
                    <li key={section.id} className="nav-item">
                        <button
                            onClick={() => handleNavClick(index)}
                            className={currentSection === index ? 'active' : ''}
                        >
                            {section.title}
                        </button>
                    </li>
                ))}
                <li className="social-nav">
                    <a href="https://github.com/8bitberwyn" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/berwyn-zhu-289532200/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            
            {/* Mobile Menu Overlay */}
            <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        </nav>
    );
};

export default Navbar;