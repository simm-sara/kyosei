import site from "../data/site.json";

export { site };

export const enderecoCompleto = `${site.endereco.rua} – ${site.endereco.bairro}, ${site.endereco.cidade} – ${site.endereco.uf}, ${site.endereco.cep}`;

export function whatsappUrl(mensagem = "Olá! Vim pelo site do CrossFit Kyosei.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Link do app de agendamento; enquanto não existir, cai no WhatsApp com mensagem pronta. */
export const agendarUrl =
  site.links.agendamento || whatsappUrl("Olá! Quero agendar uma aula experimental no CrossFit Kyosei.");

export const comunidadeUrl =
  site.links.comunidadeWhatsapp || whatsappUrl("Olá! Quero entrar na comunidade do Kyosei no WhatsApp.");

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;

export const ehLinkExterno = (url: string) => /^https?:\/\//.test(url);

const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const mesesLongos = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const diasSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

// Datas dos eventos vêm como AAAA-MM-DD (UTC meia-noite); lemos em UTC para não "voltar um dia".
export function partesData(d: Date) {
  return {
    dia: String(d.getUTCDate()).padStart(2, "0"),
    mes: meses[d.getUTCMonth()],
    mesLongo: mesesLongos[d.getUTCMonth()],
    ano: d.getUTCFullYear(),
    semana: diasSemana[d.getUTCDay()],
  };
}

export function dataPorExtenso(inicio: Date, fim?: Date) {
  const a = partesData(inicio);
  if (!fim) return `${a.semana}, ${Number(a.dia)} de ${a.mesLongo} de ${a.ano}`;
  const b = partesData(fim);
  if (a.ano === b.ano && a.mesLongo === b.mesLongo) return `${Number(a.dia)} a ${Number(b.dia)} de ${a.mesLongo} de ${a.ano}`;
  return `${Number(a.dia)} de ${a.mesLongo} a ${Number(b.dia)} de ${b.mesLongo} de ${b.ano}`;
}
