import { Link, useParams } from "react-router-dom";
import { places, categories, loc } from "../data/places";
import NotFound from "./NotFound";
import { useApp } from "../context/AppContext";

export default function PlaceDetails() {
  const { slug } = useParams();
  const { t, lang } = useApp();
  const p = places.find((x) => x.slug === slug);
  if (!p) return <NotFound />;

  const cat = categories.find((c) => c.id === p.category);
  const nearby = places
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 4);

  const mapQuery = encodeURIComponent(
    `${loc(p.name, "en")} ${loc(p.region, "en")} Balochistan Pakistan`
  );

  return (
    <div className="page place-page">
      <Link className="tool-back" to={cat ? cat.path : "/destinations"}>
        ← {t(cat ? cat.key : "navDest")}
      </Link>

      <div className="detail-hero place-detail-hero">
        <div className="detail-cover place-cover">
          <img
            src={p.image}
            alt={loc(p.name, lang)}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <span className="eyebrow">{loc(p.region, lang)}</span>
        <h1>{loc(p.name, lang)}</h1>

        <div className="chips">
          <span>🏷️ {loc(p.tag, lang)}</span>
          {cat && <span>{cat.icon} {t(cat.key)}</span>}
          {p.tags?.map((tg) => (
            <span key={tg}>#{tg}</span>
          ))}
        </div>

        <div className="place-actions">
          <a
            className="btn primary"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🧭 {t("getDir")} →
          </a>

          {p.phone && (
            <a className="btn ghost" href={`tel:${p.phone.replace(/[^\d+]/g, "")}`}>
              📞 {t("plCallNow")} • {p.phone}
            </a>
          )}
        </div>
      </div>

      <section className="two-col">
        <div>
          <h2>{t("pdAbout")}</h2>
          <p>{loc(p.body, lang)}</p>

          <div className="safety-note" style={{ marginTop: 18 }}>
            <strong>ℹ️</strong>
            <span>
              {t("pdVerify")} {t("pdNotAd")}
            </span>
          </div>
        </div>

        <aside className="callout">
          <h3>{t("plNearby")}</h3>
          <div className="nearby-list">
            {nearby.map((n) => (
              <Link key={n.slug} to={`/place/${n.slug}`}>
                📍 {loc(n.name, lang)} →
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
