import React from 'react';
import '../index.css';
import backgroundImage from '../components/images/2.jpg'; // Use forward slashes
import sachinPdf from '../pdf/sachin.pdf';



const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>My name is Sachin</h1>
        <p>I am currently a B.Tech IT student at Anna University.</p>
        <p>Code, Learn, Innovate: Turning ideas into reality one line at a time. 🌐💻</p>
        <a href={sachinPdf} className="btn" aria-label="Download CV">Download CV</a>
        <a href="/projects" className="btn" aria-label="View Projects">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;