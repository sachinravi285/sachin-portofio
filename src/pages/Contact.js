"use client"

import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - could connect to an API or email service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    })
  }

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "60px" }}>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
            background: "linear-gradient(to right, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(26,26,61,0.8)",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--primary)" }}>Address</h3>
            <p style={{ color: "#ccc" }}>Komarapalayam, Namakkal, Tamil Nadu</p>
          </div>

          <div
            style={{
              background: "rgba(26,26,61,0.8)",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--primary)" }}>Phone Number</h3>
            <p style={{ color: "#ccc" }}>+91-93853-74889</p>
          </div>

          <div
            style={{
              background: "rgba(26,26,61,0.8)",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--primary)" }}>Email</h3>
            <p style={{ color: "#ccc" }}>ravisachin797@gmail.com</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 992 ? "1fr 1fr" : "1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              height: "400px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.738314616807!2d77.69488411529708!3d11.437537391847932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f17804d93d7%3A0xdb6820ff26d08372!2sKomarapalayam%2C%20Tamil%20Nadu%20638211!5e0!3m2!1sen!2sin!4v1671800244239!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>

          <div
            style={{
              background: "rgba(26,26,61,0.8)",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", color: "var(--primary)" }}>
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "#2b2b5b",
                  color: "white",
                  border: "none",
                  outline: "none",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "#2b2b5b",
                  color: "white",
                  border: "none",
                  outline: "none",
                }}
              />

              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "#2b2b5b",
                  color: "white",
                  border: "none",
                  outline: "none",
                }}
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "#2b2b5b",
                  color: "white",
                  border: "none",
                  outline: "none",
                  minHeight: "150px",
                  resize: "vertical",
                }}
              ></textarea>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, var(--primary), var(--secondary))",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

