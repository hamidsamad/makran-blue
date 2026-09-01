import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { people, chain } from "../data/people";
import { loc } from "../data/places";
import { useApp } from "../context/AppContext";

const GROUPS = ["all", "music", "poetry", "language", "folklore"];

export default function People() {
  const { t, lang } = useApp();
  const [group, setGroup] = useState("all");

  const list = useMemo(() => {
    return group === "all" ? people : people.filter((p) => p.group === group);
  }, [group]);

  return (
    <div className="page people-page">
      <div className="page-hero">
        <span className="eyebrow">{t("pplEyebrow")}</span>
        <h1>{t("pplH1")}</h1>
        <p>{t("pplLead")}</p>
      </div>

      {/* THE CHAIN: sea → fisherman → memory → poetry → music → language → identity */}
      <div className="voice-chain">
        {chain.map((c, i) => (
          <span key={c}>
            {c}
            {i < chain.length - 1 && <i> → </i>}
          </span>
        ))}
      </div>

      <div className="search-row">
        {GROUPS.map((g) => (
          <button
            key={g}
            type="button"
            className={"chip-btn " + (group === g ? "on" : "")}
            onClick={() => setGroup(g)}
          >
            {t("grp" + g.charAt(0).toUpperCase() + g.slice(1))}
          </button>
        ))}
      </div>

      <div className="people-grid">
        {list.map((p) => (
          <Link className="person-card tilt" key={p.slug} to={`/people/${p.slug}`}>
            <div className="person-art">
              {p.image ? (
                <img
                  src={p.image}
                  alt={loc(p.name, lang)}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
              <span className="person-fallback">🎙️</span>
            </div>
            <div className="person-body">
              <span className="eyebrow">{t("grp" + p.group.charAt(0).toUpperCase() + p.group.slice(1))}</span>
              <h3>{loc(p.name, lang)}</h3>
              <em>{loc(p.role, lang)}</em>
              <p>{loc(p.quote, lang)}</p>
              <b>{t("pplProfile")} →</b>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
