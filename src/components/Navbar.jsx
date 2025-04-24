// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ sections, scrollToSection, currentSection }) => {
    return (
        <nav className="main-nav">
            <div className="logo">Berwyn Project</div>
            <ul className="nav-links">
                {sections.map((section, index) => (
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
