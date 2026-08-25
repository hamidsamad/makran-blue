import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";


const locations = {
  Gwadar: {
    code: "GWD",
    region: "Western Makran",
    depth: "45–120 m",
    condition: "Good",
    wind: "12 km/h",
    wave: "0.8 m",
    temp: "27°C",
    bestTime: "05:30 – 09:00",
    species: ["Tuna", "Mackerel", "Barracuda"],
    advice:
      "Offshore fishing is more suitable here. Experienced crews should check current marine conditions before departure.",
  },

  Pasni: {
    code: "PSN",
    region: "Central Makran",
    depth: "20–70 m",
    condition: "Good",
    wind: "10 km/h",
    wave: "0.6 m",
    temp: "28°C",
    bestTime: "06:00 – 10:00",
    species: ["Grouper", "Croaker", "Prawns"],
    advice:
      "Traditional coastal fishing is common around Pasni. Local knowledge is valuable when selecting fishing grounds.",
  },

  Ormara: {
    code: "ORM",
    region: "Eastern Makran",
    depth: "10–55 m",
    condition: "Moderate",
    wind: "16 km/h",
    wave: "1.1 m",
    temp: "27°C",
    bestTime: "05:45 – 08:30",
    species: ["Mullet", "Bream", "Ribbonfish"],
    advice:
      "Bay and shore fishing can be suitable, but always check wind and wave conditions before entering the water.",
  },

  Jiwani: {
    code: "JWN",
    region: "Western Makran",
    depth: "10–60 m",
    condition: "Good",
    wind: "9 km/h",
    wave: "0.5 m",
    temp: "28°C",
    bestTime: "06:15 – 09:30",
    species: ["Snapper", "Sea Bass", "Mud Crab"],
    advice:
      "Sheltered coastal areas can provide useful fishing opportunities. Check local access and security information.",
  },
};

const species = [
  {
    name: "Yellowfin Tuna",
    icon: "🐟",
    habitat: "Deep offshore water and drop-offs.",
    behavior: "Fast pelagic predator following baitfish.",
    conditions: "Clear water and active currents.",
    area: "Gwadar offshore waters.",
  },
  {
    name: "King Mackerel (Surmai)",
    icon: "🐟",
    habitat: "Reefs, offshore structures and current lines.",
    behavior: "Aggressive fast-moving predator.",
    conditions: "Moving water and baitfish activity.",
    area: "Gwadar and wider Makran coast.",
  },
  {
    name: "Blackspotted Grouper",
    icon: "🐟",
    habitat: "Rocky reefs, caves and ledges.",
    behavior: "Ambush predator near structure.",
    conditions: "Low-light periods.",
    area: "Rocky Makran coastline.",
  },
  {
    name: "Red Snapper",
    icon: "🐟",
    habitat: "Rocky bottoms and deeper reefs.",
    behavior: "Structure-oriented predator.",
    conditions: "Moderate current.",
    area: "Deeper coastal water.",
  },
  {
    name: "Queenfish",
    icon: "🐟",
    habitat: "Beaches, bays and channels.",
    behavior: "Fast surface predator.",
    conditions: "Moving tidal water.",
    area: "Jiwani and sheltered coast.",
  },
  {
    name: "Barramundi",
    icon: "🐟",
    habitat: "Estuaries, lagoons and brackish water.",
    behavior: "Ambush predator.",
    conditions: "Tidal movement.",
    area: "Sheltered coastal systems.",
  },
  {
    name: "Mullet",
    icon: "🐟",
    habitat: "Shallow bays, beaches and lagoons.",
    behavior: "Schooling fish.",
    conditions: "Calm water.",
    area: "Ormara coastal zones.",
  },
  {
    name: "Croaker",
    icon: "🐟",
    habitat: "Sandy and muddy bottoms.",
    behavior: "Bottom feeder.",
    conditions: "Moderate tidal movement.",
    area: "Pasni waters.",
  },
  {
    name: "Barracuda",
    icon: "🐟",
    habitat: "Reefs, rocky shorelines and drop-offs.",
    behavior: "Visual ambush predator.",
    conditions: "Clear water and baitfish.",
    area: "Gwadar offshore.",
  },
  {
    name: "Tiger Shrimp",
    icon: "🦐",
    habitat: "Muddy bottoms and mangroves.",
    behavior: "Bottom-dwelling crustacean.",
    conditions: "Suitable tidal movement.",
    area: "Coastal lagoons.",
  },
  {
    name: "Mud Crab",
    icon: "🦀",
    habitat: "Mangrove channels and tidal flats.",
    behavior: "Bottom-dwelling crab.",
    conditions: "Active tidal periods.",
    area: "Jiwani mangroves.",
  },
  {
    name: "Ribbonfish",
    icon: "🐟",
    habitat: "Coastal and offshore water.",
    behavior: "Predator of small fish.",
    conditions: "Baitfish concentrations.",
    area: "Ormara offshore.",
  },
  {
    name: "Indian Mackerel",
    icon: "🐟",
    habitat: "Coastal pelagic waters.",
    behavior: "Schooling fish.",
    conditions: "Productive water.",
    area: "Makran coast.",
  },
  {
    name: "Indian Oil Sardine",
    icon: "🐟",
    habitat: "Coastal pelagic zones.",
    behavior: "Large schooling baitfish.",
    conditions: "Plankton-rich water.",
    area: "Balochistan coast.",
  },
  {
    name: "Indian Salmon / Rawas",
    icon: "🐟",
    habitat: "Coastal and estuarine areas.",
    behavior: "Moving-water predator.",
    conditions: "Current and baitfish.",
    area: "Estuarine zones.",
  },
  {
    name: "Trevally",
    icon: "🐟",
    habitat: "Reefs and rocky points.",
    behavior: "Powerful schooling predator.",
    conditions: "Strong current.",
    area: "Rocky Makran coast.",
  },
  {
    name: "Giant Trevally",
    icon: "🐟",
    habitat: "Reefs and drop-offs.",
    behavior: "Powerful ambush predator.",
    conditions: "Current and baitfish.",
    area: "Offshore reefs.",
  },
  {
    name: "Emperor Fish",
    icon: "🐟",
    habitat: "Sandy and rocky reefs.",
    behavior: "Bottom predator.",
    conditions: "Moderate current.",
    area: "Rocky coastal grounds.",
  },
  {
    name: "Sea Bream",
    icon: "🐟",
    habitat: "Rocky and sandy bottoms.",
    behavior: "Bottom feeder.",
    conditions: "Moderate movement.",
    area: "Ormara bays.",
  },
  {
    name: "Sea Bass",
    icon: "🐟",
    habitat: "Rocky coastal areas.",
    behavior: "Opportunistic predator.",
    conditions: "Tidal movement.",
    area: "Jiwani bays.",
  },
  {
    name: "Snapper",
    icon: "🐟",
    habitat: "Reefs and rocky bottoms.",
    behavior: "Structure predator.",
    conditions: "Reef currents.",
    area: "Western Makran.",
  },
  {
    name: "Spanish Mackerel",
    icon: "🐟",
    habitat: "Pelagic waters and reef edges.",
    behavior: "Fast predator.",
    conditions: "Clear water.",
    area: "Offshore Makran.",
  },
  {
    name: "Needlefish",
    icon: "🐟",
    habitat: "Shallow surface water.",
    behavior: "Surface predator.",
    conditions: "Calm conditions.",
    area: "Makran coastline.",
  },
  {
    name: "Garfish",
    icon: "🐟",
    habitat: "Shallow coastal waters.",
    behavior: "Schooling surface feeder.",
    conditions: "Clear water.",
    area: "Coastal bays.",
  },
  {
    name: "Flathead",
    icon: "🐟",
    habitat: "Sandy and muddy bottoms.",
    behavior: "Bottom ambush predator.",
    conditions: "Tidal movement.",
    area: "Sheltered bays.",
  },
  {
    name: "Prawns",
    icon: "🦐",
    habitat: "Muddy bottoms and estuaries",
    behavior: "Bottom-dwelling crustacean.",
    conditions: "Tidal movement.",
    area: "Pasni lagoons.",
  },
  {
    name: "Blue Swimming Crab",
    icon: "🦀",
    habitat: "Sandy and muddy bottoms.",
    behavior: "Active bottom crab.",
    conditions: "Tidal movement.",
    area: "Sheltered waters.",
  },
  {
    name: "Spiny Lobster",
    icon: "🦞",
    habitat: "Rocky reefs and caves.",
    behavior: "Nocturnal bottom-dweller.",
    conditions: "Low light.",
    area: "Rocky Makran.",
  },
  {
    name: "Octopus",
    icon: "🐙",
    habitat: "Rocky reefs and holes.",
    behavior: "Adaptable predator.",
    conditions: "Low-light periods.",
    area: "Rocky coastline.",
  },
  {
    name: "Squid",
    icon: "🦑",
    habitat: "Coastal and offshore water.",
    behavior: "Active predator and forage species.",
    conditions: "Productive water.",
    area: "Makran waters.",
  },
  {
    name: "Pomfret",
    icon: "🐟",
    habitat: "Sandy and muddy offshore bottoms.",
    behavior: "Deeper-water species.",
    conditions: "Productive offshore water.",
    area: "Pasni and Makran.",
  },
  {
    name: "Sole / Flatfish",
    icon: "🐟",
    habitat: "Sandy and muddy seabeds.",
    behavior: "Bottom-dwelling fish.",
    conditions: "Calm bottom water.",
    area: "Sandy coastal grounds.",
  },
  {
    name: "Catfish",
    icon: "🐟",
    habitat: "Estuaries and muddy bottoms.",
    behavior: "Bottom feeder.",
    conditions: "Turbid nutrient-rich water.",
    area: "Estuarine systems.",
  },
  {
    name: "Milkfish",
    icon: "🐟",
    habitat: "Lagoons, bays and brackish areas.",
    behavior: "Schooling shallow-water fish.",
    conditions: "Warm productive water.",
    area: "Sheltered bays.",
  },
  {
    name: "Cobia",
    icon: "🐟",
    habitat: "Reefs, wrecks and large structures.",
    behavior: "Large opportunistic predator.",
    conditions: "Current and baitfish.",
    area: "Offshore Makran.",
  },
  {
    name: "Wahoo",
    icon: "🐟",
    habitat: "Open offshore water.",
    behavior: "Extremely fast pelagic predator.",
    conditions: "Clear offshore water.",
    area: "Deep offshore grounds.",
  },
  {
    name: "Dorado / Mahi-Mahi",
    icon: "🐟",
    habitat: "Open ocean and floating structure.",
    behavior: "Fast pelagic predator.",
    conditions: "Warm offshore water.",
    area: "Offshore Makran.",
  },
  {
    name: "Black Pomfret",
    icon: "🐟",
    habitat: "Deeper coastal bottoms.",
    behavior: "Bottom-associated fish.",
    conditions: "Productive offshore water.",
    area: "Pasni and Makran.",
  },
  {
    name: "Silver Pomfret",
    icon: "🐟",
    habitat: "Sandy and muddy offshore bottoms.",
    behavior: "Deeper coastal species.",
    conditions: "Stable offshore conditions.",
    area: "Makran offshore.",
  },
  {
    name: "Threadfin Bream",
    icon: "🐟",
    habitat: "Sandy and muddy bottoms.",
    behavior: "Bottom-feeding coastal fish.",
    conditions: "Moderate current.",
    area: "Central Makran.",
  },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "seasons", label: "Monsoon Seasons" },
  { id: "species", label: "Species Profile" },
  { id: "dynamics", label: "Water Dynamics" },
];

export default function FishingGuide() {
  const { t } = useApp();
  const [active, setActive] = useState("Gwadar");
  const [tab, setTab] = useState("overview");

  const data = locations[active];

  return (
    <main className="fishing-dashboard">

      <Link className="tool-back" to="/fisherman">
        ← {t("ctaFisherman")}
      </Link>

      <section className="fishing-command">
        <div className="command-text">
          <span className="overline">
            COASTAL OPERATIONS / 01
          </span>

          <h1>
            Know the water.
            <br />
            <i>Plan the trip.</i>
          </h1>

          <p>
            A practical fishing intelligence interface for
            fishermen exploring the Makran coastline.
          </p>

          <div className="hero-meta">
            <span>MAKRAN COAST</span>
            <span>BALOCHISTAN, PK</span>
          </div>
        </div>

      </section>

      <section className="location-panel">
        <div className="panel-heading">
          <div>
            <span>SELECT AREA</span>
            <h2>Fishing sectors</h2>
          </div>

          <div className="coordinates">
            MAKRAN COAST
            <br />
            BALOCHISTAN, PK
          </div>
        </div>

        <div className="sector-navigation">
          {Object.entries(locations).map(([name, location]) => (
            <button
              key={name}
              type="button"
              className={
                active === name ? "sector active" : "sector"
              }
              onClick={() => setActive(name)}
            >
              <small>{location.code}</small>
              <strong>{name}</strong>
              <span>{location.region}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="guide-tabs">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={tab === item.id ? "guide-tab active" : "guide-tab"}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </section>

      {tab === "overview" && (
        <>
          <section className="marine-grid">

            <div className="conditions-panel">
              <div className="panel-title">
                <div>
                  <span>MARINE CONDITIONS</span>
                  <h2>Current water profile</h2>
                </div>

                <div className="condition-good">
                  ● {data.condition}
                </div>
              </div>

              <div className="measurement-grid">
                <Measurement
                  icon="〰"
                  label="WAVE"
                  value={data.wave}
                />

                <Measurement
                  icon="◉"
                  label="WIND"
                  value={data.wind}
                />

                <Measurement
                  icon="°"
                  label="SEA TEMP"
                  value={data.temp}
                />

                <Measurement
                  icon="↓"
                  label="DEPTH"
                  value={data.depth}
                />
              </div>

              <div className="wave-visual">
                <div className="wave-line" />
                <div className="wave-line second" />
                <div className="wave-line third" />
                <span>WAVE MOVEMENT</span>
              </div>
            </div>

            <div className="species-panel">
              <div className="panel-title">
                <div>
                  <span>TARGET SPECIES</span>
                  <h2>What to look for</h2>
                </div>

                <div className="fish-symbol">🐟</div>
              </div>

              {/* <div className="species-radar">
                <div className="radar-ring ring-one" />
                <div className="radar-ring ring-two" />
                <div className="radar-ring ring-three" />
                <div className="radar-scan" />

                <div className="fish-dot one">🐟</div>
                <div className="fish-dot two">🐟</div>
                <div className="fish-dot three">🐟</div>
              </div>  */}

              <div className="species-names">
                {data.species.map((fish, index) => (
                  <div key={fish}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{fish}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="strategy">
            <div className="strategy-number">02</div>

            <div className="strategy-content">
              <span>FISHING WINDOW</span>

              <h2>Recommended departure</h2>

              <strong>{data.bestTime}</strong>

              <p>
                This is a planning reference only. Actual fishing
                conditions can change with weather, tides, wind and
                local marine conditions.
              </p>
            </div>

            <div className="strategy-visual">
              <div className="time-line">
                <span>04:00</span>
                <span className="highlight">06:00</span>
                <span>08:00</span>
                <span>10:00</span>
                <span>12:00</span>
              </div>

              <div className="time-bar">
                <div />
              </div>
            </div>
          </section>

          <section className="intelligence">
            <div className="intel-icon">!</div>

            <div>
              <span>LOCAL INTELLIGENCE</span>

              <h3>{active} — fishing strategy</h3>

              <p>{data.advice}</p>
            </div>
          </section>
        </>
      )}

      {tab === "seasons" && (
        <section className="information-section">
          <span className="section-label">SEASONAL INTELLIGENCE</span>

          <h2>Seasonal Monsoon Shifts</h2>

          <div className="information-list">
            <article>
              <span>01</span>
              <div>
                <h3>SW Monsoon — June to August</h3>
                <p>
                  Stronger winds and rougher sea conditions can
                  make offshore trips more challenging.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Post-Monsoon — September to November</h3>
                <p>
                  Sea conditions can become more settled, although
                  weather and currents remain variable.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Winter Period</h3>
                <p>
                  Cooler conditions and changing wind patterns can
                  produce different coastal fishing opportunities.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Spring Transition</h3>
                <p>
                  Seasonal changes in temperature, currents and
                  baitfish distribution can influence predator activity.
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      {tab === "species" && (
        <section className="information-section">
          <span className="section-label">MARINE DATABASE</span>

          <h2>Detailed Target Species</h2>

          <div className="species-count">
            🎣 {species.length} Species & Marine Targets
          </div>

          <div className="detailed-species-grid">
            {species.map((fish, index) => (
              <article className="detailed-species-card" key={fish.name}>
                <div className="species-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {fish.icon} {fish.name}
                </h3>

                <p>
                  <strong>Habitat</strong>
                  {fish.habitat}
                </p>

                <p>
                  <strong>Behavior</strong>
                  {fish.behavior}
                </p>

                <p>
                  <strong>Conditions</strong>
                  {fish.conditions}
                </p>

                <p>
                  <strong>Area</strong>
                  {fish.area}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {tab === "dynamics" && (
        <section className="information-section">
          <span className="section-label">OCEANOGRAPHIC DATA</span>

          <h2>Water Mechanics</h2>

          <div className="dynamics-grid">
            <DynamicCard
              icon="🌊"
              title="Deep Drop-offs"
              text="Rapid changes in depth can influence temperature, current and fish distribution."
            />

            <DynamicCard
              icon="💧"
              title="Turbidity Shifts"
              text="Waves and sediment can change water clarity and influence predator and baitfish behavior."
            />

            <DynamicCard
              icon="🌙"
              title="Tidal Cycles"
              text="Incoming and outgoing tides move nutrients and baitfish through bays and coastal channels."
            />

            <DynamicCard
              icon="🌡️"
              title="Water Temperature"
              text="Seasonal temperature changes can influence the distribution and feeding activity of marine species."
            />

            <DynamicCard
              icon="💨"
              title="Wind & Waves"
              text="Wind direction and wave height can rapidly change boating conditions. Check current marine forecasts before departure."
            />
          </div>
        </section>
      )}

      <footer className="guide-footer">
        <strong>⚠️ Safety:</strong> This is an educational reference,
        not a live marine forecast. Verify current weather, marine
        warnings, navigation information, local access, fishing
        regulations and protected-area restrictions before travelling
        or fishing.
      </footer>
    </main>
  );
}

function Measurement({ icon, label, value }) {
  return (
    <div className="measurement">
      <div className="measurement-icon">{icon}</div>

      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  );
}

function DynamicCard({ icon, title, text }) {
  return (
    <article className="dynamic-card">
      <div className="dynamic-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
