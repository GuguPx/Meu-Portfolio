import { useI18n } from "../../context/LanguageContext";
import { DYNAMIC_ICONS, IconArrowRight } from "../../icons";
import type { PortfolioProject } from "../../portfolio";
import { Reveal } from "../Reveal";
import { CategoryBadge } from "./CategoryBadge";
import { RoleBadge } from "./RoleBadge";
import { TechBadge } from "./TechBadge";

const MAX_TECH = 4;

/** Card de projeto na grade do portfólio. */
export function PortfolioCard({ project, onOpen }: { project: PortfolioProject; onOpen: () => void }) {
  const { t, pick } = useI18n();
  const Icon = DYNAMIC_ICONS[project.icon];
  const shownTech = project.stack.slice(0, MAX_TECH);
  const extra = project.stack.length - shownTech.length;

  return (
    <Reveal
      as="article"
      className="group relative flex flex-col card p-6 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-brand hover:shadow-glow"
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-grad opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand/15 text-brand-2 shrink-0">
          <Icon size={24} />
        </span>
        <CategoryBadge category={project.category} />
      </div>

      <h3 className="mt-4 text-[1.2rem] font-bold leading-tight">{project.title}</h3>
      <p className="mt-1 text-[0.8rem] text-brand-2 font-mono">{pick(project.companyContext)}</p>
      <p className="mt-3 text-muted text-[0.92rem] flex-1">{pick(project.summary)}</p>

      <div className="mt-4">
        <span className="text-[0.68rem] uppercase tracking-wide font-semibold text-faint">{t("pf.card.role")}</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {project.roles.map((r) => (
            <RoleBadge key={r} role={r} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {shownTech.map((x) => (
          <TechBadge key={x} label={x} />
        ))}
        {extra > 0 && <span className="chip">+{extra}</span>}
      </div>

      <div className="mt-5 pt-4 border-t border-line flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-ok" /> {t("pf.production")}
        </span>
        <button
          type="button"
          onClick={onOpen}
          aria-label={`${t("pf.details")} — ${project.title}`}
          aria-haspopup="dialog"
          className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand-2 transition-colors hover:text-brand"
        >
          {t("pf.details")}
          <IconArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </Reveal>
  );
}
