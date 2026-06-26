import { useI18n } from "../../context/LanguageContext";
import type { PortfolioRole } from "../../portfolio";
import { ROLE_KEY } from "./meta";

/** Badge do "meu papel" no projeto (Frontend, Automação, Manutenção, etc.). */
export function RoleBadge({ role }: { role: PortfolioRole }) {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-card px-2.5 py-1 text-[0.72rem] font-semibold text-muted">
      {t(ROLE_KEY[role])}
    </span>
  );
}
