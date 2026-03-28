import { auth } from '@openlab/vercel-netlify-cms-github'

export default function handler(req, res) {
  return auth(req, res)
}
