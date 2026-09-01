import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useApp } from "../context/AppContext";

const COASTAL_AREAS = [
  {
    name: "Gwadar",
    nameKey: "areaGwadar",
    lat: 25.1264,
    lon: 62.3225,
  },
  {
    name: "Pasni",
    nameKey: "areaPasni",
    lat: 25.2631,
    lon: 63.471,
  },
  {
    name: "Ormara",
    nameKey: "areaOrmara",
    lat: 25.2088,
    lon: 64.6357,
  },
  {
    name: "Jiwani",
    nameKey: "areaJiwani",
    lat: 25.0482,
    lon: 61.7456,
  },
  {
    name: "Pishukan",
    nameKey: "locPishukanName",
    lat: 25.25,
    lon: 62.0,
  },
  {
    name: "Sur",
    nameKey: "locSurName",
    lat: 25.4,
    lon: 63.3,
  },
];

function Safety() {
  const { t } = useApp();
  const { pathname } = useLocation();
  const inFisherman = pathname.startsWith("/fisherman");

  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState("");

  const getRisk = (waveHeight, windSpeed) => {
    if (waveHeight >= 3.0 || windSpeed >= 55) {
      return {
        level: "danger",
        labelKey: "riskHigh",
        icon: "🚨",
      };
    }

    if (waveHeight >= 2.0 || windSpeed >= 40) {
      return {
        level: "warning",
        labelKey: "riskWarning",
        icon: "⚠️",
      };
    }

    if (waveHeight >= 1.2 || windSpeed >= 30) {
      return {
        level: "watch",
        labelKey: "riskWatch",
        icon: "🌊",
      };
    }

    return {
      level: "safe",
      labelKey: "riskNormal",
      icon: "✓",
    };
  };

  const fetchMarineData = async () => {
    try {
      setLoading(true);
      setError("");

      const results = await Promise.all(
        COASTAL_AREAS.map(async (area) => {
          const url =
            `https://marine-api.open-meteo.com/v1/marine` +
            `?latitude=${area.lat}` +
            `&longitude=${area.lon}` +
            `&current=wave_height,wave_direction,wind_wave_height` +
            `&timezone=auto`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Failed to load ${area.name}`);
          }

          const data = await response.json();
          const current = data.current || {};

          const waveHeight = Number(current.wave_height ?? 0);
          const windWaveHeight = Number(current.wind_wave_height ?? 0);

          /*
            Open-Meteo marine data does not directly provide
            an official "sea level emergency alert".
            Therefore this page creates a CONDITION ALERT
            from live marine measurements.
          */
          const windSpeed = 0;
          const risk = getRisk(waveHeight, windSpeed);

          return {
            ...area,
            waveHeight,
            windWaveHeight,
            waveDirection: current.wave_direction,
            windSpeed,
            ...risk,
            time: current.time,
          };
        })
      );

      setAreas(results);
      setLastUpdated(new Date());
    } catch (err) {
      console.error(err);
      setError("sfErrorP");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarineData();

    // Refresh every 10 minutes
    const interval = setInterval(fetchMarineData, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const dangerCount = areas.filter((area) => area.level === "danger").length;
  const warningCount = areas.filter((area) => area.level === "warning").length;

  return (
    <div className="safety-page">
      {inFisherman && (
        <Link className="tool-back" to="/fisherman">
          ← {t("ctaFisherman")}
        </Link>
      )}

      {/* HEADER */}
      <section className="safety-header">
        <div>
          <span className="safety-eyebrow">{t("sfEyebrow")}</span>

          <h1>
            {t("sfTitleA")}
            <span> {t("sfTitleB")}</span>
          </h1>

          <p>{t("sfLead")}</p>
        </div>

        <div className="live-status">
          <span className="live-dot"></span>
          {t("liveData")}
        </div>
      </section>

      {/* SUMMARY */}
      <section className="safety-summary">
        <div className="summary-card">
          <span>📍</span>
          <div>
            <strong>{areas.length}</strong>
            <small>{t("coastalAreas")}</small>
          </div>
        </div>

        <div className="summary-card danger-summary">
          <span>🚨</span>
          <div>
            <strong>{dangerCount}</strong>
            <small>{t("sfHighRisk")}</small>
          </div>
        </div>

        <div className="summary-card warning-summary">
          <span>⚠️</span>
          <div>
            <strong>{warningCount}</strong>
            <small>{t("sfWarnings")}</small>
          </div>
        </div>

        <div className="summary-card">
          <span>🔄</span>
          <div>
            <strong>10m</strong>
            <small>{t("sfRefreshRate")}</small>
          </div>
        </div>
      </section>

      {/* ERROR */}
      {error && (
        <div className="safety-error">
          <span>⚠️</span>
          <div>
            <strong>{t("sfFeedTitle")}</strong>
            <p>{t(error)}</p>
          </div>

          <button onClick={fetchMarineData}>{t("retry")}</button>
        </div>
      )}

      {/* LOADING */}
      {loading && areas.length === 0 && (
        <div className="safety-loading">
          <div className="loading-spinner"></div>

          <h3>{t("sfConnecting")}</h3>

          <p>{t("sfChecking")}</p>
        </div>
      )}

      {/* AREA ALERTS */}
      <section className="coastal-monitor">
        <div className="monitor-heading">
          <div>
            <span>{t("sfLiveConditions")}</span>
            <h2>{t("regionMakran")}</h2>
          </div>

          <button className="refresh-button" onClick={fetchMarineData}>
            ↻ {t("refresh")}
          </button>
        </div>

        <div className="coastal-grid">
          {areas.map((area) => (
            <article
              className={`coastal-card ${area.level}`}
              key={area.name}
            >
              {/* CARD TOP */}
              <div className="coastal-card-top">
                <div>
                  <span className="location-label">
                    {t("sfCoastalArea")}
                  </span>

                  <h3>{t(area.nameKey)}</h3>
                </div>

                <div className="risk-icon">{area.icon}</div>
              </div>

              {/* STATUS */}
              <div className={`risk-status ${area.level}`}>
                <span></span>
                {t(area.labelKey)}
              </div>

              {/* CONDITIONS */}
              <div className="conditions">
                <div className="condition">
                  <span>🌊</span>

                  <div>
                    <small>{t("lblWaveHeight")}</small>

                    <strong>{area.waveHeight.toFixed(2)} m</strong>
                  </div>
                </div>

                <div className="condition">
                  <span>💨</span>

                  <div>
                    <small>{t("lblWindWave")}</small>

                    <strong>{area.windWaveHeight.toFixed(2)} m</strong>
                  </div>
                </div>

                <div className="condition">
                  <span>🧭</span>

                  <div>
                    <small>{t("lblWaveDir")}</small>

                    <strong>
                      {area.waveDirection
                        ? `${Math.round(area.waveDirection)}°`
                        : "N/A"}
                    </strong>
                  </div>
                </div>
              </div>

              {/* WARNING MESSAGE */}
              <div className="alert-message">
                {area.level === "danger" && (
                  <>
                    <strong>{t("sfDangerT")}</strong>
                    <p>{t("sfDangerP")}</p>
                  </>
                )}

                {area.level === "warning" && (
                  <>
                    <strong>{t("sfWarnT")}</strong>
                    <p>{t("sfWarnP")}</p>
                  </>
                )}

                {area.level === "watch" && (
                  <>
                    <strong>{t("sfWatchT")}</strong>
                    <p>{t("sfWatchP")}</p>
                  </>
                )}

                {area.level === "safe" && (
                  <>
                    <strong>{t("sfSafeT")}</strong>
                    <p>{t("sfSafeP")}</p>
                  </>
                )}
              </div>

              <div className="data-time">
                {t("sfLiveMarineData")}
                {area.time && ` • ${area.time}`}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* THRESHOLDS */}
      <section className="threshold-section">
        <div className="threshold-header">
          <span>{t("sfLogicEyebrow")}</span>
          <h2>{t("sfLogicH")}</h2>
        </div>

        <div className="threshold-grid">
          <div className="threshold normal">
            <span>✓</span>
            <div>
              <strong>{t("thNormal")}</strong>
              <p>{t("thNormalP")}</p>
            </div>
          </div>

          <div className="threshold watch">
            <span>🌊</span>
            <div>
              <strong>{t("thWatch")}</strong>
              <p>{t("thWatchP")}</p>
            </div>
          </div>

          <div className="threshold warning">
            <span>⚠️</span>
            <div>
              <strong>{t("thWarning")}</strong>
              <p>{t("thWarningP")}</p>
            </div>
          </div>

          <div className="threshold danger">
            <span>🚨</span>
            <div>
              <strong>{t("thHighRisk")}</strong>
              <p>{t("thHighRiskP")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="safety-note">
        <strong>{t("sfImportant")}</strong>

        <span>{t("sfNote")}</span>

        <div className="updated">
          {lastUpdated
            ? `${t("sfUpdated")} ${lastUpdated.toLocaleTimeString()}`
            : t("sfWaiting")}
        </div>
      </div>
    </div>
  );
}

export default Safety;
