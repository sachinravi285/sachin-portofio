import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="logo">SACHIN K C</div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sachin-k-c-7b270b258/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn Profile" width="30" height="30" />
        </a>
        <a href="https://github.com/sachinravi285" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="Github Profile" width="30" height="30" />
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isActive ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;