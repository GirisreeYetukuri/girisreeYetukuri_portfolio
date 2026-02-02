import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Health Recovery Solutions',
      location: 'Hoboken, New Jersey (Remote)',
      period: 'November 2023 – Present',
      description:
        'Developed a real-time logistics operations dashboard for remote patient monitoring, managing medical device kits across healthcare facilities.',
      achievements: [
        'Built real-time dashboard with React, Redux Toolkit, and WebSockets for live shipment and inventory tracking',
        'Implemented interactive data visualizations using Apache ECharts and React Table with advanced filtering',
        'Optimized rendering performance with React.memo and virtualization, improving responsiveness by 40%',
        'Utilized React Query for client-side caching, reducing redundant API calls',
        'Deployed on Azure Static Web Apps with CI/CD via GitHub Actions',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture',
      location: 'Bengaluru, India',
      period: 'August 2022 – August 2023',
      description:
        'Developed a talent allocation platform to optimize consultant assignments and resource utilization across client projects.',
      achievements: [
        'Built React SPA with TypeScript for consultant profiles, assignments, and availability tracking',
        'Implemented drag-and-drop interface with real-time conflict alerts to prevent double-booking',
        'Created skill-matching search with debounced filtering by skills, certifications, and experience',
        'Developed analytics dashboard with Recharts visualizing utilization rates and project timelines',
        'Reduced initial load time by 30% through React.memo, lazy loading, and code-splitting',
      ],
    },
    {
      title: 'Junior React Developer',
      company: 'Nextbrain',
      location: 'Bengaluru, India',
      period: 'August 2021 – June 2022',
      description:
        'Built an internal request management system for workflow tracking across client projects and internal operations.',
      achievements: [
        'Developed multi-page React application with React Hooks, Context API, and React Router',
        'Designed responsive UIs with HTML5, CSS3, and SCSS ensuring accessibility',
        'Implemented role-based dashboards with dynamic forms and real-time validation',
        'Integrated RESTful APIs with performance optimization through lazy loading',
        'Deployed as custom SharePoint web application with Active Directory integration',
      ],
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <div className="divider"></div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
