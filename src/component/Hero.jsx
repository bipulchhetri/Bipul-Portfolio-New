import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 Add this at top

import "./Hero.css";
export default function PortfolioHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express Js",
    "MongoDB",
    "SEO",
  ];

  return (
    <div className="hero-section">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient overlay */}
      <div
        className="gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Main content */}
      <div className="content">
        {/* Profile image with glow effect */}
        <div className="profile-container">
          <div className="profile-image">
            <div className="profile-glow" />
            <div className="profile-border">
              <div className="profile-inner">
                <img src="bipul.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Name and title */}
        <div className="name-title">
          <h1 className="name">Bipul Chhetri</h1>
          <div className="title">
            <Star className="star-icon" />
            <span>Next-Gen WebApp Developer</span>
            <Star className="star-icon" />
          </div>
        </div>

        {/* Description */}
        <p className="description " style={{color:"white", fontSize:"20px"}}>
        💬 I'm a fresher in development, but not new to the digital world.
        Previously worked as a Website Analyst & SEO Intern, I understand how things perform — now I’m building them too.
        <br />
        <span className= " " style={{color:"#27f008", fontWeight:"bold" ,fontSize:"20px"}}>✨Trust me once, and I’ll prove it with results✨ </span>     </p>

        {/* Skills tags */}
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">
            <a href="#work">View My Work</a>
          </button>
          <button className="btn-secondary">
          <Link to="/resume">See Resume</Link>           
          </button>
        </div>

        {/* Social links */}
        <div className="social-links">
          <a
            href="https://github.com/bipulchhetri"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/bipul-chhetri/"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="social-icon" />
          </a>
          <a
            href="mailto:bipulchhetri80@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail className="social-icon" />
          </a>
        </div>

        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          <div className="shape1" />
          <div className="shape2" />
          <div className="shape3" />
          <div className="shape4" />
        </div>
      </div>
    </div>
  );
}
