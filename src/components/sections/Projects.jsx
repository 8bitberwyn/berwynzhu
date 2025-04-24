import React from 'react';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';

const Projects = ({ addToRefs, handleGetStarted }) => {
  return (
    <section 
      id="projects"
      ref={addToRefs}
      className="animation-slide-right"
      style={{ backgroundColor: '#6693B3' }}
    >
      <div className="section-content">
        <h2>Projects</h2>
        <p>Explore what we can do for you</p>
        <div className="button-container">
          <button className="section-button">Learn More</button>
          <button 
            className="section-button"
            onClick={() => handleGetStarted('/Projects')}
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
      
      <AnimationElement />
    </section>
  );
};

export default Projects;