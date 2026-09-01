import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ToolPage from "./ToolPage";

import { useApp } from "../context/AppContext";

function Compass() {
  const { t } = useApp();

  /* States hold translation KEYS so the UI re-translates live
     when the language is switched. */
  const [heading, setHeading] = useState(0);
  const [location, setLocation] = useState(null);

  const [locationError, setLocationError] = useState("");
  const [sensorStatus, setSensorStatus] = useState("stChecking");
  const [gpsStatus, setGpsStatus] = useState("stWaiting");

  const [permissionNeeded, setPermissionNeeded] = useState(false);
  const [isUsingMouse, setIsUsingMouse] = useState(true);

  const [makranCoords, setMakranCoords] = useState({
    latitude: 25.2631,
    longitude: 63.471,
  });

  const bearingToMakranRef = useRef(null);
  const [bearingToMakran, setBearingToMakran] = useState(null);
  const [distanceToMakran, setDistanceToMakran] = useState(null);

  const headingRef = useRef(0);
  const compassBoundRef = useRef(false);

  useEffect(() => {
    const findMakran = async () => {
      try {
        const url =
          "https://nominatim.openstreetmap.org/search" +
          "?q=Makran+Coast%2C+Pakistan" +
          "&format=jsonv2" +
          "&limit=1";

        const response = await fetch(url, {
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Makran API request failed");
        }

        const data = await response.json();

        if (data.length > 0) {
          setMakranCoords({
            latitude: Number(data[0].lat),
            longitude: Number(data[0].lon),
          });
        }
      } catch (error) {
        console.error("Makran API error:", error);

        setMakranCoords({
          latitude: 25.2631,
          longitude: 63.471,
        });
      }
    };

    findMakran();
  }, []);

  useEffect(() => {
    if (!location) return;

    const lat1 = (location.latitude * Math.PI) / 180;
    const lat2 = (makranCoords.latitude * Math.PI) / 180;

    const dLat =
      ((makranCoords.latitude - location.latitude) * Math.PI) / 180;
    const dLon =
      ((makranCoords.longitude - location.longitude) * Math.PI) / 180;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let bearing = (Math.atan2(y, x) * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    bearingToMakranRef.current = Math.round(bearing);
    setBearingToMakran(Math.round(bearing));

    const R = 6371;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    setDistanceToMakran(Math.round(distance));
  }, [location, makranCoords]);

  const targetArrowRotation = useMemo(() => {
    if (bearingToMakran === null) return 0;
    return (bearingToMakran - heading + 360) % 360;
  }, [bearingToMakran, heading]);

  const getDirection = (degree) => {
    if (degree >= 337.5 || degree < 22.5) return "N";
    if (degree < 67.5) return "NE";
    if (degree < 112.5) return "E";
    if (degree < 157.5) return "SE";
    if (degree < 202.5) return "S";
    if (degree < 247.5) return "SW";
    if (degree < 292.5) return "W";
    return "NW";
  };

  const direction = useMemo(() => getDirection(heading), [heading]);

  const updateHeading = useCallback((value) => {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return;
    }

    let newHeading = value;
    while (newHeading < 0) newHeading += 360;
    while (newHeading >= 360) newHeading -= 360;

    headingRef.current = newHeading;
    setHeading(Math.round(newHeading));
  }, []);

  /* Stable device-orientation handler (uses only stable callbacks) */
  const handleOrientation = useCallback(
    (event) => {
      let compassHeading = null;

      if (typeof event.webkitCompassHeading === "number") {
        compassHeading = event.webkitCompassHeading;
      } else if (typeof event.alpha === "number") {
        compassHeading = (360 - event.alpha) % 360;
      }

      if (compassHeading !== null && !Number.isNaN(compassHeading)) {
        setIsUsingMouse(false);
        setSensorStatus("stLiveCompass");
        updateHeading(compassHeading);
      }
    },
    [updateHeading]
  );

  const bindCompass = useCallback(() => {
    if (compassBoundRef.current) return;
    compassBoundRef.current = true;
    window.addEventListener("deviceorientation", handleOrientation, true);
    window.addEventListener(
      "deviceorientationabsolute",
      handleOrientation,
      true
    );
  }, [handleOrientation]);

  const enableCompass = async () => {
    try {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        const permission =
          await DeviceOrientationEvent.requestPermission();

        if (permission !== "granted") {
          setSensorStatus("stCompassDenied");
          setPermissionNeeded(false);
          return;
        }
      }

      bindCompass();

      setPermissionNeeded(false);
      setIsUsingMouse(false);
      setSensorStatus("stSearching");
    } catch (error) {
      console.error(error);
      setSensorStatus("stCompassNA");
    }
  };

  useEffect(() => {
    if (typeof window.DeviceOrientationEvent === "undefined") {
      setSensorStatus("stNoSensor");
      return;
    }

    if (
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      setPermissionNeeded(true);
      setSensorStatus("stPermission");
      return;
    }

    bindCompass();

    return () => {
      compassBoundRef.current = false;
      window.removeEventListener(
        "deviceorientation",
        handleOrientation,
        true
      );
      window.removeEventListener(
        "deviceorientationabsolute",
        handleOrientation,
        true
      );
    };
  }, [bindCompass, handleOrientation]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGpsStatus("stGpsNA");
      setLocationError("errGpsGeneric");
      return;
    }

    setGpsStatus("stGpsRequesting");

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const {
          latitude,
          longitude,
          accuracy,
          speed,
          heading: gpsHeading,
        } = position.coords;

        setLocation({
          latitude,
          longitude,
          accuracy,
          speed,
          gpsHeading,
        });

        setGpsStatus("stGpsActive");
        setLocationError("");

        // GPS direction only when moving
        if (
          typeof gpsHeading === "number" &&
          gpsHeading >= 0 &&
          speed !== null &&
          speed > 0.8
        ) {
          setIsUsingMouse(false);
          setSensorStatus("stGpsHeading");
          updateHeading(gpsHeading);
        }
      },
      (error) => {
        console.error(error);

        if (error.code === 1) {
          setGpsStatus("errGpsDenied");
          setLocationError("errGpsDeniedP");
        } else if (error.code === 2) {
          setGpsStatus("errGpsUnavailable");
          setLocationError("errGpsUnavailableP");
        } else {
          setGpsStatus("errGpsGeneric");
          setLocationError("errGpsGenericP");
        }
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [updateHeading]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isUsingMouse) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = event.clientX - centerX;
      const y = event.clientY - centerY;

      if (Math.abs(x) < 5 && Math.abs(y) < 5) return;

      let angle = Math.atan2(x, -y) * (180 / Math.PI);
      if (angle < 0) angle += 360;

      updateHeading(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isUsingMouse, updateHeading]);

  const resetCompass = () => {
    updateHeading(0);
  };

  const marks = [];

  for (let degree = 0; degree < 360; degree += 5) {
    const isMajor = degree % 30 === 0;

    marks.push(
      <div
        key={degree}
        className={isMajor ? "compass-mark major" : "compass-mark"}
        style={{ transform: `rotate(${degree}deg)` }}
      >
        <span />

        {isMajor && (
          <b style={{ transform: `rotate(${-degree}deg)` }}>{degree}</b>
        )}
      </div>
    );
  }

  const speed =
    location?.speed !== null && location?.speed !== undefined
      ? (location.speed * 3.6).toFixed(1)
      : "--";

  return (
    <ToolPage
      eyebrow={t("navigation")}
      title={t("toolCompass")}
      text={t("cmpText")}
    >
      <div className="real-compass">
        <div className="compass-status">
          <div>
            <span>{t("cmpCompassLbl")}</span>
            <strong>{t(sensorStatus)}</strong>
          </div>

          <div>
            <span>{t("cmpGpsLbl")}</span>
            <strong>{t(gpsStatus)}</strong>
          </div>
        </div>

        {permissionNeeded && (
          <div className="compass-permission">
            <div>
              <strong>{t("cmpEnableT")}</strong>
              <p>{t("cmpEnableP")}</p>
            </div>

            <button className="btn primary" onClick={enableCompass}>
              {t("cmpEnableBtn")}
            </button>
          </div>
        )}

        {locationError && (
          <div className="compass-error">⚠️ {t(locationError)}</div>
        )}

        <div className="real-heading">
          <span>{t("cmpCurrentHeading")}</span>

          <div>
            <strong>{String(heading).padStart(3, "0")}°</strong>
            <b>{direction}</b>
          </div>
        </div>

        <div className="real-compass-wrapper">
          {bearingToMakran !== null && (
            <div
              className="makran-arrow"
              style={{ transform: `rotate(${targetArrowRotation}deg)` }}
            >
              <span>{t("cmpMakran")}</span>
              <strong>▲</strong>
            </div>
          )}

          <div className="fixed-pointer">
            <div />
          </div>

          <div
            className="real-compass-ring"
            style={{ transform: `rotate(${-heading}deg)` }}
          >
            {marks}

            <div className="real-direction north">
              <span>N</span>
              <small>0°</small>
            </div>

            <div className="real-direction east">
              <span>E</span>
              <small>90°</small>
            </div>

            <div className="real-direction south">
              <span>S</span>
              <small>180°</small>
            </div>

            <div className="real-direction west">
              <span>W</span>
              <small>270°</small>
            </div>

            <div className="real-small-direction ne">NE</div>
            <div className="real-small-direction se">SE</div>
            <div className="real-small-direction sw">SW</div>
            <div className="real-small-direction nw">NW</div>
          </div>

          <div className="compass-center">
            <div />
          </div>
        </div>

        <div className="current-direction">
          <div>
            <span>{t("lblDirection")}</span>
            <strong>{direction}</strong>
          </div>

          <div>
            <span>{t("lblHeading")}</span>
            <strong>{heading}°</strong>
          </div>

          <div>
            <span>{t("lblToMakran")}</span>
            <strong>
              {bearingToMakran !== null ? `${bearingToMakran}°` : "--"}
            </strong>
          </div>
        </div>

        <div className="compass-location">
          <h3>{t("cmpYourLocation")}</h3>

          {location ? (
            <div className="location-data">
              <div>
                <span>{t("lblLat")}</span>
                <strong>{location.latitude.toFixed(6)}</strong>
              </div>

              <div>
                <span>{t("lblLon")}</span>
                <strong>{location.longitude.toFixed(6)}</strong>
              </div>

              <div>
                <span>{t("lblAccuracy")}</span>
                <strong>±{Math.round(location.accuracy)} m</strong>
              </div>

              <div>
                <span>{t("lblSpeed")}</span>
                <strong>{speed} km/h</strong>
              </div>
            </div>
          ) : (
            <p>{t("cmpWaitingGps")}</p>
          )}
        </div>

        <button className="btn primary compass-reset" onClick={resetCompass}>
          🧭 {t("cmpReset")}
        </button>

        <div className="compass-help">
          <p>
            📱 <strong>{t("cmpPhoneLbl")}</strong> {t("cmpPhoneP")}
          </p>

          <p>
            💻 <strong>{t("cmpLaptopLbl")}</strong> {t("cmpLaptopP")}
          </p>
        </div>
      </div>
    </ToolPage>
  );
}

export default Compass;
