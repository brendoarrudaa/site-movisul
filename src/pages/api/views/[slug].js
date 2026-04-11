import supabase from 'lib/supabase'

export default async function handler(req, res) {
  const { slug } = req.query

  if (!slug) return res.status(400).json({ error: 'slug obrigatorio' })

  if (req.method === 'POST') {
    const { data, error } = await supabase.rpc('increment_views', { post_slug: slug })

    if (error) return res.status(500).json({ error: error.message })

    return res.status(200).json({ views: data })
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('post_views')
      .select('views')
      .eq('slug', slug)
      .single()

    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ views: data?.views ?? 0 })
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end('Method Not Allowed')
}
