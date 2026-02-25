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
        'Developing a cross-platform logistics platform for remote patient monitoring, managing medical device kits across healthcare facilities.',
      achievements: [
        'Built real-time web dashboard and internal mobile app using React and React Native with shared Redux Toolkit state',
        'Integrated REST APIs and WebSockets for live shipment tracking and real-time alerts',
        'Developed accessible UI components using Material UI and Tailwind CSS following ARIA standards',
        'Optimized performance with React.memo, lazy loading, and React Query, improving responsiveness by 40%',
        'Contributed to microfrontend architecture using Module Federation and Nx; deployed via Azure with CI/CD pipelines',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture',
      location: 'Bengaluru, India',
      period: 'August 2022 – August 2023',
      description:
        'Developed a talent allocation platform to optimize consultant assignments and resource utilization across enterprise projects.',
      achievements: [
        'Built modular React SPA using TypeScript for consultant profiles and assignments',
        'Implemented drag-and-drop scheduling with real-time conflict detection',
        'Created advanced search with debounced filtering and GraphQL queries',
        'Developed analytics dashboards using Recharts for utilization insights',
        'Improved load performance by 30% using memoization and code-splitting',
      ],
    },
    {
      title: 'Junior React Developer',
      company: 'Nextbrain',
      location: 'Bengaluru, India',
      period: 'August 2021 – June 2022',
      description:
        'Built an internal request management SPA to streamline workflow tracking and role-based operations.',
      achievements: [
        'Developed React application using Hooks, Context API, and React Router',
        'Designed responsive, accessible interfaces using HTML5 and CSS3',
        'Implemented dynamic forms with validation and role-based dashboards',
        'Integrated RESTful APIs using Axios with lazy loading optimization',
        'Deployed as a SharePoint-integrated web app with Active Directory authentication',
      ],
    },
    {
      title: 'Frontend Intern',
      company: 'Terex Soft',
      location: 'Bengaluru, India',
      period: 'January 2021 – July 2021',
      description:
        'Assisted in developing frontend features for a client-facing Learning Management Platform.',
      achievements: [
        'Built course listing and detail pages using React and Axios for API integration',
        'Developed quiz and assignment components with form validation',
        'Implemented progress tracking UI with dynamic completion indicators',
        'Applied lazy loading and code splitting to improve page performance',
        'Collaborated in Agile team with Git-based workflows and code reviews',
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
