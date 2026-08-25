import React from "react";
import { Link } from "react-router-dom";

function Feature({ icon, title, text, to }) {
  return (
    <Link className="feature-card tilt" to={to}>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <b>Explore →</b>
    </Link>
  );
}

export default Feature;
