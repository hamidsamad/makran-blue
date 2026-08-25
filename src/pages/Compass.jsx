import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ToolPage from "./ToolPage";

function Compass() {
  const [heading, setHeading] = useState(0);
  const [location, setLocation] = useState(null);

  const [locationError, setLocationError] = useState("");
  const [sensorStatus, setSensorStatus] = useState("Checking...");
  const [gpsStatus, setGpsStatus] = useState("Waiting...");

  const [permissionNeeded, setPermissionNeeded] = useState(false);
  const [isUsingMouse, setIsUsingMouse] = useState(true);

  const [makranCoords, setMakranCoords] = useState({
    latitude: 25.2631,
    longitude: 63.4710,
  });

  const [makranName, setMakranName] =
    useState("Makran Coast");

  const [bearingToMakran, setBearingToMakran] =
    useState(null);

  const [distanceToMakran, setDistanceToMakran] =
    useState(null);

  const headingRef = useRef(0);

  useEffect(() => {
    const findMakran = async () => {
      try {
        const url =
          "https://nominatim.openstreetmap.org/search" +
          "?q=Makran+Coast%2C+Pakistan" +
          "&format=jsonv2" +
          "&limit=1";

        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Makran API request failed");
        }

        const data = await response.json();

        if (data.length > 0) {
          const place = data[0];

          setMakranCoords({
            latitude: Number(place.lat),
            longitude: Number(place.lon),
          });

          setMakranName(
            place.display_name || "Makran Coast"
          );
        }
      } catch (error) {
        console.error("Makran API error:", error);

        setMakranCoords({
          latitude: 25.2631,
          longitude: 63.4710,
        });

        setMakranName("Makran Coast");
      }
    };

    findMakran();
  }, []);

  useEffect(() => {
    if (!location) return;

    const lat1 =
      (location.latitude * Math.PI) / 180;

    const lat2 =
      (makranCoords.latitude * Math.PI) / 180;

    const dLat =
      ((makranCoords.latitude -
        location.latitude) *
        Math.PI) /
      180;

    const dLon =
      ((makranCoords.longitude -
        location.longitude) *
        Math.PI) /
      180;

    const y =
      Math.sin(dLon) *
      Math.cos(lat2);

    const x =
      Math.cos(lat1) *
        Math.sin(lat2) -
      Math.sin(lat1) *
        Math.cos(lat2) *
        Math.cos(dLon);

    let bearing =
      (Math.atan2(y, x) * 180) /
      Math.PI;

    bearing = (bearing + 360) % 360;

    setBearingToMakran(
      Math.round(bearing)
    );

    const R = 6371;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(dLon / 2) ** 2;

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    const distance = R * c;

    setDistanceToMakran(
      Math.round(distance)
    );
  }, [location, makranCoords]);

  const targetArrowRotation = useMemo(() => {
    if (bearingToMakran === null) {
      return 0;
    }

    return (
      (bearingToMakran -
        heading +
        360) %
      360
    );
  }, [bearingToMakran, heading]);

  const getDirection = (degree) => {
    if (
      degree >= 337.5 ||
      degree < 22.5
    ) {
      return "N";
    }

    if (degree < 67.5) return "NE";
    if (degree < 112.5) return "E";
    if (degree < 157.5) return "SE";
    if (degree < 202.5) return "S";
    if (degree < 247.5) return "SW";
    if (degree < 292.5) return "W";

    return "NW";
  };

  const direction = useMemo(
    () => getDirection(heading),
    [heading]
  );

  const updateHeading = (value) => {
    if (
      value === null ||
      value === undefined ||
      Number.isNaN(value)
    ) {
      return;
    }

    let newHeading = value;

    while (newHeading < 0) {
      newHeading += 360;
    }

    while (newHeading >= 360) {
      newHeading -= 360;
    }

    headingRef.current = newHeading;

    setHeading(Math.round(newHeading));
  };

  const handleOrientation = (event) => {
    let compassHeading = null;

    if (
      typeof event.webkitCompassHeading ===
      "number"
    ) {
      compassHeading =
        event.webkitCompassHeading;
    }

    else if (
      typeof event.alpha === "number"
    ) {
      compassHeading =
        (360 - event.alpha) % 360;
    }

    if (
      compassHeading !== null &&
      !Number.isNaN(compassHeading)
    ) {
      setIsUsingMouse(false);

      setSensorStatus(
        "🧭 Live device compass"
      );

      updateHeading(compassHeading);
    }
  };

  const enableCompass = async () => {
    try {
      if (
        typeof DeviceOrientationEvent !==
          "undefined" &&
        typeof DeviceOrientationEvent.requestPermission ===
          "function"
      ) {
        const permission =
          await DeviceOrientationEvent.requestPermission();

        if (permission !== "granted") {
          setSensorStatus(
            "Compass permission denied"
          );

          setPermissionNeeded(false);

          return;
        }
      }

      window.addEventListener(
        "deviceorientation",
        handleOrientation,
        true
      );

      window.addEventListener(
        "deviceorientationabsolute",
        handleOrientation,
        true
      );

      setPermissionNeeded(false);

      setIsUsingMouse(false);

      setSensorStatus(
        "🧭 Searching for compass..."
      );
    } catch (error) {
      console.error(error);

      setSensorStatus(
        "Compass unavailable"
      );
    }
  };

  useEffect(() => {
    if (
      typeof window.DeviceOrientationEvent ===
      "undefined"
    ) {
      setSensorStatus(
        "Device compass unavailable"
      );

      return;
    }

    if (
      typeof DeviceOrientationEvent.requestPermission ===
      "function"
    ) {
      setPermissionNeeded(true);

      setSensorStatus(
        "Permission required"
      );

      return;
    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation,
      true
    );

    window.addEventListener(
      "deviceorientationabsolute",
      handleOrientation,
      true
    );

    return () => {
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
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGpsStatus("GPS unavailable");

      setLocationError(
        "Your browser does not support GPS."
      );

      return;
    }

    setGpsStatus(
      "Requesting location..."
    );

    const watchId =
      navigator.geolocation.watchPosition(
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

          setGpsStatus(
            "📍 GPS active"
          );

          // GPS direction only when moving
          if (
            typeof gpsHeading === "number" &&
            gpsHeading >= 0 &&
            speed !== null &&
            speed > 0.8
          ) {
            setIsUsingMouse(false);

            setSensorStatus(
              "GPS movement direction"
            );

            updateHeading(gpsHeading);
          }
        },
        (error) => {
          console.error(error);

          if (error.code === 1) {
            setGpsStatus(
              "Location permission denied"
            );

            setLocationError(
              "Please allow location permission."
            );
          } else if (error.code === 2) {
            setGpsStatus(
              "Location unavailable"
            );

            setLocationError(
              "Your location could not be determined."
            );
          } else {
            setGpsStatus(
              "Location error"
            );

            setLocationError(
              "Unable to determine your location."
            );
          }
        },
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 10000,
        }
      );

    return () => {
      navigator.geolocation.clearWatch(
        watchId
      );
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isUsingMouse) return;

      const centerX =
        window.innerWidth / 2;

      const centerY =
        window.innerHeight / 2;

      const x =
        event.clientX - centerX;

      const y =
        event.clientY - centerY;

      if (
        Math.abs(x) < 5 &&
        Math.abs(y) < 5
      ) {
        return;
      }

      let angle =
        Math.atan2(x, -y) *
        (180 / Math.PI);

      if (angle < 0) {
        angle += 360;
      }

      updateHeading(angle);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [isUsingMouse]);

  const resetCompass = () => {
    updateHeading(0);
  };

  const marks = [];

  for (
    let degree = 0;
    degree < 360;
    degree += 5
  ) {
    const isMajor =
      degree % 30 === 0;

    marks.push(
      <div
        key={degree}
        className={
          isMajor
            ? "compass-mark major"
            : "compass-mark"
        }
        style={{
          transform:
            `rotate(${degree}deg)`,
        }}
      >
        <span />

        {isMajor && (
          <b
            style={{
              transform:
                `rotate(${-degree}deg)`,
            }}
          >
            {degree}
          </b>
        )}
      </div>
    );
  }

  const speed =
    location?.speed !== null &&
    location?.speed !== undefined
      ? (
          location.speed * 3.6
        ).toFixed(1)
      : "--";

  return (
    <ToolPage
      eyebrow="NAVIGATION"
      title=" Compass"
      text="Use your device orientation to find your real heading and GPS to calculate your direction and distance to the Makran Coast."
    >

      <div className="real-compass">

        <div className="compass-status">

          <div>
            <span>COMPASS</span>

            <strong>
              {sensorStatus}
            </strong>
          </div>

          <div>
            <span>GPS</span>

            <strong>
              {gpsStatus}
            </strong>
          </div>

        </div>

        {permissionNeeded && (
          <div className="compass-permission">

            <div>
              <strong>
                🧭 Enable Real Compass
              </strong>

              <p>
                Allow motion and orientation
                access to use your phone's
                compass.
              </p>
            </div>

            <button
              className="btn primary"
              onClick={enableCompass}
            >
              Enable Compass
            </button>

          </div>
        )}

        {locationError && (
          <div className="compass-error">
            ⚠️ {locationError}
          </div>
        )}

        <div className="real-heading">

          <span>
            CURRENT HEADING
          </span>

          <div>

            <strong>
              {String(heading).padStart(3, "0")}°
            </strong>

            <b>
              {direction}
            </b>

          </div>

        </div>

        <div className="real-compass-wrapper">

          {bearingToMakran !== null && (
            <div
              className="makran-arrow"
              style={{
                transform:
                  `rotate(${targetArrowRotation}deg)`,
              }}
            >
              <span>MAKRAN</span>

              <strong>
                ▲
              </strong>
            </div>
          )}

          <div className="fixed-pointer">
            <div />
          </div>

          <div
            className="real-compass-ring"
            style={{
              transform:
                `rotate(${-heading}deg)`,
            }}
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

            <div className="real-small-direction ne">
              NE
            </div>

            <div className="real-small-direction se">
              SE
            </div>

            <div className="real-small-direction sw">
              SW
            </div>

            <div className="real-small-direction nw">
              NW
            </div>

          </div>

          <div className="compass-center">
            <div />
          </div>

        </div>

        <div className="current-direction">

          <div>
            <span>DIRECTION</span>

            <strong>
              {direction}
            </strong>
          </div>

          <div>
            <span>HEADING</span>

            <strong>
              {heading}°
            </strong>
          </div>

          <div>
            <span>TO MAKRAN</span>

            <strong>
              {bearingToMakran !== null
                ? `${bearingToMakran}°`
                : "--"}
            </strong>
          </div>

        </div>


        <div className="compass-location">

          <h3>
            📍 Your Current Location
          </h3>

          {location ? (
            <div className="location-data">

              <div>
                <span>LATITUDE</span>

                <strong>
                  {location.latitude.toFixed(6)}
                </strong>
              </div>

              <div>
                <span>LONGITUDE</span>

                <strong>
                  {location.longitude.toFixed(6)}
                </strong>
              </div>

              <div>
                <span>ACCURACY</span>

                <strong>
                  ±
                  {Math.round(
                    location.accuracy
                  )}
                  m
                </strong>
              </div>

              <div>
                <span>SPEED</span>

                <strong>
                  {speed} km/h
                </strong>
              </div>

            </div>
          ) : (
            <p>
              Waiting for GPS location...
            </p>
          )}

        </div>

        <button
          className="btn primary compass-reset"
          onClick={resetCompass}
        >
          🧭 Reset Compass
        </button>

        <div className="compass-help">

          <p>
            📱 <strong>Phone:</strong>{" "}
            Turn your phone physically.
            When you face North, the compass
            should show <strong>N / 0°</strong>.
          </p>

          <p>
            💻 <strong>Laptop:</strong>{" "}
            If your laptop doesn't have an
            orientation sensor, mouse movement
            is used as a fallback demonstration.
          </p>

        </div>

      </div>

    </ToolPage>
  );
}

export default Compass;
