import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

const deps = require("./package.json").dependencies;

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "my-vue-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Animation": "./src/components/Animation/index.vue",
        "./animationWrapper": "./src/components/Animation/animationWrapper.ts",
      },
      shared: ["vue"],
      // shared: {
      //   ...deps,
      //   vue: {
      //     singleton: true,
      //     requiredVersion: deps.vue,
      //   },
      // },
      remotes: {
        "my-react-app-1": "http://localhost:5001/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
