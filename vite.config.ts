import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    watch: {
      ignored: ["**/.chrome-*/**", "**/visual-*.png", "**/vite-dev*.log"],
    },
  },
});
