import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, rtlLangs } from "../i18n";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("mb-theme") || "dark"
  );
  const [lang, setLang] = useState(
    () => localStorage.getItem("mb-lang") || "en"
  );

  useEffect(() => {
    localStorage.setItem("mb-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("mb-lang", lang);
    const rtl = rtlLangs.has(lang);
    document.documentElement.lang = lang === "ur" ? "ur" : lang === "bal" ? "bal" : "en";
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.classList.toggle("rtl", rtl);
  }, [lang]);

  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (key) => dict[key] ?? dictionaries.en[key] ?? key;
  }, [lang]);

  const toggleTheme = () =>
    setTheme((th) => (th === "dark" ? "light" : "dark"));

  const value = { theme, setTheme, toggleTheme, lang, setLang, t, rtl: rtlLangs.has(lang) };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
