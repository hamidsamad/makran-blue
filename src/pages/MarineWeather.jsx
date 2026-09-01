import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

const COASTAL_AREAS = [
  {
    name: "Gwadar",
    nameKey: "areaGwadar",
    descKey: "mwDescGwadar",
    lat: 25.1264,
    lon: 62.3225,
  },
  {
    name: "Pasni",
    nameKey: "areaPasni",
    descKey: "mwDescPasni",
    lat: 25.2631,
    lon: 63.471,
  },
  {
    name: "Ormara",
    nameKey: "areaOrmara",
    descKey: "mwDescOrmara",
    lat: 25.2088,
    lon: 64.6357,
  },
  {
    name: "Jiwani",
    nameKey: "areaJiwani",
    descKey: "mwDescJiwani",
    lat: 25.0485,
    lon: 61.7457,
  },
  {
    name: "Pishukan",
    nameKey: "locPishukanName",
    descKey: "mwDescPishukan",
    lat: 25.0833,
    lon: 62.0,
  },
  {
    name: "Astola Island",
    nameKey: "locAstolaName",
    descKey: "mwDescAstola",
    lat: 25.121,
    lon: 63.85,
  },
];

function MarineWeather() {
  const { t } = useApp();

  const [selectedArea, setSelectedArea] = useState(COASTAL_AREAS[0]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMarineWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const url =
        `https://marine-api.open-meteo.com/v1/marine` +
        `?latitude=${selectedArea.lat}` +
        `&longitude=${selectedArea.lon}` +
        `&current=wave_height,wave_direction,wave_period,swell_wave_height,swell_wave_direction,sea_surface_temperature,ocean_current_velocity,ocean_current_direction` +
        `&hourly=wave_height,wave_direction,wave_period,swell_wave_height,swell_wave_direction,sea_surface_temperature,ocean_current_velocity,ocean_current_direction` +
        `&timezone=auto` +
        `&forecast_days=2` +
        `&cell_selection=sea`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(t("mwErrorFallback"));
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      console.error(err);
      setError(err.message || t("mwErrorFallback"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarineWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedArea]);

  const current = data?.current;

  const getDirection = (degree) => {
    if (degree === null || degree === undefined) {
      return "--";
    }

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degree / 45) % 8;

    return directions[index];
  };

  const formatNumber = (value, decimals = 1) => {
    if (value === null || value === undefined) {
      return "--";
    }

    return Number(value).toFixed(decimals);
  };

  const forecast = useMemo(() => {
    if (!data?.hourly?.time) {
      return [];
    }

    const h = data.hourly;
    const now = new Date();

    let closestIndex = 0;
    let smallestDifference = Infinity;

    h.time.forEach((time, index) => {
      const difference = Math.abs(
        new Date(time).getTime() - now.getTime()
      );

      if (difference < smallestDifference) {
        smallestDifference = difference;
        closestIndex = index;
      }
    });

    return Array.from({ length: 12 }, (_, i) => {
      const index = closestIndex + i;

      if (!h.time[index]) {
        return null;
      }

      return {
        time: h.time[index],
        wave: h.wave_height?.[index],
        direction: h.wave_direction?.[index],
        period: h.wave_period?.[index],
      };
    }).filter(Boolean);
  }, [data]);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="marine-dashboard">
        <div className="marine-loading">
          <div className="loading-orbit">
            <span>🌊</span>
          </div>

          <h2>{t("mwLoadingT")}</h2>

          <p>{t("mwLoadingP", { area: t(selectedArea.nameKey) })}</p>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error) {
    return (
      <div className="marine-dashboard">
        <div className="marine-error">
          <div className="error-icon">!</div>

          <h2>{t("mwErrorT")}</h2>

          <p>{error}</p>

          <button onClick={fetchMarineWeather}>
            ↻ {t("tryAgain")}
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     MAIN PAGE
  ========================= */

  return (
    <div className="marine-dashboard">
      {/* BACK BUTTON */}
      <Link className="tool-back" to="/fisherman">
        ← {t("ctaFisherman")}
      </Link>

      {/* HEADER */}
      <section className="marine-header">
        <div>
          <span className="marine-label">{t("mwEyebrow")}</span>

          <h1>
            {t("mwTitleA")}
            <span> {t("mwTitleB")}</span>
          </h1>

          <p>{t("mwLead")}</p>
        </div>

        <button className="refresh-button" onClick={fetchMarineWeather}>
          ↻ {t("refresh")}
        </button>
      </section>

      {/* LOCATION SELECTOR */}
      <section className="location-panel">
        <div className="location-title">
          <span className="location-pin">📍</span>

          <div>
            <small>{t("mwLocation")}</small>

            <strong>{t(selectedArea.nameKey)}</strong>

            <p>{t(selectedArea.descKey)}</p>
          </div>
        </div>

        <select
          value={selectedArea.name}
          onChange={(e) => {
            const area = COASTAL_AREAS.find(
              (item) => item.name === e.target.value
            );

            if (area) {
              setSelectedArea(area);
            }
          }}
        >
          {COASTAL_AREAS.map((area) => (
            <option key={area.name} value={area.name}>
              {t(area.nameKey)}
            </option>
          ))}
        </select>
      </section>

      {/* LIVE STATUS */}
      <div className="live-status">
        <span className="live-dot"></span>

        {t("mwLive")}

        <span className="status-separator">•</span>

        {data?.timezone || t("mwLocalTime")}
      </div>

      {/* MAIN WAVE CARD */}
      <section className="main-wave-card">
        <div className="wave-background">
          <div className="wave wave-one"></div>
          <div className="wave wave-two"></div>
        </div>

        <div className="wave-content">
          <div className="wave-heading">
            <div>
              <span>{t("lblWaveHeight")}</span>

              <strong>
                {formatNumber(current?.wave_height)}
                <small> m</small>
              </strong>
            </div>

            <div className="wave-icon">🌊</div>
          </div>

          <div className="wave-details">
            {/* DIRECTION */}
            <div>
              <span>{t("lblDirection")}</span>

              <strong>{getDirection(current?.wave_direction)}</strong>

              <small>{formatNumber(current?.wave_direction, 0)}°</small>
            </div>

            {/* PERIOD */}
            <div>
              <span>{t("lblPeriod")}</span>

              <strong>{formatNumber(current?.wave_period)}</strong>

              <small>sec</small>
            </div>

            {/* SWELL */}
            <div>
              <span>{t("lblSwell")}</span>

              <strong>{formatNumber(current?.swell_wave_height)}</strong>

              <small>m</small>
            </div>
          </div>
        </div>
      </section>

      {/* DATA CARDS */}
      <section className="marine-grid">
        {/* WAVE DIRECTION */}
        <div className="marine-stat">
          <div className="stat-icon">🧭</div>

          <div>
            <span>{t("statWaveDir")}</span>

            <strong>
              {formatNumber(current?.wave_direction, 0)}°
            </strong>

            <small>{getDirection(current?.wave_direction)}</small>
          </div>
        </div>

        {/* WAVE PERIOD */}
        <div className="marine-stat">
          <div className="stat-icon">⏱</div>

          <div>
            <span>{t("statWavePeriod")}</span>

            <strong>
              {formatNumber(current?.wave_period)}
              <small> s</small>
            </strong>

            <small>{t("mwAvgPeriod")}</small>
          </div>
        </div>

        {/* SEA TEMPERATURE */}
        <div className="marine-stat">
          <div className="stat-icon">🌡️</div>

          <div>
            <span>{t("statSeaTemp")}</span>

            <strong>
              {formatNumber(current?.sea_surface_temperature)}
              <small>°C</small>
            </strong>

            <small>{t("mwSurface")}</small>
          </div>
        </div>

        {/* OCEAN CURRENT */}
        <div className="marine-stat">
          <div className="stat-icon">💨</div>

          <div>
            <span>{t("statCurrent")}</span>

            <strong>
              {formatNumber(current?.ocean_current_velocity)}
              <small> km/h</small>
            </strong>

            <small>{getDirection(current?.ocean_current_direction)}</small>
          </div>
        </div>
      </section>

      {/* FORECAST */}
      <section className="forecast-section">
        <div className="section-heading">
          <div>
            <span>{t("mwShortRange")}</span>

            <h2>{t("mwNext12")}</h2>
          </div>

          <p>{t("mwHourly")}</p>
        </div>

        <div className="forecast-scroll">
          {forecast.map((item, index) => {
            const time = new Date(item.time);

            return (
              <div
                className={`forecast-item ${index === 0 ? "current" : ""}`}
                key={item.time}
              >
                <span className="forecast-time">
                  {index === 0
                    ? t("mwNow")
                    : time.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                </span>

                <div className="forecast-wave">🌊</div>

                <strong>
                  {formatNumber(item.wave)}
                  <small>m</small>
                </strong>

                <span className="forecast-direction">
                  {getDirection(item.direction)}{" "}
                  {formatNumber(item.direction, 0)}°
                </span>

                <small>{formatNumber(item.period)}s</small>
              </div>
            );
          })}
        </div>
      </section>

      {/* LOCATION INFO */}
      <section className="coordinates-card">
        <div>
          <span>📍</span>

          <div>
            <small>{t("mwSeaGrid")}</small>

            <strong>{selectedArea.lat.toFixed(4)}° N</strong>

            <strong>{selectedArea.lon.toFixed(4)}° E</strong>
          </div>
        </div>

        <div className="data-provider">
          <small>{t("mwProvider")}</small>

          <strong>{t("mwProviderName")}</strong>

          <span>{t("mwProviderModel")}</span>
        </div>
      </section>

      {/* WARNING */}
      <div className="marine-notice">
        <span>⚠️</span>

        <div>
          <strong>{t("mwNoticeT")}</strong>

          <p>{t("mwNoticeP")}</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="marine-footer">
        {t("mwFooter")}

        <span>•</span>

        {t("mwPowered")}
      </footer>
    </div>
  );
}

export default MarineWeather;
