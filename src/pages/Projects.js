function Projects() {
  const projects = [
    {
      title: "Online Library Portal",
      description:
        "A modern library management system with secure user authentication, real-time inventory tracking, and interactive user dashboard. Built with modern web technologies and RESTful APIs.",
      image: process.env.PUBLIC_URL + "/images/3.png",
      demoUrl: "https://sachinravi285.github.io/Online-Library-Portal/",
      repoUrl: "https://github.com/sachinravi285/Online-Library-Portal.git",
    },
    {
      title: "COVID Awareness Platform",
      description:
        "Interactive information hub featuring real-time statistics, prevention guidelines, and vaccine tracking. Integrated with WHO API for accurate global data visualization.",
      image: process.env.PUBLIC_URL + "/images/4.jpg",
      demoUrl: "https://sachinravi285.github.io/COVID-Awareness-Website/",
      repoUrl: "https://github.com/sachinravi285/COVID-Awareness-Website.git",
    },
    {
      title: "AI Chatbot Solution",
      description:
        "Natural language processing chatbot integrated with machine learning capabilities. Features sentiment analysis and context-aware responses for enhanced user experience.",
      image: process.env.PUBLIC_URL + "/images/5.jpg",
      demoUrl: "https://sachinravi285.github.io/Virtual_Chat/",
      repoUrl: "https://github.com/sachinravi285/Virtual_Chat",
    },
  ]

  return (
    <main
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        background: "linear-gradient(to bottom, #1a1a3d, #0d0d2b)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          background: "linear-gradient(to right, var(--primary), white)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 2fr 1fr" : "1fr",
              gap: "20px",
              padding: "30px",
              borderRadius: "15px",
              background: "rgba(39, 39, 74, 0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "15px",
              }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  color: "var(--primary)",
                }}
              >
                {project.title}
              </h2>
              <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: 1.7 }}>{project.description}</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth > 768 ? "column" : "row",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 600,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  background: "linear-gradient(45deg, #2b2b5b, #1b1b38)",
                  color: "white",
                  border: "1px solid var(--primary)",
                }}
              >
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 600,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  background: "linear-gradient(45deg, var(--primary), var(--secondary))",
                  color: "white",
                }}
              >
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Projects

