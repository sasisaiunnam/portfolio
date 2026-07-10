import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 92 },
      { name: 'RESTful API Design', level: 90 },
      { name: 'WebSockets', level: 85 },
      { name: 'API Architecture', level: 88 },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Caching',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: 'MongoDB', level: 93 },
      { name: 'Mongoose ORM', level: 90 },
      { name: 'Redis', level: 85 },
      { name: 'Geospatial Queries', level: 80 },
      { name: 'NoSQL Design', level: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'UI Troubleshooting', level: 82 },
    ],
  },
  {
    id: 'security',
    title: 'Security & Auth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    skills: [
      { name: 'JWT Authentication', level: 92 },
      { name: 'RBAC', level: 85 },
      { name: 'API Security', level: 88 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vercel', level: 85 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    id: 'methods',
    title: 'Methodologies',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    skills: [
      { name: 'Agile/Scrum', level: 88 },
      { name: 'SDLC', level: 85 },
      { name: 'TDD Concepts', level: 78 },
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const activeSkills = skillCategories.find(c => c.id === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring products to life
          </p>
        </div>

        <div className="skills__layout">
          <div className="skills__categories">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`skills__category-btn ${activeCategory === cat.id ? 'skills__category-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`skill-tab-${cat.id}`}
              >
                <span className="skills__category-icon">{cat.icon}</span>
                <span className="skills__category-title">{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="skills__display">
            <div className="skills__display-header">
              <span className="skills__display-icon">{activeSkills.icon}</span>
              <h3 className="skills__display-title">{activeSkills.title}</h3>
            </div>
            <div className="skills__bars">
              {activeSkills.skills.map((skill, i) => (
                <div className="skills__bar-item" key={`${activeCategory}-${skill.name}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="skills__bar-header">
                    <span className="skills__bar-name">{skill.name}</span>
                    <span className="skills__bar-level">{skill.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <div
                      className="skills__bar-fill"
                      style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1 + 0.3}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
