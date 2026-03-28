export default function AdminCMS() {
  return null
}

export async function getServerSideProps({ req, res }) {
  const host = req.headers.host || ''
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1')
  if (!isLocal && process.env.NODE_ENV === 'production' && !req.headers['x-netlify-user']) {
    res.writeHead(401, { 'WWW-Authenticate': 'Bearer' })
    res.end('Unauthorized')
    return { props: {} }
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerenciador de Conteúdo — Movisul</title>
  </head>
  <body>
    <script src="https://unpkg.com/netlify-cms@2.10.192/dist/netlify-cms.js" integrity="sha384-5YB/DZklEMj4X4fIhBQJMoX6lMkXAJwZ2Ek5yyBkdH4z+ZHzJY9CzBfL6DQNTZ8" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/netlify-cms-locales@1.5.0/dist/locale-pt.js" integrity="sha384-diOgeiy5vZ4CrubxqsmShbo1nYYvsC2CmiFv8uc+jhC8gc6SxdmolvTYhaRFq8XQ" crossorigin="anonymous"></script>
    <script>
      window.CMS_MANUAL_INIT = true
      window.addEventListener('load', function () {
        if (window.netlifyLocales && window.netlifyLocales.pt) {
          CMS.registerLocale('pt', window.netlifyLocales.pt)
        }
        CMS.init({
          config: {
            locale: 'pt',
            backend: { name: 'github', repo: 'quicklab-tech/site-geilson', branch: 'main' },
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
