import { Link, useParams } from "react-router-dom";
import { people } from "../data/people";
import { loc } from "../data/places";
import NotFound from "./NotFound";
import { useApp } from "../context/AppContext";

export default function PersonDetails() {
  const { slug } = useParams();
  const { t, lang } = useApp();
  const p = people.find((x) => x.slug === slug);
  if (!p) return <NotFound />;

  const works = p.albums || p.books || [];

  return (
    <div className="page person-page">
      <Link className="tool-back" to="/people">
        ← {t("pplBack")}
      </Link>

      <div className="detail-hero person-hero">
        <div className="person-art big">
          {p.image ? (
            <img
              src={p.image}
              alt={loc(p.name, lang)}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : null}
          <span className="person-fallback">🎙️</span>
        </div>

        <div>
          <span className="eyebrow">
            {t("grp" + p.group.charAt(0).toUpperCase() + p.group.slice(1))}
          </span>
          <h1>{loc(p.name, lang)}</h1>
          <em>{loc(p.role, lang)}</em>

          <div className="chips">
            <span>🕰️ {t("lblYears")}: {typeof p.years === "string" ? p.years : loc(p.years, lang)}</span>
            <span>📍 {loc(p.place, lang)}</span>
          </div>

          <blockquote className="person-quote">
            “{loc(p.quote, lang)}”
          </blockquote>
        </div>
      </div>

      <section className="two-col">
        <div>
          <h2>{t("pplStory")}</h2>
          <p>{loc(p.short, lang)}</p>
          <p>{loc(p.body, lang)}</p>
        </div>

        {works.length > 0 && (
          <aside className="callout">
            <h3>{t("lblWorks")}</h3>
            <ul className="works-list">
              {works.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </aside>
        )}
      </section>
    </div>
  );
}
