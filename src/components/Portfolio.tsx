import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useI18n } from "../context/LanguageContext";
import { ACTUATION_PILLARS, PORTFOLIO_PROJECTS, type PortfolioProject } from "../portfolio";
import type { StringKey } from "../i18n";
import { DYNAMIC_ICONS, IconCheck, IconShield } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PortfolioCard } from "./portfolio/PortfolioCard";

// Carregado sob demanda: o modal só é necessário após o clique num card,
// então seu código sai do bundle inicial (React.lazy + import dinâmico).
const PortfolioModal = lazy(() =>
  import("./portfolio/PortfolioModal").then((m) => ({ default: m.PortfolioModal }))
);

interface FilterDef {
  id: string;
  labelKey: StringKey;
  match: (p: PortfolioProject) => boolean;
}

/* Deep-link: #projects/<slug> abre o estudo de caso direto (compartilhável
   em candidaturas). O hash é atualizado ao abrir/fechar via replaceState —
   sem poluir o histórico de navegação. */
const HASH_RE = /^#projects\/([\w-]+)$/;
function slugFromHash(): string | null {
  const m = window.location.hash.match(HASH_RE);
  return m && PORTFOLIO_PROJECTS.some((p) => p.slug === m[1]) ? m[1] : null;
}

const FILTERS: FilterDef[] = [
  { id: "all", labelKey: "pf.filter.all", match: () => true },
  { id: "frontend", labelKey: "pf.filter.frontend", match: (p) => p.categories.includes("frontend") },
  { id: "fullstack", labelKey: "pf.filter.fullstack", match: (p) => p.categories.includes("fullstack") },
  { id: "bot", labelKey: "pf.filter.bot", match: (p) => p.categories.includes("bot") || p.categories.includes("automation") },
  { id: "integration", labelKey: "pf.filter.integration", match: (p) => p.categories.includes("integration") },
  { id: "corporate", labelKey: "pf.filter.corporate", match: (p) => p.categories.includes("corporate") },
  { id: "authored", labelKey: "pf.filter.authored", match: (p) => (p.source ?? "internal") !== "internal" },
];

const FILTER_COUNTS: Record<string, number> = Object.fromEntries(
  FILTERS.map((f) => [f.id, PORTFOLIO_PROJECTS.filter(f.match).length])
);

/** Quantos cards aparecem antes do "ver mais" (3 linhas no desktop). */
const INITIAL_VISIBLE = 9;

export function Portfolio() {
  const { t, pick } = useI18n();
  const [filter, setFilter] = useState("all");
  const [openSlug, setOpenSlug] = useState<string | null>(slugFromHash);

  const openModal = useCallback((slug: string) => {
    setOpenSlug(slug);
    history.replaceState(null, "", `#projects/${slug}`);
  }, []);
  // Estável entre renders: o efeito do modal (focus trap/ESC) depende de onClose.
  const closeModal = useCallback(() => {
    setOpenSlug(null);
    history.replaceState(null, "", "#projects");
  }, []);

  // Chegou por deep-link → garante que a seção esteja visível sob o modal.
  useEffect(() => {
    if (slugFromHash()) document.getElementById("projects")?.scrollIntoView();
  }, []);

  const [expanded, setExpanded] = useState(false);
  const selectFilter = (id: string) => {
    setFilter(id);
    setExpanded(false);
  };

  const projects = useMemo(() => {
    const f = FILTERS.find((x) => x.id === filter) ?? FILTERS[0];
    return PORTFOLIO_PROJECTS.filter(f.match);
  }, [filter]);
  const visible = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hidden = projects.length - visible.length;

  const openProject = openSlug ? PORTFOLIO_PROJECTS.find((p) => p.slug === openSlug) ?? null : null;

  return (
    <section id="projects" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("projects.kicker")} title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <Reveal className="mb-9 max-w-3xl">
          <p className="text-muted">{t("pf.intro")}</p>
          <p className="mt-4 border-l-2 border-brand pl-4 text-fg/90 text-[0.95rem] italic">{t("pf.pitch")}</p>
        </Reveal>

        {/* Filtros por categoria — no celular viram uma faixa com rolagem horizontal */}
        <div
          role="group"
          aria-label={t("pf.filter.label")}
          className="mb-8 -mx-[clamp(1.25rem,4vw,2.25rem)] flex gap-2 overflow-x-auto px-[clamp(1.25rem,4vw,2.25rem)] pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {FILTERS.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => selectFilter(f.id)}
                aria-pressed={active}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-[0.85rem] font-semibold transition-all ${
                  active
                    ? "border-brand bg-brand/10 text-fg"
                    : "border-line bg-card text-muted hover:border-brand hover:text-fg"
                }`}
              >
                {t(f.labelKey)}
                <span className={`font-mono text-[0.72rem] ${active ? "text-brand-2" : "text-faint"}`}>
                  {FILTER_COUNTS[f.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grade de projetos — 1 col (mobile), 2 (tablet), 3 (desktop) */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <PortfolioCard key={p.slug} project={p} onOpen={() => openModal(p.slug)} />
          ))}
        </div>

        {projects.length > INITIAL_VISIBLE && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                // Ao recolher, volta ao topo da grade para o usuário não ficar "perdido" no fim da página.
                if (expanded) document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                setExpanded(!expanded);
              }}
              aria-expanded={expanded}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-[0.88rem] font-semibold text-muted transition-colors hover:border-brand hover:text-fg"
            >
              {expanded ? t("pf.showLess") : t("pf.showMore").replace("{n}", String(hidden))}
            </button>
          </div>
        )}

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
                <Reveal key={pillar.title.pt} delay={i * 60} className="card p-5 flex flex-col">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/15 text-brand-2">
                    <Icon size={22} />
                  </span>
                  <h4 className="mt-3.5 font-bold text-[1.02rem]">{pick(pillar.title)}</h4>
                  <p className="mt-1.5 text-muted text-[0.9rem] leading-relaxed">{pick(pillar.description)}</p>
                  <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
                    {pick(pillar.points).map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[0.84rem] text-muted leading-snug">
                        <IconCheck size={15} className="mt-0.5 shrink-0 text-ok" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
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

      {openProject && (
        <Suspense fallback={null}>
          <PortfolioModal project={openProject} onClose={closeModal} />
        </Suspense>
      )}
    </section>
  );
}
