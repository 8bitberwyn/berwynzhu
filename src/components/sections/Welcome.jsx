import React from 'react';
import AnimationElement from '../AnimationElement';
import '../../styles/sections/Welcome.css';
import temiImage from '../../assets/temi.png';

const Welcome = ({ addToRefs, handleGetStarted }) => {
  return (
    <section
      id="intro"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#00062C' }}
    >
      <div className="welcome-inner">
        <div className="welcome-content">
          <h1 className="welcome-text">
            <span className="text-line">Hello,</span>
            <span className="text-line">I am <span className="highlight">Berwyn</span></span>
            <span className="text-line">Welcome to my <span className="highlight">portfolio</span></span>
          </h1>
          {/* <div className="button-container">
            <button 
              className="section-button"
              onClick={() => handleGetStarted('/welcome')}
            >
              Get Started
            </button>
          </div> */}
        </div>

        <img src={temiImage} alt="Portrait" className="portrait-image" />
      </div>

      <AnimationElement />
    </section>
  );
};

export default Welcome;
