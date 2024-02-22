import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "my-react-app-1",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/components/Counter",
        "./counterWrapper": "./src/components/Counter/counterWrapper",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
