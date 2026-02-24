import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist/client',
  },
  ssr: {
    // Configure SSR-specific settings
    target: 'node',
    format: 'esm',
    noExternal: ['react-router-dom'] // Add any packages that need to be bundled
  }
});
