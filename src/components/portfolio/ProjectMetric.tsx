import { useI18n } from "../../context/LanguageContext";
import type { PortfolioMetric } from "../../portfolio";

/** Cartão de métrica em destaque (valor curto + rótulo). */
export function ProjectMetric({ metric }: { metric: PortfolioMetric }) {
  const { pick } = useI18n();
  return (
    <div className="rounded-xl border border-line bg-card px-3 py-3 text-center">
      <div className="font-mono text-[1.1rem] font-bold text-brand-2">{metric.value}</div>
      <div className="mt-1 text-[0.76rem] leading-snug text-muted">{pick(metric.label)}</div>
    </div>
  );
}
