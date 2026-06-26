import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Meu-Portfolio/", // descomente se publicar em GitHub Pages num subdiretório
  server: {
    port: 5174,
    strictPort: false,
    host: "127.0.0.1",
  },
  build: {
    rollupOptions: {
      output: {
        // Separa bibliotecas de terceiros num chunk com cache de longa duração.
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
});
