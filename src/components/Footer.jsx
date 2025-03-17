import { Link } from "react-router-dom"
import NewsletterForm from "./NewsletterForm"

function Footer() {
  return (
    <footer
      style={{
        background: "#1b1b38",
        padding: "4rem 0 2rem",
        color: "white",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-4 gap-8">
          <div>
            <h2
              style={{
                fontSize: "2em",
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Web Developer
            </h2>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.2em",
                marginBottom: "15px",
                color: "var(--primary)",
              }}
            >
              About Us
            </h3>
            <p
              style={{
                fontSize: "0.9em",
                color: "#ccc",
                marginBottom: "10px",
              }}
            >
              We are passionate web developers creating innovative, user-friendly solutions with expertise in full-stack
              development, delivering responsive websites and impactful online experiences.
            </p>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Read more →
            </Link>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.2em",
                marginBottom: "15px",
                color: "var(--primary)",
              }}
            >
              Who We Are
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                <Link
                  to="/projects"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "0.9em",
                    transition: "color 0.3s ease",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Link
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "0.9em",
                    transition: "color 0.3s ease",
                  }}
                >
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "0.9em",
                    transition: "color 0.3s ease",
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="https://maps.app.goo.gl/7isCfQJ6bhsbcuqK6?g_st=ac"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "0.9em",
                    transition: "color 0.3s ease",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.2em",
                marginBottom: "15px",
                color: "var(--primary)",
              }}
            >
              Newsletter
            </h3>
            <p
              style={{
                fontSize: "0.9em",
                color: "#ccc",
                marginBottom: "10px",
              }}
            >
              Stay updated with the latest from Development.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/sachin-k-c-7b270b258/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
              alt="LinkedIn Profile"
              width={30}
              height={30}
            />
          </a>
          <a href="https://github.com/sachinravi285" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              alt="Github Profile"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

