"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s ease",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isScrolled ? "1rem 5%" : "1.5rem 5%",
        background: isScrolled ? "rgba(26,26,61,0.95)" : "rgba(13,13,43,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
      }}
    >
      <div className="logo">SACHIN K C</div>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          transition: "all 0.3s ease",
          position: isMenuOpen ? "fixed" : "static",
          top: isMenuOpen ? "70px" : "auto",
          right: isMenuOpen ? "0" : "-100%",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          background: window.innerWidth <= 768 ? "var(--dark)" : "transparent",
          width: window.innerWidth <= 768 ? "100%" : "auto",
          textAlign: window.innerWidth <= 768 ? "center" : "left",
          padding: window.innerWidth <= 768 ? "2rem 0" : "0",
        }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
              style={{ color: location.pathname === link.href ? "var(--primary)" : "white" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div className="hidden-mobile" style={{ display: "flex", gap: "1rem" }}>
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

        <a href="/sachin.pdf" className="resume-button hidden-mobile">
          Resume
        </a>

        <div
          className="hidden-desktop"
          style={{
            cursor: "pointer",
            zIndex: 1001,
          }}
          onClick={toggleMenu}
        >
          <div
            style={{
              width: "25px",
              height: "3px",
              background: "white",
              margin: "5px 0",
              transition: "0.3s",
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          ></div>
          <div
            style={{
              width: "25px",
              height: "3px",
              background: "white",
              margin: "5px 0",
              transition: "0.3s",
              opacity: isMenuOpen ? 0 : 1,
            }}
          ></div>
          <div
            style={{
              width: "25px",
              height: "3px",
              background: "white",
              margin: "5px 0",
              transition: "0.3s",
              transform: isMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
            }}
          ></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

