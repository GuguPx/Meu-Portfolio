# Portfólio — Augusto Silva

Portfólio profissional pessoal: aplicação **React + TypeScript + Tailwind CSS** (com Vite), responsiva, bilíngue (PT/EN), com tema claro/escuro, otimizada para performance e SEO.

🔗 **Demo:** _publique e cole o link aqui_ (veja [Deploy](#-deploy))

---

## ✨ Recursos

- **React + TypeScript** — componentes tipados e organizados.
- **Tailwind CSS** — design system com tokens de tema que trocam entre claro/escuro.
- **Responsivo** — mobile-first, do celular ao desktop.
- **Bilíngue PT/EN** — alternância de idioma com um clique (Context API).
- **Tema claro/escuro** — respeita a preferência do sistema e memoriza a escolha.
- **Formulário de contato real** — envio via **Web3Forms** (sem backend), com fallback para `mailto` e proteção anti-spam (honeypot).
- **Performance** — fontes auto-hospedadas, code-splitting de vendor, JS enxuto (~69 KB gzip).
- **SEO** — meta tags, Open Graph, Twitter Card, **dados estruturados JSON-LD** (Schema.org Person), `robots.txt` e `sitemap.xml`.
- **PWA** — `manifest`, ícones (incl. maskable) e `apple-touch-icon`; instalável.
- **Acessível** — HTML semântico, navegação por teclado, `skip link`, foco visível, `aria-current`, respeito a `prefers-reduced-motion`.
- **UX** — barra de progresso de leitura, botão "voltar ao topo", revelação suave ao rolar.

## 🧰 Stack & bibliotecas

| Categoria | Uso |
|---|---|
| **React 18** + **TypeScript** + **Vite** | base da aplicação |
| **Tailwind CSS 3** + PostCSS | estilos e design system |
| **React Hook Form** | validação/estado do formulário de contato |
| **@fontsource-variable** (Inter, JetBrains Mono) | fontes auto-hospedadas |
| **ESLint** + typescript-eslint | qualidade de código |
| **sharp** (dev) | geração dos ícones e da imagem Open Graph |

> **Por que não usei uma biblioteca de animação (ex.: Framer Motion)?** Ela adicionava ~35 KB gzip e deixava o conteúdo `opacity:0` até o JS animar (frágil para crawlers/abas em segundo plano). Optei por animações em **CSS + IntersectionObserver**: mesmo efeito, conteúdo sempre visível e bundle menor — alinhado ao foco em performance.

> **Preciso de banco de dados?** Não. Para um portfólio, o conteúdo fica no código (`src/data.ts`) e o formulário usa um serviço serverless (Web3Forms). Banco de dados só valeria a pena para recursos dinâmicos futuros (blog/CMS, painel admin).

## 📁 Estrutura

```
Meu-Portfolio/
├── index.html              # entrada do Vite + meta tags/SEO/JSON-LD
├── public/                 # favicon, ícones PWA, og-image, robots.txt, sitemap.xml, manifest
├── scripts/gen-assets.mjs  # gera ícones e og-image (sharp)
├── src/
│   ├── main.tsx            # bootstrap (providers + fontes + App)
│   ├── App.tsx             # composição das seções
│   ├── index.css           # Tailwind + tokens de tema + classes de componente
│   ├── data.ts             # ← EDITE AQUI: seus dados e conteúdo (tipado)
│   ├── config.ts           # lê variáveis de ambiente (.env)
│   ├── i18n.ts             # textos estáticos PT/EN
│   ├── icons.tsx           # ícones SVG
│   ├── context/            # ThemeContext, LanguageContext
│   ├── hooks/              # useInView, useScrollSpy
│   └── components/         # Navbar, Hero, About, Skills, Projects, Timeline,
│                           #   Goals, Contact, Footer, ScrollProgress, ScrollToTop
├── tailwind.config.js · vite.config.ts · tsconfig.json · eslint.config.js
```

## 🚀 Como rodar localmente

```bash
npm install      # instala as dependências (uma vez)
npm run dev      # servidor de desenvolvimento → http://localhost:5174
```

| Script | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | checa tipos e gera a versão de produção em `dist/` |
| `npm run preview` | serve o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | checagem de tipos (`tsc --noEmit`) |
| `npm run gen:assets` | regenera ícones e `og-image.png` |

## ✏️ Como personalizar

Edite **`src/data.ts`** (campos com `TODO` precisam dos seus dados reais):

| O que editar | Onde |
|---|---|
| Nome, cargo, localização | `DATA.profile` |
| GitHub, **LinkedIn**, e-mail | `DATA.links` (deixe `""` para esconder) |
| Texto do topo, sobre, stack, projetos, trajetória, objetivos | `DATA.*` |

**Status de projeto:** `live`, `in-progress`, `planned`, `future`.
**Status de skill:** `focus`, `learning`, `exploring`.

## 📨 Formulário de contato (Web3Forms)

1. Crie uma chave grátis em [web3forms.com](https://web3forms.com) (informe seu e-mail).
2. Copie `.env.example` para `.env` e preencha `VITE_WEB3FORMS_KEY`.
3. Sem a chave, o formulário usa o fallback via `mailto` automaticamente.

## 🌐 Deploy

Build estático — publique a pasta `dist/` (`npm run build`).

- **Vercel / Netlify** — conecte o repositório; *build* `npm run build`, *output* `dist`. Configure a env `VITE_WEB3FORMS_KEY`.
- **GitHub Pages** — descomente `base: "/Meu-Portfolio/"` em `vite.config.ts` e publique `dist/`.

> Após o deploy, troque `https://augusto-silva.vercel.app` pela URL real em: `index.html` (meta/JSON-LD), `public/robots.txt` e `public/sitemap.xml`.

## ✅ Checklist antes de publicar

- [ ] Confirmar nome e cargo em `DATA.profile`
- [ ] Adicionar URL do LinkedIn em `DATA.links.linkedin`
- [ ] Configurar `VITE_WEB3FORMS_KEY`
- [ ] Trocar a URL placeholder pelo domínio real (SEO)
- [ ] Atualizar projetos reais e seus links

---

Feito com 💙 usando React, TypeScript & Tailwind CSS.
