import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        mtl: resolve(import.meta.dirname, "mtl/index.html"),
        mil: resolve(import.meta.dirname, "mil/index.html"),
        qure: resolve(import.meta.dirname, "projects/fangcun-cure/fangcun-cure.html"),
      },
    },
  },
});
