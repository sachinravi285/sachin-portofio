import { Link } from "react-router-dom"
import "../components/index.css"
import sachinPdf from "../pdf/sachin.pdf"

const Hero = () => {
  return (
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
  )
}

export default Hero

