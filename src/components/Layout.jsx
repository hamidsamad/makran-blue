import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useApp } from "../context/AppContext";

const primary = [
  { to: "/", key: "navHome" },
  { to: "/explore", key: "navExplore" },
  { to: "/areas", key: "navAreas" },
  { to: "/marine-life", key: "navMarine" },
  { to: "/history", key: "navHistory" },
  { to: "/people", key: "navPeople" },
  { to: "/culture", key: "navCulture" },
  { to: "/astola", key: "navAstola" },
];

const coast = [
  { to: "/destinations", key: "navDest", icon: "🧭" },
  { to: "/beaches", key: "navBeaches", icon: "🏖️" },
  { to: "/picnic", key: "navPicnic", icon: "🧺" },
  { to: "/hills", key: "navHills", icon: "⛰️" },
  { to: "/hotels", key: "navHotels", icon: "🏨" },
  { to: "/stays", key: "navStays", icon: "🛏️" },
];

const services = [
  { to: "/fisherman", key: "ctaFisherman", icon: "🎣" },
  { to: "/safety", key: "navSafety", icon: "🚨" },
  { to: "/ai", key: "navAI", icon: "🤖" },
  { to: "/about", key: "about", icon: "ℹ️" },
  { to: "/contact", key: "navContact", icon: "📧" },
];

export default function Layout({ children }) {
  const { t, theme, toggleTheme, lang, setLang } = useApp();
  const [open, setOpen] = useState(false);
  const [megaOn, setMegaOn] = useState(false);

  const close = () => {
    setOpen(false);
    setMegaOn(false);
  };

  return (
    <div className="app-shell">
      <div className="ocean-bg" aria-hidden>
        <div className="caustic" />
        <div className="wave-layer w-a" />
        <div className="wave-layer w-b" />
        <div className="wave-layer w-c" />
        <div className="bubbles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ "--i": i }} />
          ))}
        </div>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-mark">MB</span>
          <span>
            <strong>MAKRAN</strong>
            <small>BLUE</small>
          </span>
        </Link>

        <button
          type="button"
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav id="primary-nav" className={"main-nav " + (open ? "open" : "")}>
          {primary.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={close}
            >
              {t(n.key)}
            </NavLink>
          ))}

          <div className={"mega-wrap " + (megaOn ? "on" : "")}>
            <button
              type="button"
              className="mega-btn"
              onClick={() => setMegaOn((v) => !v)}
            >
              {t("navCoast")} ▾
            </button>

            <div className="mega">
              <div className="mega-col">
                <h5>{t("navCoast")}</h5>
                {coast.map((m) => (
                  <Link key={m.to} to={m.to} onClick={close}>
                    <i>{m.icon}</i> {t(m.key)}
                  </Link>
                ))}
              </div>

              <div className="mega-col">
                <h5>{t("footerServices")}</h5>
                {services.map((m) => (
                  <Link key={m.to} to={m.to} onClick={close}>
                    <i>{m.icon}</i> {t(m.key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link className="nav-cta" to="/fisherman" onClick={close}>
            🎣 {t("ctaFisherman")}
          </Link>
        </nav>

        <div className="header-tools">
          <div className="lang-switch">
            {[
              { id: "en", label: "EN" },
              { id: "ur", label: "اردو" },
              { id: "bal", label: "بلوچی" },
            ].map((l) => (
              <button
                key={l.id}
                type="button"
                className={lang === l.id ? "on" : ""}
                onClick={() => setLang(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span>{theme === "dark" ? t("themeDark") : t("themeLight")}</span>
          </button>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer footer-rich">
        <div className="footer-brand-col">
          <div className="brand">
            <span className="brand-mark">MB</span>
            <span>
              <strong>MAKRAN</strong>
              <small>BLUE</small>
            </span>
          </div>
          <p>{t("footerCopy")}</p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>{t("navExplore")}</h4>
            <Link to="/explore">{t("navExplore")}</Link>
            <Link to="/areas">{t("navAreas")}</Link>
            <Link to="/marine-life">{t("navMarine")}</Link>
            <Link to="/culture">{t("navCulture")}</Link>
          </div>

          <div className="footer-col">
            <h4>{t("navCoast")}</h4>
            <Link to="/destinations">{t("navDest")}</Link>
            <Link to="/beaches">{t("navBeaches")}</Link>
            <Link to="/picnic">{t("navPicnic")}</Link>
            <Link to="/hills">{t("navHills")}</Link>
            <Link to="/hotels">{t("navHotels")}</Link>
            <Link to="/stays">{t("navStays")}</Link>
          </div>

          <div className="footer-col">
            <h4>{t("discover")}</h4>
            <Link to="/history">{t("navHistory")}</Link>
            <Link to="/people">{t("navPeople")}</Link>
            <Link to="/astola">{t("navAstola")}</Link>
          </div>

          <div className="footer-col">
            <h4>{t("footerServices")}</h4>
            <Link to="/fisherman">🎣 {t("ctaFisherman")}</Link>
            <Link to="/safety">🚨 {t("navSafety")}</Link>
            <Link to="/ai">🤖 {t("navAI")}</Link>
            <Link to="/about">{t("about")}</Link>
            <Link to="/contact">{t("navContact")}</Link>
          </div>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Makran Blue
          {" • "}
          <br /> <br />
          {t("footerFounded")} <br />
          Ahmad Nadeem & Hamid Samad
        </div>
      </footer>
    </div>
  );
}
