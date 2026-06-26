/* Mapas compartilhados entre cards, modal e filtros do portfólio:
   categoria/papel → chave de i18n e estilo visual. */
import type { StringKey } from "../../i18n";
import type { PortfolioCategory, PortfolioRole } from "../../portfolio";

export const CATEGORY_KEY: Record<PortfolioCategory, StringKey> = {
  frontend: "pf.cat.frontend",
  fullstack: "pf.cat.fullstack",
  bot: "pf.cat.bot",
  automation: "pf.cat.automation",
  integration: "pf.cat.integration",
  corporate: "pf.cat.corporate",
};

export const ROLE_KEY: Record<PortfolioRole, StringKey> = {
  frontend: "pf.role.frontend",
  uiux: "pf.role.uiux",
  integration: "pf.role.integration",
  automation: "pf.role.automation",
  maintenance: "pf.role.maintenance",
  bots: "pf.role.bots",
  backend: "pf.role.backend",
  performance: "pf.role.performance",
};

/** Cor de destaque por categoria (usa tokens de marca/estado já existentes). */
export const CATEGORY_STYLE: Record<PortfolioCategory, string> = {
  frontend: "text-brand-2 bg-brand-2/10 border-brand-2/30",
  fullstack: "text-accent bg-accent/10 border-accent/30",
  bot: "text-ok bg-ok/10 border-ok/30",
  automation: "text-ok bg-ok/10 border-ok/30",
  integration: "text-info bg-info/10 border-info/30",
  corporate: "text-warn bg-warn/10 border-warn/30",
};
