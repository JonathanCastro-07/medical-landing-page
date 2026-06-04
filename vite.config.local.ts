import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/**
 * Configuração Vite para desenvolvimento local (sem dependências do Manus)
 * Use este arquivo se tiver problemas com o vite.config.ts padrão
 * 
 * Para usar:
 * 1. Renomeie vite.config.ts para vite.config.manus.ts
 * 2. Renomeie vite.config.local.ts para vite.config.ts
 * 3. Execute: pnpm run dev
 */

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  envDir: path.resolve(__dirname),
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
