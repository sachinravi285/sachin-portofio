import { Link } from "react-router-dom";
import "../components/index.css";
import sachinPdf from "../pdf/sachin.pdf";
import "../pages/Home.css"

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="hero"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div style={{ animation: "fadeIn 1.5s ease-in-out" }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              marginBottom: "20px",
              background: "linear-gradient(45deg, #00baff, #4caf50)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My name is Sachin
          </h1>
          <p style={{ fontSize: "1.5rem", margin: "20px 0", color: "#ccc" }}>
            I am currently a B.Tech IT student at Anna University.
          </p>
          <p style={{ fontSize: "1.5rem", margin: "20px 0", color: "#ccc" }}>
            Code, Learn, Innovate: Turning ideas into reality one line at a time. 🌐💻
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={sachinPdf}
              className="resume-button"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                background: "linear-gradient(45deg, #00baff, #4caf50)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              aria-label="Download CV"
            >
              Download CV
            </a>
            <Link
              to="/projects"
              className="resume-button"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                background: "linear-gradient(45deg, #00baff, #4caf50)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              aria-label="View Projects"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 0",
          textAlign: "center",
          background: "linear-gradient(135deg, #1a1a3d, #0d0d2b)",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "40px",
              color: "#00baff",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="service-item">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>
                Custom Website Development
              </h3>
              <p style={{ fontSize: "1rem", color: "#ccc" }}>
                We create user-friendly, responsive websites tailored to clients' needs, driving growth effectively.
              </p>
            </div>

            <div className="service-item">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>
                E-Commerce Solutions
              </h3>
              <p style={{ fontSize: "1rem", color: "#ccc" }}>
                We build robust e-commerce platforms with seamless experiences, including catalogs, payment gateways, and 3D animations.
              </p>
            </div>

            <div className="service-item">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>
                Real-Time Web Applications
              </h3>
              <p style={{ fontSize: "1rem", color: "#ccc" }}>
                We develop real-time web applications like chat platforms and dashboards, enhancing engagement with instant messaging and file sharing.
              </p>
            </div>

            <div className="service-item">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>
                Full-Stack Development
              </h3>
              <p style={{ fontSize: "1rem", color: "#ccc" }}>
                We specialize in full-stack development with the MERN stack, delivering seamless front-end and back-end integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
