function Services() {
  return (
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
        <div className="grid grid-cols-1 grid-cols-4 gap-6">
          <div className="service-item">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>Custom Website Development</h3>
            <p style={{ fontSize: "1rem", color: "#ccc" }}>
              We create user-friendly, responsive websites tailored to clients' needs, driving growth effectively.
            </p>
          </div>

          <div className="service-item">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>E-Commerce Solutions</h3>
            <p style={{ fontSize: "1rem", color: "#ccc" }}>
              We build robust e-commerce platforms with seamless experiences, including catalogs, payment gateways, and
              3D animations.
            </p>
          </div>

          <div className="service-item">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>Real-Time Web Applications</h3>
            <p style={{ fontSize: "1rem", color: "#ccc" }}>
              We develop real-time web applications like chat platforms and dashboards, enhancing engagement with
              instant messaging and file sharing.
            </p>
          </div>

          <div className="service-item">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#00baff" }}>Full-Stack Development</h3>
            <p style={{ fontSize: "1rem", color: "#ccc" }}>
              We specialize in full-stack development with the MERN stack, delivering seamless front-end and back-end
              integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

