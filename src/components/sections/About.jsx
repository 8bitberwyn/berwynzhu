import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';
import '../../styles/sections/About.css';

// Replace this with your actual portrait image
import portraitImage from '../../assets/portrait.jpg';
import resumePDF from '../../assets/Resume.pdf';

const About = ({ addToRefs }) => {
  const openResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section 
      id="about"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#00062C' }}
    >
      <div className="about-inner">
        <div className="about-left">
          <img src={portraitImage} alt="Berwyn Portrait" className="about-portrait-image" />
        </div>
        
        <div className="about-right about-text">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          
          <div className="about-content">
            <p className="about-description text-line">
              My name is <span className="highlight">Berwyn Zhu</span>. I graduated from the University of New South Wales with a Bachelor's Degree in Computer Science. I'm passionate about combining technical expertise with creative solutions to build innovative web applications.
            </p>
            
            <div className="resume-button text-line">
              <button className="primary-button" onClick={openResume}>
                <FontAwesomeIcon icon={faFileAlt} className="button-icon" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimationElement />
    </section>
  );
};

export default About;