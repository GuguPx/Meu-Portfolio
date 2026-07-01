/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tokens semânticos (trocam entre claro/escuro via CSS vars em index.css)
        base: "var(--c-base)",
        soft: "var(--c-soft)",
        surface: "var(--c-surface)",
        surface2: "var(--c-surface-2)",
        fg: "var(--c-fg)",
        muted: "var(--c-muted)",
        faint: "var(--c-faint)",
        card: "var(--c-card)",
        line: "var(--c-line)",
        "line-strong": "var(--c-line-strong)",
        // Cor de destaque ÚNICA por tema (troca via CSS vars). Canais RGB para
        // permitir modificadores de opacidade (bg-brand/15, border-brand/30…).
        // brand-2 = mesmo accent, mantido por compatibilidade com referências.
        brand: {
          DEFAULT: "rgb(var(--c-accent-rgb) / <alpha-value>)",
          2: "rgb(var(--c-accent-rgb) / <alpha-value>)",
          hover: "var(--c-accent-hover)",
        },
        accent: "rgb(var(--c-accent-rgb) / <alpha-value>)",
        "accent-soft": "var(--c-accent-soft)",
        // Cores semânticas de status (uso pontual em badges)
        ok: "#4ea36f",
        warn: "#c99a3a",
        info: "rgb(var(--c-accent-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Inter Variable"', '"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { content: "1200px" },
      boxShadow: {
        // Sombras neutras (sem glow colorido)
        glow: "0 24px 60px -24px rgba(0,0,0,0.7)",
        brand: "0 10px 26px -14px rgba(0,0,0,0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 40px -22px rgba(0,0,0,0.55)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-26px)" },
        },
        floatAlt: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-24px,22px)" },
        },
        pulseDot: { "50%": { opacity: "0.55" } },
        scrollDot: {
          "0%":  { opacity: "0",   transform: "translate(-50%, 0px)" },
          "15%": { opacity: "1",   transform: "translate(-50%, 0px)" },
          "55%": { opacity: "0.9", transform: "translate(-50%, 14px)" },
          "70%": { opacity: "0",   transform: "translate(-50%, 14px)" },
          "100%":{ opacity: "0",   transform: "translate(-50%, 0px)" },
        },
      },
      animation: {
        float: "float 22s ease-in-out infinite",
        "float-slow": "float 30s ease-in-out infinite reverse",
        "float-slower": "floatAlt 38s ease-in-out infinite",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        "scroll-dot": "scrollDot 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
