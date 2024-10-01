import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./tests/**/*.{test,spec}.{ts,tsx}"],
    exclude: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
