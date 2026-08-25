import React from "react";

function Info({ icon, title, text }) {
  return (
    <div className="info-card">
      <span>{icon}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Info;
