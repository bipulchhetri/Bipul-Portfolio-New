import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, Code, Smartphone, Globe, Database, Zap } from 'lucide-react';
import './Project.css'
export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "URL Shortner",
      description: "Developed a URL shortener web application that converts long URLs into short, shareable links. Built with the MERN stack, the app features custom alias generation, real-time click tracking, and redirect functionality. Designed with a user-friendly interface to simplify link management and improve sharing across platforms.",
      image: "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=740",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      githubUrl: "https://github.com/bipulchhetri/shortify",
      liveUrl: "https://shortify-phi.vercel.app/",
  
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Readify - Book Store",
      description: "Created a dynamic online book store application using React for the frontend and Node.js with Express for the backend.",
      image: "https://img.freepik.com/free-vector/cartoon-bookstore-interior-with-books-shelves_107791-20532.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=740",
      technologies: ["Next.js", "WebRTC", "Socket.io", "Redis"],
      category: "Education",
      githubUrl: "https://github.com/bipulchhetri/Book-Store/tree/main",
      liveUrl: "https://1readify0.netlify.app/",
     
      icon: <Play className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Englishfy-Blog WebApp",
      description: "Built a full-featured blog application using the MERN stack, where only admins can create, update, or delete blog posts. CoderHub supports user authentication, categorized posts, tags, and a responsive design. Integrated a rich text editor for content creation and enabled features like image upload, comment section, and search functionality to enhance user engagement and content discovery.",
      image: "https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1495.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=740",
      technologies: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
      category: "Data Visualization",
      githubUrl: "https://github.com/bipulchhetri/Blog-App",
      liveUrl: "https://blog-app-beige-six.vercel.app/",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 4,
      title: "AI code review",
      description: "Developed an AI-powered code review application using React for the frontend and Node.js with Express for the backend. The app allows users to input code and receive intelligent suggestions and improvements using AI integration.",
      image: "https://img.freepik.com/free-vector/call-center-isometric-concept_1284-69078.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=740",
      technologies: ["Gemini API","React", "Node.js", "MongoDB", "Express"],
      category: "AI",
      githubUrl: "https://github.com/bipulchhetri/AI-code-review",
      liveUrl: "https://ai-code-review-rouge.vercel.app/",
  
      icon: <Zap className="w-6 h-6" />
    },
    
    {
      id: 6,
      title: "Word to PDF Converter",
      description: "Secure and transparent voting system built on blockchain technology with cryptographic verification and audit trails.",
      image: "https://img.freepik.com/premium-vector/download-pdf-file-icon-spreadsheet-document-type-vector-pdf-icon_123447-3782.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=740",
      technologies: ["React","Multer","Node","Express"],
      category: "Tool",
      githubUrl: "https://github.com/bipulchhetri/word-to-pdf",
      liveUrl: "https://word-to-pdf-iota.vercel.app/",
   
      icon: <Code className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
    

      {/* Background elements */}
      <div className="section-background" />
      <div className="floating-elements">
        <div className="floating-dot" />
        <div className="floating-dot" />
        <div className="floating-dot" />
        <div className="floating-dot" />
      </div>

      <div className="container" id='work'>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title"><span><img src="./icons/favorite.png" alt="" width={60} /></span> Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies 
            that solve real-world problems.
          </p>
        </div>



        {/* Projects */}
        <div className="projects-grid">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(project.id) ? 'visible' : ''}`}
              data-project-id={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.githubUrl} className="overlay-btn" aria-label="View Code">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.liveUrl} className="overlay-btn" aria-label="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-category">
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="project-link">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a href={project.liveUrl} className="project-link">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
} 