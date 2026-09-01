import React from "react";

import { useApp } from "../context/AppContext";

const whatsappLink =
  "https://wa.me/923336661465?text=Hello%20Makran%20Blue%2C%20I%20want%20to%20share%20a%20story%20about%20our%20coast.";

function CultureCard({ icon, title, text, href }) {
  const { t } = useApp();

  return (
    <article className="culture-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>

      <a href={href || whatsappLink} target="_blank" rel="noreferrer">
        {t("contributeStory")} →
      </a>
    </article>
  );
}

export default CultureCard;
