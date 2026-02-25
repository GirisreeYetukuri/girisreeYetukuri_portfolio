import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const highlights = [
    {
      number: '6',
      label: 'Years Experience',
    },
    {
      number: '4',
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
              I'm a React Developer with 6 years of experience building scalable,
              high-performance web applications and real-time systems. I’ve worked across
              healthcare technology and enterprise consulting, delivering production-ready
              dashboards and internal platforms that support complex business workflows.
            </p>

            <p>
              My expertise lies in architecting modern frontend solutions using React,
              TypeScript, and microfrontend patterns. I specialize in building responsive,
              accessible interfaces, integrating REST APIs and WebSockets for real-time
              functionality, and optimizing performance through clean architecture and
              efficient state management.
            </p>

            <p>
              Currently based in Sterling, Virginia, I enjoy collaborating in Agile teams
              to translate complex requirements into elegant, maintainable solutions. I’m
              passionate about crafting intuitive user experiences that balance aesthetics,
              scalability, and long-term reliability.
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
