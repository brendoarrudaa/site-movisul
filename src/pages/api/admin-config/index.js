const REPO = 'brendoarrudaa/site-movisul';
const BRANCH = 'main';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://site-movisul.vercel.app';

const SHARED_CONFIG = `
media_folder: public/assets/img
public_folder: /assets/img

slug:
  encoding: ascii
  clean_accents: true

collections:
  - name: posts
    label: Posts
    folder: posts
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Layout", name: "layout", widget: "hidden", default: "post" }
      - { label: "Data", name: "date", widget: "datetime", format: "YYYY-MM-DD HH:mm:ss" }
      - { label: "Imagem", name: "image", widget: "image", required: false }
      - { label: "Titulo", name: "title", widget: "string" }
      - { label: "Descricao", name: "description", widget: "string" }
      - label: "Categoria"
        name: "main-class"
        widget: "select"
        options:
          - ia
          - aplicativos
          - web
          - software
          - outsourcing
          - qa
          - design
          - ux
          - devops
      - label: "Cor"
        name: "color"
        widget: "select"
        options:
          - { label: "IA", value: "#02b7ff" }
          - { label: "Aplicativos", value: "#02d7ff" }
          - { label: "WEB", value: "#8257e6" }
          - { label: "Software", value: "#D6BA32" }
          - { label: "Outsourcing", value: "#EB7728" }
          - { label: "QA", value: "#7D669E" }
          - { label: "Design", value: "#637a91" }
          - { label: "UX", value: "#7AAB13" }
          - { label: "Devops", value: "#B31917" }
      - { label: "Tags", name: "tags", widget: "list", default: [""] }
      - label: "Categoria Label"
        name: "categories"
        widget: "select"
        options:
          - IA
          - Aplicativos
          - WEB
          - Software
          - Outsourcing
          - QA
          - Design
          - UX
          - Devops
      - { label: "Conteudo", name: "body", widget: "markdown" }
`.trimStart();

function buildConfig() {
  const isDev = process.env.NODE_ENV !== 'production';

  const backend = isDev
    ? `local_backend: true\n\nbackend:\n  name: github\n  repo: ${REPO}\n  branch: ${BRANCH}`
    : `backend:\n  name: github\n  repo: ${REPO}\n  branch: ${BRANCH}\n  base_url: ${SITE_URL}\n  auth_endpoint: /api/auth`;

  return `${backend}\n\n${SHARED_CONFIG}`;
}

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/yaml; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(buildConfig());
}
