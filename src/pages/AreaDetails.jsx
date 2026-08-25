import { useParams } from "react-router-dom";
import { areas } from "../data";
import CoastalMap from "../components/CoastalMap";
import Info from "../components/Info";
import NotFound from "./NotFound";
import { useApp } from "../context/AppContext";

export default function AreaDetails() {
  const { slug } = useParams();
  const { t } = useApp();
  const area = areas.find((a) => a.slug === slug);
  if (!area) return <NotFound />;

  return (
    <div className="page">
      <div className="detail-hero area-detail-hero">
        <div className="detail-cover">
          <img src={area.image} alt={t(area.nameKey)} />
        </div>
        <span className="eyebrow">{t(area.regionKey)}</span>
        <h1>{t(area.nameKey)}</h1>
        <p>{t(area.descKey)}</p>
        <div className="chips">
          <span>🎣 {t("chipFishing")}</span>
          <span>🌊 {t("chipCoast")}</span>
          <span>🗺️ {t("chipMap")}</span>
        </div>
      </div>
      <section className="two-col">
        <div>
          <h2>
            {t("about")} {t(area.nameKey)}
          </h2>
          <p>{t("areaBody")}</p>
          <div className="info-grid">
            <Info icon="🎣" title={t("fishing")} text={t("fishingT")} />
            <Info icon="🌤️" title={t("conditions")} text={t("conditionsT")} />
            <Info icon="❤️" title={t("culture")} text={t("cultureT")} />
            <Info icon="🧭" title={t("navigation")} text={t("navigationT")} />
          </div>
        </div>
        <CoastalMap focus={area} />
      </section>
    </div>
  );
}
