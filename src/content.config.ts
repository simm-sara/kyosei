import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada evento é um arquivo .md em src/content/eventos/.
// Arquivos que começam com "_" (como _modelo.md) são ignorados.
const eventos = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/eventos" }),
  schema: z.object({
    titulo: z.string(),
    tipo: z.enum(["Evento", "Clínica", "Workshop", "Competição", "Open", "Confraternização", "Aulão"]),
    data: z.coerce.date(),
    dataFim: z.coerce.date().optional(),
    horario: z.string().optional(),
    local: z.string().default("No box"),
    resumo: z.string(),
    inscricao: z.string().url().optional(),
    vagas: z.string().optional(),
    valor: z.string().optional(),
    exemplo: z.boolean().default(false),
  }),
});

export const collections = { eventos };
