export default async function handler(req, res) {
  const { code } = req.query
  const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const redirectUri = `https://${host}/api/callback`

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
  res.setHeader('Pragma', 'no-cache')

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri
      })
    })

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error_description || data.error)
    }

    const content = JSON.stringify({ token: data.access_token, provider: 'github' })

    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(`<!DOCTYPE html>
<html>
  <body>
    <script>
      (function() {
        function receiveMessage(e) {
          console.debug("receiveMessage", e);
          window.opener.postMessage(
            'authorization:github:success:${content}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })()
    </script>
  </body>
</html>`)
  } catch (e) {
    console.error('OAuth callback error:', e)
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(`<!DOCTYPE html>
<html>
  <body>
    <p>OAuth error: ${e.message}</p>
  </body>
</html>`)
  }
}
