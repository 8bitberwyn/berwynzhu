import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import AnimationElement from '../AnimationElement';
import '../../styles/sections/Contact.css';

const Contact = ({ addToRefs }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xj75f7c',
        'template_ldv97e2',
        formRef.current,
        'khp3uZ6UeCUMGAYO8'
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message.');
        }
      );
  };

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

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <div className="input-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="message"
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
