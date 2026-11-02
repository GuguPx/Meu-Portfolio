/* =============================================================================
   portfolio.ts — Projetos e automações corporativas (PT/EN)

   Conteúdo do portfólio técnico. Todos os projetos descrevem participação real
   em sistemas internos da empresa: alguns desenvolvidos em equipe (com atuação
   em frontend, integração, manutenção e evolução), outros criados do zero para
   automatizar processos manuais.

   Compliance: nenhum dado sensível é exposto aqui — sem clientes reais, CPFs,
   tokens, URLs internas, IPs, IDs ou credenciais. As descrições são técnicas e
   anonimizadas. Prints de sistemas corporativos e de clientes usam dados
   fictícios/seed ou tarjas sólidas (nunca blur, que é reversível); quando não
   há print seguro, a UI mostra um placeholder (ver PortfolioScreenshot).
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
 * Print de um projeto. Com `image`, a UI exibe o arquivo em
 * /public/projects/<slug>/ (o primeiro vira a capa do card); sem `image`, renderiza
 * um cartão anonimizado com o `icon` e a legenda.
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
 * "internal" = sistema interno da empresa; "opensource" = repositório público
 * com licença aberta; "personal" = projeto autoral (repositório público ou
 * privado); "client" = projeto feito para um negócio (cliente).
 */
export type PortfolioSource = "internal" | "opensource" | "personal" | "client";

export interface PortfolioProject {
  slug: string;
  /** Nome próprio do projeto (igual em PT/EN). */
  title: string;
  icon: IconName;
  /** Origem do projeto (padrão: "internal"). */
  source?: PortfolioSource;
  /** Repositório público, quando existir (open source e pessoais públicos). */
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
  /* 1 — Power Leads --------------------------------------------------------- */
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

  /* 2 — PWContrato 2.0 ------------------------------------------------------ */
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
        image: "/projects/pwcontrato/showcase.webp",
        aspect: "16/9",
        alt: { pt: "Três telas do fluxo no celular: login, seleção do contrato e validação de identidade (dados anonimizados).", en: "Three mobile screens of the flow: sign-in, contract selection, and identity validation (anonymized data)." },
        caption: { pt: "Fluxo do cliente, do login à validação", en: "Client flow, from sign-in to validation" },
      },
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

  /* 3 — Dashboard de Cancelamentos ------------------------------------------ */
  {
    slug: "dashboard-cancelamentos",
    title: "Dashboard de Cancelamentos",
    icon: "chart",
    category: "fullstack",
    categories: ["fullstack", "integration", "automation", "corporate"],
    roles: ["backend", "integration", "automation", "frontend"],
    stack: ["Node.js", "JavaScript", "ExcelJS", "node-cron", "HTML5", "CSS3", "Docker", "node:test"],
    integrations: ["IXC Soft"],
    architecture: [
      { icon: "plug", label: { pt: "Integração IXC", en: "IXC integration" }, detail: { pt: "Listagem paginada, consultas em lote e retry com backoff exponencial e timeout em cada chamada à API do ERP.", en: "Paginated listing, batched lookups, and exponential-backoff retry with a timeout on every ERP API call." } },
      { icon: "layers", label: { pt: "Regras & parsing", en: "Rules & parsing" }, detail: { pt: "Classificação de O.S., extração de equipamentos do texto livre dos técnicos e cálculo de KPIs, LT/LTV, reversão e rankings.", en: "Service-order classification, equipment extraction from technicians' free text, and KPI, LT/LTV, reversal, and ranking calculations." } },
      { icon: "database", label: { pt: "Cache & agendamento", en: "Cache & scheduling" }, detail: { pt: "Snapshots JSON cíclicos com escrita atômica e dois crons que entram numa fila única de coleta.", en: "Cyclic JSON snapshots with atomic writes, and two crons feeding a single collection queue." } },
      { icon: "layout", label: { pt: "API & painel", en: "API & dashboard" }, detail: { pt: "API em HTTP nativo do Node, sessão por cookie assinado e painel em HTML/CSS/JS puro, sem framework nem build.", en: "API on Node's native HTTP, signed-cookie session, and a plain HTML/CSS/JS dashboard with no framework or build step." } },
    ],
    companyContext: {
      pt: "Painel de cancelamentos para provedor de internet, alimentado pelo ERP IXC.",
      en: "Cancellations dashboard for an internet provider, fed by the IXC ERP.",
    },
    ownershipNote: {
      pt: "Sistema interno desenvolvido para a gestão comercial, integrando o ERP do provedor. Os prints usam dados 100% fictícios; endereços, credenciais e dados de clientes não são divulgados.",
      en: "Internal system built for sales management, integrated with the ISP's ERP. The screenshots use 100% fictitious data; addresses, credentials, and customer data are not disclosed.",
    },
    summary: {
      pt: "Backend + dashboard que cruza contratos, O.S., comodato e tickets do IXC para mostrar quem cancelou, por quê, quanto tempo ficou na base, quais equipamentos recolher e quantos cancelamentos foram revertidos.",
      en: "Backend + dashboard that joins IXC contracts, service orders, loaned equipment, and tickets to show who cancelled, why, how long they stayed, which equipment to collect, and how many cancellations were reverted.",
    },
    problem: {
      pt: "Os dados de um cliente cancelado ficam espalhados por várias tabelas do ERP (contrato, cliente, vendedor, motivo, O.S., comodato, tickets). Nenhuma tela respondia perguntas simples da gestão: quem cancelou no mês, por qual motivo, de qual consultor, e que equipamento ainda está na casa do cliente.",
      en: "A cancelled customer's data is scattered across several ERP tables (contract, customer, salesperson, reason, service orders, loaned equipment, tickets). No screen answered simple management questions: who cancelled this month, why, from which consultant, and what equipment is still at the customer's home.",
    },
    solution: {
      pt: "Um serviço Node.js que coleta e cruza essas tabelas automaticamente: entrega uma planilha de inativos toda manhã e, toda semana, um snapshot que alimenta um painel com login, filtros, KPIs (taxa de reversão, LT e LTV), gráficos, rankings por consultor e por equipamento e uma tabela de clientes com detalhe expandível. Um botão permite atualizar os dados sob demanda, usando a mesma fila dos crons.",
      en: "A Node.js service that collects and joins those tables automatically: it delivers a spreadsheet of inactive contracts every morning and, every week, a snapshot that powers a login-protected dashboard with filters, KPIs (reversal rate, LT, and LTV), charts, rankings by consultant and by equipment, and a customer table with expandable details. A button refreshes the data on demand, through the same queue the crons use.",
    },
    participation: {
      pt: "Desenvolvi o sistema de ponta a ponta: a coleta no IXC com retry e lote, o parser de equipamentos a partir do texto dos técnicos, as regras de negócio dos indicadores, o cache cíclico, a fila de jobs, a API com autenticação endurecida, o painel e o empacotamento em Docker com healthcheck e desligamento gracioso.",
      en: "I built the system end to end: IXC collection with retries and batching, the equipment parser for technicians' free text, the KPI business rules, the cyclic cache, the job queue, the hardened-auth API, the dashboard, and Docker packaging with a healthcheck and graceful shutdown.",
    },
    highlights: {
      pt: [
        "Planilha diária de inativos às 07:00, gerada de forma atômica",
        "Snapshot semanal com seletor dos últimos caches no painel",
        "KPIs: cancelados, com itens, com câmera, instalados, reversão, LT e LTV",
        "Gráficos por vendedor, motivo, mês e dia do mês",
        "Rankings por consultor (LT/LTV) e por equipamento em comodato",
        "Filtros combináveis e tabela paginada com detalhe por contrato",
        "Botão “Atualizar dados” com acompanhamento do status da coleta",
        "Healthcheck sem login para o Docker",
      ],
      en: [
        "Daily 07:00 spreadsheet of inactive contracts, written atomically",
        "Weekly snapshot with a selector for the latest caches in the dashboard",
        "KPIs: cancelled, with items, with camera, installed, reversal, LT, and LTV",
        "Charts by salesperson, reason, month, and day of month",
        "Rankings by consultant (LT/LTV) and by loaned equipment",
        "Combinable filters and a paginated table with per-contract details",
        "“Refresh data” button that tracks the collection status",
        "Unauthenticated healthcheck for Docker",
      ],
    },
    challenges: {
      pt: [
        "Fila única para que os dois crons e o botão manual nunca rodem coletas em paralelo (o botão recebe 409 se já houver uma em andamento)",
        "Extrair equipamentos de formulários em texto livre: blocos rotulados, quantidades por extenso e tabela de aliases de modelos",
        "Desligamento gracioso: recusar novos jobs e esperar o atual terminar, com /health respondendo 503",
        "Sessão assinada com HMAC, comparação em tempo constante, rate limit por IP e validação de segredos fracos no boot",
        "Snapshots com escrita atômica para o restart não disparar uma varredura completa",
      ],
      en: [
        "A single queue so the two crons and the manual button never run collections in parallel (the button gets a 409 if one is already running)",
        "Extracting equipment from free-text forms: labeled blocks, quantities written as words, and a model alias table",
        "Graceful shutdown: refuse new jobs and wait for the current one, with /health answering 503",
        "HMAC-signed session, constant-time comparison, per-IP rate limiting, and weak-secret validation at boot",
        "Atomic snapshot writes so a restart doesn't trigger a full scan",
      ],
    },
    results: {
      pt: [
        "Gestão comercial com a visão de cancelamentos pronta toda semana, sem montar planilhas à mão",
        "Lista clara de equipamentos em comodato a recolher",
        "Taxa de reversão medida a partir dos tickets de retenção",
      ],
      en: [
        "Sales management gets the cancellations view ready every week, without building spreadsheets by hand",
        "A clear list of loaned equipment to collect",
        "Reversal rate measured from retention tickets",
      ],
    },
    learned: {
      pt: [
        "Modelar indicadores de negócio (LT, LTV, reversão) a partir de dados brutos do ERP",
        "Concorrência de jobs agendados e sob demanda com uma fila simples",
        "Endurecimento de autenticação sem depender de framework",
        "Testes com o runner nativo do Node, sem chamar a API real",
      ],
      en: [
        "Modeling business KPIs (LT, LTV, reversal) from raw ERP data",
        "Scheduled and on-demand job concurrency with a simple queue",
        "Hardening authentication without relying on a framework",
        "Testing with Node's native runner, without calling the real API",
      ],
    },
    metrics: [
      { value: "61", label: { pt: "testes automatizados", en: "automated tests" } },
      { value: "1 fila", label: { pt: "para 2 crons + botão manual", en: "for 2 crons + manual button" } },
      { value: "5", label: { pt: "snapshots cíclicos", en: "cyclic snapshots" } },
    ],
    screenshots: [
      {
        icon: "gauge",
        image: "/projects/dashboard-cancelamentos/dashboard.webp",
        aspect: "16/9",
        alt: { pt: "Dashboard de Cancelamentos com cabeçalho, painel de filtros e cartões de indicadores como cancelados, taxa de reversão, LT e LTV médios (dados fictícios).", en: "Cancellations dashboard showing the header, filter panel, and KPI cards such as cancelled contracts, reversal rate, average LT and LTV (fictitious data)." },
        caption: { pt: "Filtros, KPIs e taxa de reversão (dados fictícios)", en: "Filters, KPIs, and reversal rate (fictitious data)" },
      },
      {
        icon: "chart",
        image: "/projects/dashboard-cancelamentos/graficos.webp",
        aspect: "1600/678",
        alt: { pt: "Gráficos de cancelamentos por vendedor, por motivo, por mês e média por dia do mês (dados fictícios).", en: "Cancellation charts by salesperson, by reason, by month, and average per day of month (fictitious data)." },
        caption: { pt: "Gráficos por vendedor, motivo e período", en: "Charts by salesperson, reason, and period" },
      },
      {
        icon: "trending",
        image: "/projects/dashboard-cancelamentos/rankings.webp",
        aspect: "1600/528",
        alt: { pt: "Ranking de cancelamentos por consultor com LT e LTV, e ranking de equipamentos por modelo (dados fictícios).", en: "Cancellation ranking by consultant with LT and LTV, and equipment ranking by model (fictitious data)." },
        caption: { pt: "Rankings por consultor e por equipamento", en: "Rankings by consultant and by equipment" },
      },
      {
        icon: "database",
        image: "/projects/dashboard-cancelamentos/tabela.webp",
        aspect: "1600/676",
        alt: { pt: "Tabela paginada de clientes cancelados com uma linha expandida mostrando contrato, plano, ativação, LT e LTV estimado (dados fictícios).", en: "Paginated table of cancelled customers with one row expanded showing contract, plan, activation, LT, and estimated LTV (fictitious data)." },
        caption: { pt: "Tabela de clientes com detalhe por contrato", en: "Customer table with per-contract details" },
      },
    ],
  },

  /* 4 — Power Reviews ------------------------------------------------------- */
  {
    slug: "power-reviews",
    title: "Power Reviews",
    icon: "sparkles",
    category: "fullstack",
    categories: ["fullstack", "integration", "corporate"],
    roles: ["frontend", "backend", "integration", "uiux"],
    stack: ["React", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS", "NestJS", "Fastify", "Prisma", "PostgreSQL", "Docker"],
    integrations: ["Google Business Profile", "Google OAuth"],
    architecture: [
      { icon: "layout", label: { pt: "SPA", en: "SPA" }, detail: { pt: "React 19 + TanStack Query com 8 páginas: visão geral, avaliações, ranking, colaboradores, analytics, configurações e guia interativo.", en: "React 19 + TanStack Query with 8 pages: overview, reviews, ranking, employees, analytics, settings, and an interactive guide." } },
      { icon: "server", label: { pt: "API", en: "API" }, detail: { pt: "NestJS sobre Fastify: 28 endpoints, Swagger, guards globais de JWT, perfis e rate limit, com rotas públicas explícitas.", en: "NestJS on Fastify: 28 endpoints, Swagger, global JWT, role, and rate-limit guards, with explicit public routes." } },
      { icon: "sparkles", label: { pt: "Identificação", en: "Identification" }, detail: { pt: "Motor que encontra colaboradores citados por nome, apelido ou contexto de cargo, com sugestões por similaridade e fila de revisão.", en: "Engine that finds employees mentioned by name, nickname, or role context, with similarity suggestions and a review queue." } },
      { icon: "database", label: { pt: "Dados & sync", en: "Data & sync" }, detail: { pt: "Prisma + PostgreSQL 16; sincronização com o Google manual e agendada, com tokens criptografados.", en: "Prisma + PostgreSQL 16; manual and scheduled Google sync, with encrypted tokens." } },
    ],
    companyContext: {
      pt: "Dashboard das avaliações do Google da empresa, com ranking dos colaboradores citados.",
      en: "Dashboard for the company's Google reviews, with a ranking of the employees mentioned.",
    },
    ownershipNote: {
      pt: "Sistema interno desenvolvido por mim para a gestão de reputação e reconhecimento da equipe. Os prints usam dados de demonstração com nomes de colaboradores e clientes fictícios; a integração com o Google estava desligada na captura.",
      en: "Internal system I built for reputation management and team recognition. The screenshots use demo data with fictitious employee and customer names; the Google integration was turned off during capture.",
    },
    summary: {
      pt: "Centraliza as avaliações do Google Business Profile, mostra a reputação ao longo do tempo e identifica automaticamente quais técnicos, atendentes e vendedores foram elogiados, gerando um ranking com pódio.",
      en: "Centralizes Google Business Profile reviews, shows reputation over time, and automatically identifies which technicians, attendants, and salespeople were praised, producing a ranking with a podium.",
    },
    problem: {
      pt: "Clientes costumam citar o nome do técnico ou do atendente nas avaliações do Google, mas não havia como medir a reputação por período nem contar, de forma confiável, quem era elogiado e quantas vezes — o reconhecimento dependia de ler comentário por comentário.",
      en: "Customers often name the technician or attendant in their Google reviews, but there was no way to measure reputation by period or reliably count who was praised and how often — recognition depended on reading comment after comment.",
    },
    solution: {
      pt: "As avaliações são importadas do Google via OAuth e analisadas por um motor de identificação: nome completo, apelido cadastrado, primeiro nome único ou nome após palavras como “técnico” e “atendente”. Erros de digitação viram sugestões que um gerente confirma; ao confirmar, a grafia vira apelido e as outras avaliações são reprocessadas. O ranking só conta menções confirmadas.",
      en: "Reviews are imported from Google via OAuth and analyzed by an identification engine: full name, registered nickname, unique first name, or a name following words like “technician” and “attendant”. Typos become suggestions a manager confirms; once confirmed, the spelling becomes a nickname and other reviews are reprocessed. The ranking only counts confirmed mentions.",
    },
    participation: {
      pt: "Desenvolvi a aplicação de ponta a ponta: o motor de identificação e o ciclo de aprendizado, a API em NestJS/Fastify com autenticação e perfis, a integração OAuth com o Google, o agendamento resiliente da sincronização, a modelagem no Prisma e toda a interface.",
      en: "I built the application end to end: the identification engine and learning loop, the NestJS/Fastify API with authentication and roles, the Google OAuth integration, resilient sync scheduling, Prisma modeling, and the whole interface.",
    },
    highlights: {
      pt: [
        "Visão geral com nota média, volume, taxa de resposta e de identificação",
        "Evolução da nota e distribuição por estrelas em gráficos SVG próprios",
        "Lista de avaliações com busca, filtros e painel de detalhes",
        "Identificação automática de colaboradores por nome, apelido ou contexto",
        "Fila de revisão que aprende apelidos e reprocessa avaliações",
        "Ranking com pódio dos destaques por período",
        "Cadastro de colaboradores, áreas, cargos e apelidos",
        "Perfis ADMIN e ANALYST com permissões diferentes",
      ],
      en: [
        "Overview with average rating, volume, response rate, and identification rate",
        "Rating trend and star distribution in custom SVG charts",
        "Review list with search, filters, and a detail panel",
        "Automatic employee identification by name, nickname, or context",
        "Review queue that learns nicknames and reprocesses reviews",
        "Ranking with a podium of highlights by period",
        "Employee, department, role, and nickname management",
        "ADMIN and ANALYST roles with different permissions",
      ],
    },
    challenges: {
      pt: [
        "Atribuir menções sem falso positivo: normalização, palavra inteira, primeiro nome só quando é único e lista de palavras de preenchimento",
        "Sugestões por distância de Levenshtein, propostas só quando há um vencedor claro sobre o segundo colocado",
        "Tokens do Google criptografados com AES-256-GCM, inclusive o state do OAuth, que expira em 10 minutos",
        "Sincronização agendada que pausa após falha e não derruba a sessão do usuário quando o Google expira",
        "Ranking e linha do tempo em SQL direto (Prisma.sql) para agregação eficiente",
      ],
      en: [
        "Attributing mentions without false positives: normalization, whole-word matching, first names only when unique, and a filler-word list",
        "Levenshtein-distance suggestions, proposed only when there's a clear winner over the runner-up",
        "Google tokens encrypted with AES-256-GCM, including the OAuth state, which expires in 10 minutes",
        "Scheduled sync that pauses after a failure and doesn't log the user out when Google access expires",
        "Ranking and timeline in raw SQL (Prisma.sql) for efficient aggregation",
      ],
    },
    results: {
      pt: [
        "Reputação da empresa acompanhada por período, num só painel",
        "Elogios aos colaboradores contados de forma confiável e transformados em reconhecimento",
        "Menções ambíguas revisadas por um gerente, sem contar para a pessoa errada",
      ],
      en: [
        "Company reputation tracked by period, in a single dashboard",
        "Praise for employees counted reliably and turned into recognition",
        "Ambiguous mentions reviewed by a manager, never counted for the wrong person",
      ],
    },
    learned: {
      pt: [
        "NestJS com Fastify, guards globais e decorators de rota pública",
        "Fluxo OAuth 2.0 completo com APIs do Google Business Profile",
        "Correspondência aproximada de texto (normalização + Levenshtein)",
        "Testes com Jest para regras de identificação e mapeamento de erros",
      ],
      en: [
        "NestJS with Fastify, global guards, and public-route decorators",
        "A complete OAuth 2.0 flow with Google Business Profile APIs",
        "Approximate text matching (normalization + Levenshtein)",
        "Jest tests for identification rules and error mapping",
      ],
    },
    metrics: [
      { value: "28", label: { pt: "endpoints REST", en: "REST endpoints" } },
      { value: "18", label: { pt: "testes automatizados", en: "automated tests" } },
      { value: "AES-256", label: { pt: "nos tokens do Google", en: "on Google tokens" } },
    ],
    screenshots: [
      {
        icon: "gauge",
        image: "/projects/power-reviews/dashboard.webp",
        aspect: "1440/900",
        alt: { pt: "Visão geral do Power Reviews com nota média, KPIs de avaliações, taxa de resposta e identificação, gráfico de evolução e distribuição por estrelas (dados de demonstração).", en: "Power Reviews overview with average rating, review KPIs, response and identification rates, a rating trend, and star distribution (demo data)." },
        caption: { pt: "Reputação e KPIs das avaliações", en: "Reputation and review KPIs" },
      },
      {
        icon: "sparkles",
        image: "/projects/power-reviews/avaliacoes.webp",
        aspect: "1440/900",
        alt: { pt: "Lista de avaliações com o painel de detalhes aberto: sugestão de erro de digitação, nome desconhecido para vincular e colaboradora identificada pelo apelido (nomes fictícios).", en: "Review list with the detail panel open: a typo suggestion, an unknown name to link, and an employee identified by nickname (fictitious names)." },
        caption: { pt: "Identificação com sugestões e aprendizado", en: "Identification with suggestions and learning" },
      },
      {
        icon: "trending",
        image: "/projects/power-reviews/ranking.webp",
        aspect: "1440/900",
        alt: { pt: "Ranking de colaboradores com pódio dos três destaques e tabela completa (nomes fictícios).", en: "Employee ranking with a top-three podium and full table (fictitious names)." },
        caption: { pt: "Ranking com pódio", en: "Ranking with podium" },
      },
      {
        icon: "users",
        image: "/projects/power-reviews/colaboradores.webp",
        aspect: "1440/900",
        alt: { pt: "Cadastro de colaboradores com o gerenciador de apelidos aberto (nomes fictícios).", en: "Employee management with the nickname manager open (fictitious names)." },
        caption: { pt: "Colaboradores e apelidos", en: "Employees and nicknames" },
      },
    ],
  },

  /* 5 — Análise de Inadimplência -------------------------------------------- */
  {
    slug: "perfil-inadimplencia",
    title: "Análise de Inadimplência",
    icon: "trending",
    category: "fullstack",
    categories: ["fullstack", "integration", "automation", "corporate"],
    roles: ["backend", "frontend", "integration", "performance"],
    stack: ["Node.js", "JavaScript", "React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "ExcelJS", "Docker", "PM2"],
    integrations: ["IXC Soft"],
    architecture: [
      { icon: "plug", label: { pt: "Coleta", en: "Collection" }, detail: { pt: "Cliente da API do IXC com paginação, retry e timeout; tabelas inteiras unidas em memória e O.S. em janelas semanais com cache retomável.", en: "IXC API client with pagination, retries, and timeouts; whole tables joined in memory and service orders in weekly windows with a resumable cache." } },
      { icon: "layers", label: { pt: "Motor de análise", en: "Analysis engine" }, detail: { pt: "Classificação de cada fatura por vencimento × pagamento real, consolidação por cliente, reconstrução mês a mês e estatísticas de perfil.", en: "Each invoice classified by due date vs. actual payment, per-customer consolidation, month-by-month reconstruction, and profile statistics." } },
      { icon: "server", label: { pt: "API", en: "API" }, detail: { pt: "HTTP nativo do Node: autenticação, análises assíncronas com progresso, filtros e paginação no servidor, cache LRU e exportação Excel.", en: "Native Node HTTP: authentication, async analyses with progress, server-side filters and pagination, LRU cache, and Excel export." } },
      { icon: "layout", label: { pt: "Painel", en: "Dashboard" }, detail: { pt: "React + TanStack Query com indicadores, gráficos em SVG próprio, tabela de clientes e detalhe por cliente.", en: "React + TanStack Query with KPIs, custom SVG charts, a customer table, and per-customer details." } },
    ],
    companyContext: {
      pt: "Análise do perfil dos clientes inadimplentes do provedor, a partir do ERP IXC.",
      en: "Profile analysis of the ISP's delinquent customers, built from the IXC ERP.",
    },
    ownershipNote: {
      pt: "Ferramenta interna criada por mim do zero para as áreas financeira e comercial. Os prints usam uma base 100% fictícia processada pelo próprio pipeline do projeto; volumes reais, credenciais e dados de clientes não são divulgados.",
      en: "Internal tool I built from scratch for the finance and sales teams. The screenshots use a 100% fictitious dataset processed by the project's own pipeline; real volumes, credentials, and customer data are not disclosed.",
    },
    summary: {
      pt: "Lê o IXC e responde quem deve, quem pagou atrasado e o que esses clientes têm em comum — com fechamento mensal em Excel e um painel com indicadores, comparação de perfil entre devedores e pagadores e detalhe de cada cliente.",
      en: "Reads IXC and answers who owes, who paid late, and what those customers have in common — with a monthly Excel closing and a dashboard with KPIs, a debtors-vs-payers profile comparison, and per-customer details.",
    },
    problem: {
      pt: "O ERP entrega tabelas cruas, sem cruzamento, e não guarda quem estava inadimplente em cada mês: o status do contrato é sempre o de hoje. Para fechar o mês e entender o perfil dos devedores, a equipe exportava e cruzava planilhas à mão.",
      en: "The ERP returns raw, unjoined tables and doesn't store who was delinquent in each month: the contract status is always today's. To close the month and understand debtors' profiles, the team exported and joined spreadsheets by hand.",
    },
    solution: {
      pt: "Um backend Node.js coleta clientes, contratos, planos, comodato, O.S. e faturas, classifica cada fatura comparando vencimento com a data real de pagamento e reconstrói a inadimplência mês a mês, congelando os meses fechados. O mesmo resultado vira planilhas Excel para cobrança e um painel com login, filtros, gráficos e o comparativo de devedores × pagadores por faixa etária, moradia, zona, cidade e bairro.",
      en: "A Node.js backend collects customers, contracts, plans, loaned equipment, service orders, and invoices, classifies each invoice by comparing its due date with the actual payment date, and rebuilds delinquency month by month, freezing closed months. The same result becomes Excel workbooks for collections and a login-protected dashboard with filters, charts, and a debtors-vs-payers comparison by age band, housing, zone, city, and neighborhood.",
    },
    participation: {
      pt: "Desenvolvi sozinho: a coleta no IXC, as regras de classificação e de reconstrução histórica, os relatórios Excel, a API com autenticação e perfis, o painel em React e o empacotamento em Docker e PM2, além da suíte de testes offline.",
      en: "I built it alone: the IXC collection, the classification and history-reconstruction rules, the Excel reports, the API with authentication and roles, the React dashboard, Docker and PM2 packaging, and the offline test suite.",
    },
    highlights: {
      pt: [
        "Análises em segundo plano com barra de progresso e seletor de período",
        "12 indicadores: inadimplentes, pagos em atraso, vencidas, bloqueios, churn e mais",
        "Gráficos de vencimentos, recebimento acumulado e faixas de atraso",
        "Comparativo de perfil entre devedores e pagadores em 5 eixos",
        "Tabela de clientes com filtros, busca e ordenação no servidor",
        "Detalhe do cliente com contratos, comodato e cada fatura classificada",
        "Exportação Excel com 12 abas e proteção contra injeção de fórmula",
        "Bots de fechamento mensal com meses congelados em snapshot",
      ],
      en: [
        "Background analyses with a progress bar and period selector",
        "12 KPIs: delinquents, paid late, overdue, blocks, churn, and more",
        "Charts for due dates, cumulative receipts, and delay bands",
        "Debtors-vs-payers profile comparison across 5 axes",
        "Customer table with server-side filters, search, and sorting",
        "Customer detail with contracts, loaned equipment, and every invoice classified",
        "12-sheet Excel export with formula-injection protection",
        "Monthly closing bots with closed months frozen as snapshots",
      ],
    },
    challenges: {
      pt: [
        "Definir a data de pagamento certa: cascata de campos por registro, porque a data de baixa divergia do pagamento real",
        "Ligar O.S. a contratos sem chave direta, descartando de propósito os casos ambíguos",
        "Reconstruir um histórico que o ERP não guarda e congelá-lo para renegociações não reescreverem o passado",
        "Limitar uma tabela de faturas enorme a uma janela móvel de 24 meses sem perder registros",
        "Servir análises grandes rápido: índice leve, cache LRU e escrita atômica por análise",
      ],
      en: [
        "Choosing the right payment date: a per-record field cascade, because the write-off date diverged from the real payment",
        "Linking service orders to contracts with no direct key, deliberately discarding ambiguous cases",
        "Rebuilding a history the ERP doesn't store and freezing it so renegotiations don't rewrite the past",
        "Bounding a huge invoice table to a rolling 24-month window without losing records",
        "Serving large analyses fast: a light index, LRU cache, and atomic writes per analysis",
      ],
    },
    results: {
      pt: [
        "Fechamento mensal de inadimplência sem cruzar planilhas à mão",
        "Perfil dos devedores com números defensáveis e cobertura do cadastro visível",
        "Mesma análise disponível no painel e no Excel",
      ],
      en: [
        "Monthly delinquency closing without joining spreadsheets by hand",
        "Debtor profiles with defensible numbers and visible registration coverage",
        "The same analysis available in the dashboard and in Excel",
      ],
    },
    learned: {
      pt: [
        "Modelar regras financeiras (vencimento, pagamento, atraso, churn) a partir de dados brutos",
        "Backend sem framework com autenticação endurecida (scrypt, HMAC, rate limit)",
        "Processar volumes grandes com NDJSON, streaming e cache",
        "Docker com sistema de arquivos somente leitura e usuário sem root",
      ],
      en: [
        "Modeling financial rules (due date, payment, delay, churn) from raw data",
        "A framework-free backend with hardened authentication (scrypt, HMAC, rate limiting)",
        "Processing large volumes with NDJSON, streaming, and caching",
        "Docker with a read-only filesystem and a non-root user",
      ],
    },
    metrics: [
      { value: "12", label: { pt: "abas no Excel exportado", en: "sheets in the Excel export" } },
      { value: "5", label: { pt: "eixos de perfil comparados", en: "compared profile axes" } },
      { value: "10", label: { pt: "suítes de teste offline", en: "offline test suites" } },
    ],
    screenshots: [
      {
        icon: "gauge",
        image: "/projects/perfil-inadimplencia/dashboard.webp",
        aspect: "1440/810",
        alt: { pt: "Painel de análise de inadimplência com 12 indicadores e gráficos de vencimentos por dia e recebimento acumulado (dados fictícios).", en: "Delinquency analysis dashboard with 12 KPI cards and charts of invoices due per day and cumulative receipts (fictitious data)." },
        caption: { pt: "Indicadores e evolução no período", en: "KPIs and trend for the period" },
      },
      {
        icon: "users",
        image: "/projects/perfil-inadimplencia/perfil.webp",
        aspect: "1440/802",
        alt: { pt: "Comparativo de devedores e pagadores por faixa etária e tipo de moradia, com idade média e “Não informado” visível (dados fictícios).", en: "Debtors vs. payers comparison by age band and housing type, with mean age and “Not informed” kept visible (fictitious data)." },
        caption: { pt: "Perfil de devedores × pagadores", en: "Debtors vs. payers profile" },
      },
      {
        icon: "database",
        image: "/projects/perfil-inadimplencia/clientes.webp",
        aspect: "1600/900",
        alt: { pt: "Tabela de clientes filtrada por inadimplentes atuais, ordenada pelo maior atraso, com filtros de status, cidade, vendedor e plano (dados fictícios).", en: "Customer table filtered to current delinquents, sorted by longest delay, with status, city, salesperson, and plan filters (fictitious data)." },
        caption: { pt: "Filtros e ordenação no servidor", en: "Server-side filters and sorting" },
      },
      {
        icon: "layers",
        image: "/projects/perfil-inadimplencia/detalhe.webp",
        aspect: "1600/1000",
        alt: { pt: "Painel lateral de um cliente fictício com financeiro do período, churn, contrato e histórico de faturas classificadas.", en: "Side panel for a fictitious customer with period financials, churn, contract, and classified invoice history." },
        caption: { pt: "Cada fatura classificada por vencimento × pagamento", en: "Each invoice classified by due date vs. payment" },
      },
    ],
  },

  /* 6 — PW Consulta Estoque ------------------------------------------------- */
  {
    slug: "consulta-estoque",
    title: "PW Consulta Estoque",
    icon: "database",
    category: "fullstack",
    categories: ["fullstack", "frontend", "integration", "corporate"],
    roles: ["frontend", "backend", "integration", "uiux"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "ExcelJS", "Zod", "JWT"],
    integrations: ["IXC Soft"],
    architecture: [
      { icon: "plug", label: { pt: "Integração ERP", en: "ERP integration" }, detail: { pt: "Serviços NestJS que consultam o estoque do almoxarifado, o cadastro e os vendedores no IXC.", en: "NestJS services that query warehouse stock, customer records, and sellers in IXC." } },
      { icon: "repeat", label: { pt: "Sincronização", en: "Sync" }, detail: { pt: "Job na subida e todo dia à meia-noite: gera a planilha Excel e um JSON normalizado e categorizado.", en: "Job on startup and every day at midnight: produces the Excel spreadsheet and a normalized, categorized JSON." } },
      { icon: "lock", label: { pt: "Acesso", en: "Access" }, detail: { pt: "Login com as credenciais do ERP, liberado só para quem é vendedor, com sessão JWT.", en: "Sign-in with ERP credentials, allowed only for sellers, with a JWT session." } },
      { icon: "layout", label: { pt: "Interface", en: "Interface" }, detail: { pt: "React 19 + Tailwind 4: busca, ordenação, paginação e seleção 100% no cliente, em tabela ou cards.", en: "React 19 + Tailwind 4: search, sorting, pagination, and selection fully client-side, as a table or cards." } },
    ],
    companyContext: {
      pt: "Consulta rápida de estoque para a equipe de vendas, alimentada pelo ERP IXC.",
      en: "Quick stock lookup for the sales team, fed by the IXC ERP.",
    },
    ownershipNote: {
      pt: "Ferramenta interna criada por mim do zero, de ponta a ponta. Os prints usam itens, códigos e quantidades fictícios servidos por um mock local do ERP.",
      en: "Internal tool I built from scratch, end to end. The screenshots use fictitious items, codes, and quantities served by a local ERP mock.",
    },
    summary: {
      pt: "Painel em que vendedores consultam o estoque do almoxarifado sem abrir o ERP, buscam itens, marcam quantidades e copiam um texto pronto com o pedido — com exportação da lista completa em Excel.",
      en: "Dashboard where sellers check warehouse stock without opening the ERP, search items, set quantities, and copy a ready-made order text — with the full list exportable to Excel.",
    },
    problem: {
      pt: "Conferir estoque no ERP exigia navegar tela a tela por produto. Não havia uma lista rápida, pesquisável e boa no celular, nem um jeito de transformar a seleção de itens num texto para repassar.",
      en: "Checking stock in the ERP meant navigating screen by screen per product. There was no quick, searchable, mobile-friendly list, nor a way to turn a selection of items into a text to pass along.",
    },
    solution: {
      pt: "O backend tira um retrato diário do estoque no IXC, normaliza as descrições e entrega uma planilha e um JSON. A interface carrega esse arquivo uma vez e faz busca instantânea com destaque do termo, ordenação, paginação e seleção com quantidade, gerando automaticamente o texto “quantidade + descrição” para copiar.",
      en: "The backend takes a daily snapshot of IXC stock, normalizes descriptions, and delivers a spreadsheet and a JSON file. The interface loads that file once and provides instant search with term highlighting, sorting, pagination, and selection with quantities, automatically generating the “quantity + description” text to copy.",
    },
    participation: {
      pt: "Desenvolvi sozinho, em uma semana: a integração com o IXC, o job de sincronização com geração de Excel e JSON, a normalização e categorização dos produtos, o login restrito a vendedores e toda a interface responsiva.",
      en: "I built it alone, in one week: the IXC integration, the sync job generating Excel and JSON, product normalization and categorization, the seller-only login, and the whole responsive interface.",
    },
    highlights: {
      pt: [
        "Retrato do estoque na subida e todo dia à meia-noite",
        "Download da lista completa em Excel",
        "Login restrito a vendedores cadastrados no ERP",
        "Busca instantânea por ID, descrição, código ou quantidade, com destaque",
        "4 ordenações e paginação de 6 a 48 itens",
        "Seleção com quantidade e texto do pedido gerado automaticamente",
        "Copiar o texto inteiro ou um item com um clique",
        "Tabela no desktop e cards com saldo no celular",
      ],
      en: [
        "Stock snapshot on startup and every day at midnight",
        "Full list download in Excel",
        "Sign-in restricted to sellers registered in the ERP",
        "Instant search by ID, description, code, or quantity, with highlighting",
        "4 sort orders and pagination from 6 to 48 items",
        "Selection with quantities and an automatically generated order text",
        "Copy the whole text or a single item with one click",
        "Table on desktop and cards with stock balance on mobile",
      ],
    },
    challenges: {
      pt: [
        "Desacoplar a interface da latência do ERP: um retrato diário em arquivo, filtrado em memória no navegador",
        "Descrições bagunçadas: remoção de acentos, unificação de marcas, limpeza de pontuação e categorização por regras",
        "Autorizar sem base de usuários própria, encadeando três consultas ao ERP",
        "Um mesmo estado de seleção compartilhado entre os layouts de tabela e de cards",
      ],
      en: [
        "Decoupling the interface from ERP latency: a daily file snapshot, filtered in memory in the browser",
        "Messy descriptions: accent stripping, brand-name unification, punctuation cleanup, and rule-based categorization",
        "Authorizing without a user base of its own, by chaining three ERP lookups",
        "One selection state shared between the table and card layouts",
      ],
    },
    results: {
      pt: [
        "Vendedores consultam o estoque em segundos, inclusive pelo celular",
        "Pedido de materiais montado e copiado sem digitar descrições",
        "Planilha do estoque sempre atualizada para quem precisa do Excel",
      ],
      en: [
        "Sellers check stock in seconds, including on their phones",
        "Material requests built and copied without typing descriptions",
        "An always-current stock spreadsheet for whoever needs Excel",
      ],
    },
    learned: {
      pt: [
        "NestJS com agendamento (@nestjs/schedule) e validação com Zod",
        "Geração de planilhas com ExcelJS",
        "React 19 com Tailwind CSS 4 e Vite 8",
      ],
      en: [
        "NestJS with scheduling (@nestjs/schedule) and Zod validation",
        "Spreadsheet generation with ExcelJS",
        "React 19 with Tailwind CSS 4 and Vite 8",
      ],
    },
    metrics: [
      { value: "24h", label: { pt: "ciclo de sincronização com o ERP", en: "ERP sync cycle" } },
      { value: "3", label: { pt: "consultas ao IXC integradas", en: "integrated IXC queries" } },
      { value: "7d", label: { pt: "do primeiro commit à v1", en: "from first commit to v1" } },
    ],
    screenshots: [
      {
        icon: "database",
        image: "/projects/consulta-estoque/consulta.webp",
        aspect: "1440/900",
        alt: { pt: "Painel de consulta de estoque com tabela de produtos, contadores e três itens selecionados gerando o texto automático (dados fictícios).", en: "Stock lookup dashboard with the product table, counters, and three selected items generating the automatic text (fictitious data)." },
        caption: { pt: "Seleção com quantidade e texto pronto para copiar", en: "Selection with quantities and ready-to-copy text" },
      },
      {
        icon: "target",
        image: "/projects/consulta-estoque/busca.webp",
        aspect: "1440/900",
        alt: { pt: "Busca filtrando os itens com o termo destacado em cada descrição (dados fictícios).", en: "Search narrowing the items with the term highlighted in each description (fictitious data)." },
        caption: { pt: "Busca instantânea com destaque", en: "Instant search with highlighting" },
      },
      {
        icon: "layout",
        image: "/projects/consulta-estoque/mobile.webp",
        aspect: "390/844",
        alt: { pt: "Versão para celular em cards com saldo em estoque e itens marcados (dados fictícios).", en: "Mobile card view with stock balance and ticked items (fictitious data)." },
        caption: { pt: "Cards no celular", en: "Cards on mobile" },
      },
    ],
  },

  /* 7 — Point do Churros ---------------------------------------------------- */
  {
    slug: "point-do-churros",
    title: "Point do Churros",
    icon: "bag",
    source: "client",
    category: "fullstack",
    categories: ["fullstack", "frontend"],
    roles: ["frontend", "backend", "uiux", "integration"],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "Zod", "JWT", "Vitest"],
    integrations: ["ViaCEP", "WhatsApp"],
    architecture: [
      { icon: "layout", label: { pt: "Loja pública", en: "Public storefront" }, detail: { pt: "Next.js 16 (App Router) com cardápio, montador de produto, carrinho, checkout sem cadastro, acompanhamento do pedido e SEO.", en: "Next.js 16 (App Router) with menu, product builder, cart, sign-up-free checkout, order tracking, and SEO." } },
      { icon: "users", label: { pt: "Apps da operação", en: "Operations apps" }, detail: { pt: "Central de pedidos (kanban), tela da cozinha, PDV com caixa e painel admin — cada um liberado por perfil.", en: "Order hub (kanban), kitchen display, POS with cash register, and admin panel — each unlocked by role." } },
      { icon: "plug", label: { pt: "API", en: "API" }, detail: { pt: "Route handlers enxutos: validação com Zod, permissão por rota, checagem de origem e rate limit nas rotas públicas.", en: "Thin route handlers: Zod validation, per-route permissions, origin checks, and rate limiting on public routes." } },
      { icon: "database", label: { pt: "Domínio & dados", en: "Domain & data" }, detail: { pt: "Regras puras e testadas (preço, entrega, status, horário) sobre Prisma + SQLite; tempo real via SSE.", en: "Pure, tested rules (pricing, delivery, status, hours) on Prisma + SQLite; real time via SSE." } },
    ],
    companyContext: {
      pt: "Projeto para cliente — delivery próprio, PDV e cozinha para uma loja de churros.",
      en: "Client project — own delivery, POS, and kitchen system for a churros shop.",
    },
    ownershipNote: {
      pt: "Plataforma desenvolvida por mim de ponta a ponta para um negócio local de alimentação, em desenvolvimento e ainda não publicada. Os prints usam dados de seed e pedidos fictícios; endereço e chaves de pagamento foram neutralizados.",
      en: "Platform I built end to end for a local food business, in development and not yet deployed. The screenshots use seed data and fictitious orders; the address and payment keys were neutralized.",
    },
    summary: {
      pt: "Plataforma própria de delivery, retirada, balcão e cozinha: o cliente monta o pedido sem cadastro e a equipe acompanha tudo em tempo real, com preços sempre recalculados no servidor.",
      en: "Own delivery, pickup, counter, and kitchen platform: customers build their order without signing up and staff follow everything in real time, with prices always recalculated on the server.",
    },
    problem: {
      pt: "Um pequeno negócio de alimentação dependia de marketplaces que cobram comissão por pedido e de anotações manuais no WhatsApp: pedidos de delivery, retirada e balcão ficavam em lugares diferentes, a cozinha não via a fila e o caixa não fechava com segurança.",
      en: "A small food business relied on marketplaces that charge a fee per order and on manual WhatsApp notes: delivery, pickup, and counter orders lived in different places, the kitchen couldn't see the queue, and the cash register didn't reconcile reliably.",
    },
    solution: {
      pt: "Uma loja própria em Next.js com montador de produto (tamanhos, recheios, coberturas e combos), cupons e taxa de entrega por bairro. Todo pedido cai numa fila única: a central acompanha em kanban, a cozinha recebe em tempo real via SSE, o PDV registra vendas de balcão com pagamento dividido e o admin mostra faturamento, ticket médio e produtos mais vendidos.",
      en: "An own Next.js storefront with a product builder (sizes, fillings, toppings, and combos), coupons, and per-neighborhood delivery fees. Every order lands in a single queue: the hub tracks it on a kanban, the kitchen receives it in real time over SSE, the POS records counter sales with split payments, and the admin shows revenue, average ticket, and best sellers.",
    },
    participation: {
      pt: "Desenvolvi sozinho: modelagem de dados no Prisma, motor de preços e promoções, máquina de estados dos pedidos, autenticação com JWT e matriz de permissões, tempo real com SSE, todas as telas (loja, central, cozinha, PDV e admin) e os testes de regra de negócio.",
      en: "I built it alone: Prisma data modeling, the pricing and promotions engine, the order state machine, JWT authentication and the permission matrix, SSE real time, every screen (storefront, hub, kitchen, POS, and admin), and the business-rule tests.",
    },
    highlights: {
      pt: [
        "Montador de produto com tamanhos, recheio obrigatório, adicionais e combos",
        "Checkout sem cadastro, com busca de CEP e envio idempotente",
        "Cupons, promoções e taxa de entrega fixa ou por bairro",
        "Central de pedidos em kanban com alerta sonoro e atraso destacado",
        "Tela da cozinha atualizada em tempo real via SSE",
        "PDV com pagamento dividido, abertura e fechamento de caixa",
        "Painel admin: faturamento, ticket médio, cancelamentos e top produtos",
        "Acompanhamento público do pedido, comprovante e “pedir de novo”",
      ],
      en: [
        "Product builder with sizes, required filling, extras, and combos",
        "Sign-up-free checkout, with ZIP lookup and idempotent submission",
        "Coupons, promotions, and flat or per-neighborhood delivery fees",
        "Kanban order hub with sound alerts and late orders highlighted",
        "Kitchen display updated in real time over SSE",
        "POS with split payments and cash register opening/closing",
        "Admin dashboard: revenue, average ticket, cancellations, and top products",
        "Public order tracking, printable receipt, and “order again”",
      ],
    },
    challenges: {
      pt: [
        "Nunca confiar no preço do cliente: cada item é reprecificado a partir do catálogo, com teste dedicado",
        "Dinheiro em centavos inteiros e percentuais em basis points, sem erro de ponto flutuante",
        "Máquina de estados por origem (delivery, retirada, balcão) com histórico e auditoria de cada mudança",
        "Numeração sequencial, código público não adivinhável e chave de idempotência dentro de uma transação",
        "Acesso por perfil em duas camadas: proxy na borda e permissão por rota",
      ],
      en: [
        "Never trusting client prices: every item is repriced from the catalog, with a dedicated test",
        "Money as integer cents and percentages as basis points, with no floating-point errors",
        "Per-origin state machine (delivery, pickup, counter) with history and an audit trail for every change",
        "Sequential numbering, a non-guessable public code, and an idempotency key inside one transaction",
        "Role-based access in two layers: edge proxy and per-route permissions",
      ],
    },
    results: {
      pt: [
        "Delivery, retirada e balcão numa única fila, sem comissão de marketplace",
        "Cozinha e central sincronizadas em tempo real",
        "Fechamento de caixa com valor esperado e diferença calculados",
      ],
      en: [
        "Delivery, pickup, and counter in a single queue, with no marketplace fees",
        "Kitchen and hub synchronized in real time",
        "Cash register closing with expected amount and difference computed",
      ],
    },
    learned: {
      pt: [
        "Next.js 16 com App Router, Server Components e route handlers",
        "Modelagem de domínio de pedidos, preços e pagamentos",
        "Tempo real com SSE e reconexão com backoff",
        "Segurança de API: validação, rate limit, origem e idempotência",
      ],
      en: [
        "Next.js 16 with App Router, Server Components, and route handlers",
        "Domain modeling for orders, pricing, and payments",
        "Real time with SSE and backoff reconnection",
        "API security: validation, rate limiting, origin checks, and idempotency",
      ],
    },
    metrics: [
      { value: "4", label: { pt: "perfis de acesso", en: "access roles" } },
      { value: "33", label: { pt: "rotas de API", en: "API routes" } },
      { value: "17", label: { pt: "testes de regra de negócio", en: "business-rule tests" } },
    ],
    screenshots: [
      {
        icon: "bag",
        image: "/projects/point-do-churros/loja.webp",
        aspect: "1440/900",
        alt: { pt: "Página inicial da loja Point do Churros com foto de churros recheados, selos de loja aberta, tempo e taxa de entrega, e botões Pedir delivery e Retirar na loja.", en: "Point do Churros storefront home page with a photo of filled churros, open-now, delivery-time and fee badges, and Order delivery / Pick up buttons." },
        caption: { pt: "Loja própria: delivery e retirada sem marketplace", en: "Own storefront: delivery and pickup without a marketplace" },
      },
      {
        icon: "kanban",
        image: "/projects/point-do-churros/central.webp",
        aspect: "1440/900",
        alt: { pt: "Central de pedidos em kanban com colunas Novos, Em preparo, Prontos, Saiu para entrega e Finalizados (clientes fictícios).", en: "Order hub kanban with New, Preparing, Ready, Out for delivery, and Completed columns (fictitious customers)." },
        caption: { pt: "Central de pedidos em tempo real", en: "Real-time order hub" },
      },
      {
        icon: "bolt",
        image: "/projects/point-do-churros/cozinha.webp",
        aspect: "1440/900",
        alt: { pt: "Tela da cozinha com cartões grandes por pedido, itens, recheios, observações e botões Iniciar preparo e Marcar como pronto.", en: "Kitchen display with large per-order cards listing items, fillings, and notes, plus Start preparing and Mark as ready buttons." },
        caption: { pt: "Tela da cozinha (KDS)", en: "Kitchen display (KDS)" },
      },
      {
        icon: "sparkles",
        image: "/projects/point-do-churros/cardapio-mobile.webp",
        aspect: "390/844",
        alt: { pt: "Montador de produto no celular: tamanho, recheio obrigatório e coberturas opcionais com preço de cada adicional e total atualizado.", en: "Mobile product builder: size, required filling, and optional toppings with per-item price and a live total." },
        caption: { pt: "Montagem do pedido no celular", en: "Building an order on mobile" },
      },
    ],
  },

  /* 8 — Thayná Joias -------------------------------------------------------- */
  {
    slug: "thayna-joias",
    title: "Thayná Joias",
    icon: "gem",
    source: "client",
    category: "fullstack",
    categories: ["fullstack", "frontend"],
    roles: ["frontend", "uiux", "backend"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "ESLint"],
    integrations: ["WhatsApp"],
    architecture: [
      { icon: "layout", label: { pt: "Vitrine", en: "Storefront" }, detail: { pt: "Next.js 16 com Server Components: catálogo, áreas feminina e masculina, coleções, promoções e página de produto com SEO.", en: "Next.js 16 with Server Components: catalog, feminine and masculine areas, collections, promotions, and an SEO-ready product page." } },
      { icon: "briefcase", label: { pt: "Painel de gestão", en: "Management panel" }, detail: { pt: "12 módulos: produtos, estoque, vendas, financeiro, precificação, fornecedores, promoções, relatórios e mais.", en: "12 modules: products, stock, sales, cash flow, pricing, suppliers, promotions, reports, and more." } },
      { icon: "plug", label: { pt: "API", en: "API" }, detail: { pt: "24 route handlers com validação no servidor e autenticação exigida em toda mutação.", en: "24 route handlers with server-side validation and authentication required on every mutation." } },
      { icon: "database", label: { pt: "Dados", en: "Data" }, detail: { pt: "Camada única em JSON com lock por arquivo, isolada para trocar por um banco real sem mexer no resto do app.", en: "A single JSON data layer with per-file locks, isolated so it can be swapped for a real database without touching the rest of the app." } },
    ],
    companyContext: {
      pt: "Projeto para cliente — loja de joias em prata com venda pelo WhatsApp.",
      en: "Client project — silver jewelry store that sells through WhatsApp.",
    },
    ownershipNote: {
      pt: "Loja e painel desenvolvidos por mim de ponta a ponta para uma pequena joalheria, em desenvolvimento e ainda não publicados. Os prints usam dados de seed com fotos placeholder; contatos, fornecedores e números financeiros não aparecem.",
      en: "Store and panel I built end to end for a small jewelry business, in development and not yet deployed. The screenshots use seed data with placeholder photos; contacts, suppliers, and financial figures are not shown.",
    },
    summary: {
      pt: "Catálogo online de joias em prata 925 em que cada compra abre o WhatsApp com a mensagem pronta (produto, código, variação e preço), com painel que substitui a planilha de estoque, vendas, caixa e precificação.",
      en: "Online catalog for 925 silver jewelry where every purchase opens WhatsApp with a ready-made message (product, code, variation, and price), plus a panel that replaces the stock, sales, cash, and pricing spreadsheet.",
    },
    problem: {
      pt: "A loja já fechava as vendas pelo WhatsApp, mas os clientes precisavam perguntar código e preço de cada peça, e o controle de estoque, vendas, caixa e preço de venda ficava espalhado em planilhas.",
      en: "The seller already closed sales on WhatsApp, but customers had to ask for each piece's code and price, and stock, sales, cash, and pricing were scattered across spreadsheets.",
    },
    solution: {
      pt: "Uma vitrine elegante (identidade feminina premium e área masculina sóbria) em que a variação escolhida monta em tempo real a mensagem do WhatsApp, e uma “sacola de interesse” envia várias peças numa única mensagem. No painel, vender baixa o estoque e lança no caixa automaticamente, e a calculadora de preços aplica a taxa do cartão por gross-up com arredondamento comercial.",
      en: "An elegant storefront (premium feminine identity and a sober masculine area) where the chosen variation builds the WhatsApp message in real time, and an “interest bag” sends several pieces in a single message. In the panel, recording a sale lowers stock and posts to the cash flow automatically, and the pricing calculator applies the card fee through gross-up with commercial rounding.",
    },
    participation: {
      pt: "Desenvolvi sozinho: o design das duas identidades visuais, a vitrine e o catálogo com filtros na URL, a integração com WhatsApp, todos os módulos do painel, as regras de estoque/vendas/caixa, o motor de precificação, a autenticação e uma auditoria de frontend com correções de responsividade.",
      en: "I built it alone: the design of both visual identities, the storefront and catalog with URL-based filters, the WhatsApp integration, every panel module, the stock/sales/cash rules, the pricing engine, authentication, and a frontend audit with responsiveness fixes.",
    },
    highlights: {
      pt: [
        "Mensagem do WhatsApp montada a partir do produto e da variação escolhida",
        "“Sacola de interesse” que vira uma única mensagem numerada",
        "Catálogo com busca sem acento, filtros e ordenação salvos na URL",
        "Campanhas de promoção com landing page própria",
        "Estoque com histórico de movimentações e status automático de esgotado",
        "Vendas com ciclo de vida que reflete no estoque e no caixa",
        "Precificação automática com gross-up da taxa do cartão",
        "Dashboard, alertas e 12 relatórios exportáveis em CSV",
      ],
      en: [
        "WhatsApp message built from the product and the chosen variation",
        "“Interest bag” that becomes a single numbered message",
        "Catalog with accent-insensitive search, filters, and sorting stored in the URL",
        "Promotion campaigns with their own landing page",
        "Stock with a movement history and automatic sold-out status",
        "Sales with a lifecycle that updates stock and cash flow",
        "Automatic pricing with card-fee gross-up",
        "Dashboard, alerts, and 12 reports exportable to CSV",
      ],
    },
    challenges: {
      pt: [
        "Taxa do cartão incide sobre o preço final: cálculo por gross-up, com arredondamento sempre para cima para não corroer a margem",
        "Regras de negócio na camada de dados: nenhuma saída maior que o estoque e custo unitário sempre lido do banco, nunca da requisição",
        "Sessão por cookie assinado com HMAC (Web Crypto) que roda tanto no proxy de borda quanto nas rotas Node",
        "Dados públicos sanitizados: custo, fornecedor e estoque nunca chegam ao HTML da vitrine",
        "Corrigir overflow horizontal no celular e o menu preso pelo backdrop-filter, encontrados numa auditoria de frontend",
      ],
      en: [
        "The card fee applies to the final price: gross-up calculation, always rounding up so the margin isn't eroded",
        "Business rules in the data layer: no outflow larger than stock, and unit cost always read from the database, never from the request",
        "Session via an HMAC-signed cookie (Web Crypto) that runs in both the edge proxy and Node routes",
        "Sanitized public data: cost, supplier, and stock never reach the storefront HTML",
        "Fixing horizontal overflow on mobile and the menu trapped by backdrop-filter, found during a frontend audit",
      ],
    },
    results: {
      pt: [
        "Clientes chegam ao WhatsApp com produto, código e preço já informados",
        "Uma única ferramenta no lugar das planilhas de estoque, vendas, caixa e preço",
        "Base pronta para migrar a persistência para um banco real",
      ],
      en: [
        "Customers reach WhatsApp with product, code, and price already filled in",
        "A single tool replacing the stock, sales, cash, and pricing spreadsheets",
        "A foundation ready to move persistence to a real database",
      ],
    },
    learned: {
      pt: [
        "Next.js 16 (App Router, proxy) e Tailwind CSS 4 com design tokens",
        "Temas visuais por variáveis CSS sem duplicar componentes",
        "Regras financeiras de precificação e margem",
        "Isolar a persistência atrás de uma interface para trocar de banco depois",
      ],
      en: [
        "Next.js 16 (App Router, proxy) and Tailwind CSS 4 with design tokens",
        "Visual themes via CSS variables without duplicating components",
        "Financial rules for pricing and margin",
        "Isolating persistence behind an interface to switch databases later",
      ],
    },
    metrics: [
      { value: "12", label: { pt: "módulos no painel", en: "panel modules" } },
      { value: "24", label: { pt: "rotas de API", en: "API routes" } },
      { value: "12", label: { pt: "relatórios em CSV", en: "CSV reports" } },
    ],
    screenshots: [
      {
        icon: "gem",
        image: "/projects/thayna-joias/home.webp",
        aspect: "1440/900",
        alt: { pt: "Página inicial da Thayná Joias com hero rosé, chamada “O brilho certo para cada momento” e botões Ver coleção e Falar no WhatsApp.", en: "Thayná Joias home page with a rosé hero, the headline “O brilho certo para cada momento”, and the See collection and WhatsApp buttons." },
        caption: { pt: "Vitrine com identidade feminina premium", en: "Storefront with a premium feminine identity" },
      },
      {
        icon: "bag",
        image: "/projects/thayna-joias/produto.webp",
        aspect: "1440/900",
        alt: { pt: "Página de produto com código, preço, tamanho selecionado e botão verde “Tenho interesse nesta joia” que abre o WhatsApp (dados de exemplo).", en: "Product page with code, price, selected size, and the green “Tenho interesse nesta joia” button that opens WhatsApp (sample data)." },
        caption: { pt: "A variação escolhida atualiza a mensagem do WhatsApp", en: "The chosen variation updates the WhatsApp message" },
      },
      {
        icon: "target",
        image: "/projects/thayna-joias/admin.webp",
        aspect: "1440/900",
        alt: { pt: "Tela de precificação automática do painel com custos, taxas e lucro desejado e o resultado com preço no cartão e no Pix (simulação de exemplo).", en: "Panel's automatic pricing screen with costs, fees, and desired profit, and the result with card and Pix prices (sample simulation)." },
        caption: { pt: "Precificação com gross-up e arredondamento", en: "Pricing with gross-up and rounding" },
      },
      {
        icon: "layout",
        image: "/projects/thayna-joias/mobile.webp",
        aspect: "390/844",
        alt: { pt: "Catálogo no celular com grade de 2 colunas, selos Novo e Mais vendido, preços parcelados e botões de WhatsApp.", en: "Mobile catalog with a 2-column grid, New and Best-seller badges, installment prices, and WhatsApp buttons." },
        caption: { pt: "Catálogo mobile-first", en: "Mobile-first catalog" },
      },
    ],
  },

  /* 9 — DevOps Command Center ----------------------------------------------- */
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

  /* 10 — PwBenefícios ------------------------------------------------------- */
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

  /* 11 — Bot de Automação Comercial ----------------------------------------- */
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

  /* 12 — Bot de Monitoramento de Inadimplência ------------------------------ */
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

  /* 13 — DevTrack Hub ------------------------------------------------------- */
  {
    slug: "devtrack-hub",
    title: "DevTrack Hub",
    icon: "route",
    source: "personal",
    category: "fullstack",
    categories: ["fullstack"],
    roles: ["backend", "frontend", "uiux", "integration"],
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker", "Turborepo", "Playwright"],
    integrations: ["GitHub", "Google OAuth", "MinIO"],
    architecture: [
      { icon: "layout", label: { pt: "Web", en: "Web" }, detail: { pt: "Next.js 15 (App Router) com páginas públicas e painel autenticado; TanStack Query, React Hook Form + Zod e token só em memória.", en: "Next.js 15 (App Router) with public pages and an authenticated panel; TanStack Query, React Hook Form + Zod, and an in-memory-only token." } },
      { icon: "server", label: { pt: "API", en: "API" }, detail: { pt: "Monólito modular em NestJS: 22 módulos, guarda JWT fechada por padrão, rate limit, visibilidade por recurso, auditoria e Swagger.", en: "Modular NestJS monolith: 22 modules, closed-by-default JWT guard, rate limiting, per-resource visibility, auditing, and Swagger." } },
      { icon: "database", label: { pt: "Dados & filas", en: "Data & queues" }, detail: { pt: "PostgreSQL via Prisma (47 modelos) e filas BullMQ/Redis para e-mail, sincronização com GitHub, resumos e manutenção.", en: "PostgreSQL via Prisma (47 models) and BullMQ/Redis queues for e-mail, GitHub sync, digests, and maintenance." } },
      { icon: "shield", label: { pt: "Infra & CI", en: "Infra & CI" }, detail: { pt: "Monorepo pnpm + Turborepo, Docker Compose, Dockerfiles multi-stage e pipeline com testes, Playwright e scan de imagens com Trivy.", en: "pnpm + Turborepo monorepo, Docker Compose, multi-stage Dockerfiles, and a pipeline with tests, Playwright, and Trivy image scanning." } },
    ],
    companyContext: {
      pt: "Projeto pessoal — plataforma para transformar estudo em uma jornada pública e mensurável.",
      en: "Personal project — a platform that turns studying into a public, measurable journey.",
    },
    ownershipNote: {
      pt: "Projeto autoral em desenvolvimento, em repositório privado. A fundação full stack já roda de ponta a ponta; algumas telas secundárias ainda estão em construção. Os prints usam apenas dados de demonstração do seed.",
      en: "Original project in development, in a private repository. The full-stack foundation already runs end to end; some secondary screens are still being built. The screenshots use only demo seed data.",
    },
    summary: {
      pt: "Plataforma full stack que une roadmap de estudos, gestão de projetos, diário de desenvolvimento, sessões de estudo e check-ins, com páginas públicas em que outras pessoas acompanham, comentam e avaliam a evolução.",
      en: "Full-stack platform that combines a study roadmap, project management, a build log, study sessions, and check-ins, with public pages where others follow, comment on, and evaluate the progress.",
    },
    problem: {
      pt: "Planos de estudo e projetos paralelos costumam ficar esquecidos em documentos: progresso, horas e entregas se espalham por várias plataformas e ninguém consegue verificar ou acompanhar de verdade.",
      en: "Study plans and side projects tend to be forgotten in documents: progress, hours, and deliveries scatter across several platforms and nobody can really verify or follow along.",
    },
    solution: {
      pt: "Roadmaps em fases, módulos e itens com progresso ponderado, importáveis de DOCX, PDF, Markdown, JSON ou CSV com prévia e confirmação. Projetos ligados ao roadmap com Kanban, versões e evidências; cronômetro de estudos, hábitos e check-ins semanais alimentam o painel. Cada item tem visibilidade própria e as páginas públicas recebem impulsos, comentários e avaliações estruturadas.",
      en: "Roadmaps in phases, modules, and items with weighted progress, importable from DOCX, PDF, Markdown, JSON, or CSV with a preview and confirmation. Projects linked to the roadmap with Kanban, versions, and evidence; a study timer, habits, and weekly check-ins feed the dashboard. Each item has its own visibility, and public pages receive nudges, comments, and structured evaluations.",
    },
    participation: {
      pt: "Projetei e desenvolvi sozinho: a arquitetura do monorepo e as ADRs, a modelagem de dados, os módulos da API, autenticação e autorização, filas e workers, a interface web e o pipeline de CI.",
      en: "I designed and built it alone: the monorepo architecture and ADRs, data modeling, the API modules, authentication and authorization, queues and workers, the web interface, and the CI pipeline.",
    },
    highlights: {
      pt: [
        "Roadmaps com fases, módulos, dependências, checklists e critério de “pronto quando”",
        "Importação de DOCX, PDF, Markdown, JSON e CSV com prévia antes de aplicar",
        "Projetos com marcos, Kanban, versões, riscos e evidências",
        "Build Log, comentários, reações, seguidores e impulsos",
        "Cronômetro de estudos, hábitos, check-ins semanais e parceiros de estudo",
        "Visibilidade por item: público, seguidores, parceiros ou privado",
        "Login com e-mail ou OAuth (GitHub/Google) e revogação de sessões",
        "Notificações em tempo real, busca global e paleta de comandos (Ctrl K)",
      ],
      en: [
        "Roadmaps with phases, modules, dependencies, checklists, and “done when” criteria",
        "Import from DOCX, PDF, Markdown, JSON, and CSV with a preview before applying",
        "Projects with milestones, Kanban, versions, risks, and evidence",
        "Build Log, comments, reactions, followers, and nudges",
        "Study timer, habits, weekly check-ins, and study partners",
        "Per-item visibility: public, followers, partners, or private",
        "E-mail or OAuth (GitHub/Google) sign-in and session revocation",
        "Real-time notifications, global search, and a command palette (Ctrl K)",
      ],
    },
    challenges: {
      pt: [
        "Monólito modular documentado em ADR: módulos coesos e transações locais, extraindo serviços só com escala real",
        "Autorização sempre no backend: recursos invisíveis respondem 404 para evitar enumeração",
        "Rotação de refresh token com detecção de reuso: token revogado reapresentado derruba todas as sessões",
        "Importação em duas etapas: extrair nunca cria itens; aplicar roda numa transação após confirmação",
        "Progresso ponderado por status como função pura e testada",
      ],
      en: [
        "Modular monolith documented in an ADR: cohesive modules and local transactions, extracting services only at real scale",
        "Authorization always in the backend: invisible resources return 404 to prevent enumeration",
        "Refresh-token rotation with reuse detection: replaying a revoked token kills every session",
        "Two-step import: extraction never creates items; applying runs in a transaction after confirmation",
        "Status-weighted progress as a pure, tested function",
      ],
    },
    results: {
      pt: [
        "Fundação full stack integrada rodando localmente com seed de demonstração",
        "Arquitetura e decisões registradas em ADRs e documentação de entidades",
        "Pipeline de CI cobrindo lint, tipos, testes, build, Playwright e scan de imagens",
      ],
      en: [
        "Integrated full-stack foundation running locally with demo seed data",
        "Architecture and decisions recorded in ADRs and entity documentation",
        "CI pipeline covering lint, types, tests, build, Playwright, and image scanning",
      ],
    },
    learned: {
      pt: [
        "NestJS em escala de módulos, guards e filas",
        "Modelagem de domínio extensa com Prisma e PostgreSQL",
        "Segurança de sessão: refresh token rotativo, argon2 e criptografia de tokens OAuth",
        "Monorepo com pacotes compartilhados de tipos, UI e configuração",
      ],
      en: [
        "NestJS at the scale of modules, guards, and queues",
        "Extensive domain modeling with Prisma and PostgreSQL",
        "Session security: rotating refresh tokens, argon2, and OAuth token encryption",
        "Monorepo with shared type, UI, and configuration packages",
      ],
    },
    metrics: [
      { value: "47", label: { pt: "modelos Prisma", en: "Prisma models" } },
      { value: "22", label: { pt: "módulos de API", en: "API modules" } },
      { value: "158", label: { pt: "endpoints HTTP", en: "HTTP endpoints" } },
    ],
    screenshots: [
      {
        icon: "route",
        image: "/projects/devtrack-hub/landing.webp",
        aspect: "1440/900",
        alt: { pt: "Página inicial do DevTrack Hub com o título “Transforme estudo em uma jornada que você consegue provar” e um cartão de roadmap Full Stack em 5 fases.", en: "DevTrack Hub landing page with the headline “Turn study into a journey you can prove” and a 5-phase Full Stack roadmap card." },
        caption: { pt: "Estudo transformado em jornada mensurável", en: "Study turned into a measurable journey" },
      },
      {
        icon: "gauge",
        image: "/projects/devtrack-hub/dashboard.webp",
        aspect: "1440/900",
        alt: { pt: "Painel com progresso geral, horas registradas, impulsos da semana, foco atual do roadmap e gráfico de consistência de estudos (usuária de demonstração).", en: "Dashboard with overall progress, logged hours, weekly nudges, current roadmap focus, and a study consistency chart (demo user)." },
        caption: { pt: "Painel: progresso, horas e consistência", en: "Dashboard: progress, hours, and consistency" },
      },
      {
        icon: "layers",
        image: "/projects/devtrack-hub/roadmap.webp",
        aspect: "1440/900",
        alt: { pt: "Roadmap “Full Stack profissional em 12 meses” aberto na Fase 1, com módulos, itens com status e critérios de “pronto quando”.", en: "“Professional Full Stack in 12 months” roadmap open at Phase 1, with modules, item statuses, and “done when” criteria." },
        caption: { pt: "Roadmap com progresso ponderado", en: "Roadmap with weighted progress" },
      },
      {
        icon: "users",
        image: "/projects/devtrack-hub/projeto-publico.webp",
        aspect: "1440/900",
        alt: { pt: "Página pública de um projeto de demonstração com problema, objetivo, progresso, tecnologias e cartão para enviar impulso.", en: "Public page of a demo project with problem, goal, progress, tech tags, and a card to send a nudge." },
        caption: { pt: "Página pública do projeto", en: "Public project page" },
      },
    ],
  },

  /* 14 — devsheet ----------------------------------------------------------- */
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

  /* 15 — Conecta SUS -------------------------------------------------------- */
  {
    slug: "conecta-sus",
    title: "Conecta SUS",
    icon: "heart",
    source: "personal",
    repoUrl: "https://github.com/GuguPx/conecta-sus",
    category: "frontend",
    categories: ["frontend"],
    roles: ["frontend", "uiux"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Router", "Framer Motion", "GitHub Actions"],
    integrations: [],
    architecture: [
      { icon: "layout", label: { pt: "Telas", en: "Screens" }, detail: { pt: "8 telas em React 19 + TypeScript, renderizadas dentro de uma moldura de celular para a demonstração no desktop.", en: "8 screens in React 19 + TypeScript, rendered inside a phone frame for desktop demos." } },
      { icon: "route", label: { pt: "Navegação", en: "Navigation" }, detail: { pt: "React Router com transições de página via Framer Motion (AnimatePresence) e barra de navegação inferior.", en: "React Router with page transitions via Framer Motion (AnimatePresence) and a bottom navigation bar." } },
      { icon: "database", label: { pt: "Estado & dados", en: "State & data" }, detail: { pt: "Zustand para sessão, votos e preferências; dados mock tipados simulando a API.", en: "Zustand for session, votes, and preferences; typed mock data simulating the API." } },
      { icon: "rocket", label: { pt: "Entrega", en: "Delivery" }, detail: { pt: "Build com Vite 8 e Tailwind CSS 4; workflow do GitHub Actions para publicar no GitHub Pages.", en: "Vite 8 and Tailwind CSS 4 build; GitHub Actions workflow to publish on GitHub Pages." } },
    ],
    companyContext: {
      pt: "Projeto pessoal — protótipo de app de participação cidadã no SUS.",
      en: "Personal project — prototype of a citizen-participation app for Brazil's public health system (SUS).",
    },
    ownershipNote: {
      pt: "Projeto autoral, desenvolvido do zero e publicado no GitHub. É um protótipo conceitual de frontend: os dados são fictícios e não há vínculo com órgãos públicos.",
      en: "Original project, built from scratch and published on GitHub. It's a conceptual frontend prototype: the data is fictitious and there's no affiliation with any government body.",
    },
    summary: {
      pt: "Protótipo mobile-first em que o cidadão registra reclamações e elogios sobre unidades de saúde, acompanha o protocolo, vota em consultas públicas e aprende sobre o SUS com quiz e gamificação.",
      en: "Mobile-first prototype where citizens file complaints and praise about health units, track the ticket, vote in public consultations, and learn about SUS through quizzes and gamification.",
    },
    problem: {
      pt: "Os canais de ouvidoria da saúde pública costumam ser burocráticos e pouco acessíveis no celular: o cidadão não sabe onde reclamar, não acompanha o andamento e não tem incentivo para participar.",
      en: "Public-health ombudsman channels tend to be bureaucratic and hard to use on a phone: citizens don't know where to complain, can't follow up, and have no incentive to take part.",
    },
    solution: {
      pt: "Um app com fluxo curto e guiado: login com máscara de CPF (ou biometria simulada), nova manifestação em uma tela com protocolo gerado ao final, lista de demandas com busca, filtros por status e paginação, enquetes de voto único e trilhas de conteúdo com quiz que somam pontos e conquistas no perfil.",
      en: "An app with a short, guided flow: sign-in with a CPF input mask (or simulated biometrics), a one-screen new-ticket form that returns a protocol number, a ticket list with search, status filters, and pagination, single-vote polls, and content tracks with quizzes that add points and badges to the profile.",
    },
    participation: {
      pt: "Desenvolvi sozinho todo o frontend: o design das telas, os componentes (moldura do celular, status bar, navegação inferior, skeletons, paginação), o estado global com Zustand, as animações de transição e o workflow de publicação.",
      en: "I built the entire frontend on my own: the screen design, the components (phone frame, status bar, bottom navigation, skeletons, pagination), global state with Zustand, transition animations, and the publishing workflow.",
    },
    highlights: {
      pt: [
        "Login com máscara de CPF, validação e biometria simulada",
        "Nova manifestação: tipo, categoria, unidade, evidência e protocolo",
        "Minhas demandas com busca por título/protocolo, filtros e paginação",
        "Consultas públicas com voto único por enquete",
        "Trilhas de conteúdo com progresso e quiz pontuado",
        "Perfil gamificado: pontos, nível e conquistas",
        "Transições de página e microinterações com Framer Motion",
        "Moldura de iPhone para apresentar o app no desktop",
      ],
      en: [
        "Sign-in with a CPF input mask, validation, and simulated biometrics",
        "New ticket: type, category, health unit, evidence, and protocol number",
        "My tickets with search by title/protocol, filters, and pagination",
        "Public consultations with one vote per poll",
        "Content tracks with progress and a scored quiz",
        "Gamified profile: points, level, and badges",
        "Page transitions and micro-interactions with Framer Motion",
        "iPhone frame to present the app on desktop",
      ],
    },
    challenges: {
      pt: [
        "Simular uma experiência nativa (status bar, gestos, transições) dentro do navegador",
        "Manter as animações de rota consistentes com AnimatePresence e React Router",
        "Combinar busca, filtro por status e paginação sem estados inconsistentes",
        "Explorar a stack mais recente (React 19, Vite 8, Tailwind 4) e suas mudanças de configuração",
      ],
      en: [
        "Simulating a native experience (status bar, gestures, transitions) inside the browser",
        "Keeping route animations consistent with AnimatePresence and React Router",
        "Combining search, status filter, and pagination without inconsistent state",
        "Exploring the latest stack (React 19, Vite 8, Tailwind 4) and its configuration changes",
      ],
    },
    results: {
      pt: [
        "Fluxo completo navegável, do login ao protocolo da manifestação",
        "Base de componentes reaproveitável para um app real com API",
        "Projeto público no GitHub para demonstrar o trabalho de UI",
      ],
      en: [
        "Fully navigable flow, from sign-in to the ticket protocol",
        "Reusable component base for a real, API-backed app",
        "Public GitHub project to showcase UI work",
      ],
    },
    learned: {
      pt: [
        "Estado global enxuto com Zustand",
        "Animações de rota e microinterações com Framer Motion",
        "Tailwind CSS 4 com o plugin oficial do Vite",
        "Design mobile-first pensado para acessibilidade e leitura rápida",
      ],
      en: [
        "Lean global state with Zustand",
        "Route animations and micro-interactions with Framer Motion",
        "Tailwind CSS 4 with the official Vite plugin",
        "Mobile-first design focused on accessibility and quick reading",
      ],
    },
    metrics: [
      { value: "8", label: { pt: "telas navegáveis", en: "navigable screens" } },
      { value: "4", label: { pt: "tipos de manifestação", en: "ticket types" } },
      { value: "Quiz", label: { pt: "com pontos e conquistas", en: "with points and badges" } },
    ],
    screenshots: [
      {
        icon: "layout",
        image: "/projects/conecta-sus/showcase.webp",
        aspect: "16/9",
        alt: { pt: "Quatro telas do Conecta SUS: login, início com estatísticas, minhas demandas e trilhas de aprendizado (dados fictícios).", en: "Four Conecta SUS screens: sign-in, home with stats, my tickets, and learning tracks (fictitious data)." },
        caption: { pt: "Login, início, demandas e aprendizado", en: "Sign-in, home, tickets, and learning" },
      },
      {
        icon: "sparkles",
        image: "/projects/conecta-sus/reclamacao.webp",
        aspect: "600/1298",
        alt: { pt: "Formulário de nova manifestação com tipo, título, descrição, categoria e unidade de saúde.", en: "New ticket form with type, title, description, category, and health unit." },
        caption: { pt: "Nova manifestação", en: "New ticket" },
      },
      {
        icon: "users",
        image: "/projects/conecta-sus/consultas.webp",
        aspect: "600/1298",
        alt: { pt: "Consultas públicas com enquetes abertas e opções de voto.", en: "Public consultations with open polls and voting options." },
        caption: { pt: "Consultas públicas", en: "Public consultations" },
      },
      {
        icon: "target",
        image: "/projects/conecta-sus/perfil.webp",
        aspect: "600/1298",
        alt: { pt: "Perfil gamificado com pontos, participações e conquistas (usuária fictícia).", en: "Gamified profile with points, participations, and badges (fictitious user)." },
        caption: { pt: "Perfil e conquistas", en: "Profile and badges" },
      },
    ],
  },

  /* 16 — Bot de Bloqueio de Pré-contratos ----------------------------------- */
  {
    slug: "bot-precontrato",
    title: "Bot de Bloqueio de Pré-contratos",
    icon: "lock",
    category: "bot",
    categories: ["bot", "automation", "integration", "corporate"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "TypeScript", "Axios", "pino", "Google Sheets API", "Vitest", "Docker"],
    integrations: ["IXC Soft", "Google Sheets"],
    architecture: [
      { icon: "plug", label: { pt: "Cliente IXC", en: "IXC client" }, detail: { pt: "Listagem com paginação completa e retry só para erro de rede e 5xx; recusas do ERP não são repetidas.", en: "Fully paginated listing, with retries only for network errors and 5xx; ERP refusals are not retried." } },
      { icon: "layers", label: { pt: "Regras", en: "Rules" }, detail: { pt: "Classificação de cada contrato em ordem fixa (ignorado, já bloqueado, fora do filtro, fora do período, com streaming…) antes de qualquer ação.", en: "Each contract is classified in a fixed order (ignored, already blocked, out of filter, out of window, has streaming…) before any action." } },
      { icon: "database", label: { pt: "Estado", en: "State" }, detail: { pt: "Arquivo de estado com o que o bot já bloqueou, para respeitar desbloqueios manuais e reprocessar só o necessário.", en: "State file with what the bot already blocked, to respect manual unblocks and reprocess only what's needed." } },
      { icon: "shield", label: { pt: "Operação", en: "Operations" }, detail: { pt: "Docker com usuário sem root, heartbeat para healthcheck, log com campos sensíveis ocultos e planilha diária no Google Sheets.", en: "Docker with a non-root user, heartbeat for the healthcheck, logs with sensitive fields hidden, and a daily Google Sheets report." } },
    ],
    companyContext: {
      pt: "Bot que bloqueia no ERP contratos em pré-contrato que ainda aguardam assinatura.",
      en: "Bot that blocks, in the ERP, pre-contracts that are still awaiting signature.",
    },
    ownershipNote: {
      pt: "Automação criada por mim do zero para o fluxo comercial do provedor. A descrição é técnica: identificadores de contratos, filiais e credenciais não são divulgados.",
      en: "Automation I built from scratch for the ISP's sales flow. The description is technical: contract and branch identifiers and credentials are not disclosed.",
    },
    summary: {
      pt: "Bot em Node.js/TypeScript que roda a cada 10 minutos e bloqueia no IXC os contratos novos que estão ao mesmo tempo em pré-contrato e aguardando assinatura, com modo de teste, limite de segurança e confirmação de cada bloqueio.",
      en: "Node.js/TypeScript bot that runs every 10 minutes and blocks, in IXC, new contracts that are both in pre-contract status and awaiting signature, with a test mode, a safety limit, and confirmation of every block.",
    },
    problem: {
      pt: "Contratos recém-cadastrados que ainda não tinham sido assinados ficavam com o acesso liberado, e o bloqueio dependia de alguém conferir e bloquear manualmente, um por um, no ERP.",
      en: "Newly registered contracts that hadn't been signed yet had their access enabled, and blocking depended on someone checking and blocking them manually, one by one, in the ERP.",
    },
    solution: {
      pt: "A cada ciclo o bot lista os contratos nas duas condições, classifica cada um com regras explícitas e bloqueia só os que restam, consultando o contrato de novo para confirmar que o bloqueio pegou. Começa em modo de teste, só registrando o que faria, e tem um teto por ciclo que impede bloqueio em massa se algum filtro falhar.",
      en: "Each cycle, the bot lists contracts in both conditions, classifies each one with explicit rules, and blocks only those left, re-querying the contract to confirm the block took effect. It starts in test mode, only logging what it would do, and has a per-cycle cap that prevents mass blocking if a filter fails.",
    },
    participation: {
      pt: "Desenvolvi sozinho: o cliente da API do IXC, as regras de classificação, o arquivo de estado, o limite de segurança, a confirmação pós-bloqueio, a planilha diária, o empacotamento em Docker e a suíte de testes.",
      en: "I built it alone: the IXC API client, the classification rules, the state file, the safety limit, post-block confirmation, the daily spreadsheet, Docker packaging, and the test suite.",
    },
    highlights: {
      pt: [
        "Ciclo a cada 10 minutos com paginação completa no IXC",
        "Modo de teste (dry-run) que mostra o corpo exato que seria enviado",
        "Limite de segurança: acima de 50 bloqueios no ciclo, não bloqueia nada",
        "Confirmação de cada bloqueio consultando o contrato de novo",
        "Contratos com streaming nunca são bloqueados (o bloqueio desligaria o serviço)",
        "Respeita desbloqueios manuais feitos pela equipe",
        "Planilha diária no Google Sheets com a situação de cada contrato",
        "Configuração validada na subida, com mensagem exata do que corrigir",
      ],
      en: [
        "Cycle every 10 minutes with full pagination in IXC",
        "Test mode (dry-run) showing the exact body that would be sent",
        "Safety limit: above 50 blocks in a cycle, it blocks nothing",
        "Confirmation of every block by re-querying the contract",
        "Contracts with streaming are never blocked (blocking would turn the service off)",
        "Respects manual unblocks made by the team",
        "Daily Google Sheets report with each contract's status",
        "Configuration validated at startup, with the exact fix to apply",
      ],
    },
    challenges: {
      pt: [
        "Bot que age sobre clientes reais: dry-run, liberação gradual por contrato e teto por ciclo antes de bloquear de verdade",
        "Se qualquer listagem falhar, o ciclo para — nunca decide com dados incompletos",
        "Unir as duas listagens (e não só a interseção) para o contrato continuar no estado depois de bloqueado",
        "Retry só onde é seguro: rede e 5xx sim, recusa do ERP não",
        "Desligamento gracioso: termina o ciclo em andamento antes de sair",
      ],
      en: [
        "A bot acting on real customers: dry-run, gradual per-contract rollout, and a per-cycle cap before blocking for real",
        "If any listing fails, the cycle stops — it never decides on incomplete data",
        "Merging both listings (not just their intersection) so a contract stays in state after being blocked",
        "Retrying only where safe: network and 5xx yes, ERP refusals no",
        "Graceful shutdown: finishes the running cycle before exiting",
      ],
    },
    results: {
      pt: [
        "Bloqueio de pré-contratos sem conferência manual",
        "Cada ação registrada e confirmada no log e na planilha",
        "Implantação segura, validada contrato a contrato antes de liberar",
      ],
      en: [
        "Pre-contract blocking without manual checks",
        "Every action logged and confirmed in the log and the spreadsheet",
        "Safe rollout, validated contract by contract before going live",
      ],
    },
    learned: {
      pt: [
        "Projetar automações que mexem em produção com travas de segurança",
        "Testes de regra de negócio com Vitest contra um servidor IXC falso local",
        "Logs estruturados com pino e ocultação de campos sensíveis",
      ],
      en: [
        "Designing automations that touch production with safety guards",
        "Business-rule tests with Vitest against a local fake IXC server",
        "Structured logging with pino and redaction of sensitive fields",
      ],
    },
    metrics: [
      { value: "99", label: { pt: "testes automatizados", en: "automated tests" } },
      { value: "10 min", label: { pt: "intervalo entre ciclos", en: "interval between cycles" } },
      { value: "Dry-run", label: { pt: "antes de bloquear de verdade", en: "before blocking for real" } },
    ],
    screenshots: [
      {
        icon: "repeat",
        alt: { pt: "Log de um ciclo em modo de teste com o resumo dos contratos classificados (dados ocultos).", en: "Log of a test-mode cycle with the summary of classified contracts (data hidden)." },
        caption: { pt: "Ciclo em modo de teste", en: "Test-mode cycle" },
      },
      {
        icon: "database",
        alt: { pt: "Planilha diária com a situação de cada contrato (dados ocultos).", en: "Daily spreadsheet with each contract's status (data hidden)." },
        caption: { pt: "Planilha diária", en: "Daily spreadsheet" },
      },
    ],
  },

  /* 17 — Monitor de Erros do Servidor --------------------------------------- */
  {
    slug: "bot-monitor-erros",
    title: "Monitor de Erros do Servidor",
    icon: "shield",
    category: "automation",
    categories: ["automation", "bot", "corporate"],
    roles: ["automation", "bots", "backend", "performance"],
    stack: ["Node.js", "JavaScript", "Docker", "dockerode", "Telegram Bot API"],
    integrations: ["Docker", "Telegram"],
    architecture: [
      { icon: "server", label: { pt: "Coleta", en: "Collection" }, detail: { pt: "Logs de todos os containers em tempo real, eventos do Docker, arquivos de log fora do Docker e um endpoint HTTP para as próprias aplicações reportarem erros.", en: "Real-time logs from every container, Docker events, log files outside Docker, and an HTTP endpoint for applications to report their own errors." } },
      { icon: "layers", label: { pt: "Classificação", en: "Classification" }, detail: { pt: "Parsers por formato (JSON pino/winston, Apache, PHP), agrupamento de stack traces multi-linha e níveis de severidade.", en: "Per-format parsers (pino/winston JSON, Apache, PHP), grouping of multi-line stack traces, and severity levels." } },
      { icon: "shield", label: { pt: "Anti-ruído", en: "Noise control" }, detail: { pt: "Fingerprint que ignora IDs, horários e IPs, janela de reenvio, anti-tempestade e lista de ruído conhecida.", en: "Fingerprint that ignores IDs, timestamps, and IPs, a resend window, storm protection, and a known-noise list." } },
      { icon: "bolt", label: { pt: "Alertas", en: "Alerts" }, detail: { pt: "Bot do Telegram com comandos restritos a administradores, resumo periódico e rate limit próprio com fila e retry.", en: "Telegram bot with admin-only commands, periodic summaries, and its own rate limit with queue and retry." } },
    ],
    companyContext: {
      pt: "Monitor centralizado de erros dos serviços do servidor de produção, com alertas no Telegram.",
      en: "Centralized error monitor for the production server's services, with Telegram alerts.",
    },
    ownershipNote: {
      pt: "Projeto interno da equipe de DevOps. Criei a base do monitor (coleta, classificação, anti-ruído, comandos e resumo periódico); o painel fixo no Telegram foi desenvolvido por outro dev da equipe. Nomes de serviços, servidor e chats não são divulgados.",
      en: "Internal DevOps team project. I built the monitor's foundation (collection, classification, noise control, commands, and periodic summary); the pinned Telegram panel was built by another developer on the team. Service, server, and chat names are not disclosed.",
    },
    summary: {
      pt: "Serviço Node.js que lê os logs de todos os containers Docker em tempo real, detecta e agrupa erros e avisa no Telegram só quando importa — sem inundar o canal.",
      en: "Node.js service that reads every Docker container's logs in real time, detects and groups errors, and alerts on Telegram only when it matters — without flooding the channel.",
    },
    problem: {
      pt: "Com vários sistemas internos rodando no mesmo servidor, erros e quedas só eram percebidos quando alguém reclamava. Olhar os logs de cada container à mão não escalava, e um alerta por linha de erro tornaria o canal inútil.",
      en: "With several internal systems on the same server, errors and outages were only noticed when someone complained. Checking each container's logs by hand didn't scale, and one alert per error line would make the channel useless.",
    },
    solution: {
      pt: "Um monitor único que acompanha logs, eventos do Docker (exit code, OOM, healthcheck, loop de restart), arquivos de log e erros reportados pelas aplicações. Cada erro vira um evento com fingerprint: a primeira ocorrência avisa, as seguintes só contam. Quedas e erros fatais geram mensagem; o resto aparece no resumo e na consulta por comando.",
      en: "A single monitor that follows logs, Docker events (exit code, OOM, healthcheck, restart loop), log files, and errors reported by applications. Each error becomes a fingerprinted event: the first occurrence alerts, later ones only count. Outages and fatal errors trigger a message; everything else shows up in the summary and on-demand commands.",
    },
    participation: {
      pt: "Implementei a primeira versão completa: integração com o Docker via dockerode, os watchers de logs, eventos e arquivos, o endpoint de ingestão, os parsers e a classificação (incluindo logs do Apache e ruído conhecido), o fingerprint, os comandos e o resumo periódico. Depois corrigi o painel para ignorar containers avulsos e fechar incidentes de serviços removidos.",
      en: "I implemented the first complete version: Docker integration via dockerode, the log, event, and file watchers, the ingestion endpoint, the parsers and classification (including Apache logs and known noise), the fingerprint, the commands, and the periodic summary. Later I fixed the panel to ignore one-off containers and close incidents for removed services.",
    },
    highlights: {
      pt: [
        "Leitura em tempo real dos logs de todos os containers",
        "Detecção de container caído, OOM kill, healthcheck unhealthy e loop de restart",
        "Agrupamento de exception + stack trace em um único evento",
        "Fingerprint que reconhece o mesmo erro com IDs, horários e IPs diferentes",
        "Anti-tempestade: silencia temporariamente um app que dispara erros em rajada",
        "Endpoint HTTP para as aplicações reportarem erros capturados",
        "Comandos no Telegram restritos a administradores",
        "Resumo periódico configurável",
      ],
      en: [
        "Real-time reading of every container's logs",
        "Detection of crashed containers, OOM kills, unhealthy healthchecks, and restart loops",
        "Grouping of an exception + stack trace into a single event",
        "Fingerprint that recognizes the same error with different IDs, timestamps, and IPs",
        "Storm protection: temporarily silences an app that fires errors in bursts",
        "HTTP endpoint for applications to report caught errors",
        "Admin-only Telegram commands",
        "Configurable periodic summary",
      ],
    },
    challenges: {
      pt: [
        "Não inundar o canal: sete camadas de proteção, de fingerprint a rate limit com fila",
        "Juntar a exception e as dezenas de linhas de stack que chegam separadas no stream de logs",
        "Normalizar mensagens para que IDs, timestamps e IPs não gerem alertas “novos”",
        "Diferenciar deploy (container recriado em segundos) de queda real",
      ],
      en: [
        "Not flooding the channel: seven layers of protection, from fingerprinting to a queued rate limit",
        "Joining the exception and the dozens of stack lines that arrive separately in the log stream",
        "Normalizing messages so IDs, timestamps, and IPs don't produce “new” alerts",
        "Telling a deploy (container recreated in seconds) apart from a real outage",
      ],
    },
    results: {
      pt: [
        "Quedas e erros fatais percebidos pela equipe antes dos usuários",
        "Visão única de erros de todos os serviços do servidor",
        "Canal de alertas útil, sem ruído repetido",
      ],
      en: [
        "Outages and fatal errors noticed by the team before users",
        "A single view of errors across all of the server's services",
        "A useful alert channel, without repeated noise",
      ],
    },
    learned: {
      pt: [
        "API do Docker (logs, eventos e estado de containers) com dockerode",
        "Desenho de alertas que as pessoas continuam lendo",
        "Trabalho em equipe com branches por tarefa e documentação de decisões",
      ],
      en: [
        "The Docker API (logs, events, and container state) with dockerode",
        "Designing alerts people keep reading",
        "Teamwork with per-task branches and documented decisions",
      ],
    },
    metrics: [
      { value: "4", label: { pt: "fontes de erro monitoradas", en: "monitored error sources" } },
      { value: "7", label: { pt: "proteções anti-ruído", en: "noise protections" } },
      { value: "1", label: { pt: "dependência (dockerode)", en: "dependency (dockerode)" } },
    ],
    screenshots: [
      {
        icon: "shield",
        alt: { pt: "Alerta no Telegram de container fora do ar (nomes de serviços ocultos).", en: "Telegram alert for a container that went down (service names hidden)." },
        caption: { pt: "Alerta de queda", en: "Outage alert" },
      },
      {
        icon: "layers",
        alt: { pt: "Lista de erros agrupados por serviço nas últimas 24 horas (dados ocultos).", en: "List of errors grouped by service over the last 24 hours (data hidden)." },
        caption: { pt: "Erros agrupados por serviço", en: "Errors grouped by service" },
      },
    ],
  },

  /* 18 — Bot de Upgrade Comercial ------------------------------------------- */
  {
    slug: "bot-upgrade",
    title: "Bot de Upgrade Comercial",
    icon: "trending",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "TypeScript", "ESM", "node-cron", "Axios", "Google Sheets API", "xlsx", "Winston", "Docker", "PM2"],
    integrations: ["IXC Soft", "OPA Suite", "Google Sheets"],
    architecture: [
      { icon: "bolt", label: { pt: "Runtime", en: "Runtime" }, detail: { pt: "Node.js + TypeScript em ESM; configuração tipada e validada na inicialização.", en: "Node.js + TypeScript on ESM; typed configuration validated at startup." } },
      { icon: "repeat", label: { pt: "Agendamento", en: "Scheduling" }, detail: { pt: "node-cron com múltiplas expressões por campanha; PM2 em modo fork com instância única e fuso fixado, para o relógio do servidor não deslocar o disparo.", en: "node-cron with multiple expressions per campaign; PM2 in fork mode with a single instance and a pinned timezone, so the server clock cannot shift the dispatch." } },
      { icon: "plug", label: { pt: "Coleta", en: "Collection" }, detail: { pt: "Cliente de API com paginação em lotes e pausas entre páginas e recursos; uma camada de mapeamento de campos isola o formato do provedor do domínio interno.", en: "API client with batched pagination and pauses between pages and resources; a field-mapping layer isolates the provider format from the internal domain." } },
      { icon: "database", label: { pt: "Persistência", en: "Persistence" }, detail: { pt: "Provider intercambiável: Google Sheets via service account ou arquivo .xlsx local, preservando as colunas preenchidas manualmente pela equipe.", en: "Swappable provider: Google Sheets via service account or a local .xlsx file, preserving columns filled in manually by the team." } },
      { icon: "shield", label: { pt: "Entrega e retomada", en: "Delivery & resume" }, detail: { pt: "Envio de template pelo canal de atendimento, com checkpoint em disco por período: uma execução interrompida retoma sem redisparar.", en: "Template delivery through the messaging channel, with an on-disk checkpoint per period: an interrupted run resumes without re-sending." } },
    ],
    companyContext: {
      pt: "Automação comercial recorrente: monta a base de clientes elegíveis, dispara campanhas por template e consolida os resultados.",
      en: "Recurring sales automation: builds the eligible-customer base, runs template campaigns, and consolidates the results.",
    },
    ownershipNote: {
      pt: "Automação desenvolvida para a operação comercial, integrando a base de clientes do provedor, o canal de atendimento e planilhas operacionais. A descrição aqui é técnica: regras comerciais, credenciais e dados de clientes não são divulgados.",
      en: "Automation built for the sales operation, integrating the ISP customer base, the messaging channel, and operational spreadsheets. The description here is technical: business rules, credentials, and customer data are not disclosed.",
    },
    summary: {
      pt: "Bot em Node.js/TypeScript que reconstrói a base de clientes a partir da API do provedor, aplica regras de elegibilidade para identificar oportunidades de upgrade, dispara campanhas por template e consolida os envios em planilha.",
      en: "A Node.js/TypeScript bot that rebuilds the customer base from the ISP API, applies eligibility rules to spot upgrade opportunities, runs template campaigns, and consolidates dispatches into a spreadsheet.",
    },
    problem: {
      pt: "A prospecção de upgrade dependia de levantar manualmente quem estava elegível, conferir quem já tinha sido abordado e disparar mensagem a mensagem — um processo lento, sujeito a reabordar o mesmo cliente e sem histórico confiável.",
      en: "Upgrade prospecting relied on manually listing who was eligible, checking who had already been contacted, and sending message by message — slow, prone to re-contacting the same customer, and with no reliable history.",
    },
    solution: {
      pt: "Um scheduler com rotinas independentes: uma reconstrói a base a partir da API do provedor, outra aplica as regras de elegibilidade e dispara o template pelo canal de atendimento, outra cuida da campanha de indicação pós-instalação e uma última consolida tudo em um resumo mensal. Cada envio é registrado, um cooldown configurável bloqueia a reabordagem e um checkpoint em disco permite retomar uma execução interrompida sem duplicar disparo.",
      en: "A scheduler with independent routines: one rebuilds the base from the ISP API, another applies eligibility rules and sends the template through the messaging channel, another handles the post-installation referral campaign, and a last one consolidates everything into a monthly summary. Every dispatch is logged, a configurable cooldown blocks re-contact, and an on-disk checkpoint resumes an interrupted run without duplicating sends.",
    },
    participation: {
      pt: "Desenvolvi o bot de ponta a ponta: modelagem dos jobs, cliente de API com paginação e controle de ritmo, camada de planilha com provider intercambiável, motor de regras de elegibilidade externalizado em JSON, mecanismo de checkpoint, modo de simulação e o empacotamento com Docker multi-stage e PM2.",
      en: "I built the bot end to end: job modeling, an API client with pagination and rate control, a spreadsheet layer with a swappable provider, an eligibility rule engine externalized to JSON, the checkpoint mechanism, a simulation mode, and packaging with multi-stage Docker and PM2.",
    },
    highlights: {
      pt: [
        "Cinco rotinas agendadas independentes, cada uma com tratamento de erro isolado",
        "Checkpoint em disco: execução interrompida retoma sem redisparar nem duplicar linha",
        "Modo de simulação que apura o público do período e encerra sem enviar nada",
        "Cooldown configurável que bloqueia a reabordagem do mesmo cliente",
        "Regras de elegibilidade externalizadas em JSON, editáveis sem recompilar",
        "Mapeamento de campos que isola o formato da API do domínio interno",
        "Coleta paginada em lotes, com pausas configuráveis entre páginas e recursos",
        "Consolidação mensal recalculada por inteiro, sem acumular duplicidade",
        "Build Docker multi-stage, com segredos mantidos fora da imagem",
      ],
      en: [
        "Five independent scheduled routines, each with isolated error handling",
        "On-disk checkpoint: an interrupted run resumes without re-sending or duplicating rows",
        "Simulation mode that computes the period audience and exits without sending anything",
        "Configurable cooldown that blocks re-contacting the same customer",
        "Eligibility rules externalized to JSON, editable without recompiling",
        "Field mapping that isolates the API format from the internal domain",
        "Batched paginated collection, with configurable pauses between pages and resources",
        "Monthly consolidation fully recomputed, with no accumulated duplication",
        "Multi-stage Docker build, with secrets kept out of the image",
      ],
    },
    challenges: {
      pt: [
        "Garantir idempotência: uma execução interrompida no meio não pode redisparar nem duplicar linhas",
        "Fixar o fuso do agendador — em servidor UTC a campanha sairia três horas antes do previsto",
        "Reduzir a pressão sobre a API do provedor sem estourar a janela de execução",
        "Separar simular de não enviar: desligar o envio ainda gravava linhas na planilha, o que motivou um modo de simulação de verdade",
      ],
      en: [
        "Guaranteeing idempotency: a run interrupted midway must not re-send or duplicate rows",
        "Pinning the scheduler timezone — on a UTC server the campaign would fire three hours early",
        "Reducing pressure on the ISP API without blowing the execution window",
        "Separating simulate from do-not-send: disabling delivery still wrote rows to the spreadsheet, which motivated a real simulation mode",
      ],
    },
    results: {
      pt: [
        "Campanha comercial recorrente rodando sem operação manual",
        "Histórico de envios e consolidação mensal auditáveis por campanha",
        "Base comercial reconstruída a cada ciclo, refletindo apenas contratos ativos",
        "Mesma infraestrutura reaproveitada para a campanha de indicação pós-instalação",
      ],
      en: [
        "Recurring sales campaign running with no manual operation",
        "Auditable dispatch history and monthly consolidation per campaign",
        "Sales base rebuilt every cycle, reflecting only active contracts",
        "Same infrastructure reused for the post-installation referral campaign",
      ],
    },
    learned: {
      pt: [
        "Idempotência e checkpoints em jobs de longa duração",
        "Como o fuso horário afeta agendadores que leem o relógio do sistema",
        "Empacotamento com Docker multi-stage e supervisão de processo com PM2",
        "Externalizar regra de negócio em configuração, em vez de deixá-la presa no código",
      ],
      en: [
        "Idempotency and checkpoints in long-running jobs",
        "How timezone affects schedulers that read the system clock",
        "Packaging with multi-stage Docker and process supervision with PM2",
        "Externalizing business rules into configuration instead of leaving them locked in code",
      ],
    },
    metrics: [
      { value: "5 jobs", label: { pt: "rotinas agendadas", en: "scheduled routines" } },
      { value: "Checkpoint", label: { pt: "retomada sem redisparo", en: "resume without re-sending" } },
      { value: "Dry-run", label: { pt: "simulação antes do envio", en: "simulation before sending" } },
    ],
    screenshots: [
      {
        icon: "repeat",
        alt: { pt: "Logs de execução das rotinas agendadas do bot (dados anonimizados).", en: "Execution logs of the bot scheduled routines (anonymized data)." },
        caption: { pt: "Execução agendada", en: "Scheduled execution" },
      },
      {
        icon: "database",
        alt: { pt: "Aba de resumo mensal consolidando os disparos por campanha (dados anonimizados).", en: "Monthly summary tab consolidating dispatches per campaign (anonymized data)." },
        caption: { pt: "Consolidação mensal", en: "Monthly consolidation" },
      },
    ],
  },

  /* 19 — Bot de Relatório de Atendimentos ----------------------------------- */
  {
    slug: "bot-atendimentos",
    title: "Bot de Relatório de Atendimentos",
    icon: "target",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "JavaScript", "ESM", "node:https", "node-cron", "ExcelJS", "Google Sheets API", "Docker", "ESLint"],
    integrations: ["OPA Suite", "Google Sheets"],
    architecture: [
      { icon: "layers", label: { pt: "Domínio puro", en: "Pure domain" }, detail: { pt: "As regras de contagem, agregação e consolidação ficam isoladas em um módulo que não conhece rede nem arquivo — por isso são testáveis sem tocar em nenhuma API externa.", en: "Counting, aggregation, and consolidation rules live in a module that knows nothing about network or files — so they are testable without touching any external API." } },
      { icon: "plug", label: { pt: "Cliente HTTP", en: "HTTP client" }, detail: { pt: "A API exige GET com corpo, o que a especificação do fetch proíbe; o cliente usa o módulo https nativo do Node, o que deixa o projeto sem nenhuma dependência de rede.", en: "The API requires GET with a body, which the fetch spec forbids; the client uses Node's native https module, leaving the project with zero network dependencies." } },
      { icon: "shield", label: { pt: "Integridade", en: "Integrity" }, detail: { pt: "Trava de execução impede duas rodadas simultâneas; a escrita na planilha grava antes de apagar, então uma queda de rede nunca deixa a aba vazia.", en: "An execution lock prevents concurrent runs; the spreadsheet write inserts before deleting, so a network drop never leaves the tab empty." } },
      { icon: "repeat", label: { pt: "Janela e estado", en: "Window & state" }, detail: { pt: "Um arquivo de estado guarda o último dia apurado: a execução seguinte recupera de uma vez todos os dias perdidos, sem sobreposição nem buraco.", en: "A state file stores the last processed day: the next run recovers every missed day at once, with no overlap and no gap." } },
      { icon: "database", label: { pt: "Saídas", en: "Outputs" }, detail: { pt: "Um .xlsx por execução como cópia local e uma planilha de link fixo que acumula o histórico, com recortes mensal, semanal, diário e detalhado.", en: "One .xlsx per run as a local copy, plus a fixed-link spreadsheet accumulating history, with monthly, weekly, daily, and detailed views." } },
    ],
    companyContext: {
      pt: "Relatório diário que classifica os atendimentos comerciais por origem do cliente e por resultado do contrato.",
      en: "Daily report classifying sales conversations by customer origin and contract outcome.",
    },
    ownershipNote: {
      pt: "Automação desenvolvida para a operação comercial, integrando o sistema de atendimento e planilhas. A descrição é técnica: identificadores internos, credenciais, volumes de operação e dados de atendimento não são divulgados.",
      en: "Automation built for the sales operation, integrating the service platform and spreadsheets. The description is technical: internal identifiers, credentials, operation volumes, and conversation data are not disclosed.",
    },
    summary: {
      pt: "Bot em Node.js que apura diariamente os atendimentos do sistema de atendimento, classifica cada um por etiqueta de origem e por resultado de contrato, e publica o resultado em .xlsx e em uma planilha acumulada com recortes mensal, semanal e diário.",
      en: "A Node.js bot that processes the service platform's conversations daily, classifies each by origin label and contract outcome, and publishes the result to .xlsx and to an accumulating spreadsheet with monthly, weekly, and daily views.",
    },
    problem: {
      pt: "Não havia como saber de onde vinham os clientes que fechavam contrato. Os atendimentos comerciais ficavam diluídos no volume geral, dominado por suporte técnico, e a taxa de conversão por canal de origem só existiria com contagem manual — inviável na frequência necessária.",
      en: "There was no way to know where closing customers came from. Sales conversations were diluted in the overall volume, dominated by technical support, and conversion rate per origin channel would only exist through manual counting — unfeasible at the required frequency.",
    },
    solution: {
      pt: "Uma rotina diária que coleta os atendimentos do período, filtra apenas os que carregam etiqueta comercial, cruza origem com resultado do contrato e calcula a taxa de conversão por canal. O resultado sai em dois formatos: um arquivo por execução, como cópia local, e uma planilha de link fixo que acumula o histórico e recalcula os resumos mensal, semanal e diário a cada rodada.",
      en: "A daily routine that collects the period's conversations, keeps only those carrying a sales label, cross-references origin with contract outcome, and computes the conversion rate per channel. The result comes out in two formats: one file per run as a local copy, and a fixed-link spreadsheet that accumulates history and recomputes the monthly, weekly, and daily summaries each round.",
    },
    participation: {
      pt: "Desenvolvi o bot inteiro: o cliente HTTP sob a restrição de GET com corpo, a paginação com falha explícita em vez de truncamento silencioso, a camada de domínio isolada de I/O, a montagem do .xlsx, a escrita incremental na planilha, a trava de concorrência, a CLI com códigos de saída e o empacotamento em Docker com agendador embutido.",
      en: "I built the entire bot: the HTTP client under the GET-with-body constraint, pagination that fails loudly instead of truncating silently, the I/O-isolated domain layer, the .xlsx assembly, incremental spreadsheet writing, the concurrency lock, the CLI with exit codes, and Docker packaging with an embedded scheduler.",
    },
    highlights: {
      pt: [
        "Janela auto-recuperável: dias perdidos por falha ou servidor fora do ar entram na execução seguinte",
        "Paginação que falha explicitamente ao atingir o teto, em vez de devolver um relatório incompleto",
        "Camada de domínio sem rede nem arquivo, coberta por testes com API simulada",
        "Cliente HTTP sem dependência externa, contornando a proibição de corpo em GET",
        "Trava de execução para proteger o acumulado de escritas concorrentes",
        "Escrita que grava antes de apagar, para nunca zerar o histórico",
        "Recorte de datas no fuso local, pedindo folga de um dia de cada lado",
        "Detecção de etiquetas contraditórias no mesmo atendimento, sinalizadas para correção",
        "Contagem múltipla explicada: atendimento com mais de uma origem entra em cada uma, e o relatório mostra os dois totais",
        "CLI com filtros de período, modo sem publicação e códigos de saída distintos",
      ],
      en: [
        "Self-recovering window: days missed by failure or downtime are picked up on the next run",
        "Pagination that fails loudly when hitting the ceiling, instead of returning an incomplete report",
        "Domain layer with no network or file access, covered by tests against a simulated API",
        "HTTP client with no external dependency, working around the ban on GET bodies",
        "Execution lock protecting the accumulated data from concurrent writes",
        "Insert-before-delete writing, so history is never zeroed out",
        "Date windowing in local timezone, requesting one extra day on each side",
        "Detection of contradictory labels on the same conversation, flagged for correction",
        "Explicit multi-counting: a conversation with several origins counts in each, and the report shows both totals",
        "CLI with period filters, a no-publish mode, and distinct exit codes",
      ],
    },
    challenges: {
      pt: [
        "A API exige GET com corpo, o que o fetch não permite — resolvido descendo para o módulo https nativo",
        "Truncar a paginação perderia justamente os dias mais recentes, porque a API devolve em ordem crescente de data; por isso o bot falha em vez de entregar dados parciais",
        "Cada etiqueta traz dois identificadores parecidos, e ler o errado faz o bot não reconhecer etiqueta nenhuma",
        "O acumulado da planilha é um lê-altera-grava, então duas execuções simultâneas corromperiam o histórico",
        "A API filtra por data pura, sem fuso — o recorte final precisou ser refeito localmente",
      ],
      en: [
        "The API requires GET with a body, which fetch forbids — solved by dropping down to the native https module",
        "Truncating pagination would lose precisely the most recent days, since the API returns in ascending date order; hence the bot fails instead of delivering partial data",
        "Each label carries two similar identifiers, and reading the wrong one makes the bot recognize no labels at all",
        "The spreadsheet accumulation is a read-modify-write, so two concurrent runs would corrupt the history",
        "The API filters by plain date, with no timezone — the final windowing had to be redone locally",
      ],
    },
    results: {
      pt: [
        "Origem dos clientes que fecham contrato passou a ser mensurável por canal",
        "Taxa de conversão por origem disponível sem nenhuma contagem manual",
        "Histórico acumulado em planilha de link fixo, com recortes mensal, semanal e diário",
        "Falhas de preenchimento de etiqueta viraram indicador acompanhável",
      ],
      en: [
        "The origin of closing customers became measurable per channel",
        "Conversion rate per origin available with no manual counting",
        "History accumulated in a fixed-link spreadsheet, with monthly, weekly, and daily views",
        "Label-filling failures became a trackable indicator",
      ],
    },
    learned: {
      pt: [
        "Separar domínio de I/O é o que torna regra de negócio testável de verdade",
        "Falhar alto é melhor que entregar um relatório silenciosamente incompleto",
        "Ler a documentação de uma API não substitui inspecionar o payload real",
        "Idempotência e trava de concorrência em rotinas que acumulam estado",
      ],
      en: [
        "Separating domain from I/O is what makes business rules genuinely testable",
        "Failing loudly beats delivering a silently incomplete report",
        "Reading an API's documentation does not replace inspecting the real payload",
        "Idempotency and concurrency locking in routines that accumulate state",
      ],
    },
    metrics: [
      { value: "Diário", label: { pt: "execução automática", en: "automatic run" } },
      { value: "4 abas", label: { pt: "mês, semana, dia e detalhado", en: "month, week, day, and detailed" } },
      { value: "0 deps", label: { pt: "de rede: https nativo", en: "network: native https" } },
    ],
    screenshots: [
      {
        icon: "target",
        alt: { pt: "Aba de resumo com os atendimentos agrupados por origem e por resultado de contrato (dados anonimizados).", en: "Summary tab with conversations grouped by origin and contract outcome (anonymized data)." },
        caption: { pt: "Resumo por origem", en: "Summary by origin" },
      },
      {
        icon: "database",
        alt: { pt: "Planilha acumulada com os recortes mensal, semanal e diário (dados anonimizados).", en: "Accumulated spreadsheet with monthly, weekly, and daily views (anonymized data)." },
        caption: { pt: "Histórico acumulado", en: "Accumulated history" },
      },
    ],
  },

  /* 20 — Bot de Erros de Pagamento ------------------------------------------ */
  {
    slug: "bot-erros-pagamento",
    title: "Bot de Erros de Pagamento",
    icon: "shield",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "JavaScript", "ESM", "discord.js", "PostgreSQL", "node-postgres", "Docker", "dotenv"],
    integrations: ["Discord", "PostgreSQL", "IXC Soft", "Gateway de pagamento"],
    architecture: [
      { icon: "plug", label: { pt: "Interface", en: "Interface" }, detail: { pt: "Bot de Discord com slash commands; o registro dos comandos é um passo separado do processo do bot, então mudar texto não exige re-registrar.", en: "Discord bot with slash commands; command registration is a separate step from the bot process, so changing copy requires no re-registration." } },
      { icon: "sparkles", label: { pt: "Tradução", en: "Translation" }, detail: { pt: "Dicionário de código do gateway para explicação em linguagem comum mais ação recomendada, editável em arquivo sem recompilar.", en: "Dictionary mapping gateway codes to plain-language explanations plus a recommended action, editable in a file without recompiling." } },
      { icon: "users", label: { pt: "Dois públicos", en: "Two audiences" }, detail: { pt: "Um comando para o atendimento, sem jargão nem código de erro no corpo, e outro para a equipe técnica com todos os campos crus do registro.", en: "One command for support, with no jargon or error codes in the body, and another for the technical team with every raw field of the record." } },
      { icon: "repeat", label: { pt: "Conciliação", en: "Reconciliation" }, detail: { pt: "Consulta a fatura no ERP e marca os erros como resolvidos; um modo somente-conferir mostra o que seria gravado sem tocar no banco.", en: "Checks the invoice in the ERP and marks errors as resolved; a check-only mode shows what would be written without touching the database." } },
      { icon: "lock", label: { pt: "Contenção", en: "Containment" }, detail: { pt: "Resposta efêmera opcional, visível só para quem chamou, e allowlist de canais com suporte a threads.", en: "Optional ephemeral reply, visible only to the caller, and a channel allowlist with thread support." } },
    ],
    companyContext: {
      pt: "Bot de Discord que traduz erros de pagamento para o atendimento e concilia faturas com o ERP.",
      en: "Discord bot that translates payment errors for the support team and reconciles invoices with the ERP.",
    },
    ownershipNote: {
      pt: "Automação desenvolvida para o atendimento interno, integrando o banco de erros de pagamento, o ERP e o Discord da equipe. A descrição é técnica: credenciais, identificadores e dados de clientes não são divulgados.",
      en: "Automation built for internal support, integrating the payment-error database, the ERP, and the team's Discord. The description is technical: credentials, identifiers, and customer data are not disclosed.",
    },
    summary: {
      pt: "Bot de Discord que consulta erros de pagamento por cliente ou por fatura e responde em linguagem de atendimento: o que aconteceu, o que fazer agora e de quem depende a solução.",
      en: "A Discord bot that looks up payment errors by customer or invoice and answers in support language: what happened, what to do now, and who the fix depends on.",
    },
    problem: {
      pt: "Quando um pagamento falhava, o atendimento recebia um código de retorno do gateway e não tinha o que dizer ao cliente. Descobrir se a falha era do cliente, do banco dele ou do nosso sistema exigia acionar alguém com acesso ao banco de dados, e a resposta demorava.",
      en: "When a payment failed, support got a gateway return code and had nothing to tell the customer. Finding out whether the failure was the customer's, their bank's, or our system's required pulling in someone with database access, and the answer took time.",
    },
    solution: {
      pt: "Um bot no Discord com comandos separados por público. O do atendimento devolve um card que responde três perguntas em português simples e atribui a origem do problema. O técnico devolve os campos crus para quem vai depurar. Um terceiro consulta a fatura direto no ERP e, se estiver paga, marca os erros como resolvidos — com um modo de conferência que mostra o que faria antes de gravar qualquer coisa.",
      en: "A Discord bot with commands split by audience. The support one returns a card answering three questions in plain language and attributes the source of the problem. The technical one returns raw fields for whoever is debugging. A third checks the invoice directly in the ERP and, if paid, marks the errors resolved — with a check mode that shows what it would do before writing anything.",
    },
    participation: {
      pt: "Desenvolvi o bot de ponta a ponta: modelagem dos comandos e das opções, consultas ao banco de erros, cliente do ERP para a conciliação, o dicionário de tradução dos códigos, o modo de conferência, as regras de visibilidade e canal, e o empacotamento em Docker.",
      en: "I built the bot end to end: command and option modeling, queries against the error database, the ERP client for reconciliation, the code-translation dictionary, the check mode, the visibility and channel rules, and Docker packaging.",
    },
    highlights: {
      pt: [
        "Card de atendimento que responde o que aconteceu, o que fazer e de quem depende",
        "Atribuição da origem do problema: cliente, banco do cliente ou sistema interno",
        "Dicionário de códigos editável em arquivo, sem recompilar nem re-registrar comandos",
        "Comando técnico separado, com os campos crus para depuração",
        "Conciliação automática: fatura paga no ERP marca os erros como resolvidos",
        "Modo somente-conferir, que mostra o que seria gravado sem tocar no banco",
        "Busca por cliente ou por fatura, com filtros de status, período e quantidade",
        "Resposta efêmera opcional, visível só para quem chamou",
        "Allowlist de canais, com suporte a threads criadas dentro deles",
      ],
      en: [
        "Support card answering what happened, what to do, and who it depends on",
        "Attribution of the problem's source: customer, customer's bank, or internal system",
        "Code dictionary editable in a file, with no recompiling or command re-registration",
        "Separate technical command, with raw fields for debugging",
        "Automatic reconciliation: an invoice paid in the ERP marks its errors resolved",
        "Check-only mode showing what would be written without touching the database",
        "Lookup by customer or invoice, with status, period, and quantity filters",
        "Optional ephemeral reply, visible only to the caller",
        "Channel allowlist, with support for threads created inside them",
      ],
    },
    challenges: {
      pt: [
        "Traduzir código de gateway em ação concreta sem simplificar a ponto de orientar errado",
        "Separar o que o atendimento precisa ver do que só interessa a quem depura",
        "Um comando que escreve no banco precisava de um caminho seguro de conferência antes",
        "Aceitar busca por cliente ou por fatura, ambos opcionais mas ao menos um obrigatório",
      ],
      en: [
        "Translating gateway codes into concrete action without oversimplifying into wrong guidance",
        "Separating what support needs to see from what only matters to whoever is debugging",
        "A command that writes to the database needed a safe check path first",
        "Accepting lookup by customer or invoice, both optional but at least one required",
      ],
    },
    results: {
      pt: [
        "Atendimento passou a responder sobre falha de pagamento sem escalar",
        "Diagnóstico de origem do problema deixou de depender de acesso ao banco",
        "Erros já quitados deixaram de poluir a fila, por conciliação automática",
      ],
      en: [
        "Support began answering payment-failure questions without escalating",
        "Diagnosing the source of a problem stopped requiring database access",
        "Already-settled errors stopped cluttering the queue, through automatic reconciliation",
      ],
    },
    learned: {
      pt: [
        "Escrever mensagem de erro para quem vai agir, não para quem escreveu o código",
        "Comando que grava em banco precisa de um modo de conferência desde o primeiro dia",
        "Ciclo de registro e atualização de slash commands no Discord",
      ],
      en: [
        "Writing error messages for whoever will act, not for whoever wrote the code",
        "A command that writes to a database needs a check mode from day one",
        "The registration and update cycle of Discord slash commands",
      ],
    },
    metrics: [
      { value: "3 comandos", label: { pt: "atendimento, técnico e conciliação", en: "support, technical, and reconciliation" } },
      { value: "2 públicos", label: { pt: "linguagem por audiência", en: "language per audience" } },
      { value: "Dry-run", label: { pt: "conferência antes de gravar", en: "check before writing" } },
    ],
    screenshots: [
      {
        icon: "sparkles",
        alt: { pt: "Card de resposta do bot no Discord explicando a falha de pagamento em linguagem de atendimento (dados anonimizados).", en: "Bot reply card in Discord explaining the payment failure in support language (anonymized data)." },
        caption: { pt: "Card de atendimento", en: "Support card" },
      },
      {
        icon: "tools",
        alt: { pt: "Resposta do comando técnico com os campos crus do registro de erro (dados anonimizados).", en: "Technical command reply with the raw fields of the error record (anonymized data)." },
        caption: { pt: "Visão técnica", en: "Technical view" },
      },
    ],
  },

  /* 21 — Sincronizador de Vendas em Aberto ---------------------------------- */
  {
    slug: "bot-vendas-abertas",
    title: "Sincronizador de Vendas em Aberto",
    icon: "repeat",
    category: "bot",
    categories: ["bot", "automation", "integration"],
    roles: ["automation", "bots", "integration", "backend"],
    stack: ["Node.js", "JavaScript", "Axios", "Google Sheets API", "node-cron", "Docker", "dotenv"],
    integrations: ["IXC Soft", "Google Sheets"],
    architecture: [
      { icon: "plug", label: { pt: "Coleta", en: "Collection" }, detail: { pt: "Cliente da API do ERP com paginação; o filtro de “em aberto” pode ser aplicado no servidor ou localmente, conforme o que a instância suporta.", en: "ERP API client with pagination; the “open” filter can be applied server-side or locally, depending on what the instance supports." } },
      { icon: "target", label: { pt: "Descoberta", en: "Discovery" }, detail: { pt: "Comando de diagnóstico que lista os campos reais da rota, porque o campo que marca “em aberto” muda de instância para instância do ERP.", en: "A diagnostic command that lists the route's real fields, because the field marking “open” differs between ERP instances." } },
      { icon: "layers", label: { pt: "Mesclagem", en: "Merge" }, detail: { pt: "Antes de reescrever, lê as observações já digitadas e as reaplica casando pela chave da venda — edição manual sobrevive a toda sincronização.", en: "Before rewriting, it reads the notes already typed and reapplies them matched by sale key — manual edits survive every sync." } },
      { icon: "database", label: { pt: "Histórico", en: "History" }, detail: { pt: "Modo acumulativo que nunca remove linha: a venda finalizada muda de status e permanece na planilha, com a observação intacta.", en: "Accumulative mode that never removes a row: a finalized sale changes status and stays in the sheet, with its note intact." } },
      { icon: "repeat", label: { pt: "Agendamento", en: "Scheduling" }, detail: { pt: "Cron semanal dentro do container, com fuso fixado e execução avulsa disponível para conferir antes de agendar.", en: "Weekly cron inside the container, with a pinned timezone and a one-off run available to verify before scheduling." } },
    ],
    companyContext: {
      pt: "Sincronização semanal das vendas em aberto do ERP para uma planilha operacional, sem apagar o que a equipe escreveu.",
      en: "Weekly sync of open sales from the ERP into an operational spreadsheet, without erasing what the team wrote.",
    },
    ownershipNote: {
      pt: "Automação desenvolvida para a operação comercial, integrando o ERP e planilhas. A descrição é técnica: credenciais, identificadores de planilha e dados de vendas não são divulgados.",
      en: "Automation built for the sales operation, integrating the ERP and spreadsheets. The description is technical: credentials, spreadsheet identifiers, and sales data are not disclosed.",
    },
    summary: {
      pt: "Serviço em Node.js que busca as vendas em aberto no ERP e sincroniza para uma planilha semanalmente, acumulando histórico e preservando a coluna de observação preenchida à mão pela equipe.",
      en: "A Node.js service that fetches open sales from the ERP and syncs them to a spreadsheet weekly, accumulating history and preserving the notes column filled in by hand by the team.",
    },
    problem: {
      pt: "A equipe acompanhava as vendas em aberto em uma planilha alimentada manualmente e anotava o andamento de cada uma ali mesmo. Qualquer atualização da lista significava recolher os dados de novo no ERP e correr o risco de perder as anotações no meio do caminho.",
      en: "The team tracked open sales in a manually fed spreadsheet and noted the progress of each one right there. Any list update meant re-collecting data from the ERP and risking losing the notes along the way.",
    },
    solution: {
      pt: "Um serviço agendado que coleta as vendas do ERP, lê as observações já digitadas na planilha, reescreve os dados e reaplica cada observação casando pela chave da venda. A lista acumula em vez de ser substituída: quando a venda é finalizada no ERP, a linha permanece e apenas muda de status, com a anotação intacta.",
      en: "A scheduled service that collects sales from the ERP, reads the notes already typed in the spreadsheet, rewrites the data, and reapplies each note matched by sale key. The list accumulates instead of being replaced: when a sale is finalized in the ERP, the row stays and only changes status, with its note intact.",
    },
    participation: {
      pt: "Desenvolvi o serviço inteiro: cliente da API com paginação, o comando de diagnóstico dos campos, a camada de planilha com preservação de coluna manual, o modo de histórico acumulado, a seleção configurável de colunas, o agendamento e o empacotamento em Docker.",
      en: "I built the entire service: the paginated API client, the field-diagnostic command, the spreadsheet layer with manual-column preservation, the accumulated-history mode, configurable column selection, scheduling, and Docker packaging.",
    },
    highlights: {
      pt: [
        "Coluna de observação preservada, casada pela chave da venda a cada sincronização",
        "Histórico acumulado: nenhuma linha é removida, só muda de status",
        "Comando de diagnóstico que lista os campos reais da rota antes de configurar o filtro",
        "Filtro aplicável no servidor ou localmente, conforme o suporte da instância",
        "Seleção e renomeação de colunas por configuração, sem mexer no código",
        "Execução avulsa para conferir o resultado antes de ativar o agendamento",
        "Cron semanal com fuso fixado dentro do container",
      ],
      en: [
        "Notes column preserved, matched by sale key on every sync",
        "Accumulated history: no row is removed, only its status changes",
        "Diagnostic command listing the route's real fields before configuring the filter",
        "Filter applicable server-side or locally, depending on instance support",
        "Column selection and renaming by configuration, without touching code",
        "One-off run to verify the result before enabling the schedule",
        "Weekly cron with a pinned timezone inside the container",
      ],
    },
    challenges: {
      pt: [
        "Reescrever a planilha inteira sem destruir o que a equipe digitou entre uma execução e outra",
        "O campo que marca a venda como em aberto não é o mesmo em toda instância do ERP",
        "Decidir a chave de casamento das observações para que a edição sobreviva a mudanças de ordem",
        "Manter a lista útil como histórico sem transformá-la em um acúmulo ilegível",
      ],
      en: [
        "Rewriting the whole spreadsheet without destroying what the team typed between runs",
        "The field marking a sale as open is not the same across ERP instances",
        "Choosing the matching key for notes so edits survive reordering",
        "Keeping the list useful as history without turning it into an unreadable pile",
      ],
    },
    results: {
      pt: [
        "Planilha de vendas em aberto atualizada sozinha toda semana",
        "Anotações da equipe preservadas entre execuções, sem trabalho de recolocação",
        "Histórico de vendas finalizadas mantido na mesma lista, sem controle paralelo",
      ],
      en: [
        "Open-sales spreadsheet updated on its own every week",
        "Team notes preserved between runs, with no re-entry work",
        "History of finalized sales kept in the same list, with no parallel tracking",
      ],
    },
    learned: {
      pt: [
        "Sincronizar contra um documento que humanos editam exige mesclar, não sobrescrever",
        "Descobrir o formato real de uma API antes de assumir o que a documentação diz",
        "Configuração externa é o que deixa a mesma automação servir instâncias diferentes",
      ],
      en: [
        "Syncing against a document humans edit requires merging, not overwriting",
        "Discovering an API's real shape before assuming what the documentation says",
        "External configuration is what lets the same automation serve different instances",
      ],
    },
    metrics: [
      { value: "Semanal", label: { pt: "sincronização agendada", en: "scheduled sync" } },
      { value: "0 perdas", label: { pt: "de observação manual", en: "of manual notes" } },
      { value: "Discover", label: { pt: "diagnóstico dos campos da API", en: "API field diagnostics" } },
    ],
    screenshots: [
      {
        icon: "repeat",
        alt: { pt: "Logs da sincronização semanal entre o ERP e a planilha (dados anonimizados).", en: "Logs of the weekly sync between the ERP and the spreadsheet (anonymized data)." },
        caption: { pt: "Sincronização agendada", en: "Scheduled sync" },
      },
      {
        icon: "layers",
        alt: { pt: "Planilha de vendas em aberto com a coluna de observação preservada (dados anonimizados).", en: "Open-sales spreadsheet with the notes column preserved (anonymized data)." },
        caption: { pt: "Observação preservada", en: "Notes preserved" },
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
