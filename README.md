# Makran Blue

A coastal knowledge platform for the Makran coast of Balochistan —
ocean theme, **theme changer** (deep ocean / beach light) and
**language changer** (English / اردو / بلوچی, full RTL support),
wired through a single `AppContext`.

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build
```

## Project structure

```
index.html                     fonts, favicon, early theme/lang restore (mb-theme / mb-lang)
src/
  main.jsx                     imports index.css → App.css → pages.css
  App.jsx                      AppProvider + routes
  AppContext.jsx (in context/) theme + language context (yours, unchanged)
  i18n.js                      dictionaries en/ur/bal + rtlLangs (unchanged)
  data.js                      areas / fish / coastalLocations with i18n keys (unchanged)
  index.css                    ocean theme (unchanged)
  App.css                      (unchanged)
  pages.css                    all page-specific styles (compass, safety, marine
                               weather, fishing dashboard, AI lab, chat, contact,
                               fisherman mode, footer, …) — built on the
                               index.css variables, so theme + RTL apply everywhere
  context/AppContext.jsx       useApp() → { theme, toggleTheme, lang, setLang, t, rtl }
  components/
    Layout.jsx                 header (nav + language pill + theme toggle),
                               ocean background, rich footer, mobile menu
    CoastalMap.jsx             i18n map placeholder (focus-aware)
    LiveMap.jsx                ready-made Leaflet/OSM live map (swap-in ready)
    AreaCard, Feature, Info, Tool, CultureCard
  pages/
    Home, Explore, Areas, AreaDetails,
    MarineLife, FishDetails, Culture, NotFound   (your v2 files)
    Safety, Fisherman, Compass, Weather,
    FishingGuide, FishIdentifier, Emergency, AI,
    About, Contact, ToolPage                  (your tool pages)
public/images/                 placeholder JPEGs for area/fish cards
```

## Theme + language on every page

Every page renders inside `<Layout>` under `<AppProvider>`, so:

- **Theme** — `AppContext` sets `data-theme` on `<html>`; all CSS in
  `index.css` + `pages.css` is variable-driven, so the whole site
  (including every tool page) switches instantly and persists in
  `localStorage` as `mb-theme`.
- **Language** — `t()` comes from the same context; switching sets
  `lang`, `dir` and the `.rtl` class on `<html>` (Nastaliq fonts for
  ur/bal) and persists as `mb-lang`. Tool pages without dictionary
  keys fall back to English automatically; add strings to
  `src/i18n.js` whenever you want them translated.

## Routes

```
/                       Home
/explore                Explore (map + coastal areas)
/areas, /areas/:slug    Coastal areas + area detail
/marine-life, /:id      Marine life + species profile
/culture                Coastal culture
/safety                 Live coastal safety monitor (Open-Meteo)
/fisherman              Fisherman mode hub
/fisherman/compass      Device compass + GPS
/fisherman/weather      Live marine conditions (Open-Meteo)
/fisherman/fishing-guide     Fishing intelligence dashboard
/fisherman/fish-identifier    MobileNet AI specimen lab
/fisherman/emergency    (renders Safety)
/ai, /about, /contact
*                       404
```

## Small fixes made while merging

- `MarineLife.jsx`: `to={/marine-life/${f.id}}` → `` to={`/marine-life/${f.id}`} ``
  (missing quotes in the paste — it wouldn't compile otherwise).
- `Home.jsx`: the three placeholder `to="/explore"` links point to their
  real destinations now — Fisherman Mode → `/fisherman`, Stay aware →
  `/safety`, Open AI Guide → `/ai`.
- `FishDetails.jsx`: "Try identifier" → `/fisherman/fish-identifier`.
- `CoastalMap.jsx` now uses `t()` so the placeholder (incl. the
  focus view on area pages) is translated too.
- `data.js` lives at `src/data.js` so your `import { areas } from "../data"` works.

## Notes

- Live data (Open-Meteo, OSM tiles, Google Fonts, MobileNet weights)
  needs internet. Offline/sandboxed previews show the built-in
  loading/error states and recover with a Retry.
- `LiveMap.jsx` (Leaflet) is available if you ever want to replace the
  `CoastalMap` placeholder with the real map — it already uses the
  `.map-container` / `.map-info-panel` styles in `index.css`.
