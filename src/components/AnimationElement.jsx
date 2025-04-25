import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faPython, 
  faPhp, 
  faHtml5, 
  faCss3Alt, 
  faNodeJs, 
  faAngular, 
  faVuejs, 
  faGithub,
  faBitbucket
} from '@fortawesome/free-brands-svg-icons';
import '../styles/AnimationElement.css';

const AnimationElement = () => {
  const techIcons = [
    faReact,
    faJs,
    faPython,
    faPhp,
    faHtml5,
    faCss3Alt,
    faNodeJs,
    faAngular, 
    faVuejs,
    faGithub,
    faBitbucket
  ];

  // Instead of randomizing in render, randomize once into state
  const [iconParams, setIconParams] = useState([]);

  useEffect(() => {
    const generateRandomParams = (index) => {
      return {
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 20 + 20}s`,
        animationName: `float-path-${(index % 5) + 1}`,
      };
    };

    const initialParams = techIcons.map((_, i) => generateRandomParams(i));
    setIconParams(initialParams);
  }, []); // <- only run once on mount

  return (
    <div className="animation-elements">
      {techIcons.map((icon, i) => {
        const params = iconParams[i];
        if (!params) return null; // prevent errors before params are ready

        return (
          <div
            key={i}
            className={`animation-element element-${i + 1}`}
            style={{
              left: params.left,
              top: params.top,
              animationDelay: params.animationDelay,
              animationDuration: params.animationDuration,
              animationName: `${params.animationName}, fade-in-out`,
            }}
          >
            <FontAwesomeIcon icon={icon} className="tech-icon" />
          </div>
        );
      })}
    </div>
  );
};

export default AnimationElement;
