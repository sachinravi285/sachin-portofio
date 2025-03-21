"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">SACHIN K C</div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={location.pathname === link.href ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sachin-k-c-7b270b258/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
        <a href="https://github.com/sachinravi285" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
            alt="GitHub"
            width="30"
            height="30"
          />
        </a>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    </nav>
  )
}

export default Navbar

