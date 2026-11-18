# Pendências antes de publicar

Tudo que aparece com a etiqueta **A CONFIRMAR** no site em modo rascunho.

## Bloqueiam o lançamento
- [ ] **Link do app de agendamento** (o mesmo do Linktree) → `site.json > links.agendamento`. Hoje o botão cai no WhatsApp.
- [ ] **Tabela de planos e preços** → `planos.json`. Os nomes Mensal/Trimestral/Semestral são provisórios.
- [ ] **Totalpass**: qual plano dá acesso.
- [ ] **Horário de funcionamento** (veio do Wellhub) → `site.json > funcionamento`.
- [ ] **Domínio** → `astro.config.mjs` e `public/robots.txt`.
- [ ] **IDs do Clarity e do GA4** → `site.json > analytics`.
- [ ] Trocar `rascunho` para `false`.

## Conteúdo a validar com o box
- [ ] Significado do nome "Kyosei" (共生, "viver e trabalhar juntos pelo bem comum"): home e Sobre.
- [ ] Texto da história (Sobre) e papel da Iris Chiba.
- [ ] Bios do Lucas e da Stella (a partir dos CVs).
- [ ] Passo a passo da primeira aula (processo real do box).
- [ ] Boas práticas (regras internas).
- [ ] Metodologia (validação dos coaches).
- [ ] FAQ, principalmente idade mínima e lesões.
- [ ] Como chegar: estacionamento e referências.
- [ ] Texto de privacidade.

## Links e materiais
- [ ] Link de convite da comunidade do WhatsApp → `site.json > links.comunidadeWhatsapp`.
- [ ] Link direto do perfil do Google (avaliações) → `site.json > links.googleAvaliacoes`.
- [ ] Fotos reais: aula, coaches, sócios, turma, peças do Armário.
- [ ] Eventos reais → apagar os dois arquivos de exemplo em `src/content/eventos/`.
- [ ] Guia de marca para afiliados CrossFit: conferir o uso do nome e se o selo de afiliado deve aparecer (hoje não usamos o logo da CrossFit; só o texto "Box afiliado CrossFit" e a nota de marca registrada no rodapé).

## Fora do site, mas com efeito no SEO
- [ ] Corrigir o cadastro do box no diretório do crossfit.com (nome, endereço e telefone iguais aos do site).
- [ ] Google Business Profile: colocar o link do site, fotos e o horário confirmado.
