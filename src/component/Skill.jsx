import React from 'react';
import './Skill.css';const skillCategories = {
    Languages: [
      { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178c6' },
    ],
    'Frontend Skills': [
      { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
      { name: 'Redux', icon: 'devicon-redux-original', color: '#764abc' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain', color: '#38bdf8' },
      { name: 'Next.js', icon: 'devicon-nextjs-original', color: '#fff' },
    ],
    'Backend Skills': [
      { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
      { name: 'Express', icon: 'devicon-express-original', color: '#fff' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#4db33d' },
      { name: 'JWT', icon: 'fas fa-key', color: '#da0037' },
    ],
    'Other Skills': [
      { name: 'Git', icon: 'fab fa-git-alt', color: '#f1502f' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#fff' },
      { name: 'SEO', icon: 'fas fa-search', color: '#00b894' },
       { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },

    ],
  };
  

const Skill = () => {
  return (
    <section className="skills-tab-section">
      <h2 className="skills-tab-title"><span><img src="./icons/skill.png" alt="" width={60} /></span> Technical Skills</h2>
      <div className="skills-tab-grid">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div className="chrome-tab-card" key={idx}>
            <div className="chrome-tab-header">
              <div className="tab-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="tab-title">{category}</span>
            </div>
            <div className="chrome-tab-body icons-mode">
              {skills.map((skill, index) => (
                <div className="icon-skill" key={index}>
                <i
  className={`${skill.icon} skill-icon`}
  style={{ color: skill.color }}
></i>
                  <span className="icon-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
