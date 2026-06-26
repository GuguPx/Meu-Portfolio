/* Gera ícones PWA/Apple e a imagem Open Graph a partir de SVGs.
   Uso: node scripts/gen-assets.mjs  (requer sharp como devDependency) */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
mkdirSync(pub, { recursive: true });

const GRAD = `
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#6366f1"/>
    <stop offset="0.5" stop-color="#8b5cf6"/>
    <stop offset="1" stop-color="#22d3ee"/>
  </linearGradient>`;

// Ícone padrão (cantos arredondados) — para favicon/apple/PWA
const appIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>${GRAD}</defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <path d="M20 46 L32 18 L44 46 M24.5 37 H39.5" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Ícone maskable (full-bleed, conteúdo na zona segura ~70%)
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>${GRAD}</defs>
  <rect width="64" height="64" fill="url(#g)"/>
  <path d="M22 43 L32 23 L42 43 M25.6 35.8 H38.4" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Open Graph 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    ${GRAD}
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="1" stop-color="#11182e"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.15" r="0.7">
      <stop offset="0" stop-color="#6366f1" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="88" y="84" width="120" height="120" rx="26" fill="url(#g)"/>
  <path d="M118 168 L148 100 L178 168 M127 145 H169" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="88" y="330" font-family="Arial, sans-serif" font-size="92" font-weight="bold" fill="#e8ecf7">Augusto Silva</text>
  <text x="92" y="408" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#22d3ee">Desenvolvedor Web</text>
  <text x="92" y="476" font-family="Arial, sans-serif" font-size="34" fill="#9aa6c4">Frontend  ·  Backend  ·  APIs  ·  Web3</text>
  <rect x="92" y="520" width="1016" height="2" fill="#2a3352"/>
  <text x="92" y="566" font-family="Arial, sans-serif" font-size="28" fill="#6b7798">React  ·  TypeScript  ·  Tailwind CSS  ·  Node.js</text>
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
