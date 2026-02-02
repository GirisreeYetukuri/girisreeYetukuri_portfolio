import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Core',
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      title: 'State Management & Data',
      skills: ['Redux Toolkit', 'React Query', 'Context API'],
    },
    {
      title: 'UI & Design Systems',
      skills: ['Material UI', 'Tailwind CSS', 'Responsive Design', 'Accessibility (ARIA)'],
    },
    {
      title: 'API & Data Fetching',
      skills: ['RESTful APIs', 'WebSockets', 'Axios', 'GraphQL (Apollo Client)'],
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Testing & Quality',
      skills: ['Jest', 'React Testing Library', 'Cypress (E2E)'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Azure DevOps', 'Docker'],
    },
    {
      title: 'Cloud Services',
      skills: ['Azure Static Web Apps', 'Azure App Service', 'SharePoint'],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Technical Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
