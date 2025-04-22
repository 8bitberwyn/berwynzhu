// ScrollingAnimationApp.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../App.css';

const ScrollingAnimationApp = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef([]);
  
  // Define sections with content
  const sections = [
    { 
      id: 'intro',
      title: 'Welcome',
      content: 'Discover our amazing interactive experience',
      color: '#ff6b6b',
      animation: 'fade-in'
    },
    { 
      id: 'about',
      title: 'About Us',
      content: 'Learn about our team and mission',
      color: '#4ecdc4',
      animation: 'slide-left'
    },
    { 
      id: 'services',
      title: 'Services',
      content: 'Explore what we can do for you',
      color: '#ffd166',
      animation: 'slide-right'
    },
    { 
      id: 'portfolio',
      title: 'Portfolio',
      content: 'Check out our previous work',
      color: '#06d6a0',
      animation: 'zoom-in'
    },
    { 
      id: 'contact',
      title: 'Contact',
      content: 'Get in touch with us',
      color: '#118ab2',
      animation: 'bounce'
    }
  ];

  // Add a section to refs
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Handle scroll events - defined with useCallback to avoid recreating on each render
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate overall scroll progress (0 to 1)
    const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
    setScrollProgress(progress);
    
    // Find current visible section
    const viewportHeight = window.innerHeight;
    const viewportMiddle = scrollTop + (viewportHeight / 2);
    
    // Find which section contains the middle of the viewport
    for (let i = 0; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i];
      if (!section) continue;
      
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;
      const sectionBottom = sectionTop + rect.height;
      
      if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
        setCurrentSection(i);
        break;
      }
    }
    
    // Check for animations - add 'active' class when section is in view
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= viewportHeight * 0.75 && rect.bottom >= viewportHeight * 0.25;
      
      if (isInView) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
    
  }, []);

  // Scroll to section
  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll position check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="app">
      {/* Progress bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
      {/* Navigation */}
      <nav className="main-nav">
        <div className="logo">Scroll Experience</div>
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
      
      {/* Content sections */}
      <div className="content-sections">
        {sections.map((section, index) => (
          <section 
            key={section.id}
            id={section.id}
            ref={addToRefs}
            className={`content-section animation-${section.animation}`}
            style={{ 
              backgroundColor: section.color,
              minHeight: '100vh' 
            }}
          >
            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <div className="button-container">
                <button className="section-button">Learn More</button>
                <button className="section-button">Get Started</button>
              </div>
              
              {/* Animation indicators */}
              <div className="animation-indicator">
                {section.animation === 'fade-in' && (
                  <div className="animation-fade-icon">
                    <span>✨</span>
                  </div>
                )}
                {section.animation === 'slide-left' && (
                  <div className="animation-slide-icon">
                    <span>←</span>
                  </div>
                )}
                {section.animation === 'slide-right' && (
                  <div className="animation-slide-icon">
                    <span>→</span>
                  </div>
                )}
                {section.animation === 'zoom-in' && (
                  <div className="animation-zoom-icon">
                    <span>🔍</span>
                  </div>
                )}
                {section.animation === 'bounce' && (
                  <div className="animation-bounce-icon">
                    <span>↕</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Visual elements for animations */}
            <div className="animation-elements">
              {Array(5).fill().map((_, i) => (
                <div 
                  key={i} 
                  className={`animation-element element-${i + 1}`}
                  style={{
                    left: `${(i + 1) * 15}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollingAnimationApp;