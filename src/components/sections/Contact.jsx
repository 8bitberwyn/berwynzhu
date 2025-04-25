import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import AnimationElement from '../AnimationElement';

// Import the new CSS file
import '../../styles/sections/Contact.css';

const Contact = ({ addToRefs }) => {
  return (
    <section
      id="contact"
      ref={addToRefs}
      className="contact-section animation-bounce"
    >
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Contact <span className="highlight">Me</span></h2>
            <p className="contact-subtitle">I'd love to hear from you!</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <div className="input-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input
                type="text"
                placeholder="Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <div className="input-icon textarea-icon">
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <textarea
                placeholder="Message"
                rows="5"
                required
                className="form-textarea"
              />
            </div>

            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
            </button>
          </form>
        </div>
      </div>

      <AnimationElement />
    </section>
  );
};

export default Contact;