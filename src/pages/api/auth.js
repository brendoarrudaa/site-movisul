export default function handler(req, res) {
  const { OAUTH_CLIENT_ID } = process.env
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const redirectUri = `https://${host}/api/callback`
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`
  res.redirect(githubUrl)
}
