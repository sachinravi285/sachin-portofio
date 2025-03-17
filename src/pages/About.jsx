function About() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        background: "linear-gradient(135deg, #1a1a3d 30%, #0d0d2b 100%)",
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "4rem",
            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
          }}
        >
          About Us
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 1200 ? "1fr 1fr" : "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
              gap: "2rem",
            }}
          >
            <img
              src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
              alt="Web Development"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "1.5rem",
                transition: "transform 0.4s ease",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"
              alt="Full Stack"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "1.5rem",
                transition: "transform 0.4s ease",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8a0MSxOZNZIYakZl1WzjyRHWPeBUDMvdOg&s"
              alt="MERN Stack"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "1.5rem",
                transition: "transform 0.4s ease",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                gridColumn: window.innerWidth > 768 ? "span 2" : "auto",
              }}
            />
          </div>

          <div
            style={{
              padding: "3rem",
              background: "var(--glass)",
              borderRadius: "2rem",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Who We Are?</h2>
            <div style={{ display: "grid", gap: "2rem", margin: "3rem 0" }}>
              <div
                style={{
                  padding: "2rem",
                  background: "linear-gradient(145deg, rgba(0, 186, 255, 0.1), rgba(76, 175, 80, 0.05))",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--glass)",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Innovative Web Development Enthusiasts</h3>
                <p style={{ color: "#ccc" }}>
                  We are a team of passionate web developers committed to crafting innovative, high-performance websites
                  and applications. With expertise in modern technologies and a focus on user experience, we strive to
                  transform ideas into impactful digital solutions.
                </p>
              </div>

              <div
                style={{
                  padding: "2rem",
                  background: "linear-gradient(145deg, rgba(0, 186, 255, 0.1), rgba(76, 175, 80, 0.05))",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--glass)",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Full-Stack Development Experts</h3>
                <p style={{ color: "#ccc" }}>
                  We are skilled full-stack developers who excel in creating end-to-end web solutions. From designing
                  interactive front-end interfaces to building scalable back-end systems, we bring technical expertise
                  and creativity to every project we undertake.
                </p>
              </div>
            </div>

            <p style={{ color: "#ccc", marginTop: "2rem" }}>
              We are passionate web developers creating innovative, user-friendly solutions with expertise in full-stack
              development, delivering responsive websites and impactful online experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

