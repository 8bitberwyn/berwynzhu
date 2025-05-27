// src/components/Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Navbar.css'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navbarSections = [
    { id: 'intro', title: 'Welcome' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    // { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
];

const Navbar = ({ scrollToSection, currentSection }) => {
    return (
        <nav className="main-nav">
            <div onClick={() => scrollToSection(0)} className="logo">
                Berwyn
            </div>
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
                <a href="https://github.com/8bitberwyn">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/berwyn-zhu-289532200/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </ul>
        </nav>
    );
};

export default Navbar;
