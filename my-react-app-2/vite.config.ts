import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "my-react-app-2",
      filename: "remoteEntry.js",
      exposes: {},
      shared: ["react", "react-dom", "vue"],
      remotes: {
        "my-react-app-1": "http://localhost:5001/assets/remoteEntry.js",
        "my-vue-app": "http://localhost:4001/assets/remoteEntry.js",
      },
    }),
  ],
});
