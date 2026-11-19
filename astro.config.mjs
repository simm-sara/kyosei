// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Endereço do site. Hoje: GitHub Pages do repositório (https://simm-sara.github.io/kyosei/).
// Quando houver domínio próprio (ex.: www.crossfitkyosei.com.br): troque `site` pelo domínio,
// `base` por "/" e atualize public/robots.txt. Nenhum outro arquivo precisa mudar.
export default defineConfig({
  site: "https://simm-sara.github.io",
  base: "/kyosei",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: { format: "directory" },
});
