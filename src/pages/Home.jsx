import { Link } from "react-router-dom";
import { areas } from "../data";
import CoastalMap from "../components/CoastalMap";
import Feature from "../components/Feature";
import AreaCard from "../components/AreaCard";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { t } = useApp();
  return (
    <div>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow">{t("heroEyebrow")}</div>
          <h1>
            {t("heroTitle1")} <span>{t("heroTitleAccent")}</span>
            <br />
            {t("heroTitle2")}
          </h1>
          <p>{t("heroLead")}</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/explore">
              {t("ctaExplore")} →
            </Link>
            <Link className="btn ghost" to="/fisherman">
              🎣 {t("ctaFisherman")}
            </Link>
          </div>
          <div className="live-strip">
            <div>
              <b>●</b> {t("livePlatform")}
            </div>
            <div>{t("liveKnowledge")}</div>
            <div>{t("liveSafety")}</div>
            <div>{t("liveFuture")}</div>
          </div>
        </div>
        <div className="hero-ocean">
          <div className="mountains m1" />
          <div className="mountains m2" />
          <div className="wave w1" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t("oneCoast")}</span>
            <h2>{t("gateway")}</h2>
          </div>
          <p>{t("gatewayP")}</p>
        </div>
        <div className="feature-grid">
          <Feature icon="🧭" title={t("featNav")} text={t("featNavT")} to="/explore" />
          <Feature icon="🐟" title={t("featSea")} text={t("featSeaT")} to="/marine-life" />
          <Feature icon="🌊" title={t("featExplore")} text={t("featExploreT")} to="/areas" />
          <Feature icon="🚨" title={t("featAware")} text={t("featAwareT")} to="/safety" />
        </div>
      </section>

      <section className="dark-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t("coastalExplorer")}</span>
            <h2>{t("findPlace")}</h2>
          </div>
          <Link className="text-link" to="/areas">
            {t("viewAll")} →
          </Link>
        </div>
        <div className="area-grid">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
      </section>

      <section className="section map-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t("liveMap")}</span>
            <h2>{t("coastOneMap")}</h2>
          </div>
          <p>{t("mapReady")}</p>
        </div>
        <CoastalMap compact />
      </section>

      <section className="ai-banner">
        <div>
          <span className="eyebrow">{t("aiEyebrow")}</span>
          <h2>{t("askCoast")}</h2>
          <p>{t("aiP")}</p>
        </div>
        <Link className="btn light" to="/ai">
          {t("openAi")} →
        </Link>
      </section>
    </div>
  );
}
