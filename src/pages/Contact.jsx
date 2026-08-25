import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page">
      <div className="page-hero">
        <span className="eyebrow">CONTACT</span>

        <h1>Get in Touch</h1>

        <p>
          Have a question or want to learn more about Makran Blue?
          Send us a message and we will get back to you.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            We are always happy to hear from you. You can contact us
            through the information below.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>info@makranblue.org</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Makran, Balochistan, Pakistan</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+92 300 0000000</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          {sent ? (
            <div className="success-message">
              <h2>Message Sent ✓</h2>
              <p>
                Thank you for contacting us. We will get back to you soon.
              </p>

              <button onClick={() => setSent(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
