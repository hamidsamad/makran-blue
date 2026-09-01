import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function NotFound() {
  const { t } = useApp();

  return (
    <div className="page notfound-page">
      <div className="page-hero">
        <span className="eyebrow">404</span>
        <h1>{t("notFound")}</h1>
        <Link className="btn primary" to="/">
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
