import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function Tool({ icon, title, text, to }) {
  const { t } = useApp();

  return (
    <Link className="tool-card" to={to}>
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <b>{t("open")} →</b>
    </Link>
  );
}

export default Tool;
