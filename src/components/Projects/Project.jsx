import React from 'react';
import { FaCloudSun, FaShoppingCart, FaMobileAlt, FaCalculator, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './Project.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts, interactive UI, and detailed weather metrics.',
      icon: <FaCloudSun />,
      tech: ['React', 'API Integration', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with product filtering, cart management, and responsive design.',
      icon: <FaShoppingCart />,
      tech: ['React', 'Context API', 'React Router'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'App Store',
      description: 'Modern app marketplace interface with search functionality, categories, and detailed app information pages.',
      icon: <FaMobileAlt />,
      tech: ['JavaScript', 'HTML5', 'CSS Grid'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Expense Calculator',
      description: 'Personal finance tracker with expense categorization, budget management, and visual analytics.',
      icon: <FaCalculator />,
      tech: ['React', 'Local Storage', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              {project.icon}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;