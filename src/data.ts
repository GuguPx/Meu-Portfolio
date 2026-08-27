/* =============================================================================
   data.ts — Conteúdo editável do portfólio (PT/EN)
   ========================================================================== */

export type Lang = "pt" | "en";
export type Localized<T = string> = Record<Lang, T>;

export type SkillStatus = "focus" | "learning" | "exploring";
export type TimelineStatus = "done" | "current" | "planned";
export type IconName =
  | "layout" | "server" | "database" | "tools" | "blocks"
  | "rocket" | "trending" | "target"
  | "kanban" | "signature" | "gift" | "bolt" | "gauge" | "shield"
  | "repeat" | "sparkles" | "layers" | "plug" | "users" | "briefcase" | "lock";

export interface SkillGroup {
  icon: IconName;
  title: Localized;
  status: SkillStatus;
  /** Onde a habilidade é aplicada na prática (1 linha, leitura de recrutador). */
  context: Localized;
  items: string[];
}
export interface ExperienceItem {
  company: string;
  role: Localized;
  type: Localized;
  period: Localized;
  location: Localized;
  current: boolean;
  bullets: Localized<string[]>;
}
export interface TimelineItem {
  period: Localized;
  status: TimelineStatus;
  title: Localized;
  description: Localized;
}
export interface Language {
  name: Localized;
  level: Localized;
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
  links: { github: string; linkedin: string; instagram: string; email: string; resume: string };
  hero: { tagline: Localized };
  about: {
    paragraphs: Localized<string[]>;
    stats: { value: string; label: Localized }[];
    languages: Language[];
  };
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  /** Vivência com fluxos operacionais de provedores (diferencial de domínio). */
  ispDomain: { intro: Localized; items: Localized<string[]> };
  timeline: TimelineItem[];
  goals: Goal[];
}

export const DATA: PortfolioData = {
  profile: {
    name: "Augusto Silva",
    initials: "AS",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    focus: { pt: "Frontend · Backend · Automação de Sistemas", en: "Frontend · Backend · Systems Automation" },
    location: { pt: "Santo Estêvão, BA · Brasil", en: "Santo Estêvão, BA · Brazil" },
    available: true,
  },

  links: {
    github: "https://github.com/GuguPx",
    linkedin: "https://www.linkedin.com/in/augusto-px-silva/",
    instagram: "https://www.instagram.com/auugusto.px/",
    email: "augustopxsilva@gmail.com",
    // Gerado por scripts/gen-cv.py (npm run gen:cv) — mantenha em sincronia com este arquivo.
    resume: "/curriculo-augusto-silva.pdf",
  },

  hero: {
    tagline: {
      pt: "Desenvolvedor Full Stack na Power Telecom. Construo sistemas internos, automações e integrações que sustentam a operação de um provedor de internet — de CRM, contratos e estoque a relatórios de cobrança e disparo de mensagens.",
      en: "Full Stack Developer at Power Telecom. I build internal systems, automations, and integrations that keep an internet provider's operation running — from CRM, contracts, and inventory to billing reports and messaging.",
    },
  },

  about: {
    paragraphs: {
      pt: [
        "Sou Desenvolvedor Full Stack na Power Telecom, onde construo aplicações web com React e Node.js e sistemas internos que automatizam processos das áreas comercial, financeira e de RH.",
        "Já entreguei sistemas em produção como gestão de contratos (cancelamento, renovação e contratos padrão), gerenciamento de estoque da matriz e uma plataforma estilo SaaS para gestão de colaboradores — além de ferramentas de relatórios de inadimplência, controle de instalações e disparo automatizado de mensagens para clientes.",
        "Também atuo na integração e suporte com plataformas externas (IXC Soft e OPA Suite) e no gerenciamento básico de servidores e infraestrutura. Curso Engenharia de Software na Estácio, aprofundando arquitetura, análise de sistemas e boas práticas de engenharia.",
      ],
      en: [
        "I'm a Full Stack Developer at Power Telecom, where I build web applications with React and Node.js and internal systems that automate sales, finance, and HR processes.",
        "I've shipped production systems such as contract management (cancellation, renewal, and standard contracts), headquarters inventory management, and a SaaS-style platform for employee management — plus tools for overdue-payment reports, installation tracking, and automated customer messaging.",
        "I also handle integration and support with external platforms (IXC Soft and OPA Suite) and basic server and infrastructure management. I'm pursuing a Software Engineering degree at Estácio, deepening architecture, systems analysis, and engineering best practices.",
      ],
    },
    stats: [
      { value: "10", label: { pt: "Meses na Power Telecom", en: "Months at Power Telecom" } },
      { value: "6+", label: { pt: "Sistemas internos entregues", en: "Internal systems shipped" } },
      { value: "C2", label: { pt: "Inglês avançado", en: "Advanced English" } },
    ],
    languages: [
      { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo / Fluente", en: "Native / Fluent" } },
      { name: { pt: "Inglês", en: "English" }, level: { pt: "Avançado (C2)", en: "Advanced (C2)" } },
    ],
  },

  skillGroups: [
    {
      icon: "layout",
      title: { pt: "Frontend", en: "Frontend" },
      status: "focus",
      context: {
        pt: "Interfaces internas responsivas usadas por equipes reais no dia a dia.",
        en: "Responsive internal interfaces used by real teams every day.",
      },
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: "server",
      title: { pt: "Backend & APIs", en: "Backend & APIs" },
      status: "focus",
      context: {
        pt: "APIs REST que sustentam os sistemas internos e as automações.",
        en: "REST APIs powering the internal systems and automations.",
      },
      items: ["Node.js", "Express", "APIs REST", "Autenticação JWT", "Paginação e filtros"],
    },
    {
      icon: "database",
      title: { pt: "Banco de Dados", en: "Databases" },
      status: "learning",
      context: {
        pt: "Modelagem e consultas para relatórios operacionais.",
        en: "Modeling and queries for operational reports.",
      },
      items: ["SQL", "MySQL", "Modelagem de dados", "Relatórios"],
    },
    {
      icon: "tools",
      title: { pt: "DevOps & Ferramentas", en: "DevOps & Tools" },
      status: "focus",
      context: {
        pt: "Ambiente, versionamento, deploy e operação dos sistemas.",
        en: "Environment, versioning, deployment, and systems operation.",
      },
      items: ["Git", "GitHub", "Docker", "VS Code", "Servidores & Infra"],
    },
    {
      icon: "bolt",
      title: { pt: "Automação", en: "Automation" },
      status: "focus",
      context: {
        pt: "Bots e rotinas agendadas que eliminam tarefas manuais.",
        en: "Bots and scheduled routines that eliminate manual tasks.",
      },
      items: ["node-cron", "PM2", "Winston", "p-limit", "Axios"],
    },
    {
      icon: "plug",
      title: { pt: "Integrações", en: "Integrations" },
      status: "focus",
      context: {
        pt: "Conecto o ERP do provedor a planilhas, mensageria e assinatura digital.",
        en: "I connect the ISP's ERP to spreadsheets, messaging, and digital signing.",
      },
      items: ["IXC Soft", "OPA Suite", "Google Sheets", "WhatsApp", "ZapSign"],
    },
    {
      icon: "sparkles",
      title: { pt: "IA & Produtividade", en: "AI & Productivity" },
      status: "focus",
      context: {
        pt: "Aceleração com revisão humana e validação técnica obrigatórias.",
        en: "Acceleration with mandatory human review and technical validation.",
      },
      items: ["Claude Code", "ChatGPT", "Prompts técnicos", "Skills/checklists"],
    },
  ],

  experience: [
    {
      company: "Power Telecom",
      role: { pt: "Desenvolvedor Júnior", en: "Junior Developer" },
      type: { pt: "Tempo integral", en: "Full-time" },
      period: { pt: "fev 2026 — Atual · 7 meses", en: "Feb 2026 — Present · 7 mos" },
      location: { pt: "Santo Estêvão, BA · Presencial", en: "Santo Estêvão, BA · On-site" },
      current: true,
      bullets: {
        pt: [
          "Desenvolvimento de aplicações web utilizando React e Node.js.",
          "Criação de sistemas internos para automação de processos (comercial, financeiro e RH).",
          "Ferramentas para geração de relatórios de inadimplência, controle de instalações e disparo de mensagens automatizadas para clientes.",
          "Implementação de sistema web para gestão de contratos (cancelamento, renovação e contratos padrão).",
          "Desenvolvimento de sistema de gerenciamento de estoque (matriz).",
          "Criação de sistema interno para gestão de colaboradores (estilo SaaS).",
          "Integração e suporte com sistemas externos como IXC Soft e OPA Suite.",
          "Manutenção e suporte em automações e sistemas internos.",
          "Gerenciamento básico de servidores e suporte a infraestrutura.",
        ],
        en: [
          "Developed web applications using React and Node.js.",
          "Built internal systems for process automation (sales, finance, and HR).",
          "Created tools for overdue-payment reports, installation tracking, and automated customer messaging.",
          "Implemented a web system for contract management (cancellation, renewal, and standard contracts).",
          "Developed an inventory management system for headquarters.",
          "Built an internal SaaS-style system for employee management.",
          "Integration and support with external systems such as IXC Soft and OPA Suite.",
          "Maintenance and support of automations and internal systems.",
          "Basic server management and infrastructure support.",
        ],
      },
    },
    {
      company: "Power Telecom",
      role: { pt: "Suporte Técnico N1", en: "Tier 1 Technical Support" },
      type: { pt: "Estágio", en: "Internship" },
      period: { pt: "nov 2025 — fev 2026 · 4 meses", en: "Nov 2025 — Feb 2026 · 4 mos" },
      location: { pt: "Santo Estêvão, BA", en: "Santo Estêvão, BA" },
      current: false,
      bullets: {
        pt: [
          "Atendimento ao cliente por telefone, e-mail e mensagens, prestando assistência técnica e suporte a produtos e serviços.",
          "Resolução de problemas simples: reset de senhas, configuração de contas, orientações de uso e conectividade.",
          "Encaminhamento de casos mais complexos para níveis de suporte mais elevados ou equipes especializadas.",
          "Treinamento básico de usuários sobre o uso de sistemas, softwares e aplicativos.",
        ],
        en: [
          "Customer support by phone, email, and messages, providing technical assistance for products and services.",
          "Resolving simple issues: password resets, account setup, usage guidance, and connectivity.",
          "Escalating more complex cases to higher support tiers or specialized teams.",
          "Basic user training on how to use systems, software, and applications.",
        ],
      },
    },
  ],

  ispDomain: {
    intro: {
      pt: "Trabalho todos os dias dentro da operação de um provedor de internet. Essa vivência me faz desenvolver soluções mais próximas da realidade operacional — entendo o fluxo antes de escrever a primeira linha de código.",
      en: "I work inside an internet provider's operation every day. That experience helps me build solutions closer to operational reality — I understand the flow before writing the first line of code.",
    },
    items: {
      pt: [
        "Leads, prospecção e funil comercial",
        "Contratos e assinatura digital",
        "Ordens de serviço e instalações",
        "Cobrança e inadimplência",
        "Relatórios e dashboards operacionais",
        "Integração com ERP de provedor (IXC) e atendimento (OPA)",
        "Automação de rotinas repetitivas",
        "Interfaces mobile-first para equipes externas",
      ],
      en: [
        "Leads, prospecting, and sales funnel",
        "Contracts and digital signing",
        "Service orders and installations",
        "Billing and overdue payments",
        "Operational reports and dashboards",
        "Integration with ISP ERP (IXC) and support desk (OPA)",
        "Automation of repetitive routines",
        "Mobile-first interfaces for field teams",
      ],
    },
  },

  timeline: [
    {
      period: { pt: "jul 2025 — jul 2029", en: "Jul 2025 — Jul 2029" },
      status: "current",
      title: { pt: "Estácio — Engenharia de Software", en: "Estácio — Software Engineering" },
      description: {
        pt: "Bacharelado em Engenharia de Software, com ênfase em análise de dados (Data Analysis) e habilidades analíticas.",
        en: "Bachelor's in Software Engineering, with emphasis on Data Analysis and analytical skills.",
      },
    },
    {
      period: { pt: "dez 2024 — dez 2025", en: "Dec 2024 — Dec 2025" },
      status: "done",
      title: { pt: "DevQuest — Desenvolvimento Front-End", en: "DevQuest — Front-End Development" },
      description: {
        pt: "Formação completa em Front-End (Dev em Dobro), com projetos práticos, desenvolvimento e suporte contínuo.",
        en: "Complete Front-End program (Dev em Dobro), with hands-on projects, development, and ongoing support.",
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
          "Consolidar a atuação como Desenvolvedor Full Stack, assumindo módulos completos",
          "Aprofundar testes automatizados, Docker e boas práticas de arquitetura",
          "Publicar projetos pessoais no GitHub e contribuir com a comunidade",
        ],
        en: [
          "Consolidate my role as a Full Stack Developer, owning complete modules",
          "Deepen automated testing, Docker, and architecture best practices",
          "Publish personal projects on GitHub and contribute to the community",
        ],
      },
    },
    {
      icon: "trending",
      term: { pt: "Médio prazo", en: "Mid term" },
      horizon: { pt: "1 a 3 anos", en: "1 to 3 years" },
      items: {
        pt: [
          "Evoluir para uma posição plena com responsabilidade sobre produtos inteiros",
          "Implementar e manter pipelines de CI/CD e infraestrutura como código",
          "Liderar tecnicamente o desenvolvimento de features em equipe ágil",
        ],
        en: [
          "Grow into a mid-level role with ownership of entire products",
          "Implement and maintain CI/CD pipelines and infrastructure as code",
          "Technically lead feature development in an agile team",
        ],
      },
    },
    {
      icon: "target",
      term: { pt: "Longo prazo", en: "Long term" },
      horizon: { pt: "3 a 10 anos", en: "3 to 10 years" },
      items: {
        pt: [
          "Arquitetar sistemas de alta disponibilidade e escala",
          "Atuar como Tech Lead ou Arquiteto de Soluções em projetos estratégicos",
          "Construir uma marca profissional com entregas verificáveis",
        ],
        en: [
          "Architect high-availability, high-scale systems",
          "Work as a Tech Lead or Solutions Architect on strategic projects",
          "Build a professional brand with verifiable deliverables",
        ],
      },
    },
  ],
};
