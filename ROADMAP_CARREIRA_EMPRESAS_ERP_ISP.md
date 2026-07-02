# Roadmap de Carreira — Empresas de ERP/ISP (perfil IXC Software, MK Solutions e similares)

**Objetivo:** posicionar Augusto Silva para vagas em empresas que desenvolvem ERP, CRM, automação e gestão operacional para provedores de internet.

**Tese do posicionamento:** a maioria dos candidatos sabe React/Node; pouquíssimos conhecem **a operação de um provedor por dentro** (leads, contratos, OS, cobrança, inadimplência, integração IXC/OPA). Esse é o diferencial a ser comunicado em todo canal: portfólio, currículo, LinkedIn e entrevistas.

> Nota: no texto público do portfólio o alvo aparece de forma ampla ("empresas de software, ERPs, provedores, sistemas internos e produtos operacionais"). Os nomes IXC/MK ficam apenas neste documento interno de estratégia.

---

## Fase 1 — Ajustes rápidos ✅ (implementada em 02/07/2026)

- [x] Badge do Hero: "Aberto a oportunidades — software, ERP e automação"
- [x] Tagline do Hero explicita "operação de um provedor de internet" + CRM/cobrança
- [x] Bloco **"Vivência com fluxos de provedores"** na seção Experiência (8 fluxos de domínio)
- [x] Subseção **"Como transformo problemas em sistemas"** (método em 6 passos) na seção Engenharia
- [x] SEO: description e JSON-LD com vocabulário ERP/ISP ("ERP para provedores de internet", "CRM", "Dashboards operacionais")
- [x] Currículo PDF no site (feito em 01/07)
- [ ] Atualizar LinkedIn com o plano em `PLANO_LINKEDIN_E_CARREIRA.md`
- [ ] Configurar `VITE_WEB3FORMS_KEY` no Vercel + redeploy (formulário em produção ainda usa fallback mailto)

## Fase 2 — Provas técnicas (2–6 semanas)

- [ ] **Prints anonimizados/mockups** dos 3 projetos principais (Power Leads, Contratos, Bots) — cases com imagem convertem muito mais
- [ ] **3–5 repositórios públicos organizados** no GitHub (GuguPx): README com problema/solução/stack/prints, commits limpos
- [ ] README de destaque no perfil do GitHub (profile README) com o mesmo posicionamento
- [ ] Documentar 1 API própria com Swagger/OpenAPI num repo público (prova de "documentação de API")
- [ ] Adicionar testes (unitários + 1 e2e) num projeto público — prova de qualidade
- [ ] Deep-link dos projetos no portfólio (`#projects/power-leads`) para colar casos específicos em candidaturas

## Fase 3 — Diferencial competitivo (1–3 meses)

### 🎯 Projeto demonstrativo: **Mini ISP Manager**

Um ERP de provedor em miniatura, público e com dados fictícios — a prova definitiva de domínio para vagas IXC/MK. Escopo enxuto porém completo:

| Módulo | Funcionalidades |
|---|---|
| Clientes | CRUD, busca, filtros, paginação server-side |
| Planos | Cadastro de planos de internet (velocidade/preço) |
| Contratos | Vínculo cliente+plano, status (ativo/suspenso/cancelado), histórico |
| Ordens de serviço | Abertura, atribuição a técnico, status, mobile-first |
| Financeiro | Boletos fictícios, baixa manual, relatório de inadimplência |
| Dashboard | Métricas operacionais (ativos, OS abertas, inadimplência) |
| Acesso | Login JWT + RBAC (admin/atendente/técnico) |
| Auditoria | Log de ações por usuário |

**Stack sugerida:** React + TypeScript + Tailwind · Node.js/NestJS + PostgreSQL + Prisma · Swagger/OpenAPI · Docker Compose · Playwright (e2e) · deploy demo na Vercel/Railway.

**Regras:** dados 100% fictícios; README como estudo de caso; screenshots no portfólio; NÃO copiar telas do IXC — inspirar-se nos fluxos, não no produto.

### Outros diferenciais (ordem de valor)
- [ ] 2–3 notas técnicas/posts (ver sugestões no plano de LinkedIn) — republicar no portfólio como "Notas"
- [ ] Sistema de logs centralizado como estudo de caso público
- [ ] CI/CD com GitHub Actions no Mini ISP Manager (badge no README)
- [ ] Integração GitHub API no portfólio (pinned repos dinâmicos) — só após Fase 2

## Checklist antes de cada candidatura

- [ ] Portfólio no ar e sem erros (build recente)
- [ ] CV atualizado (npm run gen:cv se houve mudança)
- [ ] LinkedIn espelhando o posicionamento
- [ ] Link do case mais relevante para a vaga em mãos
- [ ] Pesquisa: produto da empresa, stack, dores do segmento
- [ ] Preparar 2–3 histórias reais (problema → ação → resultado) da Power Telecom
