import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactSidebar.css';

function ContactSidebar() {
  return (
    <div className="contact-sidebar">
      <div className="sidebar-links">
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="sidebar-link"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="sidebar-link"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:sasisai.unnam@gmail.com"
          aria-label="Email"
          className="sidebar-link"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://twitter.com/your-handle" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="sidebar-link"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://instagram.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="sidebar-link"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="sidebar-line"></div>
    </div>
  );
}

export default ContactSidebar;