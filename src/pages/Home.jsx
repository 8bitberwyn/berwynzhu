import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

// Import section components
import Welcome from '../components/sections/Welcome';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  const handleGetStarted = (sectionPath) => {
    navigate(sectionPath);
  };

  useEffect(() => {
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll position check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      {/* Top Scroll Progress bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
      <Navbar 
        currentSection={currentSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* Content sections */}
      <div className="content-sections">
        <Welcome addToRefs={addToRefs} handleGetStarted={handleGetStarted} />
        <About addToRefs={addToRefs} handleGetStarted={handleGetStarted} />
        <Projects addToRefs={addToRefs} handleGetStarted={handleGetStarted} />
        <Portfolio addToRefs={addToRefs} handleGetStarted={handleGetStarted} />
        <Contact addToRefs={addToRefs} handleGetStarted={handleGetStarted} />
      </div>
    </div>
  );
};

export default Home;