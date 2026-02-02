import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const highlights = [
    {
      number: '5+',
      label: 'Years Experience',
    },
    {
      number: '3',
      label: 'Companies',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">Building Digital Experiences</h2>
          <div className="divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a React Developer with a passion for creating intuitive,
              accessible, and performant web applications. With over 5 years of
              experience in the field, I've had the privilege of working with
              companies ranging from healthcare technology to enterprise consulting.
            </p>
            <p>
              My expertise lies in translating complex requirements into elegant
              solutions using React, TypeScript, and modern frontend technologies.
              I believe in writing clean, maintainable code and creating
              exceptional user experiences that make a difference.
            </p>
            <p>
              Currently based in Sterling, Virginia, I'm always excited to
              collaborate on projects that push boundaries and solve real-world
              problems. When I'm not coding, you'll find me exploring new
              technologies, contributing to open-source, or mentoring aspiring
              developers.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-number">{item.number}</div>
                <div className="highlight-label">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
