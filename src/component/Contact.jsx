import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Globe } from 'lucide-react';
import './Contact.css'
const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bipulchhetri80@gmail.com',
      href: 'mailto:bipulchhetri80@gmail.com',
      gradient: 'linear-gradient(135deg, #60a5fa, #22d3ee)'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8250742530',
      href: 'tel:8250742530',
      gradient: 'linear-gradient(135deg, #4ade80, #10b981)'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'INDIA',
      href: '#',
      gradient: 'linear-gradient(135deg, #a78bfa, #ec4899)'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bipulchhetri', label: 'GitHub' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bipul-chhetri/', label: 'LinkedIn' },
    { icon: Code, href: 'https://www.geeksforgeeks.org/user/bipulchhetri80/', label: 'Code' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  return (
    <div className="containers">
      {/* Decorative Elements */}
      <div className="decorative-orb-1"></div>
      <div className="decorative-orb-2"></div>
      <div className="decorative-orb-3"></div>

      <div className="content">
        {/* Header Section */}
        <div className="header">
          <div style={{ position: 'relative' }}>
            <h1 className="title">
            📩 Get In Touch
            </h1>
            <div className="title-glow"></div>
          </div>
          <p className="subtitle">
            Ready to bring your ideas to life? Let's connect and create something extraordinary together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const isHovered = hoveredCard === index;
            return (
              <a
                key={index}
                href={contact.href}
                className={`contact-card ${isHovered ? 'contact-card-hover' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`icon-container ${isHovered ? 'icon-container-hover' : ''}`}
                  style={{ background: contact.gradient }}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="contact-label">
                  {contact.label}
                </h3>
                <p className={`contact-value ${isHovered ? 'contact-value-hover' : ''}`}>
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <div className="social-section-glow"></div>
          <div className="social-card">
            <div className="social-header">
              <h2 className="social-title">
                Follow My Journey
              </h2>
              <p className="social-subtitle">
                Stay connected across all platforms
              </p>
            </div>
            
            <div className="social-grid">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === index;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`social-link ${isHovered ? 'social-link-hover' : ''}`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <IconComponent size={28} />
                    <div className="ripple"></div>
                    
                    <div className={`tooltip ${isHovered ? 'tooltip-show' : ''}`}>
                      {social.label}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;