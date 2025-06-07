import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="simple-footer">
      © {new Date().getFullYear()} Copyright by Bipul
    </footer>
  );
};

export default Footer;
