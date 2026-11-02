import { useEffect, useState } from "react";
import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { IconMoon, IconSun } from "../icons";
import { BrandIcon } from "./icons/BrandIcon";
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

// Array estável (módulo) — evita recriar o observer do scroll-spy a cada render.
const SECTION_IDS = LINKS.map((l) => l.id);

export function Navbar() {
  const { t, lang, toggle: toggleLang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[76px] flex items-center backdrop-blur-md lg:backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-base/80" : "border-b border-transparent bg-base/50"
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        <a href="#hero" className="flex shrink-0 items-center gap-3 font-semibold group" aria-label="Início">
          <BrandIcon size={36} className="text-brand transition-transform duration-200 group-hover:scale-105" />
          <span className="hidden sm:inline whitespace-nowrap text-[1.02rem] tracking-tight">{DATA.profile.name}</span>
        </a>

        {/* Links desktop — só a partir de xl: entre 1024 e 1280px os 9 itens não cabem ao lado do nome */}
        <ul className="hidden xl:flex items-center gap-0.5" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative whitespace-nowrap px-3.5 py-2 rounded-lg text-[0.95rem] font-medium transition-colors hover:text-fg ${
                  active === l.id ? "text-fg" : "text-muted"
                }`}
              >
                {t(l.key)}
                {active === l.id && (
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-grad" />
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
            className="xl:hidden btn-icon flex-col gap-[5px]"
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
        className={`xl:hidden absolute inset-x-0 top-[76px] bg-soft border-b border-line shadow-glow transition-transform duration-300 ${
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
