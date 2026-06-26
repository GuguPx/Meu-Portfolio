import { useMemo, useState } from "react";
import { useI18n } from "../context/LanguageContext";
import { ACTUATION_PILLARS, PORTFOLIO_PROJECTS, type PortfolioProject } from "../portfolio";
import type { StringKey } from "../i18n";
import { DYNAMIC_ICONS, IconShield } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PortfolioCard } from "./portfolio/PortfolioCard";
import { PortfolioModal } from "./portfolio/PortfolioModal";

interface FilterDef {
  id: string;
  labelKey: StringKey;
  match: (p: PortfolioProject) => boolean;
}

const FILTERS: FilterDef[] = [
  { id: "all", labelKey: "pf.filter.all", match: () => true },
  { id: "frontend", labelKey: "pf.filter.frontend", match: (p) => p.categories.includes("frontend") },
  { id: "fullstack", labelKey: "pf.filter.fullstack", match: (p) => p.categories.includes("fullstack") },
  { id: "bot", labelKey: "pf.filter.bot", match: (p) => p.categories.includes("bot") || p.categories.includes("automation") },
  { id: "integration", labelKey: "pf.filter.integration", match: (p) => p.categories.includes("integration") },
  { id: "corporate", labelKey: "pf.filter.corporate", match: (p) => p.categories.includes("corporate") },
];

export function Portfolio() {
  const { t, pick } = useI18n();
  const [filter, setFilter] = useState("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const projects = useMemo(() => {
    const f = FILTERS.find((x) => x.id === filter) ?? FILTERS[0];
    return PORTFOLIO_PROJECTS.filter(f.match);
  }, [filter]);

  const openProject = openSlug ? PORTFOLIO_PROJECTS.find((p) => p.slug === openSlug) ?? null : null;

  return (
    <section id="projects" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("projects.kicker")} title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <Reveal className="mb-9 max-w-3xl">
          <p className="text-muted">{t("pf.intro")}</p>
          <p className="mt-4 border-l-2 border-brand pl-4 text-fg/90 text-[0.95rem] italic">{t("pf.pitch")}</p>
        </Reveal>

        {/* Filtros por categoria */}
        <div role="group" aria-label={t("pf.filter.label")} className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-[0.85rem] font-semibold transition-all ${
                  active
                    ? "border-brand bg-brand/10 text-fg"
                    : "border-line bg-card text-muted hover:border-brand hover:text-fg"
                }`}
              >
                {t(f.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Grade de projetos — 1 col (mobile), 2 (tablet), 3 (desktop) */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <PortfolioCard key={p.slug} project={p} onOpen={() => setOpenSlug(p.slug)} />
          ))}
        </div>

        {/* Minha atuação */}
        <div className="mt-[clamp(3.5rem,7vw,5.5rem)]">
          <Reveal className="max-w-2xl mb-8">
            <h3 className="text-[clamp(1.4rem,4vw,2rem)] font-extrabold tracking-tight">{t("pf.work.title")}</h3>
            <p className="text-muted mt-2">{t("pf.work.subtitle")}</p>
          </Reveal>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ACTUATION_PILLARS.map((pillar, i) => {
              const Icon = DYNAMIC_ICONS[pillar.icon];
              return (
                <Reveal key={pillar.title.pt} delay={i * 60} className="card p-5">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/15 text-brand-2">
                    <Icon size={22} />
                  </span>
                  <h4 className="mt-3.5 font-bold text-[1.02rem]">{pick(pillar.title)}</h4>
                  <p className="mt-1.5 text-muted text-[0.9rem] leading-relaxed">{pick(pillar.description)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Aviso de confidencialidade */}
        <Reveal className="mt-10 flex items-start gap-3 rounded-xl border border-line bg-card p-4 max-w-3xl">
          <span className="text-brand-2 mt-0.5 shrink-0">
            <IconShield size={20} />
          </span>
          <div>
            <div className="text-[0.82rem] font-semibold">{t("pf.confidential.title")}</div>
            <p className="mt-1 text-muted text-[0.86rem] leading-relaxed">{t("pf.confidential.note")}</p>
          </div>
        </Reveal>
      </div>

      {openProject && <PortfolioModal project={openProject} onClose={() => setOpenSlug(null)} />}
    </section>
  );
}
