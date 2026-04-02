import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <div className="contact-content">
        <p className="contact-text">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll get back to you!
        </p>
        <a href="mailto:sasisai@example.com" className="contact-email">
          sasisai@gmail.com
        </a>
        <div className="cta-buttons">
          <a href="mailto:sasisai@example.com" className="btn btn-primary">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;