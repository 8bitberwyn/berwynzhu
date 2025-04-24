import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

const ScrollingAnimationApp = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState('');
  const sectionsRef = useRef([]);
  const navigate = useNavigate();
  
  // Add a section to refs
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Handle scroll events - defined with useCallback to avoid recreating on each render
  const handleScroll = useCallback(() => {
    if (isTransitioning) return;
    
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
    
  }, [isTransitioning]);

  // Scroll to section
  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = (sectionPath) => {
    navigate(sectionPath);
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

  // Create navbar sections array for Navbar component
  const navbarSections = [
    { id: 'intro', title: 'Welcome' },
    { id: 'about', title: 'About Us' },
    { id: 'services', title: 'Services' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
  ];

  return (
    <div className={`app ${isTransitioning ? 'app-transitioning' : ''}`}>
      {/* Top Scroll Progress bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
      <Navbar 
        sections={navbarSections} 
        currentSection={currentSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* Content sections */}
      <div className="content-sections">
        {/* Section 1: Welcome */}
        <section 
          id="intro"
          ref={addToRefs}
          className="content-section animation-fade-in"
          style={{ backgroundColor: '#ff6b6b' }}
        >
          <div className="section-content">
            <h2>Welcome</h2>
            <p>Discover our amazing interactive experience</p>
            <div className="button-container">
              <button className="section-button">Learn More</button>
              <button 
                className="section-button"
                onClick={() => handleGetStarted('/welcome')}
              >
                Get Started
              </button>
            </div>
            
            <div className="animation-indicator">
              <div className="animation-fade-icon">
                <span>✨</span>
              </div>
            </div>
          </div>
          
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

        {/* Section 2: About Us */}
        <section 
          id="about"
          ref={addToRefs}
          className="content-section animation-slide-left"
          style={{ backgroundColor: '#4ecdc4' }}
        >
          <div className="section-content">
            <h2>About Us</h2>
            <p>Learn about our team and mission</p>
            <div className="button-container">
              <button className="section-button">Learn More</button>
              <button 
                className="section-button"
                onClick={() => handleGetStarted('/about')}
              >
                Get Started
              </button>
            </div>
            
            <div className="animation-indicator">
              <div className="animation-slide-icon">
                <span>←</span>
              </div>
            </div>
          </div>
          
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

        {/* Section 3: Services */}
        <section 
          id="services"
          ref={addToRefs}
          className="content-section animation-slide-right"
          style={{ backgroundColor: '#ffd166' }}
        >
          <div className="section-content">
            <h2>Services</h2>
            <p>Explore what we can do for you</p>
            <div className="button-container">
              <button className="section-button">Learn More</button>
              <button 
                className="section-button"
                onClick={() => handleGetStarted('/services')}
              >
                Get Started
              </button>
            </div>
            
            <div className="animation-indicator">
              <div className="animation-slide-icon">
                <span>→</span>
              </div>
            </div>
          </div>
          
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

        {/* Section 4: Portfolio */}
        <section 
          id="portfolio"
          ref={addToRefs}
          className="content-section animation-zoom-in"
          style={{ backgroundColor: '#06d6a0' }}
        >
          <div className="section-content">
            <h2>Portfolio</h2>
            <p>Check out our previous work</p>
            <div className="button-container">
              <button className="section-button">Learn More</button>
              <button 
                className="section-button"
                onClick={() => handleGetStarted('/portfolio')}
              >
                Get Started
              </button>
            </div>
            
            <div className="animation-indicator">
              <div className="animation-zoom-icon">
                <span>🔍</span>
              </div>
            </div>
          </div>
          
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

        {/* Section 5: Contact */}
        <section 
          id="contact"
          ref={addToRefs}
          className="content-section animation-bounce"
          style={{ backgroundColor: '#118ab2' }}
        >
          <div className="section-content">
            <h2>Contact</h2>
            <p>Get in touch with us</p>
            <div className="button-container">
              <button className="section-button">Learn More</button>
              <button 
                className="section-button"
                onClick={() => handleGetStarted('/contact')}
              >
                Get Started
              </button>
            </div>
            
            <div className="animation-indicator">
              <div className="animation-bounce-icon">
                <span>↕</span>
              </div>
            </div>
          </div>
          
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
      </div>
    </div>
  );
};

export default ScrollingAnimationApp;