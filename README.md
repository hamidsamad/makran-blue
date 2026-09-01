# Makran Blue — v3 (History • People • Places • Astola + full i18n)

Merged build: original coastal platform + the new History / Hall of Voices /
coast destinations files, one design system, **EN / اردو / بلوچی everywhere**.

## What was merged and how

| New file you sent | Where it landed | Notes |
|---|---|---|
| New `Layout` (mega menu) | `src/components/Layout.jsx` | Fixed a bug: template strings were written as `className={main-nav ${open…}}` without backticks (crashed). Rebuilt with the v2 rich footer + translated nav labels, Coast mega-menu, People/History/Astola links |
| `extraPlaces.js` | `src/data/extraPlaces.js` | Cleaned, typos fixed (e.g. `منیر`), kept your `L(en,ur,bal)` inline style |
| `people.js` | `src/data/people.js` | 8 voices of Makran, expanded bodies (researched: Qazi 1955–2023, Hashmi 1926–1978, Nearchus/Arrian, etc.) |
| `places.js` | `src/data/places.js` | 15 core places + extraPlaces; **hotel phone numbers added** (PC Gwadar (086) 4212223, Sadaf (086) 4210967, Royal 0333 2008766) |

## New pages (all translated ×3)

- `/history` — Gedrosia → Alexander/Nearchus (325 BCE) → Omani Gwadar (1783–1958) → Hinglaj/Khizr/Astola faiths → 2002 port & highway, plus the **N-10 route strip** (19 stops)
- `/people` + `/people/:slug` — **Hall of Voices**: filter by Music/Poetry/Language/Folklore; profiles with quote, years, place, works list
- `/astola` — Pakistan's first Marine Protected Area: MPA 2017, 39 km from Pasni, 800+ turtle nests (2021), ~25 corals, endemic Astola viper, Kali temple ("Satadweep"), visiting window Oct–Apr
- `/destinations` `/beaches` `/picnic` `/hills` `/hotels` `/stays` — category grids → `/place/:slug` detail pages with map link, **tel: call button**, nearby places, verify-locally disclaimer

## Real photographs

29 real photos in `public/images/` — people **individually verified by eye**
(Noor Khan Bizenjo, Arif Baloch, Mubarak Qazi, Syed Zahoor Shah Hashmi) and
places from Wikimedia/news/travel sources (Astola cliffs, Kund Malir,
Princess of Hope, Sphinx, Koh-e-Batil, PC Gwadar, Pasni harbour, Ormara,
Jiwani, Hingol mud volcanoes, Golden/West Bay + 6 fish species).
Two placeholder portraits (Momin, Noor Bakhsh, Atta Shad, Punnu) use the
🎙️ fallback card until rights-cleared photos are available. Replace any
image file to update the site — filenames are the contract.

## Language system (unchanged core, expanded)

- **811 keys × 3 languages** in `src/i18n/translations.js` — every nav item,
  footer column, page, status, place intro and fact is translated
- `useApp()` gives `t`, `lang`, `setLang`, `dir`, `theme`, `toggleTheme`
- Selecting اردو/بلوچی sets `<html dir="rtl">` + `.rtl` class → **Nastaliq
  font loads and the whole layout flips**; EN restores LTR
- Data files use the inline `L(en, ur, bal)` style; pages read them with
  `loc(obj, lang)` — both systems active side by side
- Choice + theme persist in localStorage

## Keep from your project

`index.css` = your theme file (now in repo), `App.css` = your content CSS +
mega-menu and new-page styles. Leaflet added for the live map
(`npm install` covers it).

Run: `npm install && npm run dev`
