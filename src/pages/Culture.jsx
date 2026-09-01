import { Link } from "react-router-dom";
import CultureCard from "../components/CultureCard";
import { useApp } from "../context/AppContext";

export default function Culture() {
  const { t } = useApp();
  return (
    <div className="page">
      <div className="page-hero">
        <span className="eyebrow">{t("cultureEyebrow")}</span>
        <h1>{t("cultureH")}</h1>
        <p>{t("cultureP")}</p>
      </div>
      <div className="culture-grid">
        <CultureCard icon="🛶" title={t("tradTitle")} text={t("tradT")} />
        <CultureCard icon="🍲" title={t("foodTitle")} text={t("foodT")} />
        <CultureCard
          icon="🎵"
          title={t("culInstrumentsT")}
          text={t("culInstrumentsTx")}
        />
        <CultureCard icon="🏔️" title={t("landTitle")} text={t("landT")} />
      </div>

      <section className="ai-banner" style={{ marginTop: 26 }}>
        <div>
          <span className="eyebrow">{t("pplEyebrow")}</span>
          <h2>{t("pplH1")}</h2>
          <p>{t("pplLead")}</p>
        </div>
        <Link className="btn light" to="/people">
          {t("pplMeet")} →
        </Link>
      </section>
    </div>
  );
}
