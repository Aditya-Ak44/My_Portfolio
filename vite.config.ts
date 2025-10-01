import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'My_Portfolio', // Replace with your actual repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
