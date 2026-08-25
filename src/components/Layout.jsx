import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useApp } from "../context/AppContext";

function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const { t, lang, setLang, theme, toggleTheme } = useApp();

  const closeMenu = () => setMenu(false);

  const links = [
    ["/", t("navHome"), true],
    ["/explore", t("navExplore")],
    ["/areas", t("navAreas")],
    ["/marine-life", t("navMarine")],
    ["/culture", t("navCulture")],
    ["/safety", "Safety"],
    ["/ai", "AI Guide"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  const langButtons = [
    ["en", "EN"],
    ["ur", "اردو"],
    ["bal", "بلوچی"],
  ];

  return (
    <div className="app-shell">
      {/* ANIMATED OCEAN BACKGROUND */}
      <div className="ocean-bg" aria-hidden="true">
        <div className="caustic"></div>
        <div className="wave-layer w-a"></div>
        <div className="wave-layer w-b"></div>
        <div className="wave-layer w-c"></div>
        <div className="bubbles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ "--i": i }}></span>
          ))}
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="site-header">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">MB</span>
          <span>
            <strong>MAKRAN</strong>
            <small>BLUE</small>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          {menu ? "✕" : "☰"}
        </button>

        <nav className={menu ? "main-nav open" : "main-nav"}>
          {links.map(([to, label, end]) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}

          <Link
            className="nav-cta"
            to="/fisherman"
            onClick={closeMenu}
          >
            🎣 {t("ctaFisherman")}
          </Link>
        </nav>

        <div className="header-tools">
          {/* LANGUAGE CHANGER */}
          <div className="lang-switch">
            {langButtons.map(([code, label]) => (
              <button
                key={code}
                className={lang === code ? "on" : ""}
                onClick={() => setLang(code)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* THEME CHANGER */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span>
              {theme === "dark"
                ? t("themeDark")
                : t("themeLight")}
            </span>
          </button>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="site-main">{children}</main>

      {/* ================= FOOTER ================= */}
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
            <h4>Tools</h4>
            <Link to="/fisherman">🎣 {t("ctaFisherman")}</Link>
            <Link to="/fisherman/compass">🧭 Compass</Link>
            <Link to="/fisherman/weather">🌤️ Weather</Link>
            <Link to="/fisherman/fishing-guide">
              🎣 Fishing Guide
            </Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/ai">🤖 AI Guide</Link>
            <Link to="/safety">🚨 Safety</Link>
            <Link to="/fisherman/fish-identifier">
              🐟 Fish Identifier
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Makran Blue
          {" • "}
          <br /> <br />
          Founded By <br />
          Ahmad Nadeem & Hamid Samad
        </div>
      </footer>
    </div>
  );
}

export default Layout;
