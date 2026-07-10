import './Education.css';

const education = [
  {
    degree: 'Master of Science (M.S.)',
    field: 'Engineering Management',
    institution: 'University of Greenwich',
    location: 'London, UK',
    year: '2022',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Technology (B.Tech.)',
    field: 'Mechatronics Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    year: '2020',
    icon: '🎓',
  },
];

const training = {
  title: 'MERN Stack Development Program',
  institution: 'Codegnan IT Solutions',
  highlights: [
    'Comprehensive training in server-side architecture & RESTful API development',
    'NoSQL database design with MongoDB',
    'Mastered Node.js event loops, Express.js middleware, and full-stack deployment',
  ],
};

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <div className="education__header">
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">background</span>
          </h2>
        </div>

        <div className="education__grid">
          {education.map((edu, idx) => (
            <div className="education__card" key={idx}>
              <div className="education__card-year">{edu.year}</div>
              <div className="education__card-body">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__field">{edu.field}</p>
                <p className="education__institution">{edu.institution}</p>
                <span className="education__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Training */}
        <div className="education__training">
          <div className="education__training-header">
            <div className="education__training-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <h3 className="education__training-title">Professional Training</h3>
              <p className="education__training-subtitle">{training.title} — {training.institution}</p>
            </div>
          </div>
          <ul className="education__training-list">
            {training.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
