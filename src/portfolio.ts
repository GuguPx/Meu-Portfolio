/* =============================================================================
   portfolio.ts — Projetos e automações corporativas (PT/EN)

   Conteúdo do portfólio técnico. Todos os projetos descrevem participação real
   em sistemas internos da empresa: alguns desenvolvidos em equipe (com atuação
   em frontend, integração, manutenção e evolução), outros criados do zero para
   automatizar processos manuais.

   Compliance: nenhum dado sensível é exposto aqui — sem clientes reais, CPFs,
   tokens, URLs internas, IPs, IDs ou credenciais. As descrições são técnicas e
   anonimizadas. Nos projetos corporativos os "prints" são placeholders; nos
   projetos open source são imagens reais (ver PortfolioScreenshot).
   ========================================================================== */

import type { IconName, Localized } from "./data";

/** Categorias usadas para o badge principal e para os filtros. */
export type PortfolioCategory =
  | "frontend"
  | "fullstack"
  | "bot"
  | "automation"
  | "integration"
  | "corporate"
  | "opensource";

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
 * Print de um projeto. Nos sistemas internos não há imagem real: a UI renderiza
 * um cartão anonimizado com o `icon` e a legenda. Nos projetos open source o
 * campo `image` aponta para o arquivo em /public/projects/<slug>/ e a imagem
 * real é exibida (o `icon` continua servindo de fallback visual).
 */
export interface PortfolioScreenshot {
  icon: IconName;
  /** Caminho público da imagem real (ex.: "/projects/devsheet/overview.webp"). */
  image?: string;
  /** Proporção nativa da imagem, usada para reservar espaço e evitar CLS. */
  aspect?: string;
  alt: Localized;
  caption: Localized;
}

export interface ArchLayer {
  icon: IconName;
  label: Localized;
  detail: Localized;
}

/**
 * Origem do projeto — muda o selo exibido no card/modal:
 * "internal" = sistema interno da empresa; "opensource" = repositório público.
 */
export type PortfolioSource = "internal" | "opensource";

export interface PortfolioProject {
  slug: string;
  /** Nome próprio do projeto (igual em PT/EN). */
  title: string;
  icon: IconName;
  /** Origem do projeto (padrão: "internal"). */
  source?: PortfolioSource;
  /** Repositório público, quando existir (só nos projetos open source). */
  repoUrl?: string;
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
        image: "/projects/power-leads/dashboard.webp",
        aspect: "1600/740",
        alt: { pt: "Dashboard comercial com indicadores do funil de vendas (dados anonimizados).", en: "Sales dashboard with funnel indicators (anonymized data)." },
        caption: { pt: "Dashboard comercial", en: "Sales dashboard" },
      },
      {
        icon: "kanban",
        image: "/projects/power-leads/kanban.webp",
        aspect: "1600/771",
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
        icon: "lock",
        image: "/projects/pwcontrato/login.webp",
        aspect: "739/1313",
        alt: { pt: "Tela de login do portal de assinatura digital de contratos.", en: "Login screen of the digital contract signing portal." },
        caption: { pt: "Acesso do cliente", en: "Client sign-in" },
      },
      {
        icon: "layers",
        image: "/projects/pwcontrato/contratos.webp",
        aspect: "739/1313",
        alt: { pt: "Lista de contratos por situação: disponíveis, aguardando assinatura, renovações e cancelamentos pendentes (dados anonimizados).", en: "Contract list by status: available, awaiting signature, pending renewals and cancellations (anonymized data)." },
        caption: { pt: "Contratos por situação", en: "Contracts by status" },
      },
      {
        icon: "blocks",
        image: "/projects/pwcontrato/detalhes.webp",
        aspect: "739/1313",
        alt: { pt: "Detalhes do contrato com download do contrato padrão, termo de renovação ou termo de cancelamento (dados anonimizados).", en: "Contract details with download of the standard contract, renewal term, or cancellation term (anonymized data)." },
        caption: { pt: "Três tipos de documento", en: "Three document types" },
      },
      {
        icon: "shield",
        image: "/projects/pwcontrato/identidade.webp",
        aspect: "739/1313",
        alt: { pt: "Etapa de validação de identidade por foto com documento, antes de liberar a assinatura.", en: "Photo-with-document identity validation step, before unlocking the signature." },
        caption: { pt: "Validação de identidade", en: "Identity validation" },
      },
      {
        icon: "signature",
        image: "/projects/pwcontrato/assinatura.webp",
        aspect: "739/1313",
        alt: { pt: "Tela de assinatura do contrato, com opção de desenhar ou digitar a assinatura (dados anonimizados).", en: "Contract signing screen, with the option to draw or type the signature (anonymized data)." },
        caption: { pt: "Assinatura digital", en: "Digital signature" },
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
        image: "/projects/pwbeneficios/login.webp",
        aspect: "5/3",
        alt: { pt: "Tela de login segmentada por perfil de usuário (dados anonimizados).", en: "Login screen segmented by user profile (anonymized data)." },
        caption: { pt: "Login por perfil", en: "Login per profile" },
      },
      {
        icon: "gift",
        image: "/projects/pwbeneficios/dashboard.webp",
        aspect: "1600/934",
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
        image: "/projects/bot-comercial/logs.webp",
        aspect: "1600/395",
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
        image: "/projects/bot-inadimplencia/metricas.webp",
        aspect: "5/3",
        alt: { pt: "Painel de métricas de inadimplência consolidadas (dados anonimizados).", en: "Consolidated overdue-payment metrics panel (anonymized data)." },
        caption: { pt: "Métricas consolidadas", en: "Consolidated metrics" },
      },
      {
        icon: "bolt",
        image: "/projects/bot-inadimplencia/logs.webp",
        aspect: "974/229",
        alt: { pt: "Logs de execução do bot de inadimplência, com o ciclo de atualização da tabela de monitoramento (dados anonimizados).", en: "Overdue-payments bot execution logs, showing the monitoring table update cycle (anonymized data)." },
        caption: { pt: "Execução e logs", en: "Execution and logs" },
      },
    ],
  },

  /* 6 — DevOps Command Center (open source) -------------------------------- */
  {
    slug: "devops-command-center",
    title: "DevOps Command Center",
    icon: "server",
    source: "opensource",
    repoUrl: "https://github.com/GuguPx/devops-command-center",
    category: "opensource",
    categories: ["opensource", "fullstack", "automation", "integration"],
    roles: ["frontend", "backend", "automation", "performance", "uiux"],
    stack: ["JavaScript", "Node.js", "HTML5", "CSS3", "PowerShell", "WMI", "ESLint", "Prettier", "GitHub Actions"],
    integrations: ["Docker", "Git", "Claude Code", "Wallpaper Engine"],
    architecture: [
      { icon: "server", label: { pt: "Agente local", en: "Local agent" }, detail: { pt: "Servidor Node sem dependências em 127.0.0.1:7654, servindo JSON e os arquivos estáticos.", en: "Zero-dependency Node server on 127.0.0.1:7654, serving JSON and the static files." } },
      { icon: "layout", label: { pt: "Wallpaper (CEF)", en: "Wallpaper (CEF)" }, detail: { pt: "Página web em Chromium que consulta a API a cada 2s; layout em rem, idêntico em 1080p, 1440p e 4K.", en: "Chromium web page polling the API every 2s; rem-based layout, identical at 1080p, 1440p, and 4K." } },
      { icon: "gauge", label: { pt: "Coletores", en: "Collectors" }, detail: { pt: "os + WMI, docker ps/stats, git nos diretórios configurados e transcrições do Claude Code — cada um no seu timer, com cache em memória.", en: "os + WMI, docker ps/stats, git in configured directories, and Claude Code transcripts — each on its own timer, with in-memory caching." } },
      { icon: "shield", label: { pt: "Segurança", en: "Security" }, detail: { pt: "Bind apenas em localhost, CORS restrito à origem do wallpaper, rotas estáticas em allowlist e corpo do POST limitado.", en: "Localhost-only bind, CORS restricted to the wallpaper origin, allowlisted static routes, and a size-capped POST body." } },
    ],
    companyContext: {
      pt: "Projeto pessoal open source (MIT) — wallpaper web para o Wallpaper Engine.",
      en: "Personal open-source project (MIT) — web wallpaper for Wallpaper Engine.",
    },
    ownershipNote: {
      pt: "Projeto autoral, desenvolvido do zero e publicado no GitHub sob licença MIT. Frontend, agente Node, coletores e empacotamento são meus.",
      en: "Original project, built from scratch and published on GitHub under the MIT license. Frontend, Node agent, collectors, and packaging are all mine.",
    },
    summary: {
      pt: "Papel de parede que vira um painel DevOps: lê dados reais da máquina (CPU, disco, rede, Docker, git e uso do Claude Code) através de um agente Node local e os exibe em um terminal com estética CRT.",
      en: "A wallpaper that turns into a DevOps dashboard: it reads real machine data (CPU, disk, network, Docker, git, and Claude Code usage) through a local Node agent and displays it in a CRT-styled terminal.",
    },
    problem: {
      pt: "Acompanhar o estado da máquina de desenvolvimento — containers de pé, commits recentes, consumo de recursos e gasto com IA — exigia abrir várias janelas. Além disso, wallpapers do tipo \"scene\" rodam em sandbox: sem acesso a arquivos, rede ou processos, então só conseguiriam simular métricas.",
      en: "Keeping track of the dev machine — running containers, recent commits, resource usage, and AI spend — meant juggling several windows. On top of that, \"scene\" wallpapers run in a sandbox with no file, network, or process access, so they could only ever simulate metrics.",
    },
    solution: {
      pt: "Um wallpaper web (Chromium) somado a um agente Node local sem dependências: o agente coleta os dados na máquina e os expõe em JSON no localhost, e o wallpaper consulta esse endpoint a cada 2 segundos. Sem agente, ele cai automaticamente em dados de demonstração animados — o que mantém o projeto utilizável para quem baixa da Steam Workshop.",
      en: "A web wallpaper (Chromium) paired with a zero-dependency local Node agent: the agent collects machine data and exposes it as JSON on localhost, and the wallpaper polls that endpoint every 2 seconds. With no agent it automatically falls back to animated demo data — keeping the project usable for anyone downloading it from the Steam Workshop.",
    },
    participation: {
      pt: "Desenvolvi o projeto inteiro: o agente Node (coletores, cache, servidor HTTP e configuração), o wallpaper (painéis, terminal, toasts, temas e efeitos CRT), o parser incremental das transcrições do Claude Code, o modelo de segurança e o script de empacotamento para a Steam Workshop.",
      en: "I built the whole project: the Node agent (collectors, caching, HTTP server, and configuration), the wallpaper (panels, terminal, toasts, themes, and CRT effects), the incremental parser for Claude Code transcripts, the security model, and the Steam Workshop packaging script.",
    },
    highlights: {
      pt: [
        "Painéis ao vivo: CPU, memória, disco, rede, ping e uptime",
        "Processos que mais consomem CPU e memória",
        "Containers Docker com estatísticas em tempo real",
        "Feed de commits agregando vários repositórios",
        "Tokens e custo do Claude Code com sparkline de 7 dias",
        "Terminal que reproduz saída real em 11 blocos rotativos",
        "Toasts disparados por eventos reais (commit, container, agente)",
        "Modo demo automático quando o agente não está rodando",
      ],
      en: [
        "Live panels: CPU, memory, disk, network, ping, and uptime",
        "Top CPU- and memory-hungry processes",
        "Docker containers with real-time stats",
        "Commit feed aggregating multiple repositories",
        "Claude Code tokens and cost with a 7-day sparkline",
        "Terminal replaying real output across 11 rotating blocks",
        "Toasts triggered by real events (commit, container, agent)",
        "Automatic demo mode when the agent isn't running",
      ],
    },
    challenges: {
      pt: [
        "Ler transcrições de vários MB sem reprocessar o arquivo inteiro — a solução foi guardar o offset por arquivo e parsear só o trecho novo, parando na última linha completa",
        "Impedir que um `docker stats` lento travasse um frame do wallpaper",
        "Expor dados locais sem abrir a porta para qualquer site aberto no navegador",
        "Manter o mesmo layout em 1080p, 1440p e 4K sem rebuild",
      ],
      en: [
        "Reading multi-MB transcripts without reprocessing the whole file — solved by keeping a per-file byte offset and parsing only the appended tail, stopping at the last complete line",
        "Preventing a slow `docker stats` from stalling a wallpaper frame",
        "Exposing local data without opening the port to any website the user happens to have open",
        "Keeping the same layout at 1080p, 1440p, and 4K with no rebuild",
      ],
    },
    results: {
      pt: [
        "Estado da máquina, dos containers e dos repositórios visível sem abrir nenhuma janela",
        "Custo diário de IA acompanhado sem sair da área de trabalho",
        "Projeto público no GitHub, com CI e licença MIT",
      ],
      en: [
        "Machine, container, and repository state visible without opening a single window",
        "Daily AI cost tracked without leaving the desktop",
        "Public GitHub project, with CI and an MIT license",
      ],
    },
    learned: {
      pt: [
        "Leitura incremental de arquivos append-only com controle de offset",
        "Coleta assíncrona desacoplada do ciclo de resposta HTTP",
        "Modelo de ameaça de um serviço local: bind, CORS e allowlist de rotas",
        "Layout responsivo por unidade derivada da viewport (rem sobre 100vw)",
      ],
      en: [
        "Incremental reading of append-only files with offset control",
        "Async collection decoupled from the HTTP response cycle",
        "Threat modeling a local service: bind, CORS, and route allowlisting",
        "Responsive layout via a viewport-derived unit (rem from 100vw)",
      ],
    },
    metrics: [
      { value: "2s", label: { pt: "atualização dos painéis", en: "panel refresh" } },
      { value: "0", label: { pt: "dependências no agente", en: "agent dependencies" } },
      { value: "11", label: { pt: "blocos no terminal", en: "terminal blocks" } },
    ],
    screenshots: [
      {
        icon: "layout",
        image: "/projects/devops-command-center/dashboard.webp",
        aspect: "16/9",
        alt: { pt: "Wallpaper completo: terminal à esquerda e painéis de sistema, tarefas, Docker, uso do Claude, commits e to-do à direita.", en: "Full wallpaper: terminal on the left and system, tasks, Docker, Claude usage, commits, and to-do panels on the right." },
        caption: { pt: "O wallpaper completo, com dados reais da máquina", en: "The full wallpaper, with real machine data" },
      },
      {
        icon: "server",
        image: "/projects/devops-command-center/terminal.webp",
        aspect: "824/1015",
        alt: { pt: "Painel de terminal reproduzindo saída real de neofetch e htop sob uma statusline estilo tmux.", en: "Terminal panel replaying real neofetch and htop output under a tmux-style statusline." },
        caption: { pt: "Terminal reproduzindo saída real", en: "Terminal replaying real output" },
      },
      {
        icon: "gauge",
        image: "/projects/devops-command-center/panel-system.webp",
        aspect: "535/302",
        alt: { pt: "Painel de sistema com CPU, memória, disco, throughput de rede, ping e uptime.", en: "System panel with CPU, memory, disk, network throughput, ping, and uptime." },
        caption: { pt: "Painel de sistema", en: "System panel" },
      },
      {
        icon: "bolt",
        image: "/projects/devops-command-center/panel-tasks-docker.webp",
        aspect: "531/600",
        alt: { pt: "Painéis de processos mais pesados e de containers Docker com CPU e memória ao vivo.", en: "Top-processes and Docker container panels with live CPU and memory." },
        caption: { pt: "Processos e containers", en: "Processes and containers" },
      },
      {
        icon: "sparkles",
        image: "/projects/devops-command-center/panel-claude.webp",
        aspect: "539/916",
        alt: { pt: "Painéis de uso do Claude Code com sparkline de 7 dias, feed de commits e lista de tarefas.", en: "Claude Code usage panels with a 7-day sparkline, commit feed, and to-do list." },
        caption: { pt: "Uso de IA, commits e to-do", en: "AI usage, commits, and to-do" },
      },
    ],
  },

  /* 7 — devsheet (open source) --------------------------------------------- */
  {
    slug: "devsheet",
    title: "devsheet",
    icon: "tools",
    source: "opensource",
    repoUrl: "https://github.com/GuguPx/Dev-sheets-Wallpaper",
    category: "opensource",
    categories: ["opensource", "frontend"],
    roles: ["frontend", "uiux", "performance"],
    stack: ["TypeScript", "Vite", "Zod", "Vitest", "CSS3", "ESLint", "Prettier", "GitHub Actions"],
    integrations: ["Wallpaper Engine", "GitHub Actions"],
    architecture: [
      { icon: "layout", label: { pt: "Interface", en: "Interface" }, detail: { pt: "TypeScript puro, sem framework: abas estilo tmux, statusline estilo Neovim, busca estilo fzf e detalhe em formato man page.", en: "Plain TypeScript, no framework: tmux-style tabs, Neovim-style statusline, fzf-style search, and man-page detail view." } },
      { icon: "database", label: { pt: "Conteúdo", en: "Content" }, detail: { pt: "Um JSON por tecnologia, validado por Zod em tempo de build; 10 tecnologias e 224 comandos.", en: "One JSON per technology, validated with Zod at build time; 10 technologies and 224 commands." } },
      { icon: "blocks", label: { pt: "Build", en: "Build" }, detail: { pt: "Vite com vite-plugin-singlefile: um único index.html com JS, CSS e dados embutidos — nada é baixado em runtime.", en: "Vite with vite-plugin-singlefile: a single index.html with JS, CSS, and data inlined — nothing is fetched at runtime." } },
      { icon: "shield", label: { pt: "Superfície de risco", en: "Risk surface" }, detail: { pt: "O terminal é apenas visual: sem eval, sem shell, sem acesso a arquivos. A linha de comando aceita só uma whitelist interna.", en: "The terminal is visual only: no eval, no shell, no file access. The command line accepts only an internal whitelist." } },
    ],
    companyContext: {
      pt: "Projeto pessoal open source (MIT) — cheat sheets de dev/DevOps como papel de parede.",
      en: "Personal open-source project (MIT) — dev/DevOps cheat sheets as a wallpaper.",
    },
    ownershipNote: {
      pt: "Projeto autoral, desenvolvido do zero e publicado no GitHub sob licença MIT, com CI, testes e guias de contribuição e de conteúdo.",
      en: "Original project, built from scratch and published on GitHub under the MIT license, with CI, tests, and contribution and content guides.",
    },
    summary: {
      pt: "Terminal de consulta de cheat sheets de desenvolvimento e DevOps, feito como papel de parede: 224 comandos em 10 tecnologias, com busca, navegação por teclado e manual por comando — tudo offline.",
      en: "A dev/DevOps cheat-sheet terminal built as a wallpaper: 224 commands across 10 technologies, with search, keyboard navigation, and a per-command manual — all offline.",
    },
    problem: {
      pt: "Consultar comandos de git, docker, linux ou nginx significava abrir o navegador e sair do fluxo de trabalho — e as opções prontas ou eram sites lentos, ou eram imagens estáticas sem busca.",
      en: "Looking up git, docker, linux, or nginx commands meant opening the browser and leaving the workflow — and the ready-made options were either slow websites or static images with no search.",
    },
    solution: {
      pt: "Uma interface que imita um terminal real (abas tmux, statusline Neovim, busca fzf, detalhe em man page) e fica no papel de parede, sempre um clique atrás das janelas. O build gera um único HTML autocontido, então funciona offline e sem back-end; comandos destrutivos são marcados e a cópia deles exige dupla confirmação.",
      en: "An interface that mimics a real terminal (tmux tabs, Neovim statusline, fzf search, man-page detail) living on the wallpaper, always one click behind the windows. The build produces a single self-contained HTML file, so it works offline with no back-end; destructive commands are flagged and copying them requires double confirmation.",
    },
    participation: {
      pt: "Projetei e desenvolvi tudo: o modelo de conteúdo validado por Zod, o parser da linha de comando interna, a navegação por teclado e mouse, os temas, os efeitos CRT, a tela de descanso e o pipeline de CI com lint, tipos, validação de conteúdo, testes e build.",
      en: "I designed and built everything: the Zod-validated content model, the internal command-line parser, keyboard and mouse navigation, the themes, the CRT effects, the screensaver, and the CI pipeline with lint, types, content validation, tests, and build.",
    },
    highlights: {
      pt: [
        "224 comandos em 10 tecnologias, validados por Zod",
        "Abas estilo tmux e statusline estilo Neovim",
        "Busca estilo fzf e detalhe em formato man page",
        "Navegação completa por teclado, com fallback total no mouse",
        "Linha de comando interna com whitelist (open, search, theme…)",
        "8 temas e efeitos CRT ajustáveis (scanlines, glow, curvatura)",
        "Aba tty: terminal fictício em loop como tela de descanso",
        "Margens de segurança configuráveis para não cobrir os ícones do desktop",
      ],
      en: [
        "224 commands across 10 technologies, validated with Zod",
        "tmux-style tabs and a Neovim-style statusline",
        "fzf-style search and man-page detail view",
        "Full keyboard navigation, with complete mouse fallback",
        "Internal command line with a whitelist (open, search, theme…)",
        "8 themes and adjustable CRT effects (scanlines, glow, curvature)",
        "tty tab: a fictional looping terminal used as a screensaver",
        "Configurable safe margins so desktop icons stay uncovered",
      ],
    },
    challenges: {
      pt: [
        "Wallpapers web recebem teclado de forma inconsistente — a interface teve que ficar 100% operável pelo mouse como alternativa",
        "Fazer o terminal parecer real sem nunca executar nada de fato",
        "Manter 224 comandos consistentes: cada JSON é validado no CI antes do build",
        "Entregar tudo em um único HTML, sem requisições em runtime",
      ],
      en: [
        "Web wallpapers receive keyboard input inconsistently — the interface had to be 100% mouse-operable as an alternative",
        "Making the terminal feel real without ever executing anything",
        "Keeping 224 commands consistent: each JSON is validated in CI before the build",
        "Shipping everything as a single HTML file, with no runtime requests",
      ],
    },
    results: {
      pt: [
        "Consulta de comandos sem sair do fluxo de trabalho, offline",
        "Conteúdo aberto a contribuições, com guia próprio de formato",
        "CI rodando formatação, lint, tipos, validação, testes e build a cada push",
      ],
      en: [
        "Command lookup without leaving the workflow, offline",
        "Content open to contributions, with its own format guide",
        "CI running formatting, lint, types, validation, tests, and build on every push",
      ],
    },
    learned: {
      pt: [
        "Modelagem e validação de conteúdo com Zod como contrato",
        "Design de interação por teclado (modos, atalhos, foco)",
        "Build single-file e restrições de um ambiente sem back-end",
        "Manutenção de um repositório público: CI, testes e guias de contribuição",
      ],
      en: [
        "Content modeling and validation with Zod as a contract",
        "Keyboard interaction design (modes, shortcuts, focus)",
        "Single-file builds and the constraints of a back-endless environment",
        "Maintaining a public repository: CI, tests, and contribution guides",
      ],
    },
    metrics: [
      { value: "224", label: { pt: "comandos catalogados", en: "cataloged commands" } },
      { value: "10", label: { pt: "tecnologias", en: "technologies" } },
      { value: "8", label: { pt: "temas + efeitos CRT", en: "themes + CRT effects" } },
    ],
    screenshots: [
      {
        icon: "layout",
        image: "/projects/devsheet/overview.webp",
        aspect: "16/9",
        alt: { pt: "Visão geral do devsheet como papel de parede, com colunas de comandos por tecnologia.", en: "Overview of devsheet as a wallpaper, with command columns per technology." },
        caption: { pt: "Visão geral no papel de parede", en: "Overview on the wallpaper" },
      },
      {
        icon: "blocks",
        image: "/projects/devsheet/git-categorias.webp",
        aspect: "16/9",
        alt: { pt: "Aba git com os comandos agrupados por categoria.", en: "git tab with commands grouped by category." },
        caption: { pt: "Comandos por categoria", en: "Commands by category" },
      },
      {
        icon: "tools",
        image: "/projects/devsheet/manual.webp",
        aspect: "919/646",
        alt: { pt: "Detalhe de um comando exibido no formato man page.", en: "Command detail displayed in man-page format." },
        caption: { pt: "Manual do comando", en: "Command manual" },
      },
      {
        icon: "shield",
        image: "/projects/devsheet/tty-descanso.webp",
        aspect: "16/9",
        alt: { pt: "Aba tty com um terminal fictício em loop, usada como tela de descanso.", en: "tty tab with a fictional looping terminal, used as a screensaver." },
        caption: { pt: "Aba tty (tela de descanso)", en: "tty tab (screensaver)" },
      },
      {
        icon: "bolt",
        image: "/projects/devsheet/boot.webp",
        aspect: "16/9",
        alt: { pt: "Sequência de boot estilo terminal exibida ao iniciar o wallpaper.", en: "Terminal-style boot sequence shown when the wallpaper starts." },
        caption: { pt: "Sequência de boot", en: "Boot sequence" },
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
