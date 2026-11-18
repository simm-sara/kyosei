// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// [A CONFIRMAR] domínio definitivo. Usado no sitemap, nas URLs canônicas e no Open Graph.
export default defineConfig({
  site: "https://www.crossfitkyosei.com.br",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: { format: "directory" },
});
