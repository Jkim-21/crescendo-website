import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/upload": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env.SOME_KEY": JSON.stringify(process.env.SOME_KEY),
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth"],
  },
});
