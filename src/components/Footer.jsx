import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">GY</div>
            <p className="footer-tagline">
              Crafting digital experiences with precision and passion
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a> */}
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a> */}
              <a href="mailto:ygirisree@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a> */}
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a> */}
            <a href="mailto:ygirisree@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <div className="footer-copyright">
            <p>
              © {currentYear} Girisree Yetukuri.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
