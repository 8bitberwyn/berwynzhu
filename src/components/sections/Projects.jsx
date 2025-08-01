import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import AnimationElement from '../AnimationElement';
import '../../styles/Section.css';
import '../../styles/sections/Projects.css';

const Projects = ({ addToRefs, handleGetStarted }) => {
  const projects = [
    {
      id: 1,
      title: "Prime Tuition",
      description: "A tutoring platform designed to connect students with qualified tutors. Features include tutor profiles, subject categories, booking systems and educational resources to facilitate effective learning experiences.",
      url: "https://primetuition.org/",
      icon: faGraduationCap,
      technologies: ["HTML", "Javascript", "CSS", "SEO"],
      category: "Tutoring Website"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio showcasing my development skills and projects. Built with smooth animations, interactive elements and a clean design aesthetic to highlight my work and experience.",
      url: "https://berwynzhu.vercel.app/",
      icon: faUser,
      technologies: ["React", "HTML", "JavaScript", "CSS", "Vercel"],
      category: "Personal Portfolio"
    },
    {
      id: 3,
      title: "Jajija Bookings",
      description: "*In Progress* Sport court bookings website",
      url: "https://berwynzhu.vercel.app/",
      icon: faCode,
      technologies: ["React", "Typescript", "Tailwind", "JavaScript", "Vercel"],
      category: "Bookings Website"
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
              className={`project-card text-line`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <FontAwesomeIcon icon={project.icon} />
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
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