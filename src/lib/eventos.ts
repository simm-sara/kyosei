import { getCollection } from "astro:content";
import { site } from "./site";

/** Eventos separados em próximos (mais perto primeiro) e anteriores (mais recente primeiro).
 *  Um evento é "próximo" até o fim do seu último dia. O site é estático: a separação
 *  acontece na hora de publicar, então publique de novo quando quiser "virar" os eventos. */
export async function eventosSeparados() {
  const todos = (await getCollection("eventos")).filter((e) => site.rascunho || !e.data.exemplo);
  const hoje = new Date();
  hoje.setUTCHours(0, 0, 0, 0);
  const fim = (e: (typeof todos)[number]) => (e.data.dataFim ?? e.data.data).getTime();
  const proximos = todos.filter((e) => fim(e) >= hoje.getTime()).sort((a, b) => a.data.data.getTime() - b.data.data.getTime());
  const anteriores = todos.filter((e) => fim(e) < hoje.getTime()).sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
  return { proximos, anteriores };
}
