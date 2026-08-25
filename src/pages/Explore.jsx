import { areas } from "../data";
import CoastalMap from "../components/CoastalMap";
import AreaCard from "../components/AreaCard";
import { useApp } from "../context/AppContext";

export default function Explore() {
  const { t } = useApp();
  return (
    <div className="page">
      <div className="page-hero">
        <span className="eyebrow">{t("exploreMakran")}</span>
        <h1>{t("coastBigger")}</h1>
        <p>{t("useMap")}</p>
      </div>
      <CoastalMap />
      <section className="section compact">
        <div className="section-head">
          <h2>{t("coastalAreas")}</h2>
        </div>
        <div className="area-grid">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
