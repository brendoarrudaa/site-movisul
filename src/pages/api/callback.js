import { AuthorizationCode } from 'simple-oauth2'

const config = {
  client: {
    id: process.env.OAUTH_CLIENT_ID || '',
    secret: process.env.OAUTH_CLIENT_SECRET || ''
  },
  auth: {
    tokenHost: process.env.OAUTH_HOST || 'https://github.com',
    tokenPath: process.env.OAUTH_TOKEN_PATH || '/login/oauth/access_token',
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || '/login/oauth/authorize'
  }
}

function renderResponse(status, content) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Authorizing ...</title>
  </head>
  <body>
    <p id="message"></p>
    <script>
      function sendMessage(message) {
        document.getElementById("message").innerText = message;
        document.title = message;
      }
      function receiveMessage(message) {
        console.debug("receiveMessage", message);
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
        sendMessage("Authorized, closing ...");
      }
      sendMessage("Authorizing ...");
      window.addEventListener("message", receiveMessage, false);
      console.debug("postMessage", "authorizing:github", "*");
      window.opener.postMessage("authorizing:github", "*");
    </script>
  </body>
</html>`
}

export default async function handler(req, res) {
  try {
    const code = req.query.code
    const { host } = req.headers

    const client = new AuthorizationCode(config)
    const accessToken = await client.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`
    })

    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(
      renderResponse('success', {
        token: accessToken.token.access_token,
        provider: 'github'
      })
    )
  } catch (e) {
    console.error('OAuth callback error:', e)
    res.status(200).send(renderResponse('error', e))
  }
}
