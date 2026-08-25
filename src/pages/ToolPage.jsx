import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function ToolPage({ eyebrow, title, text, children }) {
  const { t } = useApp();

  return (
    <div className="page tool-page">
      <Link className="tool-back" to="/fisherman">
        ← {t("ctaFisherman")}
      </Link>

      <span className="eyebrow">{eyebrow}</span>

      <h1>{title}</h1>

      <p>{text}</p>

      {children}
    </div>
  );
}

export default ToolPage;
