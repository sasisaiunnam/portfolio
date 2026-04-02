import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-greeting">Hi, my name is</div>
        <h1 className="hero-name">Sasi Sai Unnam</h1>
        <h2 className="hero-title">Full Stack Developer & Engineer</h2>
        <p className="hero-description">
          I craft exceptional digital experiences with a focus on modern web technologies. 
          With a background in mechatronics engineering and expertise in engineering management, 
          I bring a unique perspective to building innovative web solutions.
        </p>
        <div className="cta-buttons">
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            offset={-80}
            className="btn btn-primary"
          >
            View My Work
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-80}
            className="btn btn-secondary"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;