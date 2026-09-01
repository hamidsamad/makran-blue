import { Link } from "react-router-dom";
import { n10Route } from "../data/extraPlaces";
import { historyBlocks } from "../data/people";
import { useApp } from "../context/AppContext";

export default function History() {
  const { t, lang } = useApp();

  return (
    <div className="page history-page">
      <div className="page-hero">
        <span className="eyebrow">{t("histEyebrow")}</span>
        <h1>{t("histH1")}</h1>
        <p>{t("histLead")}</p>
      </div>

      {/* FEATURED BLOCK FROM THE COASTAL ARCHIVE */}
      {historyBlocks.map((b, i) => (
        <section className="history-block" key={i}>
          <div className="history-art">
            <img
              src={b.image}
              alt={b.title[lang] || b.title.en}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div>
            <h2>{b.title[lang] || b.title.en}</h2>
            <p>{b.text[lang] || b.text.en}</p>
          </div>
        </section>
      ))}

      {/* ANCIENT WORLD */}
      <section className="two-col">
        <div>
          <span className="eyebrow">{t("histEyebrow")}</span>
          <h2>{t("histAncientH")}</h2>
          <p>{t("histAncientP")}</p>
        </div>
      </section>

      {/* ALEXANDER & NEARCHUS */}
      <section className="two-col">
        <div>
          <span className="eyebrow">325 BCE</span>
          <h2>{t("histAlexanderH")}</h2>
          <p>{t("histAlexanderP")}</p>
        </div>
      </section>

      {/* OMANI GWADAR */}
      <section className="two-col">
        <div>
          <span className="eyebrow">1783 → 1958</span>
          <h2>{t("histOmaniH")}</h2>
          <p>{t("histOmaniP")}</p>
        </div>
      </section>

      {/* FAITH */}
      <section className="two-col">
        <div>
          <span className="eyebrow">{t("navCulture")}</span>
          <h2>{t("histFaithH")}</h2>
          <p>{t("histFaithP")}</p>
        </div>
      </section>

      {/* MODERN ERA */}
      <section className="two-col">
        <div>
          <span className="eyebrow">2002 →</span>
          <h2>{t("histModernH")}</h2>
          <p>{t("histModernP")}</p>
        </div>
      </section>

      {/* N-10 ROUTE STRIP */}
      <section className="route-section">
        <div className="route-heading">
          <span className="eyebrow">{t("navDest")}</span>
          <h2>{t("routeTitle")}</h2>
          <p>{t("routeSub")}</p>
        </div>

        <div className="route-scroll">
          {n10Route.map((stop, i) => (
            <div className="route-stop" key={stop}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <span>{stop}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS LINKS */}
      <div className="history-links">
        <Link className="btn primary" to="/people">
          🎙️ {t("navPeople")} →
        </Link>
        <Link className="btn ghost" to="/astola">
          🏝️ {t("navAstola")} →
        </Link>
        <Link className="btn ghost" to="/destinations">
          🧭 {t("navDest")} →
        </Link>
      </div>
    </div>
  );
}
