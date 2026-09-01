import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function CultureCard({ icon, title, text, to }) {
  const { t } = useApp();

  return (
    <article className="culture-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>

      <Link to={to || "/culture/people"}>
        {t("contributeStory")} →
      </Link>
    </article>
  );
}

export default CultureCard;
