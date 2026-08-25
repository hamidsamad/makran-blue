import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useApp } from "../context/AppContext";

const COASTAL_AREAS = [
  {
    name: "Gwadar",
    lat: 25.1264,
    lon: 62.3225,
  },
  {
    name: "Pasni",
    lat: 25.2631,
    lon: 63.4710,
  },
  {
    name: "Ormara",
    lat: 25.2088,
    lon: 64.6357,
  },
  {
    name: "Jiwani",
    lat: 25.0482,
    lon: 61.7456,
  },
  {
    name: "Pishukan",
    lat: 25.2500,
    lon: 62.0000,
  },
  {
    name: "Sur",
    lat: 25.4000,
    lon: 63.3000,
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
        label: "HIGH RISK",
        icon: "🚨",
      };
    }

    if (waveHeight >= 2.0 || windSpeed >= 40) {
      return {
        level: "warning",
        label: "WARNING",
        icon: "⚠️",
      };
    }

    if (waveHeight >= 1.2 || windSpeed >= 30) {
      return {
        level: "watch",
        label: "WATCH",
        icon: "🌊",
      };
    }

    return {
      level: "safe",
      label: "NORMAL",
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
          const windWaveHeight = Number(
            current.wind_wave_height ?? 0
          );

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
      setError(
        "Unable to connect to the live marine data service."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarineData();

    // Refresh every 10 minutes
    const interval = setInterval(
      fetchMarineData,
      10 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  const dangerCount = areas.filter(
    (area) => area.level === "danger"
  ).length;

  const warningCount = areas.filter(
    (area) => area.level === "warning"
  ).length;

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
          <span className="safety-eyebrow">
            MAKRAN COAST • LIVE SAFETY
          </span>

          <h1>
            Coastal Safety
            <span> Monitor</span>
          </h1>

          <p>
            Live marine conditions for the Makran coastline.
            Monitor wave conditions before going offshore.
          </p>
        </div>

        <div className="live-status">
          <span className="live-dot"></span>
          LIVE DATA
        </div>
      </section>

      {/* SUMMARY */}

      <section className="safety-summary">

        <div className="summary-card">
          <span>📍</span>
          <div>
            <strong>{areas.length}</strong>
            <small>Coastal Areas</small>
          </div>
        </div>

        <div className="summary-card danger-summary">
          <span>🚨</span>
          <div>
            <strong>{dangerCount}</strong>
            <small>High Risk</small>
          </div>
        </div>

        <div className="summary-card warning-summary">
          <span>⚠️</span>
          <div>
            <strong>{warningCount}</strong>
            <small>Warnings</small>
          </div>
        </div>

        <div className="summary-card">
          <span>🔄</span>
          <div>
            <strong>10m</strong>
            <small>Refresh Rate</small>
          </div>
        </div>

      </section>

      {/* ERROR */}

      {error && (
        <div className="safety-error">
          <span>⚠️</span>
          <div>
            <strong>Live feed unavailable</strong>
            <p>{error}</p>
          </div>

          <button onClick={fetchMarineData}>
            Retry
          </button>
        </div>
      )}

      {/* LOADING */}

      {loading && areas.length === 0 && (
        <div className="safety-loading">
          <div className="loading-spinner"></div>

          <h3>Connecting to marine data...</h3>

          <p>
            Checking current conditions along the
            Makran coast.
          </p>
        </div>
      )}

      {/* AREA ALERTS */}

      <section className="coastal-monitor">

        <div className="monitor-heading">
          <div>
            <span>LIVE COASTAL CONDITIONS</span>
            <h2>Makran Coast</h2>
          </div>

          <button
            className="refresh-button"
            onClick={fetchMarineData}
          >
            ↻ Refresh
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
                    COASTAL AREA
                  </span>

                  <h3>{area.name}</h3>
                </div>

                <div className="risk-icon">
                  {area.icon}
                </div>

              </div>

              {/* STATUS */}

              <div className={`risk-status ${area.level}`}>
                <span></span>
                {area.label}
              </div>

              {/* CONDITIONS */}

              <div className="conditions">

                <div className="condition">
                  <span>🌊</span>

                  <div>
                    <small>Wave Height</small>

                    <strong>
                      {area.waveHeight.toFixed(2)} m
                    </strong>
                  </div>
                </div>

                <div className="condition">
                  <span>💨</span>

                  <div>
                    <small>Wind Wave</small>

                    <strong>
                      {area.windWaveHeight.toFixed(2)} m
                    </strong>
                  </div>
                </div>

                <div className="condition">
                  <span>🧭</span>

                  <div>
                    <small>Wave Direction</small>

                    <strong>
                      {area.waveDirection
                        ? `${Math.round(
                            area.waveDirection
                          )}°`
                        : "N/A"}
                    </strong>
                  </div>
                </div>

              </div>

              {/* WARNING MESSAGE */}

              <div className="alert-message">

                {area.level === "danger" && (
                  <>
                    <strong>⚠️ Dangerous conditions</strong>

                    <p>
                      Wave conditions are currently
                      above the high-risk threshold.
                      Avoid unnecessary offshore travel.
                    </p>
                  </>
                )}

                {area.level === "warning" && (
                  <>
                    <strong>⚠️ Rough sea conditions</strong>

                    <p>
                      Elevated wave conditions detected.
                      Check local marine warnings before
                      departure.
                    </p>
                  </>
                )}

                {area.level === "watch" && (
                  <>
                    <strong>🌊 Conditions to monitor</strong>

                    <p>
                      Marine conditions are elevated.
                      Continue monitoring before going offshore.
                    </p>
                  </>
                )}

                {area.level === "safe" && (
                  <>
                    <strong>✓ Conditions currently normal</strong>

                    <p>
                      No elevated wave condition detected
                      by the current data feed.
                    </p>
                  </>
                )}

              </div>

              <div className="data-time">
                Live marine data
                {area.time && ` • ${area.time}`}
              </div>

            </article>
          ))}

        </div>

      </section>

      {/* THRESHOLDS */}

      <section className="threshold-section">

        <div className="threshold-header">
          <span>SAFETY LOGIC</span>
          <h2>How alerts are classified</h2>
        </div>

        <div className="threshold-grid">

          <div className="threshold normal">
            <span>✓</span>
            <div>
              <strong>Normal</strong>
              <p>
                Wave height below 1.2 m.
              </p>
            </div>
          </div>

          <div className="threshold watch">
            <span>🌊</span>
            <div>
              <strong>Watch</strong>
              <p>
                Wave height reaches 1.2 m or more.
              </p>
            </div>
          </div>

          <div className="threshold warning">
            <span>⚠️</span>
            <div>
              <strong>Warning</strong>
              <p>
                Wave height reaches 2.0 m or more.
              </p>
            </div>
          </div>

          <div className="threshold danger">
            <span>🚨</span>
            <div>
              <strong>High Risk</strong>
              <p>
                Wave height reaches 3.0 m or more.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER NOTE */}

      <div className="safety-note">
        <strong>Important:</strong>

        <span>
          These are automated condition indicators based
          on live marine data. They are not official
          emergency warnings. Always follow instructions
          from local authorities and official maritime
          services.
        </span>

        <div className="updated">
          {lastUpdated
            ? `Last updated: ${lastUpdated.toLocaleTimeString()}`
            : "Waiting for update..."}
        </div>
      </div>

    </div>
  );
}

export default Safety;
