import { Link } from "react-router-dom";
import { places, categories, loc } from "../data/places";
import NotFound from "./NotFound";
import { useApp } from "../context/AppContext";

export default function PlacesCategory({ category }) {
  const { t, lang } = useApp();

  const cat = categories.find((c) => c.id === category);
  if (!cat) return <NotFound />;

  const list = places.filter((p) => p.category === category);

  return (
    <div className="page places-page">
      <div className="page-hero">
        <span className="eyebrow">
          {cat.icon} {t(cat.key)}
        </span>
        <h1>{t(cat.key)}</h1>
        <p>{t("plCatLead")}</p>
        <div className="chips">
          <span className="species-count">
            {t("plCount", { count: list.length })}
          </span>
        </div>
      </div>

      <div className="places-grid">
        {list.map((p) => (
          <Link className="place-card tilt" key={p.slug} to={`/place/${p.slug}`}>
            <div className="place-art">
              <img
                src={p.image}
                alt={loc(p.name, lang)}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="area-wave"></div>
            </div>

            <div>
              <span className="eyebrow">{loc(p.region, lang)}</span>
              <h3>{loc(p.name, lang)}</h3>
              <small className="place-tag">{loc(p.tag, lang)}</small>
              <p>{loc(p.short, lang)}</p>

              {p.phone && (
                <span className="place-phone">📞 {p.phone}</span>
              )}

              <b>
                {t("plReadMore")} →
              </b>
            </div>
          </Link>
        ))}
      </div>

      <div className="history-links">
        {categories
          .filter((c) => c.id !== category)
          .map((c) => (
            <Link className="btn ghost" key={c.id} to={c.path}>
              {c.icon} {t(c.key)} →
            </Link>
          ))}
      </div>
    </div>
  );
}
