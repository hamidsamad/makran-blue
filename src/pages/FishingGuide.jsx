import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

const locations = {
  Gwadar: {
    nameKey: "areaGwadar",
    code: "GWD",
    regionKey: "regionWestern",
    depth: "45–120 m",
    conditionKey: "condGood",
    wind: "12 km/h",
    wave: "0.8 m",
    temp: "27°C",
    bestTime: "05:30 – 09:00",
    speciesKeys: ["fishTuna", "fishMackerel", "fishBarra"],
    adviceKey: "fgAdviceGwadar",
  },

  Pasni: {
    nameKey: "areaPasni",
    code: "PSN",
    regionKey: "regionCentral",
    depth: "20–70 m",
    conditionKey: "condGood",
    wind: "10 km/h",
    wave: "0.6 m",
    temp: "28°C",
    bestTime: "06:00 – 10:00",
    speciesKeys: ["fishGrouper", "fishCroaker", "fishPrawns"],
    adviceKey: "fgAdvicePasni",
  },

  Ormara: {
    nameKey: "areaOrmara",
    code: "ORM",
    regionKey: "regionEastern",
    depth: "10–55 m",
    conditionKey: "condModerate",
    wind: "16 km/h",
    wave: "1.1 m",
    temp: "27°C",
    bestTime: "05:45 – 08:30",
    speciesKeys: ["fishMullet", "fishBream", "fishRibbon"],
    adviceKey: "fgAdviceOrmara",
  },

  Jiwani: {
    nameKey: "areaJiwani",
    code: "JWN",
    regionKey: "regionWestern",
    depth: "10–60 m",
    conditionKey: "condGood",
    wind: "9 km/h",
    wave: "0.5 m",
    temp: "28°C",
    bestTime: "06:15 – 09:30",
    speciesKeys: ["fishSnapper", "fishSeabass", "fishMudCrab"],
    adviceKey: "fgAdviceJiwani",
  },
};

const species = [
  { nameKey: "fishYellowfin", icon: "🐟", hab: "yellowfinHab", beh: "yellowfinBeh", con: "yellowfinCon", are: "yellowfinAre" },
  { nameKey: "fishKing", icon: "🐟", hab: "kingHab", beh: "kingBeh", con: "kingCon", are: "kingAre" },
  { nameKey: "fishBlackGrouper", icon: "🐟", hab: "grouperHab", beh: "grouperBeh", con: "grouperCon", are: "grouperAre" },
  { nameKey: "fishRedSnapper", icon: "🐟", hab: "redsnapperHab", beh: "redsnapperBeh", con: "redsnapperCon", are: "redsnapperAre" },
  { nameKey: "fishQueen", icon: "🐟", hab: "queenfishHab", beh: "queenfishBeh", con: "queenfishCon", are: "queenfishAre" },
  { nameKey: "fishBarramundi", icon: "🐟", hab: "barramundiHab", beh: "barramundiBeh", con: "barramundiCon", are: "barramundiAre" },
  { nameKey: "fishMullet", icon: "🐟", hab: "mulletHab", beh: "mulletBeh", con: "mulletCon", are: "mulletAre" },
  { nameKey: "fishCroaker", icon: "🐟", hab: "croakerHab", beh: "croakerBeh", con: "croakerCon", are: "croakerAre" },
  { nameKey: "fishBarra", icon: "🐟", hab: "barracudaHab", beh: "barracudaBeh", con: "barracudaCon", are: "barracudaAre" },
  { nameKey: "fishTigerShrimp", icon: "🦐", hab: "tigershrimpHab", beh: "tigershrimpBeh", con: "tigershrimpCon", are: "tigershrimpAre" },
  { nameKey: "fishMudCrab", icon: "🦀", hab: "mudcrabHab", beh: "mudcrabBeh", con: "mudcrabCon", are: "mudcrabAre" },
  { nameKey: "fishRibbon", icon: "🐟", hab: "ribbonfishHab", beh: "ribbonfishBeh", con: "ribbonfishCon", are: "ribbonfishAre" },
  { nameKey: "fishIndian", icon: "🐟", hab: "indianmackerelHab", beh: "indianmackerelBeh", con: "indianmackerelCon", are: "indianmackerelAre" },
  { nameKey: "fishSardine", icon: "🐟", hab: "sardineHab", beh: "sardineBeh", con: "sardineCon", are: "sardineAre" },
  { nameKey: "fishSalmon", icon: "🐟", hab: "salmonHab", beh: "salmonBeh", con: "salmonCon", are: "salmonAre" },
  { nameKey: "fishTrevally", icon: "🐟", hab: "trevallyHab", beh: "trevallyBeh", con: "trevallyCon", are: "trevallyAre" },
  { nameKey: "fishGt", icon: "🐟", hab: "gtHab", beh: "gtBeh", con: "gtCon", are: "gtAre" },
  { nameKey: "fishEmperor", icon: "🐟", hab: "emperorHab", beh: "emperorBeh", con: "emperorCon", are: "emperorAre" },
  { nameKey: "fishBream", icon: "🐟", hab: "seabreamHab", beh: "seabreamBeh", con: "seabreamCon", are: "seabreamAre" },
  { nameKey: "fishSeabass", icon: "🐟", hab: "seabassHab", beh: "seabassBeh", con: "seabassCon", are: "seabassAre" },
  { nameKey: "fishSnapper", icon: "🐟", hab: "snapperHab", beh: "snapperBeh", con: "snapperCon", are: "snapperAre" },
  { nameKey: "fishSpanish", icon: "🐟", hab: "spanishHab", beh: "spanishBeh", con: "spanishCon", are: "spanishAre" },
  { nameKey: "fishNeedle", icon: "🐟", hab: "needlefishHab", beh: "needlefishBeh", con: "needlefishCon", are: "needlefishAre" },
  { nameKey: "fishGar", icon: "🐟", hab: "garfishHab", beh: "garfishBeh", con: "garfishCon", are: "garfishAre" },
  { nameKey: "fishFlathead", icon: "🐟", hab: "flatheadHab", beh: "flatheadBeh", con: "flatheadCon", are: "flatheadAre" },
  { nameKey: "fishPrawns", icon: "🦐", hab: "prawnsHab", beh: "prawnsBeh", con: "prawnsCon", are: "prawnsAre" },
  { nameKey: "fishBlueCrab", icon: "🦀", hab: "bluecrabHab", beh: "bluecrabBeh", con: "bluecrabCon", are: "bluecrabAre" },
  { nameKey: "fishLobster", icon: "🦞", hab: "lobsterHab", beh: "lobsterBeh", con: "lobsterCon", are: "lobsterAre" },
  { nameKey: "fishOctopus", icon: "🐙", hab: "octopusHab", beh: "octopusBeh", con: "octopusCon", are: "octopusAre" },
  { nameKey: "fishSquid", icon: "🦑", hab: "squidHab", beh: "squidBeh", con: "squidCon", are: "squidAre" },
  { nameKey: "fishPomfret", icon: "🐟", hab: "pomfretHab", beh: "pomfretBeh", con: "pomfretCon", are: "pomfretAre" },
  { nameKey: "fishSole", icon: "🐟", hab: "soleHab", beh: "soleBeh", con: "soleCon", are: "soleAre" },
  { nameKey: "fishCatfish", icon: "🐟", hab: "catfishHab", beh: "catfishBeh", con: "catfishCon", are: "catfishAre" },
  { nameKey: "fishMilk", icon: "🐟", hab: "milkfishHab", beh: "milkfishBeh", con: "milkfishCon", are: "milkfishAre" },
  { nameKey: "fishCobia", icon: "🐟", hab: "cobiaHab", beh: "cobiaBeh", con: "cobiaCon", are: "cobiaAre" },
  { nameKey: "fishWahoo", icon: "🐟", hab: "wahooHab", beh: "wahooBeh", con: "wahooCon", are: "wahooAre" },
  { nameKey: "fishDorado", icon: "🐟", hab: "doradoHab", beh: "doradoBeh", con: "doradoCon", are: "doradoAre" },
  { nameKey: "fishBlackPomfret", icon: "🐟", hab: "blackpomfretHab", beh: "blackpomfretBeh", con: "blackpomfretCon", are: "blackpomfretAre" },
  { nameKey: "fishSilverPomfret", icon: "🐟", hab: "silverpomfretHab", beh: "silverpomfretBeh", con: "silverpomfretCon", are: "silverpomfretAre" },
  { nameKey: "fishThreadfin", icon: "🐟", hab: "threadfinHab", beh: "threadfinBeh", con: "threadfinCon", are: "threadfinAre" },
];

const tabs = [
  { id: "overview", labelKey: "tabOverview" },
  { id: "seasons", labelKey: "tabSeasons" },
  { id: "species", labelKey: "speciesProfile" },
  { id: "dynamics", labelKey: "tabDynamics" },
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
          <span className="overline">{t("fgEyebrow")}</span>

          <h1>
            {t("fgH1a")}
            <br />
            <i>{t("fgH1b")}</i>
          </h1>

          <p>{t("fgLead")}</p>

          <div className="hero-meta">
            <span>{t("regionMakran")}</span>
            <span>{t("fgTag2")}</span>
          </div>
        </div>
      </section>

      <section className="location-panel">
        <div className="panel-heading">
          <div>
            <span>{t("fgSelectArea")}</span>
            <h2>{t("fgSectors")}</h2>
          </div>

          <div className="coordinates">
            {t("regionMakran")}
            <br />
            {t("fgTag2")}
          </div>
        </div>

        <div className="sector-navigation">
          {Object.entries(locations).map(([name, location]) => (
            <button
              key={name}
              type="button"
              className={active === name ? "sector active" : "sector"}
              onClick={() => setActive(name)}
            >
              <small>{location.code}</small>
              <strong>{t(location.nameKey)}</strong>
              <span>{t(location.regionKey)}</span>
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
            {t(item.labelKey)}
          </button>
        ))}
      </section>

      {tab === "overview" && (
        <>
          <section className="marine-grid">
            <div className="conditions-panel">
              <div className="panel-title">
                <div>
                  <span>{t("fgCondEyebrow")}</span>
                  <h2>{t("fgWaterProfile")}</h2>
                </div>

                <div className="condition-good">
                  ● {t(data.conditionKey)}
                </div>
              </div>

              <div className="measurement-grid">
                <Measurement icon="〰" label={t("mWave")} value={data.wave} />
                <Measurement icon="◉" label={t("mWind")} value={data.wind} />
                <Measurement icon="°" label={t("mSeaTemp")} value={data.temp} />
                <Measurement icon="↓" label={t("mDepth")} value={data.depth} />
              </div>

              <div className="wave-visual">
                <div className="wave-line" />
                <div className="wave-line second" />
                <div className="wave-line third" />
                <span>{t("fgWaveMove")}</span>
              </div>
            </div>

            <div className="species-panel">
              <div className="panel-title">
                <div>
                  <span>{t("fgTargetEyebrow")}</span>
                  <h2>{t("fgLookFor")}</h2>
                </div>

                <div className="fish-symbol">🐟</div>
              </div>

              <div className="species-names">
                {data.speciesKeys.map((fishKey, index) => (
                  <div key={fishKey}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{t(fishKey)}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="strategy">
            <div className="strategy-number">02</div>

            <div className="strategy-content">
              <span>{t("fgWindow")}</span>

              <h2>{t("fgDeparture")}</h2>

              <strong>{data.bestTime}</strong>

              <p>{t("fgPlanningNote")}</p>
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
              <span>{t("fgIntel")}</span>

              <h3>
                {t("fgStrategy", { area: t(data.nameKey) })}
              </h3>

              <p>{t(data.adviceKey)}</p>
            </div>
          </section>
        </>
      )}

      {tab === "seasons" && (
        <section className="information-section">
          <span className="section-label">{t("fgSeasonEyebrow")}</span>

          <h2>{t("fgSeasonH")}</h2>

          <div className="information-list">
            <article>
              <span>01</span>
              <div>
                <h3>{t("fgSeason1T")}</h3>
                <p>{t("fgSeason1P")}</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>{t("fgSeason2T")}</h3>
                <p>{t("fgSeason2P")}</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>{t("fgSeason3T")}</h3>
                <p>{t("fgSeason3P")}</p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>{t("fgSeason4T")}</h3>
                <p>{t("fgSeason4P")}</p>
              </div>
            </article>
          </div>
        </section>
      )}

      {tab === "species" && (
        <section className="information-section">
          <span className="section-label">{t("fgDbEyebrow")}</span>

          <h2>{t("fgDetailedH")}</h2>

          <div className="species-count">
            🎣 {t("fgSpeciesCount", { count: species.length })}
          </div>

          <div className="detailed-species-grid">
            {species.map((fish, index) => (
              <article className="detailed-species-card" key={fish.nameKey}>
                <div className="species-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {fish.icon} {t(fish.nameKey)}
                </h3>

                <p>
                  <strong>{t("habitat")}</strong>
                  {t(fish.hab)}
                </p>

                <p>
                  <strong>{t("lblBehavior")}</strong>
                  {t(fish.beh)}
                </p>

                <p>
                  <strong>{t("conditions")}</strong>
                  {t(fish.con)}
                </p>

                <p>
                  <strong>{t("lblArea")}</strong>
                  {t(fish.are)}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {tab === "dynamics" && (
        <section className="information-section">
          <span className="section-label">{t("fgDynEyebrow")}</span>

          <h2>{t("fgDynH")}</h2>

          <div className="dynamics-grid">
            <DynamicCard
              icon="🌊"
              title={t("fgDyn1T")}
              text={t("fgDyn1P")}
            />

            <DynamicCard
              icon="💧"
              title={t("fgDyn2T")}
              text={t("fgDyn2P")}
            />

            <DynamicCard
              icon="🌙"
              title={t("fgDyn3T")}
              text={t("fgDyn3P")}
            />

            <DynamicCard
              icon="🌡️"
              title={t("fgDyn4T")}
              text={t("fgDyn4P")}
            />

            <DynamicCard
              icon="💨"
              title={t("fgDyn5T")}
              text={t("fgDyn5P")}
            />
          </div>
        </section>
      )}

      <footer className="guide-footer">
        <strong>⚠️ {t("fgSafetyT")}</strong> {t("fgSafetyP")}
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
