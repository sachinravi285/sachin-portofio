import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Web Developer</h2>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>We are passionate web developers creating innovative, user-friendly solutions with expertise in full-stack development, delivering responsive websites and impactful online experiences.</p>
              <a href="/about">Read more →</a>
            </div>
            <div className="footer-section">
              <h3>Who We Are</h3>
              <ul>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Careers</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="https://maps.app.goo.gl/7isCfQJ6bhsbcuqK6?g_st=ac">Locations</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Stay updated with the latest from Development.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email" required />
                <button type="submit">→</button>
              </form>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sachin-k-c-7b270b258/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn Profile" width="30" height="30" />
          </a>
          <a href="https://github.com/sachinravi285" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="Github Profile" width="30" height="30" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;