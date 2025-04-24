// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css'
const navbarSections = [
    { id: 'intro', title: 'Welcome' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
];

const Navbar = ({ scrollToSection, currentSection }) => {
    return (
        <nav className="main-nav">
            <div className="logo">Berwyn</div>
            <ul className="nav-links">
                {navbarSections.map((section, index) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(index)}
                            className={currentSection === index ? 'active' : ''}
                        >
                            {section.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
