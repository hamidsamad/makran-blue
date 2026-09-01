import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function AreaCard({ area }) {
  const { t } = useApp();

  return (
    <Link className="area-card tilt" to={`/areas/${area.slug}`}>
      <div className="area-art">
        <img
          src={area.image}
          alt={t(area.nameKey)}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="area-wave"></div>
      </div>

      <div>
        <span className="eyebrow">{t(area.regionKey)}</span>
        <h3>{t(area.nameKey)}</h3>
        <p>{t(area.descKey)}</p>
        <small>{t(area.tagKey)} →</small>
      </div>
    </Link>
  );
}

export default AreaCard;
