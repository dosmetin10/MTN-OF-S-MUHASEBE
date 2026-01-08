import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "renderer"),
  build: {
    outDir: resolve(__dirname, "renderer", "dist"),
    emptyOutDir: true
  }
});
