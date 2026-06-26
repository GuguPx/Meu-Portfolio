/* =============================================================================
   data.ts — Conteúdo editável do portfólio (PT/EN)
   -----------------------------------------------------------------------------
   Edite APENAS este arquivo para personalizar o portfólio.
   Os campos marcados com TODO devem ser preenchidos com seus dados reais.
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
    name: "Augusto Silva", // TODO: confirme seu sobrenome completo
    initials: "AS",
    role: { pt: "Desenvolvedor Web", en: "Web Developer" },
    focus: { pt: "Frontend · Backend · Web3", en: "Frontend · Backend · Web3" },
    location: { pt: "Brasil", en: "Brazil" },
    available: true,
  },

  links: {
    github: "https://github.com/AugustoCASAC",
    linkedin: "", // TODO: cole a URL do seu LinkedIn
    email: "augustopxsilva@gmail.com",
    resume: "", // TODO: link para currículo em PDF (opcional)
  },

  hero: {
    tagline: {
      pt: "Construindo soluções web modernas com foco em boas práticas, aprendizado contínuo e tecnologias emergentes.",
      en: "Building modern web solutions with a focus on best practices, continuous learning, and emerging technologies.",
    },
  },

  about: {
    paragraphs: {
      pt: [
        "Sou um desenvolvedor em formação apaixonado por transformar ideias em produtos digitais. Meu foco está no desenvolvimento web — do frontend ao backend — com atenção a código limpo, documentação clara e experiência do usuário.",
        "Estou construindo um portfólio de projetos práticos: interfaces responsivas, consumo de APIs, APIs REST com banco de dados e, futuramente, aplicações full stack completas com autenticação e deploy.",
        "Também acompanho de perto o ecossistema Web3 (Rust, Solana e contratos inteligentes), que mantenho como trilha de diferenciação à medida que consolido os fundamentos de engenharia de software.",
      ],
      en: [
        "I'm a developer in training, passionate about turning ideas into digital products. My focus is web development — from frontend to backend — with attention to clean code, clear documentation, and user experience.",
        "I'm building a portfolio of hands-on projects: responsive interfaces, API consumption, REST APIs with databases, and soon full stack applications with authentication and deployment.",
        "I also follow the Web3 ecosystem closely (Rust, Solana, and smart contracts), keeping it as a differentiation track while I consolidate my software engineering fundamentals.",
      ],
    },
    stats: [
      { value: "5+", label: { pt: "Projetos no roadmap", en: "Roadmap projects" } },
      { value: "15+", label: { pt: "Tecnologias estudadas", en: "Technologies studied" } },
      { value: "100%", label: { pt: "Foco em evolução", en: "Focused on growth" } },
    ],
  },

  skillGroups: [
    {
      icon: "layout",
      title: { pt: "Frontend", en: "Frontend" },
      status: "focus",
      items: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Bootstrap", "Responsividade"],
    },
    {
      icon: "server",
      title: { pt: "Backend", en: "Backend" },
      status: "learning",
      items: ["Node.js", "Express", "NestJS", "APIs REST", "Java", "Spring Boot", "C#", ".NET"],
    },
    {
      icon: "database",
      title: { pt: "Banco de Dados", en: "Databases" },
      status: "learning",
      items: ["SQL", "PostgreSQL", "MySQL", "Modelagem", "Migrations"],
    },
    {
      icon: "tools",
      title: { pt: "Ferramentas", en: "Tools" },
      status: "focus",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Swagger", "Jest"],
    },
    {
      icon: "blocks",
      title: { pt: "Blockchain & Web3", en: "Blockchain & Web3" },
      status: "exploring",
      items: ["Rust", "Solana", "Substrate", "Smart Contracts", "Criptografia", "Web3"],
    },
  ],

  projects: [
    {
      featured: true,
      status: "in-progress",
      title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
      description: {
        pt: "Site responsivo (este!) com perfil, stack, projetos e contato. Construído em React, TypeScript e Tailwind CSS, bilíngue e com tema claro/escuro.",
        en: "Responsive site (this one!) with profile, stack, projects, and contact. Built with React, TypeScript, and Tailwind CSS, bilingual and with light/dark theme.",
      },
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      links: { repo: "https://github.com/AugustoCASAC", demo: "" },
    },
    {
      featured: true,
      status: "planned",
      title: { pt: "Dashboard de Consumo de API", en: "API Dashboard" },
      description: {
        pt: "Aplicação que consome uma API pública, trata estados de carregamento e erro, e exibe dados em cards e gráficos com filtros e paginação.",
        en: "App that consumes a public API, handles loading and error states, and displays data in cards and charts with filtering and pagination.",
      },
      tech: ["React", "TypeScript", "API REST", "Tailwind"],
      links: { repo: "", demo: "" },
    },
    {
      featured: true,
      status: "planned",
      title: { pt: "API REST de Tarefas", en: "Tasks REST API" },
      description: {
        pt: "Backend funcional com CRUD completo, persistência em banco relacional, validação, autenticação e documentação com Swagger.",
        en: "Functional backend with full CRUD, relational database persistence, validation, authentication, and Swagger documentation.",
      },
      tech: ["Node.js", "Express", "PostgreSQL", "Swagger", "Jest"],
      links: { repo: "", demo: "" },
    },
    {
      featured: false,
      status: "planned",
      title: { pt: "Sistema Full Stack", en: "Full Stack System" },
      description: {
        pt: "Produto completo unindo frontend, backend, banco de dados e autenticação JWT, resolvendo uma rotina real (tarefas, finanças ou CRM).",
        en: "Complete product joining frontend, backend, database, and JWT authentication, solving a real routine (tasks, finance, or CRM).",
      },
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "Docker"],
      links: { repo: "", demo: "" },
    },
    {
      featured: false,
      status: "future",
      title: { pt: "PoC Web3 em Testnet", en: "Web3 PoC on Testnet" },
      description: {
        pt: "Demonstração em testnet com contrato simples, integração de carteira e documentação de arquitetura e riscos de segurança.",
        en: "Testnet demo with a simple contract, wallet integration, and documentation of architecture and security risks.",
      },
      tech: ["Rust", "Solana", "Smart Contracts", "Web3"],
      links: { repo: "", demo: "" },
    },
  ],

  timeline: [
    {
      period: { pt: "Início", en: "Start" },
      status: "done",
      title: { pt: "Primeiros passos na tecnologia", en: "First steps in tech" },
      description: {
        pt: "Despertar do interesse por programação, sistemas e lógica, e início dos estudos em desenvolvimento web.",
        en: "Sparked interest in programming, systems, and logic, and started studying web development.",
      },
    },
    {
      period: { pt: "2026 · Atual", en: "2026 · Now" },
      status: "current",
      title: { pt: "Organização do portfólio profissional", en: "Building the professional portfolio" },
      description: {
        pt: "Estruturação da identidade profissional, da stack e dos primeiros projetos demonstráveis.",
        en: "Structuring professional identity, tech stack, and the first showcaseable projects.",
      },
    },
    {
      period: { pt: "Próx. 3 meses", en: "Next 3 months" },
      status: "planned",
      title: { pt: "Portfólio público v1", en: "Public portfolio v1" },
      description: {
        pt: "Site pessoal no ar, GitHub organizado e o primeiro projeto com deploy online.",
        en: "Live personal site, organized GitHub, and the first deployed project.",
      },
    },
    {
      period: { pt: "Próx. 6 meses", en: "Next 6 months" },
      status: "planned",
      title: { pt: "Projeto full stack v1", en: "Full stack project v1" },
      description: {
        pt: "Aplicação completa: frontend + backend + banco + autenticação + deploy.",
        en: "Complete application: frontend + backend + database + authentication + deploy.",
      },
    },
    {
      period: { pt: "12 meses", en: "12 months" },
      status: "planned",
      title: { pt: "Entrada no mercado", en: "Entering the market" },
      description: {
        pt: "Candidaturas para vagas júnior apresentando projetos com narrativa profissional.",
        en: "Applying for junior roles, presenting projects with a professional narrative.",
      },
    },
    {
      period: { pt: "1–3 anos", en: "1–3 years" },
      status: "planned",
      title: { pt: "Especialização", en: "Specialization" },
      description: {
        pt: "Aprofundar uma trilha forte: full stack, backend ou Web3, com testes, cloud e CI/CD.",
        en: "Deepen a strong track: full stack, backend, or Web3, with testing, cloud, and CI/CD.",
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
          "Consolidar HTML, CSS, JavaScript, TypeScript, Git e APIs REST",
          "Publicar 3 projetos com README, deploy e código no GitHub",
          "Conquistar uma posição de estágio ou desenvolvedor júnior",
        ],
        en: [
          "Consolidate HTML, CSS, JavaScript, TypeScript, Git, and REST APIs",
          "Publish 3 projects with README, deploy, and code on GitHub",
          "Land an internship or junior developer position",
        ],
      },
    },
    {
      icon: "trending",
      term: { pt: "Médio prazo", en: "Mid term" },
      horizon: { pt: "1 a 3 anos", en: "1 to 3 years" },
      items: {
        pt: [
          "Atuar profissionalmente em projetos reais e em equipe",
          "Aprofundar uma trilha: full stack, backend ou frontend",
          "Aprender testes, cloud, CI/CD e arquitetura de aplicações",
        ],
        en: [
          "Work professionally on real, team-based projects",
          "Deepen a track: full stack, backend, or frontend",
          "Learn testing, cloud, CI/CD, and application architecture",
        ],
      },
    },
    {
      icon: "target",
      term: { pt: "Longo prazo", en: "Long term" },
      horizon: { pt: "3 a 10 anos", en: "3 to 10 years" },
      items: {
        pt: [
          "Evoluir para Desenvolvedor Pleno/Sênior ou Eng. de Software",
          "Dominar sistemas escaláveis, segurança e performance",
          "Construir marca profissional com entregas verificáveis",
        ],
        en: [
          "Grow into a Mid/Senior Developer or Software Engineer",
          "Master scalable systems, security, and performance",
          "Build a professional brand with verifiable deliverables",
        ],
      },
    },
  ],
};
