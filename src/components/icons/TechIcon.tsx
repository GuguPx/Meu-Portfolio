/* =============================================================================
   TechIcon — ícones de tecnologia em SVG inline (sem dependências externas).

   - Glyphs de marca desenhados localmente para as tecnologias principais.
   - Fallback "lettermark" elegante (quadrado arredondado + monograma) para
     qualquer tecnologia sem glyph dedicado — nunca quebra o build.
   - Aceita o nome de exibição da stack (ex.: "Tailwind CSS", "Google Sheets
     API") e normaliza internamente para a chave do registro.
   - Acessível: por padrão `decorative` (aria-hidden), pois os badges já têm
     texto visível; passe `decorative={false}` para expor `role="img"`+aria-label.
   ========================================================================== */
import { memo, type ReactNode } from "react";

interface TechDef {
  label: string;
  color: string;
  /** Monograma para o fallback lettermark (quando não há glyph). */
  short?: string;
  /** Conteúdo SVG (children de um <svg viewBox="0 0 24 24">). */
  glyph?: ReactNode;
}

/* -- Glyphs de marca (desenhados para ler bem a 18–28px) -------------------- */
const REGISTRY: Record<string, TechDef> = {
  react: {
    label: "React",
    color: "#61DAFB",
    glyph: (
      <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    ),
  },
  typescript: {
    label: "TypeScript",
    color: "#3178C6",
    glyph: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
        <text x="12.5" y="13.5" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="8.5" fontWeight="700">TS</text>
      </>
    ),
  },
  javascript: {
    label: "JavaScript",
    color: "#F7DF1E",
    glyph: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
        <text x="12.5" y="13.5" textAnchor="middle" dominantBaseline="central" fill="#111" fontSize="8.5" fontWeight="700">JS</text>
      </>
    ),
  },
  node: {
    label: "Node.js",
    color: "#5FA04E",
    glyph: (
      <>
        <path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2z" fill="#5FA04E" />
        <text x="12" y="13" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="5.4" fontWeight="700">node</text>
      </>
    ),
  },
  next: {
    label: "Next.js",
    color: "#0a0a0a",
    glyph: (
      <>
        <circle cx="12" cy="12" r="9.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <text x="12" y="12.5" textAnchor="middle" dominantBaseline="central" fill="currentColor" fontSize="8" fontWeight="700">N</text>
      </>
    ),
  },
  vite: {
    label: "Vite",
    color: "#BD34FE",
    glyph: (
      <>
        <defs>
          <linearGradient id="techVite" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
        <path d="M13.4 2.4 5 12.6h5l-1.4 9 10.4-12.8h-5.2l1.6-6.4z" fill="url(#techVite)" />
      </>
    ),
  },
  tailwind: {
    label: "Tailwind CSS",
    color: "#38BDF8",
    glyph: (
      <g fill="#38BDF8">
        <path d="M7 8.4c1.3-2.6 3.2-3 5.3-1.2 1.4 1.2 2.7 1.6 4.2.5-.9 2.4-2.6 2.9-4.8 1.2-1.4-1.1-2.6-1.5-4.7-.5z" />
        <path d="M2.5 13c1.3-2.6 3.2-3 5.3-1.2 1.4 1.2 2.7 1.6 4.2.5-.9 2.4-2.6 2.9-4.8 1.2-1.4-1.1-2.6-1.5-4.7-.5z" />
      </g>
    ),
  },
  mongodb: {
    label: "MongoDB",
    color: "#47A248",
    glyph: (
      <>
        <path d="M12 2c2.2 3.6 5 5.6 5 10 0 3.8-2.3 6.4-4.4 7.5L12 22l-.6-2.5C9.3 18.4 7 15.8 7 12c0-4.4 2.8-6.4 5-10z" fill="#47A248" />
        <path d="M12 4.6v15.2" stroke="#2f7d32" strokeWidth="0.8" />
      </>
    ),
  },
  docker: {
    label: "Docker",
    color: "#2496ED",
    glyph: (
      <g fill="#2496ED">
        <rect x="3" y="10" width="2.7" height="2.7" />
        <rect x="6.3" y="10" width="2.7" height="2.7" />
        <rect x="9.6" y="10" width="2.7" height="2.7" />
        <rect x="6.3" y="6.7" width="2.7" height="2.7" />
        <rect x="9.6" y="6.7" width="2.7" height="2.7" />
        <rect x="12.9" y="10" width="2.7" height="2.7" />
        <path d="M2 13.4h18c-.2 1.6-1 3.4-3.2 4.3-2.1.9-9.2 1-11.6-.6-1.6-1.1-2.9-2.1-3.2-3.7z" />
      </g>
    ),
  },
  github: {
    label: "GitHub",
    color: "#6e7681",
    glyph: (
      <path
        fill="currentColor"
        d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"
      />
    ),
  },
  git: {
    label: "Git",
    color: "#F05032",
    glyph: (
      <g fill="none" stroke="#F05032" strokeWidth="1.6">
        <circle cx="6" cy="18" r="2.1" />
        <circle cx="6" cy="6" r="2.1" />
        <circle cx="17" cy="9" r="2.1" />
        <path d="M6 8.1v7.8M7.7 7.1 15.3 9" />
      </g>
    ),
  },
  whatsapp: {
    label: "WhatsApp / OPA Suite",
    color: "#25D366",
    glyph: (
      <>
        <path d="M3 21l1.5-4.9A8 8 0 1 1 8 19.5L3 21z" fill="#25D366" />
        <path d="M9 8.6c0-.6.5-.8.9-.6.3.2.9 1.6.9 1.9 0 .3-.6.7-.6 1 0 .4 1.3 2.3 3.2 2.9.4.1.8-.7 1.1-.7.4 0 1.7.7 1.9.9.2.2 0 .9-.4 1.3-.5.5-1.6.8-2.7.6C11 16.7 9 14.3 9 12.2V8.6z" fill="#fff" />
      </>
    ),
  },
  googlesheets: {
    label: "Google Sheets",
    color: "#0F9D58",
    glyph: (
      <>
        <path d="M6 2h8l4 4v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill="#0F9D58" />
        <path d="M14 2v3.6a.4.4 0 0 0 .4.4H18z" fill="#0a7c46" />
        <g fill="#fff">
          <rect x="8.2" y="11" width="7.6" height="1.3" />
          <rect x="8.2" y="13.8" width="7.6" height="1.3" />
          <rect x="8.2" y="16.6" width="7.6" height="1.3" />
          <rect x="11.4" y="10.6" width="1.3" height="8.7" />
        </g>
      </>
    ),
  },
  claude: {
    label: "IA · Claude Code",
    color: "#D97757",
    glyph: (
      <g stroke="#D97757" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3.2v17.6M3.2 12h17.6M5.9 5.9l12.2 12.2M18.1 5.9 5.9 18.1" />
      </g>
    ),
  },

  /* -- Lettermarks (monograma + cor de marca) ----------------------------- */
  express: { label: "Express", color: "#64748b", short: "ex" },
  nestjs: { label: "NestJS", color: "#E0234E", short: "Ne" },
  prisma: { label: "Prisma", color: "#5A67D8", short: "Pr" },
  postgresql: { label: "PostgreSQL", color: "#4f86c6", short: "Pg" },
  leaflet: { label: "Leaflet", color: "#199900", short: "Lf" },
  reactrouter: { label: "React Router", color: "#F44250", short: "RR" },
  tanstack: { label: "TanStack Query", color: "#FF6B6B", short: "TQ" },
  axios: { label: "Axios", color: "#8a6df1", short: "Ax" },
  zapsign: { label: "ZapSign", color: "#22C55E", short: "ZS" },
  opasuite: { label: "OPA Suite", color: "#6366F1", short: "OPA" },
  ixc: { label: "IXC Soft", color: "#0EA5E9", short: "IXC" },
  pm2: { label: "PM2", color: "#3aa655", short: "PM2" },
  linux: { label: "Linux", color: "#d9a300", short: "Lx" },
  nginx: { label: "Nginx", color: "#16a34a", short: "NG" },
  jwt: { label: "JWT", color: "#f0567f", short: "JWT" },
  zod: { label: "Zod", color: "#5b8def", short: "Zod" },
  swagger: { label: "Swagger", color: "#6BA539", short: "{}" },
  puppeteer: { label: "Puppeteer", color: "#40B5A4", short: "Pp" },
  pdflib: { label: "pdf-lib", color: "#ef4444", short: "pdf" },
  winston: { label: "Winston", color: "#b06ef0", short: "W" },
  nodecron: { label: "node-cron", color: "#7c8aa0", short: "cron" },
  plimit: { label: "p-limit", color: "#7c8aa0", short: "pL" },
  dotenv: { label: "dotenv", color: "#caa800", short: "env" },
  googlecloud: { label: "Google Cloud", color: "#4285F4", short: "GC" },
  openai: { label: "ChatGPT", color: "#10A37F", short: "AI" },
  mysql: { label: "MySQL", color: "#4479A1", short: "My" },
  bootstrap: { label: "Bootstrap", color: "#7952B3", short: "Bs" },
  html5: { label: "HTML5", color: "#E34F26", short: "H5" },
  css3: { label: "CSS3", color: "#1572B6", short: "C3" },
  sql: { label: "SQL", color: "#7c8aa0", short: "SQL" },
  apisrest: { label: "APIs REST", color: "#22d3ee", short: "API" },
};

/* -- Aliases: nome de exibição → chave do registro -------------------------- */
const ALIASES: Record<string, string> = {
  "node.js": "node",
  nodejs: "node",
  "nest.js": "nestjs",
  "next.js": "next",
  nextjs: "next",
  "tailwind css": "tailwind",
  tailwindcss: "tailwind",
  postgres: "postgresql",
  "react query": "tanstack",
  "@tanstack/react-query": "tanstack",
  "tanstack query": "tanstack",
  "google sheets api": "googlesheets",
  "google sheets": "googlesheets",
  "google cloud": "googlecloud",
  "opa suite / whatsapp": "whatsapp",
  "opa suite": "opasuite",
  "ixc soft": "ixc",
  "claude code": "claude",
  claude: "claude",
  ia: "claude",
  ai: "claude",
  chatgpt: "openai",
  openai: "openai",
};

function normalize(name: string): string {
  const k = name.trim().toLowerCase();
  if (ALIASES[k]) return ALIASES[k];
  return k.replace(/[^a-z0-9]+/g, "");
}

/** Há uma tecnologia conhecida (glyph ou lettermark) para este nome? */
// eslint-disable-next-line react-refresh/only-export-components
export function isKnownTech(name: string): boolean {
  return REGISTRY[normalize(name)] != null;
}

function deriveShort(label: string): string {
  const words = label.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return label.slice(0, 2).replace(/^\w/, (c) => c.toUpperCase());
}

function Lettermark({ color, text }: { color: string; text: string }) {
  const len = text.length;
  const fontSize = len <= 1 ? 11 : len === 2 ? 8.6 : len === 3 ? 6.6 : 5.4;
  return (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" fill={color} fillOpacity="0.16" />
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.6" fill="none" stroke={color} strokeOpacity="0.4" />
      <text x="12" y="12.6" textAnchor="middle" dominantBaseline="central" fill={color} fontSize={fontSize} fontWeight="700">
        {text}
      </text>
    </>
  );
}

interface TechIconProps {
  name: string;
  size?: number;
  /** Quando há texto visível ao lado (badges), mantenha decorativo. */
  decorative?: boolean;
  className?: string;
}

/* memo: há dezenas de instâncias (chips/badges); com props estáveis, trocas de
   idioma/estado nos pais não reconciliam estas árvores SVG novamente. */
export const TechIcon = memo(function TechIcon({ name, size = 18, decorative = true, className }: TechIconProps) {
  const def = REGISTRY[normalize(name)];
  const label = def?.label ?? name;
  const color = def?.color ?? "#6366f1";
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : { role: "img", "aria-label": label };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...a11y}>
      {def?.glyph ?? <Lettermark color={color} text={def?.short ?? deriveShort(label)} />}
    </svg>
  );
});
