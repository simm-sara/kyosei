# Pendências antes de publicar

Tudo que aparece com a etiqueta **A CONFIRMAR** no site em modo rascunho.

## Bloqueiam o lançamento
- [ ] **Link do app de agendamento** (o mesmo do Linktree) → `site.json > links.agendamento`. Hoje o botão cai no WhatsApp.
- [ ] **Tabela de planos e preços** → `planos.json`. Os nomes Mensal/Trimestral/Semestral são provisórios.
- [x] Totalpass: a partir do plano TP-4 (Wellhub a partir do Gold).
- [x] Horário de funcionamento de segunda a sexta (6h às 20h15).
- [x] Horário de sábado (até 12h).
- [x] Publicação no GitHub Pages (https://simm-sara.github.io/kyosei/).
- [ ] **Domínio próprio** (opcional) → `astro.config.mjs`, `public/robots.txt` e Settings → Pages.
- [ ] **IDs do Clarity e do GA4** → `site.json > analytics`.
- [ ] Trocar `rascunho` para `false`.

## Conteúdo a validar com o box
- [ ] Significado do nome "Kyosei" (共生, "viver e trabalhar juntos pelo bem comum"): home e Sobre.
- [ ] Texto da história (Sobre) e papel da Iris Chiba. (Gabriel Chiba saiu do time e foi retirado do site.)
- [x] Bio da Stella.
- [ ] Bio do Lucas (a partir do CV).
- [ ] Passo a passo da primeira aula (processo real do box).
- [ ] Boas práticas (regras internas).
- [ ] Metodologia (validação dos coaches).
- [ ] FAQ, principalmente idade mínima e lesões.
- [ ] Como chegar: estacionamento e referências.
- [ ] Texto de privacidade.

## Benefícios da matrícula (`src/data/beneficios.json`)
- [ ] Nome da nutricionista e do fisioterapeuta parceiros, e o desconto de cada um.
- [ ] Lojas parceiras (Sara vai confirmar com o Chiba).
- [ ] O desconto vale também para quem treina por Wellhub/Totalpass, ou só para matrícula direta?
- [ ] Link (Instagram ou site) de cada parceiro, se quiserem divulgar.

## Fotos com crianças
- [ ] `lucas-familia.webp` (Sobre) e `turma-completa.webp` (home e Sobre) mostram crianças. Confirmar a autorização de uso de imagem dos responsáveis antes de publicar.
- [ ] Quem aparece com o Lucas em `lucas-familia.webp`, para escrever a legenda e o texto alternativo.

## Links e materiais
- [ ] Link de convite da comunidade do WhatsApp → `site.json > links.comunidadeWhatsapp`.
- [ ] Link direto do perfil do Google (avaliações) → `site.json > links.googleAvaliacoes`.
- [x] Fotos do Lucas e da Stella (já no site).
- [x] Fotos do box no lugar das do Pexels (lista em `public/fotos/LEIA-ME.md`).
- [ ] Fotos das peças do Armário.
- [ ] Confirmar que as pessoas que aparecem nas fotos concordam com o uso no site.
- [ ] A aula experimental é gratuita? Se for, vale dizer isso nos botões e na chamada final.
- [ ] Eventos reais → apagar os dois arquivos de exemplo em `src/content/eventos/`.
- [ ] Guia de marca para afiliados CrossFit: conferir o uso do nome e se o selo de afiliado deve aparecer (o logo CrossFit® oficial está no hero e no rodapé, em preto ou branco, sem outras alterações).

## Fora do site, mas com efeito no SEO
- [ ] Corrigir o cadastro do box no diretório do crossfit.com (nome, endereço e telefone iguais aos do site).
- [ ] Google Business Profile: colocar o link do site, fotos e o horário confirmado.
