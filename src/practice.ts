/* =============================================================================
   practice.ts — Práticas técnicas (PT/EN)

   Conteúdo das seções "Princípios que aplico" e "Uso consciente de IA no
   desenvolvimento" (incluindo skills/checklists). Linguagem honesta: a IA é
   apoio à produtividade, sempre com revisão humana e validação técnica.
   ========================================================================== */

import type { IconName, Localized } from "./data";

/* -------------------------------------------------------------------------- */
/*  Princípios de engenharia                                                   */
/* -------------------------------------------------------------------------- */

export interface Principle {
  icon: IconName;
  title: Localized;
  description: Localized;
  points: Localized<string[]>;
}

export const PRINCIPLES: Principle[] = [
  {
    icon: "layers",
    title: { pt: "Separação de responsabilidades", en: "Separation of concerns" },
    description: { pt: "UI, dados e regras puras em camadas distintas.", en: "UI, data, and pure rules in distinct layers." },
    points: {
      pt: ["UI em components/pages", "Dados em hooks/services", "Regras puras em lib/helpers", "Tipos centralizados em types"],
      en: ["UI in components/pages", "Data in hooks/services", "Pure rules in lib/helpers", "Types centralized in types"],
    },
  },
  {
    icon: "blocks",
    title: { pt: "Polimorfismo", en: "Polymorphism" },
    description: { pt: "Componentes e helpers genéricos sob um contrato comum.", en: "Generic components and helpers under a common contract." },
    points: {
      pt: ["Drawers reutilizáveis para create/edit", "Listagens e seletores por tipo de entidade", "Handlers e formatadores com contrato comum", "Menos duplicação, manutenção mais fácil"],
      en: ["Reusable drawers for create/edit", "Lists and selectors by entity type", "Handlers and formatters with a common contract", "Less duplication, easier maintenance"],
    },
  },
  {
    icon: "layout",
    title: { pt: "Composição", en: "Composition" },
    description: { pt: "Componentes pequenos compostos em blocos.", en: "Small components composed into blocks." },
    points: {
      pt: ["Componentes pequenos e focados", "Cards e seções compostas", "Layout por blocos reutilizáveis", "Reaproveitamento entre telas"],
      en: ["Small, focused components", "Composed cards and sections", "Layout from reusable blocks", "Reuse across screens"],
    },
  },
  {
    icon: "tools",
    title: { pt: "Tipagem forte", en: "Strong typing" },
    description: { pt: "TypeScript, payloads tipados e validação.", en: "TypeScript, typed payloads, and validation." },
    points: {
      pt: ["TypeScript em todo o código", "Payloads e enums tipados", "Validação com Zod quando aplicável", "Contratos de API explícitos"],
      en: ["TypeScript across the codebase", "Typed payloads and enums", "Validation with Zod where applicable", "Explicit API contracts"],
    },
  },
  {
    icon: "repeat",
    title: { pt: "Tratamento de erro", en: "Error handling" },
    description: { pt: "Erros amigáveis, normalização e retry.", en: "Friendly errors, normalization, and retry." },
    points: {
      pt: ["Erro amigável na interface", "Normalização de respostas da API", "Retry/backoff nos bots", "Logs estruturados"],
      en: ["Friendly errors in the UI", "Normalized API responses", "Retry/backoff in bots", "Structured logging"],
    },
  },
  {
    icon: "gauge",
    title: { pt: "Performance", en: "Performance" },
    description: { pt: "Cache, paginação e controle de concorrência.", en: "Caching, pagination, and concurrency control." },
    points: {
      pt: ["Cache e query keys", "Paginação server-side", "useMemo/useCallback quando necessário", "Controle de concorrência em bots"],
      en: ["Caching and query keys", "Server-side pagination", "useMemo/useCallback when needed", "Concurrency control in bots"],
    },
  },
  {
    icon: "shield",
    title: { pt: "Segurança", en: "Security" },
    description: { pt: "Sem tokens no frontend, RBAC e anonimização.", en: "No tokens on the frontend, RBAC, and anonymization." },
    points: {
      pt: ["Evitar tokens/credenciais no frontend", "RBAC e acesso por perfil", "Dados anonimizados", "Cuidado com o que vai para os logs"],
      en: ["Avoid tokens/credentials on the frontend", "RBAC and per-profile access", "Anonymized data", "Care with what goes into logs"],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Uso consciente de IA                                                       */
/* -------------------------------------------------------------------------- */

export const AI_INTRO: Localized = {
  pt: "Utilizo ferramentas de IA, como Claude Code e ChatGPT, como apoio no desenvolvimento — principalmente para acelerar a análise de código, gerar planos de refatoração, revisar fluxos complexos, documentar decisões técnicas e identificar riscos. O uso é sempre acompanhado de validação manual, revisão de payloads, testes, leitura do código real e entendimento das regras de negócio.",
  en: "I use AI tools such as Claude Code and ChatGPT as support in development — mainly to speed up code analysis, generate refactoring plans, review complex flows, document technical decisions, and identify risks. It is always paired with manual validation, payload review, testing, reading the real code, and understanding the business rules.",
};

export interface AIPractice {
  icon: IconName;
  title: Localized;
  text: Localized;
}

export const AI_PRACTICES: AIPractice[] = [
  {
    icon: "users",
    title: { pt: "Copiloto, não substituto", en: "Copilot, not a replacement" },
    text: { pt: "Uso IA para acelerar, não para terceirizar decisões. O domínio das regras de negócio e do código é meu.", en: "I use AI to go faster, not to outsource decisions. Ownership of the business rules and the code is mine." },
  },
  {
    icon: "shield",
    title: { pt: "Revisão humana obrigatória", en: "Mandatory human review" },
    text: { pt: "Todo resultado gerado passa por leitura, revisão de payloads e ajuste manual antes de entrar no projeto.", en: "Every generated result goes through reading, payload review, and manual adjustment before entering the project." },
  },
  {
    icon: "gauge",
    title: { pt: "Validação técnica", en: "Technical validation" },
    text: { pt: "Antes de finalizar, rodo lint, typecheck e build — e testo o fluxo de erro, não só o caminho feliz.", en: "Before finishing, I run lint, typecheck, and build — and test the error path, not just the happy path." },
  },
  {
    icon: "layout",
    title: { pt: "Documentação técnica", en: "Technical documentation" },
    text: { pt: "Uso IA para documentar decisões, gerar relatórios técnicos e registrar o que foi feito.", en: "I use AI to document decisions, generate technical reports, and record what was done." },
  },
  {
    icon: "sparkles",
    title: { pt: "Detecção de riscos", en: "Risk detection" },
    text: { pt: "Apoio na identificação de riscos, regressões e más práticas antes de implementar.", en: "Support in spotting risks, regressions, and bad practices before implementing." },
  },
  {
    icon: "lock",
    title: { pt: "Cuidado com dados sensíveis", en: "Care with sensitive data" },
    text: { pt: "Não insiro credenciais, tokens ou dados reais de clientes nas ferramentas de IA.", en: "I don't put credentials, tokens, or real customer data into AI tools." },
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills / checklists reutilizáveis                                          */
/* -------------------------------------------------------------------------- */

export const AI_SKILLS_INTRO: Localized = {
  pt: "Crio checklists e skills de desenvolvimento para guiar tarefas recorrentes. Isso evita regressões comuns — como alterar contratos de API sem necessidade, enviar payloads incorretos, duplicar regras do backend no frontend ou deixar telas sem tratamento de erro. Funcionam como uma camada de governança técnica: antes de implementar, o fluxo é validado contra regras de arquitetura, segurança, responsividade e qualidade.",
  en: "I build development checklists and skills to guide recurring tasks. This prevents common regressions — like changing API contracts without need, sending wrong payloads, duplicating backend rules on the frontend, or leaving screens without error handling. They act as a layer of technical governance: before implementing, the flow is validated against rules for architecture, security, responsiveness, and quality.",
};

export const AI_CHECKLIST: Localized<string[]> = {
  pt: [
    "Não alterar o backend quando a tarefa é de frontend",
    "Não enviar label no lugar de ID",
    "Não montar grid_param no frontend",
    "Não enviar o objeto completo de um select",
    "Não quebrar contratos de API",
    "Validar payloads antes de enviar",
    "Separar UI, hooks, services e regras puras",
    "Não expor dados sensíveis",
    "Sempre rodar lint / typecheck / build",
    "Criar relatório técnico ao final",
    "Preservar a responsividade mobile",
    "Validar cache e query keys",
    "Testar o fluxo de erro",
    "Evitar duplicar lógica que já existe no backend",
  ],
  en: [
    "Don't touch the backend when the task is frontend",
    "Don't send a label in place of an ID",
    "Don't build grid_param on the frontend",
    "Don't send a select's full object",
    "Don't break API contracts",
    "Validate payloads before sending",
    "Separate UI, hooks, services, and pure rules",
    "Don't expose sensitive data",
    "Always run lint / typecheck / build",
    "Produce a technical report at the end",
    "Preserve mobile responsiveness",
    "Validate cache and query keys",
    "Test the error path",
    "Avoid duplicating logic that already lives in the backend",
  ],
};
