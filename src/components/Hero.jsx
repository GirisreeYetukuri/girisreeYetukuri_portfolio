import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleDownloadResume = () => {
    // This would link to your actual resume file
    window.open('/Resume_Girisree_Yetukuri.pdf', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          Hello, I'm
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Girisree Yetukuri
        </motion.h1>

        <motion.p className="hero-title" variants={itemVariants}>
          React Developer
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Crafting scalable, performant, and elegant web experiences with 5 years
          of expertise in React, TypeScript, and modern frontend technologies.
          Specialized in building responsive applications that balance aesthetics
          with functionality.
        </motion.p>

        <motion.div className="hero-location" variants={itemVariants}>
          <span>📍</span> Sterling, Virginia
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button className="btn-primary" onClick={handleDownloadResume}>
            <FiDownload />
            <span>Download Resume</span>
          </button>
          <button
            className="btn-secondary"
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a> */}
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a> */}
          <a href="mailto:ygirisree@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
