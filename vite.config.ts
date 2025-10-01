import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  base: '/My_Portfolio/', // Replace 'My_Portfolio' with your actual GitHub repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
