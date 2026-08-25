import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { coastalLocations } from "../data";
import { useApp } from "../context/AppContext";

const COLORS = {
  area: "#3ec7d8",
  fishing: "#e09f3e",
  beach: "#7ad7ff",
};

const CENTER = [25.18, 63.2];
const ZOOM = 8;

function CoastalMap({ focus, compact }) {
  const { t } = useApp();

  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const userRef = useRef(null);
  const searchRef = useRef(null);

  const [info, setInfo] = useState(null);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchMsg, setSearchMsg] = useState("");

  const focusLoc = focus
    ? coastalLocations.find(
        (l) => l.id === focus.slug || l.nameKey === focus.nameKey
      )
    : null;

  /* ---------------- MAP INIT ---------------- */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: focusLoc ? [focusLoc.lat, focusLoc.lng] : CENTER,
      zoom: focusLoc ? 10 : ZOOM,
      zoomControl: false,
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);

    // Declare every beach, fishing area and coastal town
    coastalLocations.forEach((loc) => {
      const marker = L.circleMarker(
        [loc.lat, loc.lng],
        {
          radius: 9,
          color: "rgba(2, 16, 24, 0.85)",
          weight: 1.5,
          fillColor: COLORS[loc.type] || "#3ec7d8",
          fillOpacity: 0.9,
        }
      ).addTo(map);

      marker.on("click", () =>
        setInfo({ kind: "loc", loc })
      );
    });

    mapRef.current = map;

    setTimeout(() => map.invalidateSize(), 250);

    return () => {
      map.remove();
      mapRef.current = null;
      userRef.current = null;
      searchRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus?.slug]);

  /* ---------------- FOCUS (area detail) ---------------- */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !focusLoc) return;

    map.flyTo([focusLoc.lat, focusLoc.lng], 10, {
      duration: 0.8,
    });
    setInfo({ kind: "loc", loc: focusLoc });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus?.slug]);

  /* ---------------- FIND MY LOCATION ---------------- */
  const locate = () => {
    if (!navigator.geolocation) {
      setSearchMsg("GPS is not available in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const map = mapRef.current;
        if (!map) return;

        const ll = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];

        map.flyTo(ll, 12, { duration: 1 });

        if (userRef.current) {
          map.removeLayer(userRef.current);
        }

        userRef.current = L.circleMarker(ll, {
          radius: 7,
          color: "#3ee0a0",
          weight: 2.5,
          fillColor: "#3ee0a0",
          fillOpacity: 0.9,
        }).addTo(map);

        setInfo({ kind: "you" });
      },
      () => {
        setSearchMsg("Could not get your location.");
      }
    );
  };

  /* ---------------- NOMINATIM SEARCH API ---------------- */
  const search = async (e) => {
    e.preventDefault();

    const q = query.trim();
    if (!q || !mapRef.current) return;

    setSearching(true);
    setSearchMsg("");

    try {
      // Bias the search towards the region
      const q2 = /pakistan/i.test(q) ? q : `${q}, Pakistan`;

      const url =
        "https://nominatim.openstreetmap.org/search" +
        "?format=jsonv2&limit=1" +
        "&accept-language=en" +
        `&q=${encodeURIComponent(q2)}`;

      const res = await fetch(url, {
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error("geocoder unavailable");
      }

      const data = await res.json();
      const r = data[0];

      if (!r) {
        setSearchMsg("No place matched — try a nearby town name.");
        return;
      }

      const map = mapRef.current;
      const ll = [Number(r.lat), Number(r.lon)];

      map.flyTo(ll, 11, { duration: 1 });

      if (searchRef.current) {
        map.removeLayer(searchRef.current);
      }

      searchRef.current = L.circleMarker(ll, {
        radius: 8,
        color: "#3ee0a0",
        weight: 2.5,
        fillColor: "#3ee0a0",
        fillOpacity: 0.9,
      }).addTo(map);

      setInfo({
        kind: "search",
        title: r.display_name,
        lat: ll[0],
        lon: ll[1],
      });
    } catch (err) {
      console.error(err);
      setSearchMsg("Search service is unavailable right now.");
    } finally {
      setSearching(false);
    }
  };

  const directions = (lat, lon) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`,
      "_blank",
      "noopener"
    );
  };

  /* ---------------- PANEL CONTENT ---------------- */
  let panel = null;
  if (info) {
    let title = "";
    let cat = "";
    let desc = "";
    let lat = null;
    let lon = null;

    if (info.kind === "loc") {
      title = t(info.loc.nameKey);
      cat = t(info.loc.catKey);
      desc = t(info.loc.descKey);
      lat = info.loc.lat;
      lon = info.loc.lng;
    } else if (info.kind === "you") {
      title = t("yourLoc");
      cat = "GPS";
      desc = t("yourLocP");
    } else {
      title = info.title;
      cat = "OSM API";
      lat = info.lat;
      lon = info.lon;
    }

    panel = { title, cat, desc, lat, lon };
  }

  const beachCount = coastalLocations.filter(
    (l) => l.type === "beach"
  ).length;
  const fishCount = coastalLocations.filter(
    (l) => l.type === "fishing"
  ).length;

  return (
    <div className="coastal-map-wrapper">
      {/* TOOLBAR */}
      <div className="map-toolbar">
        {!compact && (
          <div>
            <span className="eyebrow">{t("liveMap")}</span>
            <h3>{t("mapH")}</h3>
          </div>
        )}

        <form className="map-search" onSubmit={search}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("mapSearch")}
            aria-label={t("mapSearch")}
          />
          <button type="submit" disabled={searching}>
            {searching ? "…" : t("mapGo")}
          </button>
        </form>

        <div className="map-legend">
          <span>
            <i className="legend-area"></i>
            {t("legendArea")}
          </span>
          <span>
            <i className="legend-fishing"></i>
            {t("legendFish")}
          </span>
          <span>
            <i className="legend-beach"></i>
            {t("legendBeach")}
          </span>
        </div>
      </div>

      {/* MAP */}
      <div className="coastal-map live-map">
        <div className="map-container" ref={containerRef} />

        <button
          className="map-location-btn"
          onClick={locate}
          title={t("findMe")}
        >
          📍
        </button>

        {searchMsg && (
          <div className="map-search-msg">
            {searchMsg}
          </div>
        )}

        {panel && (
          <div className="map-info-panel">
            <button
              className="map-close"
              onClick={() => setInfo(null)}
              aria-label="Close"
            >
              ×
            </button>

            {panel.cat && (
              <span className="eyebrow">{panel.cat}</span>
            )}

            <h3>{panel.title}</h3>
            {panel.desc && <p>{panel.desc}</p>}

            {panel.lat !== null && (
              <button
                className="popup-direction-btn"
                onClick={() =>
                  directions(panel.lat, panel.lon)
                }
              >
                {t("getDir")} →
              </button>
            )}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="map-footer">
        <span>
          {coastalLocations.length} {t("mapped")}
          {" • "}
          {beachCount} {t("legendBeach")}
          {" • "}
          {fishCount} {t("legendFish")}
        </span>
        <span>
          API: OpenStreetMap + Nominatim • © {t("osm")}
        </span>
      </div>
    </div>
  );
}

export default CoastalMap;
