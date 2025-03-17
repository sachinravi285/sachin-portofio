import React from 'react';
import './index.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>Custom Website Development</h3>
            <p>We create user-friendly, responsive websites tailored to clients' needs, driving growth effectively.</p>
          </div>
          <div className="service-item">
            <h3>E-Commerce Solutions</h3>
            <p>We build robust e-commerce platforms with seamless experiences, including catalogs, payment gateways, and 3D animations.</p>
          </div>
          <div className="service-item">
            <h3>Real-Time Web Applications</h3>
            <p>We develop real-time web applications like chat platforms and dashboards, enhancing engagement with instant messaging and file sharing.</p>
          </div>
          <div className="service-item">
            <h3>Full-Stack Development</h3>
            <p>We specialize in full-stack development with the MERN stack, delivering seamless front-end and back-end integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;