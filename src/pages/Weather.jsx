import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";


const COASTAL_AREAS = [
  {
    name: "Gwadar",
    lat: 25.1264,
    lon: 62.3225,
    description: "Gwadar Bay • Arabian Sea",
  },
  {
    name: "Pasni",
    lat: 25.2631,
    lon: 63.4710,
    description: "Pasni Coast • Arabian Sea",
  },
  {
    name: "Ormara",
    lat: 25.2088,
    lon: 64.6357,
    description: "Ormara Coast • Arabian Sea",
  },
  {
    name: "Jiwani",
    lat: 25.0485,
    lon: 61.7457,
    description: "Jiwani Coast • Arabian Sea",
  },
  {
    name: "Pishukan",
    lat: 25.0833,
    lon: 62.0000,
    description: "Pishukan Coast • Arabian Sea",
  },
  {
    name: "Astola Island",
    lat: 25.1210,
    lon: 63.8500,
    description: "Astola Island • Arabian Sea",
  },
];

function MarineWeather() {
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
        throw new Error("Marine weather service unavailable.");
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to load marine conditions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarineWeather();
  }, [selectedArea]);

  const current = data?.current;

  const getDirection = (degree) => {
    if (degree === null || degree === undefined) return "--";

    const directions = [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SW",
      "W",
      "NW",
    ];

    const index = Math.round(degree / 45) % 8;

    return directions[index];
  };

  const formatNumber = (value, decimals = 1) => {
    if (value === null || value === undefined) return "--";

    return Number(value).toFixed(decimals);
  };

  const forecast = useMemo(() => {
    if (!data?.hourly?.time) return [];

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

      if (!h.time[index]) return null;

      return {
        time: h.time[index],
        wave: h.wave_height?.[index],
        direction: h.wave_direction?.[index],
        period: h.wave_period?.[index],
      };
    }).filter(Boolean);
  }, [data]);

  if (loading) {
    return (
      <div className="marine-dashboard">
        <div className="marine-loading">
          <div className="loading-orbit">
            <span>🌊</span>
          </div>

          <h2>Reading the Arabian Sea...</h2>
          <p>
            Loading live marine conditions for {selectedArea.name}.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="marine-dashboard">
        <div className="marine-error">
          <div className="error-icon">!</div>

          <h2>Marine data unavailable</h2>

          <p>{error}</p>

          <button onClick={fetchMarineWeather}>
            ↻ Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="marine-dashboard">

      <Link className="tool-back" to="/fisherman">
        ← {t("ctaFisherman")}
      </Link>

      {/* HEADER */}

      <section className="marine-header">

        <div>
          <span className="marine-label">
            MAKRAN BLUE • MARINE INTELLIGENCE
          </span>

          <h1>
            Sea Conditions
            <span> Monitor</span>
          </h1>

          <p>
            Live marine conditions across the Makran Coast,
            Balochistan.
          </p>
        </div>

        <button
          className="refresh-button"
          onClick={fetchMarineWeather}
        >
          ↻ Refresh
        </button>

      </section>


      {/* LOCATION SELECTOR */}

      <section className="location-panel">

        <div className="location-title">
          <span className="location-pin">📍</span>

          <div>
            <small>MONITORING LOCATION</small>

            <strong>{selectedArea.name}</strong>

            <p>{selectedArea.description}</p>
          </div>
        </div>

        <select
          value={selectedArea.name}
          onChange={(e) => {
            const area = COASTAL_AREAS.find(
              (item) => item.name === e.target.value
            );

            setSelectedArea(area);
          }}
        >
          {COASTAL_AREAS.map((area) => (
            <option key={area.name} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>

      </section>


      {/* LIVE STATUS */}

      <div className="live-status">

        <span className="live-dot"></span>

        LIVE MARINE DATA

        <span className="status-separator">•</span>

        {data?.timezone || "Local Time"}

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
              <span>WAVE HEIGHT</span>

              <strong>
                {formatNumber(current?.wave_height)}
                <small> m</small>
              </strong>
            </div>

            <div className="wave-icon">
              🌊
            </div>

          </div>

          <div className="wave-details">

            <div>
              <span>Direction</span>

              <strong>
                {getDirection(current?.wave_direction)}
              </strong>

              <small>
                {formatNumber(current?.wave_direction, 0)}°
              </small>
            </div>

            <div>
              <span>Period</span>

              <strong>
                {formatNumber(current?.wave_period)}
              </strong>

              <small>sec</small>
            </div>

            <div>
              <span>Swell</span>

              <strong>
                {formatNumber(current?.swell_wave_height)}
              </strong>

              <small>m</small>
            </div>

          </div>

        </div>

      </section>


      {/* DATA CARDS */}

      <section className="marine-grid">

        <div className="marine-stat">

          <div className="stat-icon">🧭</div>

          <div>
            <span>WAVE DIRECTION</span>

            <strong>
              {formatNumber(current?.wave_direction, 0)}°
            </strong>

            <small>
              {getDirection(current?.wave_direction)}
            </small>
          </div>

        </div>


        <div className="marine-stat">

          <div className="stat-icon">⏱</div>

          <div>
            <span>WAVE PERIOD</span>

            <strong>
              {formatNumber(current?.wave_period)}
              <small> s</small>
            </strong>

            <small>
              Average period
            </small>
          </div>

        </div>


        <div className="marine-stat">

          <div className="stat-icon">🌡️</div>

          <div>
            <span>SEA TEMPERATURE</span>

            <strong>
              {formatNumber(
                current?.sea_surface_temperature
              )}
              <small>°C</small>
            </strong>

            <small>
              Surface water
            </small>
          </div>

        </div>


        <div className="marine-stat">

          <div className="stat-icon">💨</div>

          <div>
            <span>OCEAN CURRENT</span>

            <strong>
              {formatNumber(
                current?.ocean_current_velocity
              )}
              <small> km/h</small>
            </strong>

            <small>
              {getDirection(
                current?.ocean_current_direction
              )}
            </small>
          </div>

        </div>

      </section>


      {/* FORECAST */}

      <section className="forecast-section">

        <div className="section-heading">

          <div>
            <span>SHORT RANGE</span>
            <h2>Next 12 Hours</h2>
          </div>

          <p>
            Hourly wave forecast
          </p>

        </div>


        <div className="forecast-scroll">

          {forecast.map((item, index) => {

            const time = new Date(item.time);

            return (
              <div
                className={`forecast-item ${
                  index === 0 ? "current" : ""
                }`}
                key={item.time}
              >

                <span className="forecast-time">
                  {index === 0
                    ? "NOW"
                    : time.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                </span>

                <div className="forecast-wave">
                  🌊
                </div>

                <strong>
                  {formatNumber(item.wave)}
                  <small>m</small>
                </strong>

                <span className="forecast-direction">
                  {getDirection(item.direction)}
                  {" "}
                  {formatNumber(item.direction, 0)}°
                </span>

                <small>
                  {formatNumber(item.period)}s
                </small>

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
            <small>SEA GRID LOCATION</small>

            <strong>
              {selectedArea.lat.toFixed(4)}° N
            </strong>

            <strong>
              {selectedArea.lon.toFixed(4)}° E
            </strong>
          </div>
        </div>


        <div className="data-provider">

          <small>DATA PROVIDER</small>

          <strong>Open-Meteo Marine</strong>

          <span>
            Marine forecast model
          </span>

        </div>

      </section>


      {/* WARNING */}

      <div className="marine-notice">

        <span>⚠️</span>

        <div>
          <strong>Important navigation notice</strong>

          <p>
            Marine forecasts are model-based information.
            Coastal conditions can change quickly. Do not use
            this dashboard as a replacement for official
            navigation warnings, nautical charts, or emergency
            services.
          </p>
        </div>

      </div>


      <footer className="marine-footer">

        Makran Blue Marine Intelligence

        <span>•</span>

        Powered by Open-Meteo

      </footer>

    </div>
  );
}

export default MarineWeather;
