import React from 'react';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';

const Projects = ({ addToRefs, handleGetStarted }) => {
  return (
    <section 
      id="projects"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#00062C' }}
    >
<h2 className="section-title">
            <span className="highlight">Projects</span>
          </h2>
      
      <AnimationElement />
    </section>
  );
};

export default Projects;