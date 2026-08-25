import React from "react";
import { Link } from "react-router-dom";

function CultureCard({ icon, title, text }) {
  return (
    <article className="culture-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>

      <Link to="/contact">
        Contribute a story →
      </Link>
    </article>
  );
}

export default CultureCard;
