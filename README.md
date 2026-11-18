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

Por enquanto as fotos são blocos marcados ("Foto · aula em andamento no box"). Para trocar, coloque o arquivo em `public/fotos/` e passe `src="/fotos/nome.jpg"` no componente `<Foto>` da página. Use JPG/WebP com no máximo uns 1600 px de largura.

## Analytics (LGPD)

Microsoft Clarity (mapa de calor e gravações) e Google Analytics 4 só carregam **depois** que a pessoa aceita no aviso de cookies. Coloque os IDs em `site.json > analytics`. Cliques em links com `data-evento` viram eventos de conversão (`clique_agendar`, `clique_whatsapp`, `clique_precos`, `clique_eventos`, `clique_comunidade`, `clique_plano` etc.).

## Publicação

Qualquer hospedagem estática serve (Netlify, Vercel, Cloudflare Pages, GitHub Pages): comando de build `npm run build`, pasta `dist`. Atualize o domínio em `astro.config.mjs` (`site`) e em `public/robots.txt`.

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
