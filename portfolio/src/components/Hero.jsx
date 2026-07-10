import { useEffect, useRef } from 'react';
import avatarImg from '../assets/avatar.png';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Ambient background blobs */}
      <div className="hero__blob hero__blob--1"></div>
      <div className="hero__blob hero__blob--2"></div>
      <div className="hero__blob hero__blob--3"></div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot"></span>
            Available for Immediate Joining
          </div>

          <h1 className="hero__title" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">Sasi Sai Unnam</span>
          </h1>

          <h2 className="hero__subtitle" style={{ animationDelay: '0.3s' }}>
            Senior Backend Developer
          </h2>

          <p className="hero__description" style={{ animationDelay: '0.4s' }}>
            Crafting <strong>high-performance APIs</strong> and <strong>scalable architectures</strong> with 
            the MERN Stack. Specialized in Node.js, Express.js, MongoDB, and Redis — 
            turning complex backend challenges into elegant solutions.
          </p>

          <div className="hero__stats" style={{ animationDelay: '0.5s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">2.5+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">APIs Designed</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">40%</span>
              <span className="hero__stat-label">Server Load Cut</span>
            </div>
          </div>

          <div className="hero__actions" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="hero__btn hero__btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero__visual" style={{ animationDelay: '0.4s' }}>
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring"></div>
            <img src={avatarImg} alt="Sasi Sai Unnam" className="hero__avatar" />
          </div>
          <div className="hero__floating-tags">
            <span className="hero__tag hero__tag--1">Node.js</span>
            <span className="hero__tag hero__tag--2">MongoDB</span>
            <span className="hero__tag hero__tag--3">React</span>
            <span className="hero__tag hero__tag--4">Express</span>
            <span className="hero__tag hero__tag--5">Redis</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
