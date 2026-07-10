import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 'bubble',
    title: 'Bubble',
    subtitle: 'Real-Time Proximity-Based Chat',
    description:
      'A real-time proximity-based chat application connecting active users within a specific geographical radius using WebSockets and MongoDB Geospatial queries.',
    highlights: [
      'Real-time bi-directional messaging with WebSockets',
      'MongoDB Geospatial Indexing with $near queries',
      'Proximity-based user discovery',
      'Optimized WebSocket handshakes for low-latency',
    ],
    tech: ['Node.js', 'WebSockets', 'MongoDB Geospatial', 'React', 'CSS3'],
    color: '#8b5cf6',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'Single-Vendor E-Commerce',
    subtitle: 'Complete Backend System',
    description:
      'A comprehensive product ordering backend system processing product catalogs, shopping carts, and order checkout flows with secure JWT authentication.',
    highlights: [
      'Full product ordering pipeline',
      'JWT-based secure authentication',
      'Role-based admin authorization (RBAC)',
      'Optimized Mongoose referential schemas',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    color: '#06b6d4',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    id: 'quiz',
    title: 'Interactive Quiz Engine',
    subtitle: 'Microservice Backend',
    description:
      'A backend microservice serving randomized quiz questions, calculating scores, and saving historical metrics with highly scalable API endpoints.',
    highlights: [
      'Randomized quiz generation engine',
      'Real-time score calculation',
      'Historical progression tracking',
      'Optimized for concurrent submissions',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Postman'],
    color: '#3b82f6',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle">
            Self-developed projects showcasing backend architecture and real-time systems
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <div
              className={`projects__card ${hoveredProject === project.id ? 'projects__card--hovered' : ''}`}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ '--project-color': project.color }}
              id={`project-${project.id}`}
            >
              <div className="projects__card-glow"></div>

              <div className="projects__card-header">
                <div className="projects__card-icon" style={{ background: `${project.color}15`, color: project.color }}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <span className="projects__card-subtitle">{project.subtitle}</span>
                </div>
              </div>

              <p className="projects__card-description">{project.description}</p>

              <ul className="projects__card-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="projects__card-tag" style={{ borderColor: `${project.color}30`, color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
