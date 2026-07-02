/* Gera ícones PWA/Apple e a imagem Open Graph a partir de SVGs.
   Uso: node scripts/gen-assets.mjs  (requer sharp como devDependency)

   Identidade: marca do grafo de nós (hub + satélites) em areia (#d8cfa3)
   sobre petróleo (#0e1c20) — a mesma do favicon.svg e do BrandIcon.tsx.
   Posicionamento: Desenvolvedor Full Stack · Frontend · Backend · Automação. */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
mkdirSync(pub, { recursive: true });

/* ---- Paleta (tokens do tema escuro em src/index.css) ---- */
const TILE = "#0e1c20";   // fundo do tile da marca (igual ao favicon)
const SAND = "#d8cfa3";   // acento areia (--c-accent)
const BG0 = "#081316";    // --c-base (escuro)
const BG1 = "#0d1b1f";    // --c-soft (escuro)
const FG = "#f5f7f8";     // --c-fg
const MUTED = "#b7c3c8";  // --c-muted
const FAINT = "#77868d";  // --c-faint

/* Grafo de nós (mesma geometria do favicon.svg, viewBox 64) */
const GRAPH = `
  <g stroke="${SAND}" stroke-width="3" stroke-linecap="round">
    <path d="M32 32 L32 15.5"/>
    <path d="M32 32 L18 44"/>
    <path d="M32 32 L46 44"/>
  </g>
  <g fill="${SAND}">
    <circle cx="32" cy="15.5" r="3.6"/>
    <circle cx="18" cy="44" r="3.6"/>
    <circle cx="46" cy="44" r="3.6"/>
    <circle cx="32" cy="32" r="5"/>
  </g>`;

// Ícone padrão (tile arredondado) — para apple-touch/PWA
const appIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="${TILE}"/>
  ${GRAPH}
</svg>`;

// Ícone maskable (full-bleed; grafo reduzido para a zona segura ~70%)
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${TILE}"/>
  <g transform="translate(32 32) scale(0.78) translate(-32 -32)">${GRAPH}</g>
</svg>`;

// Open Graph 1200×630 — coerente com o site (petróleo + areia, minimalista)
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BG0}"/>
      <stop offset="1" stop-color="${BG1}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.75">
      <stop offset="0" stop-color="${SAND}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${SAND}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Tile da marca -->
  <g transform="translate(88 84)">
    <rect width="120" height="120" rx="30" fill="${TILE}"/>
    <rect x="1.5" y="1.5" width="117" height="117" rx="28.5" fill="none" stroke="${SAND}" stroke-opacity="0.35" stroke-width="3"/>
    <g transform="scale(1.875)">${GRAPH}</g>
  </g>

  <!-- CTA (pill) — chamada para clique -->
  <rect x="802" y="102" width="310" height="84" rx="42" fill="${SAND}"/>
  <text x="957" y="156" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="${BG0}">Ver projetos →</text>

  <text x="88" y="330" font-family="Arial, sans-serif" font-size="92" font-weight="bold" fill="${FG}">Augusto Silva</text>
  <text x="92" y="408" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="${SAND}">Desenvolvedor Full Stack</text>
  <text x="92" y="476" font-family="Arial, sans-serif" font-size="34" fill="${MUTED}">Frontend  ·  Backend  ·  Automação de Sistemas</text>
  <rect x="92" y="520" width="1016" height="2" fill="${FAINT}" fill-opacity="0.35"/>
  <text x="92" y="566" font-family="Arial, sans-serif" font-size="28" fill="${FAINT}">React  ·  TypeScript  ·  Node.js  ·  Integrações &amp; Automações</text>
</svg>`;

const buf = (svg) => Buffer.from(svg);
const tasks = [
  sharp(buf(appIcon), { density: 384 }).resize(180, 180).png().toFile(join(pub, "apple-touch-icon.png")),
  sharp(buf(appIcon), { density: 384 }).resize(192, 192).png().toFile(join(pub, "icon-192.png")),
  sharp(buf(appIcon), { density: 384 }).resize(512, 512).png().toFile(join(pub, "icon-512.png")),
  sharp(buf(maskable), { density: 384 }).resize(512, 512).png().toFile(join(pub, "icon-maskable-512.png")),
  sharp(buf(og)).png().toFile(join(pub, "og-image.png")),
];

await Promise.all(tasks);
console.log("Assets gerados em public/: apple-touch-icon.png, icon-192.png, icon-512.png, icon-maskable-512.png, og-image.png");
