import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Localized } from "../data";
import { translate, type StringKey } from "../i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Traduz uma string estática por chave. */
  t: (key: StringKey) => string;
  /** Escolhe o valor do idioma atual de um campo localizado. */
  pick: <T>(value: Localized<T>) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // PT é o idioma padrão (público-alvo principal); a escolha é memorizada.
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("lang") : null;
    return saved === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "pt" ? "en" : "pt")), []);
  const t = useCallback((key: StringKey) => translate(lang, key), [lang]);
  const pick = useCallback(<T,>(value: Localized<T>): T => value[lang] ?? value.pt, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle, t, pick }), [lang, setLang, toggle, t, pick]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n deve ser usado dentro de <LanguageProvider>");
  return ctx;
}
