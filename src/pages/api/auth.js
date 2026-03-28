import { auth } from '@openlab/vercel-netlify-cms-github'
import rateLimit from 'lib/rateLimit'

const limiter = rateLimit({ limit: 10, interval: 60_000 })

export default function handler(req, res) {
  if (!limiter.check(req, res)) return
  return auth(req, res)
}
