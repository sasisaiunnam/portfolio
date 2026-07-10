import './Experience.css';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'CBIZSOFT India Private Limited',
    period: 'January 2024 – Present',
    location: 'Hyderabad, India',
    projects: [
      {
        name: 'QuickCart – Digital Retail Marketplace',
        tagline: 'High-Traffic E-Commerce Backend',
        highlights: [
          'Architected server-side infrastructure and designed 50+ highly scalable RESTful APIs using Node.js and Express.js.',
          'Designed optimized MongoDB schemas and built complex aggregation pipelines, reducing query response times by 30%.',
          'Engineered secure checkout workflows, cart management APIs, and user transaction history databases.',
          'Cut server load by 40% by implementing strategic Redis caching for high-frequency queries.',
        ],
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'REST APIs'],
      },
      {
        name: 'Enterprise Portal Support',
        tagline: 'Full-Stack Support & UI Enhancement',
        highlights: [
          'Resolved 100+ production UI bugs, responsiveness issues, and state-management glitches in React.js.',
          'Fixed data mapping errors within nested API payloads for seamless dashboard rendering.',
          'Refactored legacy user interaction flows to direct inline editing, improving workflow efficiency by 25%.',
          'Standardized frontend code quality with modular React practices, improving maintainability by 20%.',
        ],
        tags: ['React.js', 'State Management', 'UI/UX', 'API Integration'],
      },
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">journey</span>
          </h2>
          <p className="section-subtitle">
            Building scalable systems and solving complex engineering challenges
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, idx) => (
            <div className="experience__item" key={idx}>
              <div className="experience__timeline-dot">
                <div className="experience__timeline-dot-inner"></div>
              </div>
              <div className="experience__timeline-line"></div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {exp.period}
                    </span>
                    <span className="experience__location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="experience__projects">
                  {exp.projects.map((project, pIdx) => (
                    <div className="experience__project" key={pIdx}>
                      <div className="experience__project-header">
                        <h4 className="experience__project-name">{project.name}</h4>
                        <span className="experience__project-tagline">{project.tagline}</span>
                      </div>
                      <ul className="experience__highlights">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                      <div className="experience__tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="experience__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
