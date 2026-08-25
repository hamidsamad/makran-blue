import { Link, useParams } from "react-router-dom";
import { fish } from "../data";
import Info from "../components/Info";
import NotFound from "./NotFound";
import { useApp } from "../context/AppContext";

export default function FishDetails() {
  const { id } = useParams();
  const { t } = useApp();
  const f = fish.find((x) => x.id === Number(id));
  if (!f) return <NotFound />;

  return (
    <div className="page">
      <div className="detail-hero fish-detail">
        <div className="fish-art big">
          <img src={f.image} alt={t(f.nameKey)} />
        </div>
        <div>
          <span className="eyebrow">{t(f.catKey)}</span>
          <h1>{t(f.nameKey)}</h1>
          <em>{f.sci}</em>
          <p>{t(f.descKey)}</p>
        </div>
      </div>
      <div className="two-col">
        <section>
          <h2>{t("speciesProfile")}</h2>
          <div className="info-grid">
            <Info icon="🌊" title={t("habitat")} text={t("habitatT")} />
            <Info icon="📅" title={t("season")} text={t("seasonT")} />
            <Info icon="🎣" title={t("fishGuide")} text={t("fishGuideT")} />
            <Info icon="🌱" title={t("conservation")} text={t("conservationT")} />
          </div>
        </section>
        <aside className="callout">
          <h3>{t("aiId")}</h3>
          <p>{t("aiIdP")}</p>
          <Link className="btn primary" to="/fisherman/fish-identifier">
            {t("tryId")}
          </Link>
        </aside>
      </div>
    </div>
  );
}
