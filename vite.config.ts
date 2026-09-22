import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  // strictPort so the address never quietly moves: `npm run audit` and the
  // README both assume 3000 and a silent fallback would break them.
  server: { port: 3000, strictPort: true },
  preview: { port: 3000, strictPort: true },
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "./src") },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
  },
});
