import { useEffect, useRef, type ReactNode } from "react";
import { useI18n } from "../../context/LanguageContext";
import { DYNAMIC_ICONS, IconCheck, IconClose } from "../../icons";
import type { StringKey } from "../../i18n";
import type { PortfolioProject } from "../../portfolio";
import { CategoryBadge } from "./CategoryBadge";
import { ProjectMetric } from "./ProjectMetric";
import { RoleBadge } from "./RoleBadge";
import { TechBadge } from "./TechBadge";

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

function Section({ titleKey, children }: { titleKey: StringKey; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <section className="mt-7">
      <h3 className="text-[0.78rem] font-mono uppercase tracking-wide text-brand-2">{t(titleKey)}</h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 text-muted text-[0.92rem] leading-relaxed">
          <IconCheck size={18} className="mt-0.5 shrink-0 text-ok" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Modal/drawer de detalhes do projeto — acessível (foco preso, ESC, scroll-lock). */
export function PortfolioModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const { t, pick } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const Icon = DYNAMIC_ICONS[project.icon];
  const titleId = `pf-modal-title-${project.slug}`;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" onMouseDown={onClose} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative z-10 w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-line bg-surface shadow-glow outline-none"
      >
        {/* Cabeçalho fixo */}
        <div className="sticky top-0 z-10 flex items-start gap-3 sm:gap-4 border-b border-line bg-surface/95 backdrop-blur px-[clamp(1.1rem,4vw,1.75rem)] py-4">
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand/15 text-brand-2 shrink-0">
            <Icon size={24} />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryBadge category={project.category} />
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-ok" /> {t("pf.production")}
              </span>
            </div>
            <h2 id={titleId} className="mt-1 text-[clamp(1.2rem,3.5vw,1.4rem)] font-bold leading-tight">
              {project.title}
            </h2>
            <p className="text-[0.82rem] text-brand-2 font-mono">{pick(project.companyContext)}</p>
          </div>
          <button type="button" onClick={onClose} aria-label={t("pf.close")} className="btn-icon shrink-0">
            <IconClose size={18} />
          </button>
        </div>

        <div className="px-[clamp(1.1rem,4vw,1.75rem)] pb-8">
          {/* Nota de participação / autoria */}
          <div className="mt-5 rounded-xl border border-brand/30 bg-brand/5 p-4">
            <div className="text-[0.72rem] font-semibold uppercase tracking-wide text-brand-2">{t("pf.sec.ownership")}</div>
            <p className="mt-1.5 text-[0.92rem] text-fg/90 leading-relaxed">{pick(project.ownershipNote)}</p>
          </div>

          <Section titleKey="pf.card.role">
            <div className="flex flex-wrap gap-1.5">
              {project.roles.map((r) => (
                <RoleBadge key={r} role={r} />
              ))}
            </div>
          </Section>

          <Section titleKey="pf.sec.metrics">
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
              {project.metrics.map((m, i) => (
                <ProjectMetric key={i} metric={m} />
              ))}
            </div>
          </Section>

          <Section titleKey="pf.sec.problem">
            <p className="text-muted text-[0.95rem] leading-relaxed">{pick(project.problem)}</p>
          </Section>

          <Section titleKey="pf.sec.solution">
            <p className="text-muted text-[0.95rem] leading-relaxed">{pick(project.solution)}</p>
          </Section>

          {/* Minha participação — destaque */}
          <Section titleKey="pf.sec.participation">
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-fg/90 text-[0.95rem] leading-relaxed">{pick(project.participation)}</p>
            </div>
          </Section>

          <Section titleKey="pf.sec.highlights">
            <BulletList items={pick(project.highlights)} />
          </Section>

          <Section titleKey="pf.sec.challenges">
            <BulletList items={pick(project.challenges)} />
          </Section>

          <Section titleKey="pf.sec.results">
            <BulletList items={pick(project.results)} />
          </Section>

          <Section titleKey="pf.sec.learned">
            <BulletList items={pick(project.learned)} />
          </Section>

          {/* Stack & Integrações */}
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-[0.78rem] font-mono uppercase tracking-wide text-brand-2">{t("pf.sec.stack")}</h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.stack.map((x) => (
                  <TechBadge key={x} label={x} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[0.78rem] font-mono uppercase tracking-wide text-brand-2">{t("pf.sec.integrations")}</h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.integrations.map((x) => (
                  <TechBadge key={x} label={x} />
                ))}
              </div>
            </div>
          </div>

          {/* Prints (placeholders anonimizados) */}
          <Section titleKey="pf.sec.screens">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((s, i) => {
                const ShotIcon = DYNAMIC_ICONS[s.icon];
                return (
                  <figure key={i} className="rounded-xl border border-dashed border-line bg-card overflow-hidden">
                    <div className="grid place-items-center aspect-video text-faint" role="img" aria-label={pick(s.alt)}>
                      <ShotIcon size={34} />
                    </div>
                    <figcaption className="border-t border-line px-3 py-2 text-[0.8rem] text-muted">{pick(s.caption)}</figcaption>
                  </figure>
                );
              })}
            </div>
            <p className="mt-3 text-[0.8rem] text-faint leading-relaxed">{t("pf.screens.note")}</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
