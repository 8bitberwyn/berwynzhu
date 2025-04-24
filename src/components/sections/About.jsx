import React from 'react';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';

const About = ({ addToRefs, handleGetStarted }) => {
  return (
    <section 
      id="about"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#1A456F' }}
    >
      <div className="section-content">
        <h2>About Me</h2>
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
      
      <AnimationElement />
    </section>
  );
};

export default About;