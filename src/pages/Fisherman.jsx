import React from "react";
import { Link } from "react-router-dom";

import Tool from "../components/Tool";

function Fisherman() {
  return (
    <div className="fisher-page">
      <div className="fisher-top">
        <Link to="/" className="back">
          ← Makran Blue
        </Link>

        <span className="status-dot">
          ● DEVELOPMENT BUILD
        </span>
      </div>

      <section className="fisher-hero">
        <span className="eyebrow">FISHERMAN MODE</span>

        <h1>The sea, simplified.</h1>

        <p>
          Large, fast tools for navigation, conditions,
          fishing intelligence and safety.
        </p>
      </section>

      <div className="tool-grid">
        <Tool
          icon="🧭"
          title="Compass"
          text="Device heading with a clear fallback."
          to="/fisherman/compass"
        />

        <Tool
          icon="🌤️"
          title="Conditions"
          text="Provider-ready weather and marine layer."
          to="/fisherman/weather"
        />

        <Tool
          icon="🎣"
          title="Fishing guide"
          text="Explain conditions; never guarantee a catch."
          to="/fisherman/fishing-guide"
        />

        <Tool
          icon="🐟"
          title="Fish identifier"
          text="Possible AI-assisted species identification."
          to="/fisherman/fish-identifier"
        />

        <Tool
          icon="🚨"
          title="Emergency"
          text="Safety information and verified resources."
          to="/fisherman/emergency"
        />
      </div>
    </div>
  );
}

export default Fisherman;
