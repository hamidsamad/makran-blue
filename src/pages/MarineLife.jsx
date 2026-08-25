import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fish } from "../data";
import { useApp } from "../context/AppContext";

export default function MarineLife() {
  const { t } = useApp();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const list = useMemo(() => {
    return fish.filter((f) => {
      const name = t(f.nameKey).toLowerCase();
      const matchQ = !q || name.includes(q.toLowerCase()) || f.sci.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "all" || f.catKey === cat;
      return matchQ && matchC;
    });
  }, [q, cat, t]);

  return (
    <div className="page">
      <div className="page-hero">
        <span className="eyebrow">{t("marineEyebrow")}</span>
        <h1>{t("marineH")}</h1>
        <p>{t("marineP")}</p>
      </div>
      <div className="search-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("searchSpecies")}
        />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="all">{t("allCat")}</option>
          <option value="catPelagic">{t("catPelagic")}</option>
          <option value="catDemersal">{t("catDemersal")}</option>
          <option value="catReef">{t("catReef")}</option>
        </select>
      </div>
      <div className="fish-grid">
        {list.map((f) => (
          <Link className="fish-card tilt" key={f.id} to={`/marine-life/${f.id}`}>
            <div className="fish-art">
              <img src={f.image} alt={t(f.nameKey)} />
            </div>
            <div>
              <span className="eyebrow">{t(f.catKey)}</span>
              <h3>{t(f.nameKey)}</h3>
              <em>{f.sci}</em>
              <p>{t(f.descKey)}</p>
              <b>{t("viewSpecies")} →</b>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
