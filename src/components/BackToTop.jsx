"use client"

import { useState, useEffect } from "react"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "1rem",
        background: "var(--primary)",
        color: "white",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        transition: "opacity 0.3s",
        boxShadow: "0 4px 15px rgba(0, 186, 255, 0.3)",
        zIndex: 1000,
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop

