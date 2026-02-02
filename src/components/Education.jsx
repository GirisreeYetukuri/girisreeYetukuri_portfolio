import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="divider"></div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="education-icon">
            <FiAward />
          </div>
          <div className="education-content">
            <h3 className="education-degree">Master of Science in Computer Science</h3>
            <div className="education-school">Rowan University</div>
            <div className="education-location">Glassboro, New Jersey</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
