import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base './' prevents white screen asset 404 errors on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./",
});
