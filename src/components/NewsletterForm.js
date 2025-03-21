"use client"

import { useState } from "react"

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      alert("Thank you for subscribing!")
    }, 1500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          flex: 1,
          backgroundColor: "#2b2b5b",
          color: "white",
        }}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: "10px 20px",
          background: "linear-gradient(45deg, var(--primary), var(--secondary))",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
      >
        {isSubmitting ? "..." : "→"}
      </button>
    </form>
  )
}

export default NewsletterForm

