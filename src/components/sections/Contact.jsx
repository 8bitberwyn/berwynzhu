import React from 'react';
import AnimationElement from '../AnimationElement';

const Contact = ({ addToRefs }) => {
  return (
    <section
      id="contact"
      ref={addToRefs}
      className="animation-bounce"
      style={{ backgroundColor: '#E6FFFD', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
    >
      <div className="contact-form-container" style={{
        backgroundColor: '#5F6F6F',
        padding: '2rem',
        borderRadius: '10px',
        width: '100%',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Contact
        </h2>
        <p style={{ marginBottom: '2rem' }}>We'd love to hear from you!</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Message"
            rows="5"
            required
            style={{ ...inputStyle, resize: 'none' }}
          />
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>

      <AnimationElement />
    </section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  outline: 'none'
};

const buttonStyle = {
  backgroundColor: '#ffffff',
  color: '#00062C',
  border: 'none',
  padding: '0.75rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'background-color 0.3s',
};

export default Contact;
