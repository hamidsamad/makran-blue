import React from "react";
import { Link } from "react-router-dom";

import Tool from "../components/Tool";
import { useApp } from "../context/AppContext";

function Fisherman() {
  const { t } = useApp();

  return (
    <div className="fisher-page">
      <div className="fisher-top">
        <Link to="/" className="back">
          ← {t("brand")}
        </Link>

        <span className="status-dot">● {t("devBuild")}</span>
      </div>

      <section className="fisher-hero">
        <span className="eyebrow">{t("fisherEyebrow")}</span>

        <h1>{t("fisherH")}</h1>

        <p>{t("fisherP")}</p>
      </section>

      <div className="tool-grid">
        <Tool
          icon="🧭"
          title={t("toolCompass")}
          text={t("toolCompassT")}
          to="/fisherman/compass"
        />

        <Tool
          icon="🌤️"
          title={t("toolWeather")}
          text={t("toolConditionsT")}
          to="/fisherman/weather"
        />

        <Tool
          icon="🎣"
          title={t("toolFishingGuide")}
          text={t("toolFishingGuideT")}
          to="/fisherman/fishing-guide"
        />

        <Tool
          icon="🐟"
          title={t("toolFishIdentifier")}
          text={t("toolFishIdentifierT")}
          to="/fisherman/fish-identifier"
        />

        <Tool
          icon="🚨"
          title={t("toolEmergency")}
          text={t("toolEmergencyT")}
          to="/fisherman/emergency"
        />
      </div>
    </div>
  );
}

export default Fisherman;
