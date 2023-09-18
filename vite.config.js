/* eslint-disable react/no-unknown-property */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteTestPlugin } from "vitest";

export default defineConfig({
  plugins: [react(), ViteTestPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
  },
});
