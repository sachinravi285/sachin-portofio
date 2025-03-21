function Services() {
  const services = [
    {
      icon: "🖥️",
      title: "Custom Website Development",
      description:
        "We create custom websites tailored to your business needs, ensuring they are responsive, visually appealing, and optimized for user engagement and scalability.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description:
        "Our e-commerce platforms offer seamless shopping experiences with features like secure payment gateways, product catalogs, drag-and-drop interfaces, and 3D animations.",
    },
    {
      icon: "⏱️",
      title: "Real-Time Web Applications",
      description:
        "We develop real-time web solutions, including chat platforms and collaboration tools, featuring instant messaging, file sharing, and live data dashboards.",
    },
    {
      icon: "🌐",
      title: "Full-Stack Development",
      description:
        "Our full-stack development expertise, using technologies like the MERN stack, ensures seamless integration of front-end and back-end systems for high-performance solutions.",
    },
  ]

  return (
    <section
      style={{
        padding: "120px 0 80px",
        background: "linear-gradient(to bottom, #1a1a3d, #0d0d2b)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "30px",
            color: "var(--primary)",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          OUR SERVICES
        </h2>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          WHAT WE DO?
        </h3>
        <p
          style={{
            fontSize: "1rem",
            maxWidth: "600px",
            margin: "0 auto 40px",
            color: "#ccc",
          }}
        >
          We are passionate web developers creating innovative, user-friendly solutions with expertise in full-stack
          development, delivering responsive websites and impactful online experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#2b1e57",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>{service.icon}</div>
              <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>{service.title}</h4>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#ccc" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

