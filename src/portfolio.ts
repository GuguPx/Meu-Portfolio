/* =============================================================================
   portfolio.ts — Projetos e automações corporativas (PT/EN)

   Conteúdo do portfólio técnico. Todos os projetos descrevem participação real
   em sistemas internos da empresa: alguns desenvolvidos em equipe (com atuação
   em frontend, integração, manutenção e evolução), outros criados do zero para
   automatizar processos manuais.

   Compliance: nenhum dado sensível é exposto aqui — sem clientes reais, CPFs,
   tokens, URLs internas, IPs, IDs ou credenciais. As descrições são técnicas e
   anonimizadas. Os "prints" são placeholders (ver PortfolioScreenshot).
   ========================================================================== */

import type { IconName, Localized } from "./data";

/** Categorias usadas para o badge principal e para os filtros. */
export type PortfolioCategory =
  | "frontend"
  | "fullstack"
  | "bot"
  | "automation"
  | "integration"
  | "corporate";

/** Papéis de atuação destacados em cada projeto. */
export type PortfolioRole =
  | "frontend"
  | "uiux"
  | "integration"
  | "automation"
  | "maintenance"
  | "bots"
  | "backend"
  | "performance";

export interface PortfolioMetric {
  /** Valor curto e factual (ex.: "15 min", "4", "ETL"). */
  value: string;
  label: Localized;
}

/**
 * Placeholder de print. Como são sistemas internos, não há imagens reais aqui:
 * a UI renderiza um cartão anonimizado com legenda. O campo `alt` descreve o
 * conteúdo para leitores de tela caso um print real seja adicionado no futuro.
 */
export interface PortfolioScreenshot {
  icon: IconName;
  alt: Localized;
  caption: Localized;
}

export interface ArchLayer {
  icon: IconName;
  label: Localized;
  detail: Localized;
}

export interface PortfolioProject {
  slug: string;
  /** Nome próprio do projeto (igual em PT/EN). */
  title: string;
  icon: IconName;
  /** Categoria principal (badge em destaque). */
  category: PortfolioCategory;
  /** Todas as categorias que o projeto satisfaz (usado pelos filtros). */
  categories: PortfolioCategory[];
  roles: PortfolioRole[];
  stack: string[];
  integrations: string[];
  architecture: ArchLayer[];
  /** Contexto corporativo curto, exibido no card e no topo do detalhe. */
  companyContext: Localized;
  /** Nota explícita de autoria/participação (honestidade). */
  ownershipNote: Localized;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  /** Texto da seção "Minha participação". */
  participation: Localized;
  highlights: Localized<string[]>;
  challenges: Localized<string[]>;
  results: Localized<string[]>;
  learned: Localized<string[]>;
  metrics: PortfolioMetric[];
  screenshots: PortfolioScreenshot[];
}

/* -------------------------------------------------------------------------- */
/*  Projetos                                                                   */
/* -------------------------------------------------------------------------- */

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  /* 1 — Power Leads -------------------------------------------------------- */
  {
    slug: "power-leads",
    title: "Power Leads",
    icon: "kanban",
    category: "frontend",
    categories: ["frontend", "integration", "corporate"],
    roles: ["frontend", "uiux", "integration", "performance"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Axios", "React Router", "Leaflet"],
    integrations: ["IXC Soft"],
    architecture: [
      { icon: "layout", label: { pt: "Frontend", en: "Frontend" }, detail: { pt: "React + TypeScript (Vite), TanStack Query para cache e sincronização, React Router e Tailwind.", en: "React + TypeScript (Vite), TanStack Query for caching and sync, React Router, and Tailwind." } },
      { icon: "plug", label: { pt: "Integração IXC", en: "IXC integration" }, detail: { pt: "Consumo da API do ERP IXC via Axios, com normalização de payloads e tratamento de erros.", en: "IXC ERP API consumption via Axios, with payload normalization and error handling." } },
      { icon: "kanban", label: { pt: "UI & mapa", en: "UI & map" }, detail: { pt: "Leaflet para o mapa de leads; Kanban, drawers e formulários guiados.", en: "Leaflet for the lead map; Kanban, drawers, and guided forms." } },
      { icon: "database", label: { pt: "Dados & estado", en: "Data & state" }, detail: { pt: "Filtros e paginação server-side; query keys e cache por entidade.", en: "Server-side filters and pagination; query keys and per-entity caching." } },
    ],
    companyContext: {
      pt: "CRM comercial para provedor de internet, integrado ao ERP IXC.",
      en: "Sales CRM for an internet provider, integrated with the IXC ERP.",
    },
    ownershipNote: {
      pt: "Projeto corporativo com forte participação no desenvolvimento frontend, UX, integração com backend/IXC e evolução dos fluxos comerciais.",
      en: "Corporate project with strong involvement in frontend development, UX, backend/IXC integration, and the evolution of the sales flows.",
    },
    summary: {
      pt: "CRM comercial que cobre o funil de vendas do lead ao contrato, integrado ao ERP IXC, com dashboard, Kanban, mapa e formulários guiados.",
      en: "Sales CRM covering the funnel from lead to contract, integrated with the IXC ERP, with dashboard, Kanban, map, and guided forms.",
    },
    problem: {
      pt: "A equipe comercial precisava acompanhar leads, prospecções, negociações e contratos sem depender diretamente do sistema legado, que era lento e pouco amigável no dia a dia de campo.",
      en: "The sales team needed to track leads, prospecting, negotiations, and contracts without relying directly on the legacy system, which was slow and unfriendly for day-to-day field work.",
    },
    solution: {
      pt: "Uma interface web moderna, responsiva e integrada ao IXC, organizando o funil em etapas (Leads, Prospecções, Negociações, Contratos e O.S) com dashboard de indicadores, Kanban arrastável, mapa de leads, formulários em drawer, criação de contrato e abertura de O.S.",
      en: "A modern, responsive web interface integrated with IXC, organizing the funnel into stages (Leads, Prospecting, Negotiations, Contracts, and Service Orders) with an indicators dashboard, draggable Kanban, lead map, drawer forms, contract creation, and service-order opening.",
    },
    participation: {
      pt: "Minha atuação foi concentrada no frontend: criação de telas, ajustes mobile-first, formulários, modais e drawers, integração com os endpoints do backend, tratamento de erros do IXC e melhoria dos fluxos comerciais. Também trabalhei em UX/UI, responsividade e desempenho percebido (cache e filtros server-side).",
      en: "My work was focused on the frontend: building screens, mobile-first adjustments, forms, modals and drawers, integration with the backend endpoints, handling IXC errors, and improving the sales flows. I also worked on UX/UI, responsiveness, and perceived performance (caching and server-side filters).",
    },
    highlights: {
      pt: [
        "Layout mobile-first com suporte a tema claro/escuro",
        "Dashboard comercial com indicadores do funil",
        "Kanban de prospecções com etapas e movimentação",
        "Mapa de leads georreferenciado (Leaflet)",
        "Formulários guiados em drawer (leads, contratos e O.S)",
        "Criação de contrato e abertura de O.S a partir do fluxo",
        "Tratamento amigável de erros vindos do IXC",
        "Cache e filtros server-side para listas grandes",
      ],
      en: [
        "Mobile-first layout with light/dark theme support",
        "Sales dashboard with funnel indicators",
        "Prospecting Kanban with stages and drag movement",
        "Geolocated lead map (Leaflet)",
        "Guided drawer forms (leads, contracts, and service orders)",
        "Contract creation and service-order opening within the flow",
        "Friendly handling of errors coming from IXC",
        "Server-side caching and filters for large lists",
      ],
    },
    challenges: {
      pt: [
        "Mapear o funil comercial em uma navegação clara entre etapas",
        "Sincronizar dados do IXC mantendo a interface fluida no mobile",
        "Padronizar estados de carregamento, erro e vazio em todas as listas",
      ],
      en: [
        "Mapping the sales funnel into clear navigation across stages",
        "Syncing IXC data while keeping the interface smooth on mobile",
        "Standardizing loading, error, and empty states across all lists",
      ],
    },
    results: {
      pt: [
        "Funil comercial centralizado em uma única interface responsiva",
        "Acompanhamento de leads e prospecções diretamente do celular em campo",
        "Menos dependência direta da interface do sistema legado",
      ],
      en: [
        "Sales funnel centralized in a single responsive interface",
        "Lead and prospecting tracking directly from mobile in the field",
        "Less direct dependency on the legacy system interface",
      ],
    },
    learned: {
      pt: [
        "Modelagem de UX para fluxos comerciais ponta a ponta",
        "Boas práticas de cache e sincronização com TanStack Query",
        "Integração resiliente com um ERP de terceiros (IXC)",
      ],
      en: [
        "UX modeling for end-to-end sales flows",
        "Caching and sync best practices with TanStack Query",
        "Resilient integration with a third-party ERP (IXC)",
      ],
    },
    metrics: [
      { value: "5", label: { pt: "etapas do funil", en: "funnel stages" } },
      { value: "100%", label: { pt: "responsivo / mobile-first", en: "responsive / mobile-first" } },
      { value: "IXC", label: { pt: "integração com o ERP", en: "ERP integration" } },
    ],
    screenshots: [
      {
        icon: "layout",
        alt: { pt: "Dashboard comercial com indicadores do funil de vendas (dados anonimizados).", en: "Sales dashboard with funnel indicators (anonymized data)." },
        caption: { pt: "Dashboard comercial", en: "Sales dashboard" },
      },
      {
        icon: "kanban",
        alt: { pt: "Quadro Kanban de prospecções com etapas (dados anonimizados).", en: "Prospecting Kanban board with stages (anonymized data)." },
        caption: { pt: "Kanban de prospecções", en: "Prospecting Kanban" },
      },
    ],
  },

  /* 2 — PWContrato 2.0 ----------------------------------------------------- */
  {
    slug: "pwcontrato",
    title: "PWContrato 2.0",
    icon: "signature",
    category: "corporate",
    categories: ["corporate", "fullstack", "integration"],
    roles: ["maintenance", "frontend", "integration", "backend"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Puppeteer", "pdf-lib"],
    integrations: ["IXC Soft", "ZapSign"],
    architecture: [
      { icon: "layout", label: { pt: "Frontend", en: "Frontend" }, detail: { pt: "Next.js + React + Tailwind para o fluxo de assinatura.", en: "Next.js + React + Tailwind for the signing flow." } },
      { icon: "server", label: { pt: "Backend", en: "Backend" }, detail: { pt: "NestJS (Node.js), API REST e regras de assinatura/ativação.", en: "NestJS (Node.js), REST API, and signing/activation rules." } },
      { icon: "database", label: { pt: "Banco de dados", en: "Database" }, detail: { pt: "PostgreSQL via Prisma (ORM).", en: "PostgreSQL via Prisma (ORM)." } },
      { icon: "plug", label: { pt: "Integrações", en: "Integrations" }, detail: { pt: "IXC (busca/ativação de contrato) e ZapSign (assinatura + webhook).", en: "IXC (contract lookup/activation) and ZapSign (signing + webhook)." } },
      { icon: "signature", label: { pt: "Documentos & jobs", en: "Documents & jobs" }, detail: { pt: "Geração de PDF com Puppeteer e pdf-lib; jobs de limpeza e expiração.", en: "PDF generation with Puppeteer and pdf-lib; cleanup and expiration jobs." } },
    ],
    companyContext: {
      pt: "Sistema de assinatura digital de contratos integrado ao IXC e ao ZapSign.",
      en: "Digital contract signing system integrated with IXC and ZapSign.",
    },
    ownershipNote: {
      pt: "Projeto corporativo utilizado internamente, com participação em manutenção, análise técnica, frontend e apoio na evolução de fluxos de assinatura e integrações.",
      en: "Corporate project used internally, with involvement in maintenance, technical analysis, frontend, and support evolving the signing flows and integrations.",
    },
    summary: {
      pt: "Fluxo web que busca contratos no IXC, gera PDF dinâmico, coleta selfie, permite assinatura digital e recebe o webhook do ZapSign para ativação.",
      en: "Web flow that fetches contracts from IXC, generates a dynamic PDF, captures a selfie, allows digital signing, and receives the ZapSign webhook for activation.",
    },
    problem: {
      pt: "O processo de assinatura e ativação de contratos precisava ser digitalizado e integrado ao ERP, reduzindo papel, deslocamento e etapas manuais.",
      en: "The contract signing and activation process needed to be digitized and integrated with the ERP, reducing paper, travel, and manual steps.",
    },
    solution: {
      pt: "Um fluxo web que busca o contrato no IXC, gera um PDF dinâmico, coleta selfie do cliente, permite a assinatura digital e recebe o webhook do ZapSign para concluir a ativação do contrato no ERP, com jobs de limpeza e armazenamento dos arquivos.",
      en: "A web flow that fetches the contract from IXC, generates a dynamic PDF, captures the customer's selfie, allows digital signing, and receives the ZapSign webhook to complete contract activation in the ERP, with cleanup jobs and file storage.",
    },
    participation: {
      pt: "Atuei em manutenção, análise técnica e evolução de fluxos relacionados à assinatura digital, apoiando a integração entre frontend, backend, IXC e ZapSign. Contribuí no entendimento do fluxo técnico e em melhorias pontuais de robustez e usabilidade.",
      en: "I worked on maintenance, technical analysis, and the evolution of flows related to digital signing, supporting the integration between frontend, backend, IXC, and ZapSign. I contributed to understanding the technical flow and to targeted improvements in robustness and usability.",
    },
    highlights: {
      pt: [
        "Busca de contratos diretamente no IXC",
        "Geração de PDF dinâmico do contrato",
        "Captura de selfie do cliente",
        "Assinatura digital integrada ao ZapSign",
        "Webhook de retorno para ativação automática",
        "Ativação do contrato no IXC",
        "Jobs de limpeza e expiração de arquivos",
        "Armazenamento organizado de PDFs e selfies",
      ],
      en: [
        "Contract lookup directly in IXC",
        "Dynamic contract PDF generation",
        "Customer selfie capture",
        "Digital signing integrated with ZapSign",
        "Return webhook for automatic activation",
        "Contract activation in IXC",
        "Cleanup and file-expiration jobs",
        "Organized storage of PDFs and selfies",
      ],
    },
    challenges: {
      pt: [
        "Coordenar múltiplas integrações (IXC, ZapSign) em um único fluxo",
        "Garantir consistência entre assinatura, webhook e ativação",
        "Tratar reentrâncias e estados parciais do processo de assinatura",
      ],
      en: [
        "Coordinating multiple integrations (IXC, ZapSign) in a single flow",
        "Ensuring consistency between signing, webhook, and activation",
        "Handling re-entries and partial states of the signing process",
      ],
    },
    results: {
      pt: [
        "Assinatura de contratos digitalizada e integrada ao ERP",
        "Menos etapas manuais entre fechar e ativar um contrato",
        "Trilha organizada de documentos gerados",
      ],
      en: [
        "Digitized contract signing integrated with the ERP",
        "Fewer manual steps between closing and activating a contract",
        "Organized trail of generated documents",
      ],
    },
    learned: {
      pt: [
        "Orquestração de webhooks e estados assíncronos",
        "Geração de documentos com Puppeteer e pdf-lib",
        "Manutenção e leitura de um sistema full-stack já em produção",
      ],
      en: [
        "Orchestrating webhooks and asynchronous states",
        "Document generation with Puppeteer and pdf-lib",
        "Maintaining and reading a full-stack system already in production",
      ],
    },
    metrics: [
      { value: "PDF", label: { pt: "geração dinâmica de contrato", en: "dynamic contract generation" } },
      { value: "e-sign", label: { pt: "assinatura digital + selfie", en: "digital signing + selfie" } },
      { value: "Webhook", label: { pt: "ativação via ZapSign", en: "activation via ZapSign" } },
    ],
    screenshots: [
      {
        icon: "signature",
        alt: { pt: "Tela de assinatura digital do contrato (dados anonimizados).", en: "Digital contract signing screen (anonymized data)." },
        caption: { pt: "Fluxo de assinatura", en: "Signing flow" },
      },
      {
        icon: "shield",
        alt: { pt: "Confirmação de ativação do contrato após o webhook (dados anonimizados).", en: "Contract activation confirmation after the webhook (anonymized data)." },
        caption: { pt: "Ativação integrada ao IXC", en: "IXC-integrated activation" },
      },
    ],
  },

  /* 3 — PwBenefícios ------------------------------------------------------- */
  {
    slug: "pwbeneficios",
    title: "PwBenefícios",
    icon: "gift",
    category: "fullstack",
    categories: ["fullstack", "frontend", "integration", "corporate"],
    roles: ["frontend", "uiux", "integration", "maintenance"],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
    integrations: ["IXC Soft"],
    architecture: [
      { icon: "layout", label: { pt: "Frontend", en: "Frontend" }, detail: { pt: "React + Vite + Tailwind, TanStack Query; telas específicas por perfil.", en: "React + Vite + Tailwind, TanStack Query; profile-specific screens." } },
      { icon: "server", label: { pt: "Backend", en: "Backend" }, detail: { pt: "Node.js + Express, API REST, autenticação JWT e RBAC.", en: "Node.js + Express, REST API, JWT authentication, and RBAC." } },
      { icon: "database", label: { pt: "Banco de dados", en: "Database" }, detail: { pt: "MongoDB; validação de entrada com Zod.", en: "MongoDB; input validation with Zod." } },
      { icon: "plug", label: { pt: "Integração IXC", en: "IXC integration" }, detail: { pt: "Validação de clientes contra o ERP IXC.", en: "Customer validation against the IXC ERP." } },
    ],
    companyContext: {
      pt: "Clube de benefícios integrado ao IXC, com perfis de cliente, parceiro, funcionário e administrador.",
      en: "Benefits club integrated with IXC, with customer, partner, employee, and admin profiles.",
    },
    ownershipNote: {
      pt: "Projeto corporativo com participação em frontend, padronização visual, correções de UX, fluxo de login e apoio em melhorias técnicas.",
      en: "Corporate project with involvement in frontend, visual standardization, UX fixes, the login flow, and support on technical improvements.",
    },
    summary: {
      pt: "Aplicação full-stack para um clube de benefícios integrado ao IXC, com múltiplos perfis de acesso, dashboards específicos e validação de clientes.",
      en: "Full-stack application for a benefits club integrated with IXC, with multiple access profiles, profile-specific dashboards, and customer validation.",
    },
    problem: {
      pt: "A empresa precisava oferecer benefícios a clientes e permitir que parceiros registrassem compras e descontos, com controle e auditoria por perfil.",
      en: "The company needed to offer benefits to customers and let partners register purchases and discounts, with profile-based control and auditing.",
    },
    solution: {
      pt: "Um sistema web com quatro perfis de acesso (cliente, parceiro, funcionário e administrador), login por tipo de usuário, dashboards específicos, gestão administrativa, área de parceiros e validação de clientes via IXC, com autenticação JWT e controle de acesso por papel (RBAC).",
      en: "A web system with four access profiles (customer, partner, employee, and admin), login per user type, profile-specific dashboards, admin management, a partner area, and customer validation via IXC, with JWT authentication and role-based access control (RBAC).",
    },
    participation: {
      pt: "Atuei em melhorias de frontend, padronização visual, correções nas telas de login, ajustes de UX e apoio em fluxos integrados ao IXC. Também participei de revisões de segurança e de fluxo de autenticação por perfil.",
      en: "I worked on frontend improvements, visual standardization, login-screen fixes, UX adjustments, and support on IXC-integrated flows. I also took part in security reviews and the per-profile authentication flow.",
    },
    highlights: {
      pt: [
        "Quatro perfis de usuário com permissões distintas",
        "Login por cliente, parceiro, funcionário e administrador",
        "Dashboards específicos por perfil",
        "Validação de cliente no IXC",
        "Controle de acesso por papel (RBAC)",
        "Auditoria de ações sensíveis",
        "Correções de segurança no fluxo de login",
        "Padronização visual das telas de autenticação",
      ],
      en: [
        "Four user profiles with distinct permissions",
        "Login for customer, partner, employee, and admin",
        "Profile-specific dashboards",
        "Customer validation in IXC",
        "Role-based access control (RBAC)",
        "Auditing of sensitive actions",
        "Security fixes in the login flow",
        "Visual standardization of the authentication screens",
      ],
    },
    challenges: {
      pt: [
        "Unificar a identidade visual entre telas e perfis diferentes",
        "Garantir separação clara de permissões entre os quatro perfis",
        "Validar clientes contra o IXC mantendo a UX simples",
      ],
      en: [
        "Unifying the visual identity across different screens and profiles",
        "Ensuring clear permission separation across the four profiles",
        "Validating customers against IXC while keeping the UX simple",
      ],
    },
    results: {
      pt: [
        "Telas de login padronizadas e mais consistentes",
        "Acesso segmentado e auditável por perfil",
        "Base visual e de UX mais sólida para evoluções futuras",
      ],
      en: [
        "Standardized and more consistent login screens",
        "Segmented, auditable access per profile",
        "A stronger visual and UX foundation for future evolution",
      ],
    },
    learned: {
      pt: [
        "Padronização de design system em um app multiperfil",
        "Boas práticas de autenticação e RBAC com JWT",
        "Validação de dados de entrada com Zod",
      ],
      en: [
        "Design-system standardization in a multi-profile app",
        "Authentication and RBAC best practices with JWT",
        "Input validation with Zod",
      ],
    },
    metrics: [
      { value: "4", label: { pt: "perfis de acesso", en: "access profiles" } },
      { value: "RBAC", label: { pt: "controle por permissão", en: "permission control" } },
      { value: "JWT", label: { pt: "autenticação segura", en: "secure authentication" } },
    ],
    screenshots: [
      {
        icon: "users",
        alt: { pt: "Tela de login segmentada por perfil de usuário (dados anonimizados).", en: "Login screen segmented by user profile (anonymized data)." },
        caption: { pt: "Login por perfil", en: "Login per profile" },
      },
      {
        icon: "gift",
        alt: { pt: "Dashboard do clube de benefícios (dados anonimizados).", en: "Benefits club dashboard (anonymized data)." },
        caption: { pt: "Dashboard de benefícios", en: "Benefits dashboard" },
      },
    ],
  },

  /* 4 — Bot de Automação Comercial ---------------------------------------- */
  {
    slug: "bot-comercial",
    title: "Bot de Automação Comercial",
    icon: "bolt",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "TypeScript", "Axios", "Google Sheets API", "node-cron", "p-limit", "Winston", "PM2", "Linux"],
    integrations: ["IXC Soft", "Google Sheets", "OPA Suite / WhatsApp"],
    architecture: [
      { icon: "bolt", label: { pt: "Runtime", en: "Runtime" }, detail: { pt: "Node.js + TypeScript, execução contínua via PM2 em Linux.", en: "Node.js + TypeScript, continuous execution via PM2 on Linux." } },
      { icon: "repeat", label: { pt: "Agendamento", en: "Scheduling" }, detail: { pt: "node-cron para as rotinas; p-limit para controle de concorrência.", en: "node-cron for the routines; p-limit for concurrency control." } },
      { icon: "plug", label: { pt: "Integrações", en: "Integrations" }, detail: { pt: "IXC (Axios), Google Sheets API e OPA Suite/WhatsApp.", en: "IXC (Axios), Google Sheets API, and OPA Suite/WhatsApp." } },
      { icon: "shield", label: { pt: "Resiliência & logs", en: "Resilience & logs" }, detail: { pt: "Retry com backoff, checkpoint de envio e logs com Winston (BRT).", en: "Retry with backoff, send checkpoints, and Winston logging (BRT)." } },
    ],
    companyContext: {
      pt: "Automação que sincroniza dados do IXC com Google Sheets e dispara mensagens via WhatsApp.",
      en: "Automation that syncs IXC data with Google Sheets and dispatches messages via WhatsApp.",
    },
    ownershipNote: {
      pt: "Automação desenvolvida para eliminar processos repetitivos da equipe comercial, integrando IXC, planilhas e WhatsApp.",
      en: "Automation built to eliminate repetitive tasks for the sales team, integrating IXC, spreadsheets, and WhatsApp.",
    },
    summary: {
      pt: "Bot em Node.js/TypeScript que sincroniza dados do IXC com Google Sheets e dispara mensagens automáticas de WhatsApp via OPA Suite.",
      en: "A Node.js/TypeScript bot that syncs IXC data with Google Sheets and dispatches automatic WhatsApp messages via OPA Suite.",
    },
    problem: {
      pt: "A equipe comercial atualizava planilhas manualmente e enviava mensagens individuais para clientes, consumindo horas por dia em tarefas repetitivas e sujeitas a erro.",
      en: "The sales team updated spreadsheets manually and sent individual messages to customers, consuming hours a day on repetitive, error-prone tasks.",
    },
    solution: {
      pt: "Um bot que roda continuamente via PM2, cruza dados do IXC, atualiza as planilhas comerciais e dispara templates de WhatsApp automaticamente — processando instalações, upgrades e comissões, com retry, controle de concorrência e checkpoint de envio.",
      en: "A bot that runs continuously via PM2, cross-references IXC data, updates the sales spreadsheets, and dispatches WhatsApp templates automatically — processing installations, upgrades, and commissions, with retry, concurrency control, and send checkpoints.",
    },
    participation: {
      pt: "Desenvolvi a automação para reduzir rotinas manuais do setor comercial, integrando IXC, Google Sheets e WhatsApp (OPA Suite). Implementei as rotinas cron, o tratamento de falhas com retry e backoff, o controle de concorrência e os logs.",
      en: "I built the automation to reduce manual routines in the sales department, integrating IXC, Google Sheets, and WhatsApp (OPA Suite). I implemented the cron routines, failure handling with retry and backoff, concurrency control, and logging.",
    },
    highlights: {
      pt: [
        "Atualização automática das planilhas comerciais",
        "Disparo automático de mensagens de WhatsApp",
        "Processamento de instalações, upgrades e comissões",
        "Retry com backoff em falhas de integração",
        "Controle de concorrência (p-limit)",
        "Checkpoint de envio para evitar duplicidade",
        "Logs estruturados em horário de Brasília (BRT)",
        "Execução contínua e supervisionada via PM2",
      ],
      en: [
        "Automatic update of the sales spreadsheets",
        "Automatic dispatch of WhatsApp messages",
        "Processing of installations, upgrades, and commissions",
        "Retry with backoff on integration failures",
        "Concurrency control (p-limit)",
        "Send checkpoint to avoid duplicates",
        "Structured logs in Brasília time (BRT)",
        "Continuous, supervised execution via PM2",
      ],
    },
    challenges: {
      pt: [
        "Evitar envios duplicados de mensagens entre execuções",
        "Respeitar limites das APIs com concorrência controlada",
        "Manter o bot estável rodando 24/7 em servidor Linux",
      ],
      en: [
        "Avoiding duplicate message sends across runs",
        "Respecting API limits with controlled concurrency",
        "Keeping the bot stable running 24/7 on a Linux server",
      ],
    },
    results: {
      pt: [
        "Eliminação de uma rotina manual diária de atualização e envio",
        "Comunicação com clientes disparada de forma consistente",
        "Menos erros humanos no preenchimento de planilhas",
      ],
      en: [
        "Eliminated a daily manual update-and-send routine",
        "Consistent, automated customer communication",
        "Fewer human errors when filling in spreadsheets",
      ],
    },
    learned: {
      pt: [
        "Design de jobs idempotentes com checkpoint",
        "Integração com Google Sheets API em escala",
        "Operação e supervisão de processos com PM2 em Linux",
      ],
      en: [
        "Designing idempotent jobs with checkpoints",
        "Integrating with the Google Sheets API at scale",
        "Operating and supervising processes with PM2 on Linux",
      ],
    },
    metrics: [
      { value: "24/7", label: { pt: "execução via PM2", en: "execution via PM2" } },
      { value: "Auto", label: { pt: "planilhas + WhatsApp", en: "spreadsheets + WhatsApp" } },
      { value: "Retry", label: { pt: "reenvio com backoff", en: "retry with backoff" } },
    ],
    screenshots: [
      {
        icon: "bolt",
        alt: { pt: "Logs de execução do bot comercial (dados anonimizados).", en: "Commercial bot execution logs (anonymized data)." },
        caption: { pt: "Execução e logs", en: "Execution and logs" },
      },
      {
        icon: "repeat",
        alt: { pt: "Planilha comercial atualizada automaticamente (dados anonimizados).", en: "Sales spreadsheet updated automatically (anonymized data)." },
        caption: { pt: "Planilha sincronizada", en: "Synced spreadsheet" },
      },
    ],
  },

  /* 5 — Bot de Monitoramento de Inadimplência ----------------------------- */
  {
    slug: "bot-inadimplencia",
    title: "Bot de Monitoramento de Inadimplência",
    icon: "gauge",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "performance"],
    stack: ["Node.js", "TypeScript", "Axios", "Google Sheets API", "node-cron", "p-limit", "Winston", "dotenv"],
    integrations: ["IXC Soft", "Google Sheets"],
    architecture: [
      { icon: "bolt", label: { pt: "Runtime", en: "Runtime" }, detail: { pt: "Node.js + TypeScript; configuração via dotenv.", en: "Node.js + TypeScript; configuration via dotenv." } },
      { icon: "repeat", label: { pt: "Pipeline ETL", en: "ETL pipeline" }, detail: { pt: "Extração do IXC, cruzamento e carga; sincronização diferencial (inserir/atualizar/remover).", en: "IXC extraction, cross-referencing, and load; differential sync (insert/update/remove)." } },
      { icon: "gauge", label: { pt: "Agendamento & performance", en: "Scheduling & performance" }, detail: { pt: "node-cron a cada 15 min; p-limit, cache com TTL e escrita em lote.", en: "node-cron every 15 min; p-limit, TTL caching, and batch writing." } },
      { icon: "database", label: { pt: "Saída", en: "Output" }, detail: { pt: "Planilha viva no Google Sheets; logs estruturados com Winston.", en: "Live Google Sheets spreadsheet; structured logging with Winston." } },
    ],
    companyContext: {
      pt: "Automação de ETL que mantém uma planilha de inadimplência atualizada a cada 15 minutos.",
      en: "ETL automation that keeps an overdue-payments spreadsheet updated every 15 minutes.",
    },
    ownershipNote: {
      pt: "Bot de automação criado para reduzir o acompanhamento manual de inadimplência e centralizar dados operacionais em uma planilha atualizada automaticamente.",
      en: "Automation bot created to reduce manual overdue-payment tracking and centralize operational data in an automatically updated spreadsheet.",
    },
    summary: {
      pt: "Bot em Node.js/TypeScript que extrai dados do IXC, cruza informações financeiras e mantém uma planilha de inadimplentes sincronizada a cada 15 minutos.",
      en: "A Node.js/TypeScript bot that extracts IXC data, cross-references financial information, and keeps an overdue-payments spreadsheet synced every 15 minutes.",
    },
    problem: {
      pt: "A equipe precisava cruzar manualmente contratos, faturas, clientes, ordens de serviço e dados financeiros para acompanhar inadimplentes — um trabalho lento, repetitivo e que desatualizava rápido.",
      en: "The team had to manually cross-reference contracts, invoices, customers, service orders, and financial data to track overdue accounts — slow, repetitive work that went stale quickly.",
    },
    solution: {
      pt: "Uma automação de ETL que extrai dados do IXC, cruza contratos, faturas, clientes, O.S, comodatos e métricas de pagamento, calcula a média de pagamento e sincroniza uma planilha viva no Google Sheets — inserindo, atualizando e removendo linhas de forma inteligente a cada 15 minutos.",
      en: "An ETL automation that extracts IXC data, cross-references contracts, invoices, customers, service orders, leased equipment, and payment metrics, computes the average payment, and syncs a live Google Sheets spreadsheet — intelligently inserting, updating, and removing rows every 15 minutes.",
    },
    participation: {
      pt: "Desenvolvi a automação para consolidar dados de inadimplência, cruzar informações do IXC e manter uma planilha operacional sempre atualizada. Cuidei do ETL completo, do agendamento via cron, do cache com TTL, do paralelismo controlado, da escrita em lote e dos logs estruturados.",
      en: "I built the automation to consolidate overdue-payment data, cross-reference IXC information, and keep an operational spreadsheet always up to date. I handled the full ETL, cron scheduling, TTL caching, controlled parallelism, batch writing, and structured logging.",
    },
    highlights: {
      pt: [
        "Atualização automática a cada 15 minutos (cron)",
        "ETL completo: extração, cruzamento e carga",
        "Sincronização inteligente: inserir, atualizar e remover linhas",
        "Cruzamento de contratos, faturas, clientes, O.S e comodatos",
        "Cálculo de média de pagamento",
        "Cache com TTL para reduzir chamadas ao IXC",
        "Paralelismo controlado (p-limit)",
        "Escrita em lote no Google Sheets e logs estruturados",
      ],
      en: [
        "Automatic update every 15 minutes (cron)",
        "Full ETL: extraction, cross-referencing, and load",
        "Smart sync: insert, update, and remove rows",
        "Cross-referencing of contracts, invoices, customers, service orders, and leased equipment",
        "Average-payment calculation",
        "TTL caching to reduce IXC calls",
        "Controlled parallelism (p-limit)",
        "Batch writing to Google Sheets and structured logging",
      ],
    },
    challenges: {
      pt: [
        "Manter a planilha consistente com inserções, updates e remoções",
        "Reduzir a carga sobre o IXC com cache e paralelismo controlado",
        "Garantir uma janela de 15 minutos estável mesmo com volume",
      ],
      en: [
        "Keeping the spreadsheet consistent with inserts, updates, and removals",
        "Reducing load on IXC with caching and controlled parallelism",
        "Guaranteeing a stable 15-minute window even under volume",
      ],
    },
    results: {
      pt: [
        "Planilha de inadimplência sempre atualizada, sem trabalho manual",
        "Dados operacionais centralizados para a equipe de cobrança",
        "Visão consolidada de inadimplentes em tempo quase real",
      ],
      en: [
        "Always-updated overdue-payments spreadsheet, with no manual work",
        "Operational data centralized for the collections team",
        "Consolidated near-real-time view of overdue accounts",
      ],
    },
    learned: {
      pt: [
        "Arquitetura de um pipeline ETL agendado e idempotente",
        "Estratégias de cache (TTL) e sincronização diferencial",
        "Otimização de performance em integrações com muitas chamadas",
      ],
      en: [
        "Architecture of a scheduled, idempotent ETL pipeline",
        "Caching (TTL) and differential-sync strategies",
        "Performance tuning in integrations with many calls",
      ],
    },
    metrics: [
      { value: "15 min", label: { pt: "sincronização automática", en: "automatic sync" } },
      { value: "ETL", label: { pt: "extração, cruzamento e carga", en: "extraction, join, and load" } },
      { value: "Cache", label: { pt: "TTL + paralelismo controlado", en: "TTL + controlled parallelism" } },
    ],
    screenshots: [
      {
        icon: "gauge",
        alt: { pt: "Painel de métricas de inadimplência consolidadas (dados anonimizados).", en: "Consolidated overdue-payment metrics panel (anonymized data)." },
        caption: { pt: "Métricas consolidadas", en: "Consolidated metrics" },
      },
      {
        icon: "database",
        alt: { pt: "Planilha de inadimplência sincronizada via ETL (dados anonimizados).", en: "Overdue-payments spreadsheet synced via ETL (anonymized data)." },
        caption: { pt: "Planilha viva (ETL)", en: "Live spreadsheet (ETL)" },
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  "Minha atuação" — pilares                                                  */
/* -------------------------------------------------------------------------- */

export interface ActuationPillar {
  icon: IconName;
  title: Localized;
  description: Localized;
  points: Localized<string[]>;
}

export const ACTUATION_PILLARS: ActuationPillar[] = [
  {
    icon: "layout",
    title: { pt: "Frontend React/TypeScript", en: "React/TypeScript Frontend" },
    description: {
      pt: "Criação de telas, componentes reutilizáveis e formulários complexos.",
      en: "Building screens, reusable components, and complex forms.",
    },
    points: {
      pt: ["Telas e fluxos com React + TypeScript", "Formulários complexos e validação", "Componentes reutilizáveis e responsivos", "Integração com APIs e tratamento de erro"],
      en: ["Screens and flows with React + TypeScript", "Complex forms and validation", "Reusable, responsive components", "API integration and error handling"],
    },
  },
  {
    icon: "plug",
    title: { pt: "Integrações com IXC", en: "IXC Integrations" },
    description: {
      pt: "Consumo da API legada do ERP IXC com normalização e robustez.",
      en: "Consuming the legacy IXC ERP API with normalization and robustness.",
    },
    points: {
      pt: ["Consumo da API legada do IXC", "Normalização de dados e payloads", "Catálogos, contratos e O.S", "Tratamento de erros e dashboards"],
      en: ["Consuming the legacy IXC API", "Data and payload normalization", "Catalogs, contracts, and service orders", "Error handling and dashboards"],
    },
  },
  {
    icon: "bolt",
    title: { pt: "Bots e automações", en: "Bots & automations" },
    description: {
      pt: "Rotinas Node.js/TypeScript que eliminam trabalho manual repetitivo.",
      en: "Node.js/TypeScript routines that eliminate repetitive manual work.",
    },
    points: {
      pt: ["Node.js/TypeScript com node-cron", "Google Sheets e WhatsApp", "Retry, backoff e checkpoint", "Processamento em lote e logs"],
      en: ["Node.js/TypeScript with node-cron", "Google Sheets and WhatsApp", "Retry, backoff, and checkpoint", "Batch processing and logging"],
    },
  },
  {
    icon: "sparkles",
    title: { pt: "UX para operação interna", en: "UX for internal operations" },
    description: {
      pt: "Reduzir cliques e erro humano, guiando quem usa o sistema.",
      en: "Reducing clicks and human error, guiding whoever uses the system.",
    },
    points: {
      pt: ["Reduzir cliques e passos", "Preenchimento automático", "Guiar o vendedor / operador", "Evitar erro humano e ganhar produtividade"],
      en: ["Fewer clicks and steps", "Automatic field filling", "Guiding the salesperson / operator", "Avoiding human error, gaining productivity"],
    },
  },
  {
    icon: "repeat",
    title: { pt: "Manutenção e evolução", en: "Maintenance & evolution" },
    description: {
      pt: "Corrigir, refatorar com cuidado e padronizar telas e fluxos.",
      en: "Fixing, refactoring carefully, and standardizing screens and flows.",
    },
    points: {
      pt: ["Correção de bugs e regressões", "Melhoria de performance", "Refatoração cuidadosa e revisão de payloads", "Padronização visual de telas"],
      en: ["Fixing bugs and regressions", "Performance improvements", "Careful refactoring and payload review", "Visual standardization of screens"],
    },
  },
];
