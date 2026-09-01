import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Astola() {
  const { t } = useApp();

  return (
    <div className="page astola-page">
      <div className="detail-hero area-detail-hero astola-hero">
        <div className="detail-cover astola-cover">
          <img
            src="/images/astola.jpg"
            alt={t("navAstola")}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <span className="eyebrow">{t("astEyebrow")}</span>
        <h1>{t("astH1")}</h1>
        <p>{t("astLead")}</p>

        <div className="chips ast-facts">
          <span>🛡️ {t("astFactMpa")}</span>
          <span>📏 39 {t("astFactKm")}</span>
          <span>🌊 ~400 {t("astFactArea")}</span>
          <span>⛰️ 7 {t("astFactHills")}</span>
        </div>
      </div>

      {/* LEGEND & TEMPLE */}
      <section className="two-col">
        <div>
          <span className="eyebrow">{t("navHistory")}</span>
          <h2>{t("astLegendH")}</h2>
          <p>{t("astLegendP")}</p>
        </div>
      </section>

      {/* NATURE */}
      <section className="two-col">
        <div>
          <span className="eyebrow">{t("navMarine")}</span>
          <h2>{t("astNatureH")}</h2>
          <p>{t("astNatureP")}</p>

          <div className="info-grid">
            <div className="info-card">
              <span>🐢</span>
              <div>
                <h3>800+</h3>
                <p>{t("astFactTurtle")}</p>
              </div>
            </div>
            <div className="info-card">
              <span>🐍</span>
              <div>
                <h3>{t("astFactViperT")}</h3>
                <p>{t("astFactViperP")}</p>
              </div>
            </div>
            <div className="info-card">
              <span>🪸</span>
              <div>
                <h3>~25</h3>
                <p>{t("astFactCoral")}</p>
              </div>
            </div>
            <div className="info-card">
              <span>🐋</span>
              <div>
                <h3>{t("astFactWhaleT")}</h3>
                <p>{t("astFactWhaleP")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISITING */}
      <section className="two-col">
        <div>
          <span className="eyebrow">{t("navDest")}</span>
          <h2>{t("astVisitH")}</h2>
          <p>{t("astVisitP")}</p>
        </div>
      </section>

      {/* RULES */}
      <div className="marine-notice">
        <span>🛡️</span>
        <div>
          <strong>{t("astRulesH")}</strong>
          <p>{t("astRulesP")}</p>
        </div>
      </div>

      <div className="history-links">
        <Link className="btn primary" to="/fisherman/fishing-guide">
          🎣 {t("astPlanBtn")}
        </Link>
        <Link className="btn ghost" to="/place/pasni-stay">
          🛏️ {t("navStays")} →
        </Link>
      </div>
    </div>
  );
}
