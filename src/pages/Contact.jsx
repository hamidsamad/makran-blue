import React, { useState } from "react";

import { useApp } from "../context/AppContext";

function Contact() {
  const { t } = useApp();

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
        <span className="eyebrow">{t("ctEyebrow")}</span>

        <h1>{t("ctH1")}</h1>

        <p>{t("ctLead")}</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>{t("ctUsH")}</h2>

          <p>{t("ctUsP")}</p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>{t("lblEmail")}</h3>
              <p>info@makranblue.org</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>{t("lblLocation")}</h3>
              <p>{t("ctAddress")}</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>{t("lblPhone")}</h3>
              <p>+92 300 0000000</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          {sent ? (
            <div className="success-message">
              <h2>{t("ctSentH")}</h2>
              <p>{t("ctSentP")}</p>

              <button onClick={() => setSent(false)}>
                {t("ctAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>{t("ctFormH")}</h2>

              <label>{t("lblName")}</label>
              <input
                type="text"
                name="name"
                placeholder={t("phName")}
                value={form.name}
                onChange={handleChange}
                required
              />

              <label>{t("lblEmail")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("phEmail")}
                value={form.email}
                onChange={handleChange}
                required
              />

              <label>{t("lblMessage")}</label>
              <textarea
                name="message"
                placeholder={t("phMessage")}
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">{t("ctSend")}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
