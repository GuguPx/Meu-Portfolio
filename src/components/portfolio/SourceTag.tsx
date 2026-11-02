import { useI18n } from "../../context/LanguageContext";
import type { StringKey } from "../../i18n";
import type { PortfolioProject, PortfolioSource } from "../../portfolio";
import { TechIcon } from "../icons/TechIcon";

const SOURCE_LABEL: Record<PortfolioSource, StringKey> = {
  internal: "pf.production",
  opensource: "pf.opensource",
  personal: "pf.personal",
  client: "pf.client",
};

const SOURCE_DOT: Record<PortfolioSource, string> = {
  internal: "bg-ok",
  opensource: "bg-brand",
  personal: "bg-brand-2",
  client: "bg-accent",
};

/** Selo de origem do projeto (card e modal): link do GitHub quando há repo público. */
export function SourceTag({ project, variant }: { project: PortfolioProject; variant: "card" | "modal" }) {
  const { t } = useI18n();
  const source = project.source ?? "internal";
  const text = variant === "card" ? "text-[0.72rem]" : "text-[0.7rem]";

  if (project.repoUrl) {
    return (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center gap-1.5 ${text} font-semibold text-muted transition-colors hover:text-fg`}
      >
        <TechIcon name="GitHub" size={14} />
        {variant === "card" ? t(SOURCE_LABEL[source]) : t("pf.repo")}
      </a>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${text} font-semibold text-muted`}>
      <span className={`w-1.5 h-1.5 rounded-full ${SOURCE_DOT[source]}`} /> {t(SOURCE_LABEL[source])}
    </span>
  );
}
