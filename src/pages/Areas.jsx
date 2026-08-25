import { areas } from "../data";
import AreaCard from "../components/AreaCard";
import { useApp } from "../context/AppContext";

export default function Areas() {
  const { t } = useApp();
  return (
    <div className="page">
      <div className="page-hero">
        <span className="eyebrow">{t("coastalAreasEyebrow")}</span>
        <h1>{t("exploreCoastline")}</h1>
        <p>{t("areasIntro")}</p>
      </div>
      <div className="area-grid">
        {areas.map((a) => (
          <AreaCard key={a.slug} area={a} />
        ))}
      </div>
    </div>
  );
}
