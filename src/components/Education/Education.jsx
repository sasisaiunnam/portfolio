import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      id: 1,
      degree: "Master's Degree",
      field: 'Engineering Management',
      description: 'Combining technical expertise with strategic management principles'
    },
    {
      id: 2,
      degree: 'Bachelor of Technology',
      field: 'Mechatronics Engineering',
      description: 'Integrated study of mechanical, electrical, and computer systems'
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey</p>
      </div>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div 
            key={item.id} 
            className="education-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="education-content">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-field">{item.field}</p>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;