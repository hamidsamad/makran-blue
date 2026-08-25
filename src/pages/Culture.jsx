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
        <CultureCard icon="🎵" title={t("musicTitle")} text={t("musicT")} />
        <CultureCard icon="🏔️" title={t("landTitle")} text={t("landT")} />
      </div>
    </div>
  );
}
