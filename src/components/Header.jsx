import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            GY
          </button>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              className="nav-item"
              onClick={() => scrollToSection(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ color: 'var(--color-accent)' }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
