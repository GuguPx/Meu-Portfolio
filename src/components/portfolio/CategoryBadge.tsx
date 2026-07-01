import { useI18n } from "../../context/LanguageContext";
import type { PortfolioCategory } from "../../portfolio";
import { CATEGORY_KEY, CATEGORY_STYLE } from "./meta";

/** Badge de categoria do projeto (Frontend, Full-stack, Bot, etc.). */
export function CategoryBadge({ category }: { category: PortfolioCategory }) {
  const { t } = useI18n();
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.72rem] font-semibold ${CATEGORY_STYLE[category]}`}>
      {t(CATEGORY_KEY[category])}
    </span>
  );
}
