# Site do CrossFit Kyosei

Site institucional do CrossFit Kyosei (Cambuí, Campinas). Feito em [Astro](https://astro.build): gera páginas HTML estáticas e separadas (boas para SEO), com uma transição entre páginas em que uma faixa vermelha varre a tela (Chrome, Edge e Safari recentes; nos outros navegadores a página troca normalmente).

## Rodar no computador

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site final em dist/
```

## O que o box edita (sem mexer em código)

| O quê | Arquivo |
|---|---|
| Eventos e clínicas | `src/content/eventos/`: um arquivo `.md` por evento. Copie `_modelo.md`. |
| Grade de aulas | `src/data/horarios.json` |
| Planos e valores | `src/data/planos.json` (`preco: null` mostra "Consulte") |
| Peças do Armário | `src/data/armario.json` + fotos em `public/fotos/armario/` |
| Contato, links, horário de funcionamento, IDs do Analytics/Clarity | `src/data/site.json` |

Depois de editar, publique de novo. Dá para editar direto no GitHub (botão de lápis no arquivo). Se a hospedagem estiver ligada ao repositório, o site é publicado sozinho.

**Eventos passados:** o site é estático, então um evento só vai para "Anteriores" quando o site é publicado de novo. Qualquer publicação já faz isso.

## Modo rascunho

`"rascunho": true` em `src/data/site.json`:
- mostra as etiquetas amarelas **A CONFIRMAR** nos textos que dependem do box;
- mostra os eventos e peças de exemplo;
- pede para o Google **não indexar** (`noindex`).

Troque para `false` só quando as pendências estiverem resolvidas (veja `PENDENCIAS.md`).

## Fotos

Ficam em `public/fotos/` (WebP, até 1400 px de largura). Todas são do box. Para trocar uma foto, salve a nova com **o mesmo nome de arquivo**: nenhuma página precisa mudar. A lista com o que cada arquivo mostra e onde aparece está em `public/fotos/LEIA-ME.md`.

## Analytics (LGPD)

Microsoft Clarity (mapa de calor e gravações) e Google Analytics 4 só carregam **depois** que a pessoa aceita no aviso de cookies. Coloque os IDs em `site.json > analytics`. Cliques em links com `data-evento` viram eventos de conversão (`clique_agendar`, `clique_whatsapp`, `clique_precos`, `clique_eventos`, `clique_comunidade`, `clique_plano` etc.).

## Publicação

O site é publicado no **GitHub Pages** pelo arquivo `.github/workflows/deploy.yml`, a cada push no `main` (merge de PR ou edição direta no GitHub). Leva um ou dois minutos; o andamento aparece na aba **Actions**.

- Endereço atual: **https://simm-sara.github.io/kyosei/**
- Em **Settings → Pages**, o **Source** precisa estar em **GitHub Actions** (não em "Deploy from a branch", que tenta usar o Jekyll e falha).
- Links internos usam o helper `url()` de `src/lib/site.ts`, que acrescenta o `/kyosei` sozinho. Em páginas novas, use `href={url("/pagina")}` em vez de `href="/pagina"`.

**Domínio próprio:** em `astro.config.mjs`, troque `site` pelo domínio e `base` por `"/"`; atualize `public/robots.txt`; e em Settings → Pages → Custom domain, informe o domínio (DNS: CNAME de `www` para `simm-sara.github.io`).

## Estrutura

```
src/
  pages/        uma página por arquivo (home, horários e planos, eventos, primeira aula, coaches, sobre,
                contato, metodologia, boas práticas, armário, FAQ, privacidade, 404)
  components/   cabeçalho, rodapé, banner de cookies, mapa, cartões etc.
  data/         dados editáveis (JSON)
  content/      eventos (Markdown)
  styles/       global.css (cores do logo: #9A191F e #231F20; fonte Archivo)
public/         logo em SVG, favicon, imagem de compartilhamento, fotos
src/assets/     logo original em PDF (enviado pelo box)
```
