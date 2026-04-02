import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    {
      id: 1,
      name: 'HTML5',
      icon: <FaHtml5 />,
      description: 'Semantic markup & accessibility'
    },
    {
      id: 2,
      name: 'CSS3',
      icon: <FaCss3Alt />,
      description: 'Modern layouts & animations'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: <FaJs />,
      description: 'ES6+ & async programming'
    },
    {
      id: 4,
      name: 'React',
      icon: <FaReact />,
      description: 'Component architecture & hooks'
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={skill.id} 
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;