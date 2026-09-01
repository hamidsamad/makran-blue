import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function Feature({ icon, title, text, to }) {
  const { t } = useApp();

  return (
    <Link className="feature-card tilt" to={to}>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <b>{t("exploreBtn")} →</b>
    </Link>
  );
}

export default Feature;
