# Relatório — Implementação da seção de projetos

> Portfólio de Augusto Silva — React + TypeScript + Vite + Tailwind CSS (SPA bilíngue PT/EN, tema claro/escuro).

## 1. Resumo

Foi implementada uma nova seção de portfólio técnico — **"Projetos e automações corporativas"** — que **substitui** a antiga seção `Projects` (genérica), reaproveitando o mesmo `id="projects"` para preservar o link do navbar e o scroll-spy.

A seção apresenta **5 projetos corporativos reais** em cards filtráveis, com **modal de detalhes acessível** (foco preso, ESC, restauração de foco, scroll-lock), uma seção **"Minha atuação"** com 6 pilares e um **aviso de confidencialidade**. Todo o conteúdo é **bilíngue (PT/EN)**, segue o design system existente (tokens `card`, `chip`, `bg-grad`, cores de marca) e mantém suporte a tema claro/escuro.

Decisão de arquitetura: como a aplicação é uma SPA **sem React Router**, os detalhes são exibidos via **modal/drawer** (não foi instalada nenhuma biblioteca nova), conforme a opção prevista no briefing.

## 2. Projetos adicionados

| # | Projeto | Categoria principal | Meu papel (badges) |
|---|---------|--------------------|--------------------|
| 1 | **Power Leads** | Frontend | Frontend · UX/UI · Integrações · Performance |
| 2 | **PWContrato 2.0** | Sistema corporativo | Manutenção · Frontend · Integrações · Backend |
| 3 | **PwBenefícios** | Full-stack | Frontend · UX/UI · Integrações · Manutenção |
| 4 | **Bot de Automação Comercial** | Bot | Automação · Bots · Integrações · Backend |
| 5 | **Bot de Monitoramento de Inadimplência** | Bot | Automação · Bots · Integrações · Performance |

Cada projeto traz: contexto corporativo, nota de participação/autoria, problema, solução, **"Minha participação"**, funcionalidades, desafios técnicos, resultados, "o que aprendi", stack, integrações, 3 métricas e 2 placeholders de print.

## 3. Como a autoria/participação foi descrita

Cada projeto tem um campo explícito **`ownershipNote`** (renderizado como "Nota de participação" em destaque no modal) e um campo **`participation`** (seção "Minha participação"). Nenhum texto afirma autoria integral indevida. Termos usados, conforme o briefing:

- **Power Leads** — *"Projeto corporativo com forte participação no desenvolvimento frontend, UX, integração com backend/IXC e evolução dos fluxos comerciais."* (foco frontend explícito)
- **PWContrato 2.0** — *"Projeto corporativo utilizado internamente, com participação em manutenção, análise técnica, frontend e apoio na evolução de fluxos de assinatura e integrações."* (manutenção/evolução)
- **PwBenefícios** — *"Projeto corporativo com participação em frontend, padronização visual, correções de UX, fluxo de login e apoio em melhorias técnicas."* (frontend/UX/melhorias)
- **Bot de Automação Comercial** — *"Automação desenvolvida para eliminar processos repetitivos da equipe comercial, integrando IXC, planilhas e WhatsApp."*
- **Bot de Inadimplência** — *"Bot de automação criado para reduzir o acompanhamento manual de inadimplência e centralizar dados operacionais em uma planilha atualizada automaticamente."*

Cada card também exibe o chip discreto **"Em produção interna"** (em vez de afirmar criação do zero) e o bloco **"Meu papel"** com badges.

## 4. Componentes criados

Em `src/components/portfolio/`:

| Componente | Papel |
|-----------|-------|
| `PortfolioCard.tsx` | Card do projeto na grade (ícone, badge de categoria, papel, stack, "Ver detalhes") |
| `PortfolioModal.tsx` | Modal/drawer de detalhes acessível (≈ `ProjectDetails`) |
| `CategoryBadge.tsx` | Badge de categoria com cor por tipo |
| `RoleBadge.tsx` | Badge de "meu papel" |
| `TechBadge.tsx` | Chip de tecnologia/integração |
| `ProjectMetric.tsx` | Cartão de métrica em destaque |
| `meta.ts` | Mapas categoria/papel → i18n e estilo |

Seção principal: `src/components/Portfolio.tsx` (hero/header, filtros, grade, "Minha atuação", aviso de confidencialidade, estado do modal).
Dados: `src/portfolio.ts` (tipos `PortfolioProject`, `PortfolioMetric`, `ActuationPillar` + conteúdo bilíngue).

## 5. Arquivos alterados

**Criados**
- `src/portfolio.ts`
- `src/components/Portfolio.tsx`
- `src/components/portfolio/{PortfolioCard,PortfolioModal,CategoryBadge,RoleBadge,TechBadge,ProjectMetric}.tsx`
- `src/components/portfolio/meta.ts`
- `RELATORIO_IMPLEMENTACAO_PORTFOLIO_PROJETOS.md`

**Modificados**
- `src/App.tsx` — `<Projects />` → `<Portfolio />`
- `src/icons.tsx` — 15 novos ícones (kanban, signature, gift, bolt, gauge, shield, repeat, sparkles, layers, plug, users, close, arrow-right, check) + entradas em `DYNAMIC_ICONS`
- `src/data.ts` — `IconName` estendido; removidos o tipo `Project`, `ProjectStatus` e o array `projects` (órfãos após a substituição)
- `src/i18n.ts` — `projects.title`/`projects.subtitle` atualizados; adicionadas ~45 chaves `pf.*` (PT + EN); removidas `proj.repo`/`proj.demo`/`status.*` (sem mais consumidores)
- `index.html` — `keywords` enriquecidas (CRM, IXC Soft, bots, ETL, Google Sheets, assinatura digital, integrações)

**Removidos**
- `src/components/Projects.tsx` (substituído pela nova seção)

> Observação: a antiga seção exibia 3 itens genéricos que **não** estão na lista dos 5 projetos curados (estoque da matriz, SaaS de colaboradores, "Portfólio"). Eles deixaram de ser exibidos por opção do briefing — se quiser reincluí-los, posso adicioná-los como projetos do novo modelo.

## 6. Dados sensíveis removidos/evitados

Nenhum dado sensível foi incluído. Todo o conteúdo é descrição técnica anonimizada. Em particular, **não há**: nomes de clientes reais, CPFs, tokens/credenciais, URLs internas, IPs, IDs sensíveis, planilhas reais nem código proprietário.

- Os "prints" são **placeholders** (ícone + legenda), sem imagens reais — não há risco de vazar telas.
- As métricas são **fatos técnicos** (ex.: "15 min", "ETL", "4 perfis"), sem números de negócio inventados.
- Há um **aviso de confidencialidade** fixo na seção e uma nota nos prints sobre anonimização.

## 7. Responsividade

Validada por medição direta do DOM (não apenas screenshot):

| Largura | Colunas (grade de projetos) | Overflow horizontal |
|--------:|:---------------------------:|:-------------------:|
| 360 px  | 1 | 0 px ✅ |
| 768 px  | 2 | 0 px ✅ |
| 1280 px | 3 | 0 px ✅ |

- Mobile: cards empilhados, badges quebrando linha (`flex-wrap`), botões com área de toque adequada.
- Modal: drawer ancorado na base no mobile (topo arredondado) e centralizado no desktop, com scroll interno e **0 px** de overflow horizontal a 360 px.
- "Minha atuação": 1 / 2 / 3 colunas (mobile / tablet / desktop).

## 8. SEO e acessibilidade

- **Semântica**: `<section>`, `<article>`, hierarquia `h2 → h3 → h4`.
- **Modal acessível**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, foco movido para o diálogo ao abrir, **foco preso (Tab/Shift+Tab)**, **ESC** e clique no backdrop fecham, **foco restaurado** ao botão de origem, `body` com scroll travado. Botão "Ver detalhes" com `aria-haspopup="dialog"` e `aria-label` incluindo o nome do projeto.
- **Filtros**: `role="group"` + `aria-pressed` nos botões.
- **Imagens/placeholders**: cada placeholder usa `role="img"` + `aria-label` (texto alternativo); os SVGs decorativos são `aria-hidden`. Caso prints reais sejam adicionados como `<img>`, o campo `alt` (bilíngue) já está modelado.
- **Contraste/tema**: validado nos temas escuro e claro; foco visível herdado do `:focus-visible` global.
- **SEO**: `keywords` enriquecidas no `index.html`. *Observação:* por ser SPA de página única sem router, não há meta `title`/`description` por projeto — o meta global já cobre automações e integrações.

## 9. Prints/placeholders necessários

Cada projeto tem 2 espaços de print reservados (10 no total). Substituir os placeholders por imagens **anonimizadas** (sem dados reais) atualizando `screenshots[].src` em `src/portfolio.ts` (e trocando o render por `<img alt={pick(s.alt)}>`):

- **Power Leads**: dashboard comercial; Kanban de prospecções
- **PWContrato 2.0**: fluxo de assinatura; confirmação de ativação
- **PwBenefícios**: login por perfil; dashboard de benefícios
- **Bot Comercial**: execução/logs; planilha sincronizada
- **Bot Inadimplência**: métricas consolidadas; planilha viva (ETL)

## 10. Comandos executados

| Comando | Resultado |
|--------|-----------|
| `npm run typecheck` (`tsc --noEmit`) | ✅ Sem erros |
| `npm run lint` (`eslint .`) | ✅ Sem erros/avisos |
| `npm run build` (`tsc --noEmit && vite build`) | ✅ Build em ~4.9 s, 65 módulos |
| `npm test` | ⚠️ **Não existe** script de teste no `package.json` |

Verificação em navegador (Vite dev server): **sem erros de console**; modal, filtros, temas e responsividade validados por inspeção do DOM.
