import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/graphql-anime-2.0/",
  plugins: [react()],
  resolve: {
    alias: {
      "~app": path.resolve("src/app"),
      "~entities": path.resolve("src/entities"),
      "~features": path.resolve("src/features"),
      "~pages": path.resolve("src/pages"),
      "~shared": path.resolve("src/shared"),
      "~widgets": path.resolve("src/widgets"),
    },
  },
});
