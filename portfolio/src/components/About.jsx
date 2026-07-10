import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about building <span className="gradient-text">robust backends</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a <strong>Results-driven Backend Developer</strong> with 2.5 years of professional 
              experience specializing in the MERN Stack. I have strong expertise in building 
              high-performance RESTful APIs, designing scalable server-side architectures, 
              and database query optimization.
            </p>
            <p>
              My proven track record includes improving system efficiency through caching 
              strategies with <strong>Redis</strong> and resolving complex frontend integration issues 
              with React. Equipped with a <strong>Master of Science in Engineering Management</strong> from 
              the University of Greenwich, London, I bring a structured, analytical 
              problem-solving mindset to every project.
            </p>
            <p>
              I'm passionate about clean code principles and always strive to create 
              systems that are maintainable, scalable, and performant.
            </p>
          </div>

          <div className="about__info-cards">
            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="about__card-content">
                <span className="about__card-label">Notice Period</span>
                <span className="about__card-value">Immediate (0 Days)</span>
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="about__card-content">
                <span className="about__card-label">Core Focus</span>
                <span className="about__card-value">Backend & API (80%)</span>
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="about__card-content">
                <span className="about__card-label">Location</span>
                <span className="about__card-value">Hyderabad, India</span>
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="about__card-content">
                <span className="about__card-label">Experience</span>
                <span className="about__card-value">2.5+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
