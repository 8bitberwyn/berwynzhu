import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faGraduationCap, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';
import '../../styles/sections/Projects.css';

// Assets
import Berwyn from '../../assets/Berwyn.png';
import Isuzu from '../../assets/ISUZU.png';
import Prime from '../../assets/Prime.png';
import Ryze from '../../assets/Ryze.png';

const Projects = ({ addToRefs, handleGetStarted }) => {
  const projects = [
    {
      id: 1,
      title: "Prime Tuition",
      description: "A tutoring platform designed to connect students with qualified tutors. Features include tutor profiles, subject categories, booking systems and educational resources to facilitate effective learning experiences.",
      url: "https://primetuition.org/",
      icon: faGraduationCap,
      category: "Tutoring Website",
      image: Prime
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio showcasing my development skills and projects. Built with smooth animations, interactive elements and a clean design aesthetic to highlight my work and experience.",
      url: "https://berwynzhu.vercel.app/",
      icon: faUser,
      category: "Personal Portfolio",
      image: Berwyn
    },
    {
      id: 3,
      title: "Jajija Bookings",
      description: "*In Progress* Sport court bookings website",
      url: "https://berwynzhu.vercel.app/",
      icon: faCode,
      category: "Bookings Website",
      image: "https://placehold.co/1280x720/0a1240/00f5c4?text=Jajija+Bookings"
    },
    {
      id: 4,
      title: "Ryze Education",
      description: "A website for Ryze Education, presenting the business, its programs and how to get in touch.",
      url: "https://www.ryzeeducation.com.au/",
      icon: faGraduationCap,
      category: "Education Website",
      image: Ryze
    },
    {
      id: 5,
      title: "Isuzu Genset",
      description: "A website for Isuzu Genset, presenting the generator range and its specifications.",
      url: "https://isuzu-genset.vercel.app/",
      icon: faBolt,
      category: "Product Website",
      image: Isuzu
    }
  ];

  const openProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section 
      id="projects"
      ref={addToRefs}
      className="animation-slide-left"
      style={{ backgroundColor: '#00062C' }}
    >
      <div className="projects-inner">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card text-line"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="project-banner">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={project.icon} />
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-actions">
                  <button 
                    className="primary-button project-button"
                    onClick={() => openProject(project.url)}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="button-icon" />
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-footer text-line" style={{ animationDelay: '1.2s' }}>
          <p className="projects-note">
            More projects coming soon! I'm constantly working on new <span className="highlight">innovative solutions</span>.
          </p>
        </div>
      </div>

      <AnimationElement />
    </section>
  );
};

export default Projects;