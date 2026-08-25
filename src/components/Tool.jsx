import React from "react";
import { Link } from "react-router-dom";

function Tool({ icon, title, text, to }) {
  return (
    <Link className="tool-card" to={to}>
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <b>Open →</b>
    </Link>
  );
}

export default Tool;
