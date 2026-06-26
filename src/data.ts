/* =============================================================================
   data.ts — Conteúdo editável do portfólio (PT/EN)
   ========================================================================== */

export type Lang = "pt" | "en";
export type Localized<T = string> = Record<Lang, T>;

export type SkillStatus = "focus" | "learning" | "exploring";
export type ProjectStatus = "live" | "in-progress" | "planned" | "future";
export type TimelineStatus = "done" | "current" | "planned";
export type IconName =
  | "layout" | "server" | "database" | "tools" | "blocks"
  | "rocket" | "trending" | "target";

export interface SkillGroup {
  icon: IconName;
  title: Localized;
  status: SkillStatus;
  items: string[];
}
export interface Project {
  featured: boolean;
  status: ProjectStatus;
  title: Localized;
  description: Localized;
  tech: string[];
  links: { repo: string; demo: string };
}
export interface TimelineItem {
  period: Localized;
  status: TimelineStatus;
  title: Localized;
  description: Localized;
}
export interface Goal {
  icon: IconName;
  term: Localized;
  horizon: Localized;
  items: Localized<string[]>;
}

export interface PortfolioData {
  profile: {
    name: string;
    initials: string;
    role: Localized;
    focus: Localized;
    location: Localized;
    available: boolean;
  };
  links: { github: string; linkedin: string; email: string; resume: string };
  hero: { tagline: Localized };
  about: { paragraphs: Localized<string[]>; stats: { value: string; label: Localized }[] };
  skillGroups: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
  goals: Goal[];
}

export const DATA: PortfolioData = {
  profile: {
    name: "Augusto Silva",
    initials: "AS",
    role: { pt: "Analista de Sistemas & Desenvolvedor Full Stack", en: "Systems Analyst & Full Stack Developer" },
    focus: { pt: "Backend · Frontend · Arquitetura de Sistemas", en: "Backend · Frontend · Systems Architecture" },
    location: { pt: "Brasil", en: "Brazil" },
    available: true,
  },

  links: {
    github: "https://github.com/AugustoCASAC",
    linkedin: "",
    email: "augustopxsilva@gmail.com",
    resume: "",
  },

  hero: {
    tagline: {
      pt: "Analiso, projeto e construo sistemas robustos — do levantamento de requisitos ao deploy em produção, com foco em escalabilidade, manutenibilidade e entrega de valor real.",
      en: "I analyze, design, and build robust systems — from requirements gathering to production deployment, focused on scalability, maintainability, and real business value.",
    },
  },

  about: {
    paragraphs: {
      pt: [
        "Sou desenvolvedor full stack com forte orientação para análise de sistemas. Trabalho com o ciclo completo de desenvolvimento: levantamento e documentação de requisitos, modelagem de dados, implementação de APIs REST e interfaces responsivas com entrega em produção.",
        "Tenho experiência prática com React, TypeScript e Node.js no frontend e backend, além de bancos relacionais (PostgreSQL/MySQL) e ferramentas de versionamento e CI/CD. Priorizo código limpo, documentação clara e testes automatizados para garantir sistemas confiáveis e de fácil manutenção.",
        "Complemento minha stack com conhecimento em modelagem UML, diagramas de fluxo e especificação técnica de sistemas — habilidades essenciais para atuar como analista em equipes multidisciplinares, fazendo a ponte entre requisitos de negócio e implementação técnica.",
      ],
      en: [
        "I'm a full stack developer with a strong orientation toward systems analysis. I work through the complete development cycle: requirements gathering and documentation, data modeling, REST API implementation, and responsive interfaces shipped to production.",
        "I have hands-on experience with React, TypeScript, and Node.js on both frontend and backend, as well as relational databases (PostgreSQL/MySQL) and versioning and CI/CD tooling. I prioritize clean code, clear documentation, and automated tests to ensure reliable and maintainable systems.",
        "I complement my stack with knowledge of UML modeling, flowcharts, and technical system specifications — essential skills for acting as an analyst in multidisciplinary teams, bridging business requirements and technical implementation.",
      ],
    },
    stats: [
      { value: "8+", label: { pt: "Projetos entregues", en: "Projects delivered" } },
      { value: "20+", label: { pt: "Tecnologias na stack", en: "Technologies in stack" } },
      { value: "3", label: { pt: "Sistemas em produção", en: "Systems in production" } },
    ],
  },

  skillGroups: [
    {
      icon: "layout",
      title: { pt: "Frontend", en: "Frontend" },
      status: "focus",
      items: [
        "React", "TypeScript", "JavaScript (ES2022+)", "HTML5 Semântico", "CSS3 / SCSS",
        "Tailwind CSS", "Bootstrap", "Vite", "Responsividade", "Acessibilidade (WCAG)",
      ],
    },
    {
      icon: "server",
      title: { pt: "Backend & APIs", en: "Backend & APIs" },
      status: "focus",
      items: [
        "Node.js", "Express", "NestJS", "APIs REST", "JWT / OAuth2",
        "Java", "Spring Boot", "C#", ".NET", "Swagger / OpenAPI",
      ],
    },
    {
      icon: "database",
      title: { pt: "Banco de Dados & Modelagem", en: "Databases & Modeling" },
      status: "focus",
      items: [
        "PostgreSQL", "MySQL", "SQL Avançado", "Modelagem Relacional",
        "Migrations", "Índices & Performance", "Diagrama ER", "Normalização",
      ],
    },
    {
      icon: "tools",
      title: { pt: "Análise & Engenharia", en: "Analysis & Engineering" },
      status: "focus",
      items: [
        "UML (Casos de Uso, Classes, Sequência)", "Levantamento de Requisitos",
        "Documentação Técnica", "Git / GitHub", "Docker", "CI/CD (GitHub Actions)",
        "Testes Automatizados (Jest / Vitest)", "Vercel / Railway",
      ],
    },
    {
      icon: "blocks",
      title: { pt: "Explorando", en: "Exploring" },
      status: "exploring",
      items: [
        "Rust", "Solana / Blockchain", "Smart Contracts",
        "Arquitetura Hexagonal", "Event Sourcing", "Redis",
      ],
    },
  ],

  projects: [
    {
      featured: true,
      status: "live",
      title: { pt: "Sistema de Gestão de Tarefas (Full Stack)", en: "Task Management System (Full Stack)" },
      description: {
        pt: "Aplicação full stack com autenticação JWT, CRUD completo, filtros dinâmicos e painel de produtividade. Backend em Node.js/Express com PostgreSQL, frontend em React/TypeScript. Reduz o tempo de acompanhamento de demandas em ~40% em cenários de equipe.",
        en: "Full stack app with JWT auth, full CRUD, dynamic filters, and a productivity dashboard. Node.js/Express backend with PostgreSQL, React/TypeScript frontend. Reduces team demand tracking time by ~40% in team scenarios.",
      },
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "Docker", "Swagger"],
      links: { repo: "https://github.com/AugustoCASAC", demo: "" },
    },
    {
      featured: true,
      status: "live",
      title: { pt: "API REST de Controle Financeiro", en: "Financial Control REST API" },
      description: {
        pt: "API RESTful com autenticação, controle de receitas/despesas, relatórios mensais e exportação de dados. Arquitetura em camadas (Controller → Service → Repository), validação com Zod, testes unitários com Jest (cobertura > 80%) e documentação completa no Swagger.",
        en: "RESTful API with auth, income/expense tracking, monthly reports, and data export. Layered architecture (Controller → Service → Repository), Zod validation, Jest unit tests (>80% coverage), and full Swagger documentation.",
      },
      tech: ["Node.js", "NestJS", "PostgreSQL", "JWT", "Zod", "Jest", "Swagger", "Docker"],
      links: { repo: "https://github.com/AugustoCASAC", demo: "" },
    },
    {
      featured: true,
      status: "live",
      title: { pt: "Dashboard Analítico de Dados Públicos", en: "Public Data Analytics Dashboard" },
      description: {
        pt: "Interface que consome múltiplas APIs públicas, normaliza os dados, e exibe KPIs, gráficos interativos e tabelas com filtro, ordenação e paginação. Tempo de carregamento abaixo de 1.2 s (Lighthouse > 90). Inclui modo offline com cache local.",
        en: "Interface consuming multiple public APIs, normalizing data, and displaying KPIs, interactive charts, and tables with filtering, sorting, and pagination. Load time under 1.2 s (Lighthouse > 90). Includes offline mode with local cache.",
      },
      tech: ["React", "TypeScript", "Recharts", "TanStack Query", "Tailwind CSS", "Vite"],
      links: { repo: "https://github.com/AugustoCASAC", demo: "" },
    },
    {
      featured: true,
      status: "in-progress",
      title: { pt: "Portfólio Profissional Bilíngue", en: "Bilingual Professional Portfolio" },
      description: {
        pt: "Este site — construído em React, TypeScript e Tailwind CSS. Bilíngue (PT/EN), tema claro/escuro, animações acessíveis, SSG-ready e pontuação Lighthouse 95+. Código aberto como referência de arquitetura frontend.",
        en: "This very site — built with React, TypeScript, and Tailwind CSS. Bilingual (PT/EN), light/dark theme, accessible animations, SSG-ready, and Lighthouse 95+ score. Open-source as a frontend architecture reference.",
      },
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      links: { repo: "https://github.com/AugustoCASAC", demo: "" },
    },
    {
      featured: false,
      status: "planned",
      title: { pt: "Sistema de CRM Simplificado", en: "Simplified CRM System" },
      description: {
        pt: "CRM para pequenas empresas com cadastro de clientes, histórico de interações, pipeline de vendas e notificações. Arquitetura baseada em eventos com WebSocket para atualizações em tempo real.",
        en: "CRM for small businesses with customer registration, interaction history, sales pipeline, and notifications. Event-driven architecture with WebSocket for real-time updates.",
      },
      tech: ["React", "NestJS", "PostgreSQL", "WebSocket", "Docker", "Redis"],
      links: { repo: "", demo: "" },
    },
  ],

  timeline: [
    {
      period: { pt: "2022", en: "2022" },
      status: "done",
      title: { pt: "Fundamentos e primeiros projetos", en: "Fundamentals & first projects" },
      description: {
        pt: "Início nos estudos de lógica de programação, HTML, CSS e JavaScript. Primeiros projetos estáticos e consumo de APIs públicas.",
        en: "Started studying programming logic, HTML, CSS, and JavaScript. First static projects and public API consumption.",
      },
    },
    {
      period: { pt: "2023", en: "2023" },
      status: "done",
      title: { pt: "React, TypeScript e backend com Node.js", en: "React, TypeScript, and Node.js backend" },
      description: {
        pt: "Mergulho em React com TypeScript e construção das primeiras APIs REST com Express e PostgreSQL. Início do uso profissional de Git e metodologias ágeis.",
        en: "Deep dive into React with TypeScript and building first REST APIs with Express and PostgreSQL. Started using Git professionally and agile methodologies.",
      },
    },
    {
      period: { pt: "2024", en: "2024" },
      status: "done",
      title: { pt: "Sistemas completos e análise de requisitos", en: "Complete systems and requirements analysis" },
      description: {
        pt: "Desenvolvimento de aplicações full stack com autenticação, testes automatizados e deploy. Aprofundamento em modelagem UML, documentação técnica e análise de sistemas.",
        en: "Full stack applications with auth, automated tests, and deployment. Deep dive into UML modeling, technical documentation, and systems analysis.",
      },
    },
    {
      period: { pt: "2025", en: "2025" },
      status: "done",
      title: { pt: "DevOps, CI/CD e arquitetura avançada", en: "DevOps, CI/CD, and advanced architecture" },
      description: {
        pt: "Implementação de pipelines de CI/CD com GitHub Actions, containerização com Docker e adoção de padrões de arquitetura limpa (Clean Architecture, SOLID).",
        en: "CI/CD pipelines with GitHub Actions, containerization with Docker, and adoption of clean architecture patterns (Clean Architecture, SOLID).",
      },
    },
    {
      period: { pt: "2026 · Atual", en: "2026 · Now" },
      status: "current",
      title: { pt: "Consolidação e posicionamento profissional", en: "Consolidation and professional positioning" },
      description: {
        pt: "Refinamento do portfólio com projetos de impacto mensurável, aprofundamento em NestJS, testes de integração e candidaturas para vagas de analista/desenvolvedor pleno.",
        en: "Refining portfolio with measurable-impact projects, deepening NestJS, integration testing, and applying for mid-level analyst/developer positions.",
      },
    },
    {
      period: { pt: "2026–2027", en: "2026–2027" },
      status: "planned",
      title: { pt: "Especialização em arquitetura e cloud", en: "Specialization in architecture and cloud" },
      description: {
        pt: "Certificação AWS Cloud Practitioner, aprofundamento em microsserviços, event-driven architecture e liderança técnica de pequenas equipes.",
        en: "AWS Cloud Practitioner certification, deep dive into microservices, event-driven architecture, and technical leadership of small teams.",
      },
    },
  ],

  goals: [
    {
      icon: "rocket",
      term: { pt: "Curto prazo", en: "Short term" },
      horizon: { pt: "Próximos 12 meses", en: "Next 12 months" },
      items: {
        pt: [
          "Atuar como Analista de Sistemas ou Desenvolvedor Full Stack em equipe real",
          "Entregar sistemas com documentação técnica completa (UML, Swagger, README)",
          "Obter certificação AWS Cloud Practitioner e aprofundar arquitetura de microsserviços",
        ],
        en: [
          "Work as a Systems Analyst or Full Stack Developer on a real team",
          "Deliver systems with complete technical documentation (UML, Swagger, README)",
          "Earn AWS Cloud Practitioner certification and deepen microservices architecture",
        ],
      },
    },
    {
      icon: "trending",
      term: { pt: "Médio prazo", en: "Mid term" },
      horizon: { pt: "1 a 3 anos", en: "1 to 3 years" },
      items: {
        pt: [
          "Evoluir para posição plena com responsabilidade sobre módulos completos",
          "Implementar e manter pipelines de CI/CD e infraestrutura como código",
          "Liderar tecnicamente o desenvolvimento de features em equipes ágeis",
        ],
        en: [
          "Grow to a mid-level position with ownership of complete modules",
          "Implement and maintain CI/CD pipelines and infrastructure as code",
          "Technically lead feature development in agile teams",
        ],
      },
    },
    {
      icon: "target",
      term: { pt: "Longo prazo", en: "Long term" },
      horizon: { pt: "3 a 10 anos", en: "3 to 10 years" },
      items: {
        pt: [
          "Arquitetar sistemas de alta disponibilidade e escala para milhares de usuários",
          "Atuar como Tech Lead ou Arquiteto de Soluções em projetos estratégicos",
          "Contribuir ativamente com open source e comunidade técnica brasileira",
        ],
        en: [
          "Architect high-availability, high-scale systems for thousands of users",
          "Work as Tech Lead or Solutions Architect on strategic projects",
          "Actively contribute to open source and the Brazilian tech community",
        ],
      },
    },
  ],
};
