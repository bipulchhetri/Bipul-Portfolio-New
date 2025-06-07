import React from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
        role: "Full Stack Developer Tranning and Internship",
        company: "Cuvette",
        duration: "Jun 2024 – Mar 2025",
        points: [
          "Built MERN stack apps like blog system, URL shortener, and Word-to-PDF converter.",
          "Implemented JWT-based authentication and file uploads with Multer.",
          "Practiced agile development and Git version control in team projects."
        ],
      },
    {
      role: "Website Analyst",
      company: "Legalution",
      duration: "Mar 2023 – Mar 2024",
      points: [
        "Analyzed website traffic using Google Analytics and Search Console.",
        "Performed on-page and off-page SEO audits to boost visibility.",
        "Collaborated with developers to improve site UX/UI."
      ],
    },
    
  ];

  return (
    <section className="experience-container">
      <h2 className="section-title"> <span><img src="./icons/experince.png" alt="" width={60} /></span>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <ul className="description-list">
                {exp.points.map((point, i) => (
                  <li key={i} className="description-item">
                    <span className="bullet">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
