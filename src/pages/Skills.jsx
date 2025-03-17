function Skills() {
  const skills = [
    {
      name: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "C/C++",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTMvMtzkpNOvGvmjeIYNqOJz5wS0t5IU93Q&s",
    },
    {
      name: "Java",
      image: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg",
    },
    {
      name: "Git Source Control",
      image:
        "https://w7.pngwing.com/pngs/134/546/png-transparent-git-version-control-system-vcs-git-logo-github-repositories-3d-icon-thumbnail.png",
    },
    {
      name: "MongoDB",
      image: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
    },
    {
      name: "HTML & CSS",
      image: "https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
    },
    {
      name: "JavaScript",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      name: "MySQL",
      image: "https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png",
    },
  ]

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        paddingTop: "120px",
      }}
    >
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>My Skills</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={skill.image || "/placeholder.svg"}
                alt={skill.name}
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "10px",
                }}
              />
              <p style={{ fontSize: "14px", color: "#ccc" }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

