import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactTyped } from 'react-typed';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Components
import AnimationElement from '../AnimationElement';

// Styles
import '../../styles/sections/Welcome.css';

// Assets
import temiImage from '../../assets/temi.png';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

const Welcome = ({ addToRefs }) => {
  const navigate = useNavigate();


  return (
    <section
      id="intro"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#00062C' }}
    >
      <div className="welcome-inner">
        <div className="welcome-left welcome-text">
          <span className="text-line">Hello,</span>
          <span className="text-line">I am <span className="highlight">Berwyn</span></span>
          <span className="text-line">
            <ReactTyped
              strings={['Welcome to my', 'Explore my', 'Dive into my']}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
            <span className="highlight">portfolio</span>
          </span>

          <div className="cta-buttons text-line">
            <button className="primary-button" onClick={() => navigate("/projects")}>
              <FontAwesomeIcon icon={faCode} className="button-icon" />
              View Projects
            </button>
            <button className="secondary-button" onClick={scrollToBottom}>
              <FontAwesomeIcon icon={faEnvelope} className="button-icon" />
              Contact Me
            </button>

          </div>
        </div>

        <div>
          <img src={temiImage} alt="Portrait" className="portrait-image" />
          <div className="social-icons">
            <a href="https://github.com/8bitberwyn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/berwyn-zhu-289532200/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <AnimationElement />
    </section>
  );
};

export default Welcome;