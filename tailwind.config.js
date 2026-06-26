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
        fg: "var(--c-fg)",
        muted: "var(--c-muted)",
        faint: "var(--c-faint)",
        card: "var(--c-card)",
        line: "var(--c-line)",
        // Cores de marca (fixas)
        brand: { DEFAULT: "#6366f1", 2: "#22d3ee" },
        accent: "#a78bfa",
        ok: "#34d399",
        warn: "#fbbf24",
        info: "#38bdf8",
      },
      fontFamily: {
        sans: ['"Inter Variable"', '"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { content: "1120px" },
      boxShadow: {
        glow: "0 18px 40px -18px rgba(0,0,0,0.65)",
        brand: "0 10px 26px -10px rgba(99,102,241,0.45)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-26px)" },
        },
        pulseDot: { "50%": { opacity: "0.55" } },
        scrollDot: {
          "0%": { opacity: "0", transform: "translate(-50%,0)" },
          "40%": { opacity: "1" },
          "80%": { opacity: "0", transform: "translate(-50%,14px)" },
        },
      },
      animation: {
        float: "float 16s ease-in-out infinite",
        "float-slow": "float 20s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        "scroll-dot": "scrollDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
