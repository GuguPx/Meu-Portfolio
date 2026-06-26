import { useEffect, useState } from "react";
import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { IconMoon, IconSun } from "../icons";
import type { StringKey } from "../i18n";

const LINKS: { id: string; key: StringKey }[] = [
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "principles", key: "nav.principles" },
  { id: "ai", key: "nav.ai" },
  { id: "timeline", key: "nav.timeline" },
  { id: "goals", key: "nav.goals" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { t, lang, toggle: toggleLang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] flex items-center backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-base/70" : "border-b border-transparent bg-base/40"
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5 font-bold" aria-label="Início">
          <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-grad text-white font-extrabold text-[0.9rem] tracking-wide">
            {DATA.profile.initials}
          </span>
          <span className="hidden sm:inline text-[0.98rem]">{DATA.profile.name}</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex gap-0.5" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative px-3 py-2 rounded-lg text-[0.92rem] font-medium transition-colors hover:text-fg ${
                  active === l.id ? "text-fg" : "text-muted"
                }`}
              >
                {t(l.key)}
                {active === l.id && (
                  <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded bg-grad" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className="btn-icon" onClick={toggleLang} aria-label={t("nav.lang")} title="PT / EN">
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button className="btn-icon" onClick={toggleTheme} aria-label={t("nav.theme")}>
            {theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
          </button>
          {/* Burger mobile */}
          <button
            className="lg:hidden btn-icon flex-col gap-[5px]"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-5 bg-fg rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg rounded transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden absolute inset-x-0 top-[68px] bg-soft border-b border-line shadow-glow transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-[130%]"
        }`}
      >
        <ul className="container-x py-2 pb-5">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block px-2.5 py-3.5 rounded-lg font-medium ${
                  active === l.id ? "bg-card text-fg" : "text-muted"
                }`}
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
