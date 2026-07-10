import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-text">SSU</span>
              <span className="footer__logo-bracket">/&gt;</span>
            </a>
            <p className="footer__tagline">
              Senior Backend Developer crafting scalable solutions with the MERN Stack.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Quick Links</h4>
            <div className="footer__links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__links">
              <a href="mailto:sasisai.unnam@gmail.com">Email</a>
              <a href="tel:+917780593926">Phone</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Sasi Sai Unnam. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <span className="footer__heart">♥</span> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
