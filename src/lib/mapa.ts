// Mapa do site: dá o breadcrumb, o botão "Voltar" e a direção da transição entre páginas.
// nivel: 0 = início, 1 = páginas do menu, 2 = páginas dentro de outra (pai).
// ordem: posição da esquerda para a direita (como no menu). Ir para uma página "mais funda"
// ou mais à direita anima para frente; ir para cima ou para a esquerda anima voltando.
export type Pagina = { rotulo: string; nivel: number; ordem: number; pai?: string };

export const paginas: Record<string, Pagina> = {
  "": { rotulo: "Início", nivel: 0, ordem: 0 },
  "horarios-e-planos": { rotulo: "Horários e planos", nivel: 1, ordem: 1 },
  "eventos": { rotulo: "Eventos", nivel: 1, ordem: 2 },
  "primeira-aula": { rotulo: "Primeira aula", nivel: 1, ordem: 3 },
  "coaches": { rotulo: "Coaches", nivel: 1, ordem: 4 },
  "sobre": { rotulo: "Sobre", nivel: 1, ordem: 5 },
  "contato": { rotulo: "Contato", nivel: 1, ordem: 6 },
  "faq": { rotulo: "Perguntas frequentes", nivel: 2, ordem: 1, pai: "primeira-aula" },
  "metodologia": { rotulo: "Metodologia", nivel: 2, ordem: 2, pai: "sobre" },
  "boas-praticas": { rotulo: "Boas práticas", nivel: 2, ordem: 3, pai: "sobre" },
  "armario": { rotulo: "Armário", nivel: 2, ordem: 4, pai: "sobre" },
  "privacidade": { rotulo: "Privacidade", nivel: 1, ordem: 9 },
};

/** "/sobre/" -> "sobre"; "/" -> "" (também aceita "sobre.html", da prévia). */
export function slugDe(caminho: string) {
  const ultimo = caminho.replace(/\/+$/, "").split("/").pop() ?? "";
  const s = ultimo.replace(/\.html$/, "");
  return s === "index" ? "" : s;
}

/** Trilha do início até a página atual (inclusive). */
export function trilhaDe(slug: string) {
  const trilha: { slug: string; rotulo: string; href: string }[] = [];
  let atual: string | undefined = slug;
  while (atual !== undefined && paginas[atual]) {
    trilha.unshift({ slug: atual, rotulo: paginas[atual].rotulo, href: atual ? `/${atual}` : "/" });
    atual = atual === "" ? undefined : (paginas[atual].pai ?? "");
  }
  return trilha;
}
