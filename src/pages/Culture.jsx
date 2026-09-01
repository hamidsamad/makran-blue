import CultureCard from "../components/CultureCard";
import { useApp } from "../context/AppContext";

const whatsappLink =
  "https://wa.me/923336661465?text=Hello%20Makran%20Blue%2C%20I%20want%20to%20contribute%20a%20story%20about%20our%20culture.";

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
        <CultureCard icon="🛶" title={t("tradTitle")} text={t("tradT")} href={whatsappLink} />
        <CultureCard icon="🍲" title={t("foodTitle")} text={t("foodT")} href={whatsappLink} />
        <CultureCard
          icon="🎵"
          title={t("culInstrumentsT")}
          text={t("culInstrumentsTx")}
          href={whatsappLink}
        />
        <CultureCard icon="🏔️" title={t("landTitle")} text={t("landT")} href={whatsappLink} />
      </div>

      <section className="ai-banner" style={{ marginTop: 26 }}>
        <div>
          <span className="eyebrow">{t("cultureEyebrow")}</span>
          <h2>Contribute to Makran Blue</h2>
          <p>
            Share a family story, a recipe, a song, a fishing memory, or a local tradition with our community archive.
          </p>
        </div>
        <a className="btn light" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp us →
        </a>
      </section>
    </div>
  );
}
