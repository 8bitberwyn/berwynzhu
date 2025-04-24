import React from 'react';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';

const Portfolio = ({ addToRefs, handleGetStarted }) => {
  return (
    <section 
      id="portfolio"
      ref={addToRefs}
      className="animation-zoom-in"
      style={{ backgroundColor: '#B3E2EF' }}
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
      
      <AnimationElement />
    </section>
  );
};

export default Portfolio;