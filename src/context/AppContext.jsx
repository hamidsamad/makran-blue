import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { dictionaries, rtlLangs } from "../i18n/translations";

const AppContext = createContext(null);

const LANG_KEY = "makran-lang";
const THEME_KEY = "makran-theme";

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) || "en";
    } catch {
      return "en";
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "dark";
    } catch {
      return "dark";
    }
  });

  const setLang = useCallback((code) => {
    if (!dictionaries[code]) return;
    setLangState(code);
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  /*
    t(key)            -> translated string (falls back to English, then key)
    t(key, { area })  -> replaces {area} placeholders inside the string
  */
  const t = useCallback(
    (key, vars) => {
      const dict = dictionaries[lang] || dictionaries.en;
      let text = dict[key] ?? dictionaries.en[key] ?? key;
      if (vars) {
        Object.keys(vars).forEach((k) => {
          text = text.split(`{${k}}`).join(String(vars[k]));
        });
      }
      return text;
    },
    [lang]
  );

  const dir = rtlLangs.has(lang) ? "rtl" : "ltr";

  /* Apply language + direction to <html> so RTL works automatically */
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  /* Theme on <html> (the Makran Blue stylesheet keys off html[data-theme])
     plus the .rtl class used for Nastaliq fonts and RTL layout fixes */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("rtl", dir === "rtl");
    document.body.setAttribute("data-theme", theme);
  }, [theme, dir]);

  const value = useMemo(
    () => ({ lang, setLang, dir, theme, toggleTheme, t }),
    [lang, setLang, dir, theme, toggleTheme, t]
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used inside <AppProvider>");
  }
  return ctx;
}
