import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sasisai.unnam@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Side */}
          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact__info-label">Email</span>
                <a href="mailto:sasisai.unnam@gmail.com" className="contact__info-value">sasisai.unnam@gmail.com</a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__info-label">Phone</span>
                <a href="tel:+917780593926" className="contact__info-value">+91 7780593926</a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value contact__info-value--text">Hyderabad, India</span>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <span className="contact__info-label">Availability</span>
                <span className="contact__info-value contact__info-value--green">Immediate Joiner (0 Days Notice)</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <div className={`contact__field ${focused === 'name' ? 'contact__field--focused' : ''} ${formData.name ? 'contact__field--filled' : ''}`}>
              <label htmlFor="contact-name" className="contact__label">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                required
                className="contact__input"
              />
            </div>

            <div className={`contact__field ${focused === 'email' ? 'contact__field--focused' : ''} ${formData.email ? 'contact__field--filled' : ''}`}>
              <label htmlFor="contact-email" className="contact__label">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                required
                className="contact__input"
              />
            </div>

            <div className={`contact__field ${focused === 'message' ? 'contact__field--focused' : ''} ${formData.message ? 'contact__field--filled' : ''}`}>
              <label htmlFor="contact-message" className="contact__label">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                required
                rows="5"
                className="contact__input contact__textarea"
              />
            </div>

            <button type="submit" className="contact__submit" id="contact-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
