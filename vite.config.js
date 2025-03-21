import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.woff", "**/*.woff2"], // Ensure Vite recognizes font files
  server: {
    historyApiFallback: true, // Ensures React handles routing
  },
});
