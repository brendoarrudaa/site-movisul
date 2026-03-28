export default function AdminCMS() {
  return null
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/html')
  res.write(`<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerenciador de Conteúdo — Movisul</title>
  </head>
  <body>
    <script src="https://unpkg.com/react@^18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@^18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/decap-cms-app/dist/decap-cms-app.js"></script>
    <script>
      window.addEventListener('load', function () {
        DecapCmsApp.init({
          load_config_file: false,
          config: {
            backend: { name: 'github', repo: 'brendoarrudaa/site-movisul', branch: 'main', base_url: 'https://site-movisul.vercel.app', auth_endpoint: '/api/auth' },
            local_backend: false,
            media_folder: 'public/assets/img',
            public_folder: '/assets/img',
            slug: { encoding: 'ascii', clean_accents: true },
            collections: [{
              name: 'posts',
              label: 'Posts',
              folder: 'posts',
              create: true,
              slug: '{{slug}}',
              fields: [
                { label: 'Layout', name: 'layout', widget: 'hidden', default: 'post' },
                { label: 'Data', name: 'date', widget: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' },
                { label: 'Imagem', name: 'image', widget: 'image', required: false },
                { label: 'Título', name: 'title', widget: 'string' },
                { label: 'Descrição', name: 'description', widget: 'string' },
                { label: 'Categoria', name: 'main-class', widget: 'select', options: ['ia','aplicativos','web','software','outsourcing','qa','design','ux','devops'] },
                { label: 'Cor', name: 'color', widget: 'select', options: [
                  { label: 'IA', value: '#02b7ff' },
                  { label: 'Aplicativos', value: '#02d7ff' },
                  { label: 'WEB', value: '#8257e6' },
                  { label: 'Software', value: '#D6BA32' },
                  { label: 'Outsourcing', value: '#EB7728' },
                  { label: 'QA', value: '#7D669E' },
                  { label: 'Design', value: '#637a91' },
                  { label: 'UX', value: '#7AAB13' },
                  { label: 'Devops', value: '#B31917' }
                ]},
                { label: 'Tags', name: 'tags', widget: 'list', default: [''] },
                { label: 'Categoria Label', name: 'categories', widget: 'select', options: ['IA','Aplicativos','WEB','Software','Outsourcing','QA','Design','UX','Devops'] },
                { label: 'Conteúdo', name: 'body', widget: 'markdown' }
              ]
            }]
          }
        })
      })
    </script>
  </body>
</html>`)
  res.end()
  return { props: {} }
}
