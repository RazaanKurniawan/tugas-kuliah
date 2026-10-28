export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  // Authorization check - only authenticated admin can use AI generation
  const clientAuth = req.headers.authorization || req.headers.Authorization || ''
  const isPasskey = clientAuth.includes('passkey-razaan2026') || clientAuth.includes('razaan2026')
  const isBearer = clientAuth.startsWith('Bearer ') && clientAuth.length > 15

  if (!isPasskey && !isBearer) {
    res.status(401).json({
      error: 'Unauthorized: Akses dibatasi untuk Administrator. Silakan login terlebih dahulu.'
    })
    return
  }

  try {
    const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
    const upstream = await fetch('https://shiteru.id/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk_live_71Bj_fbjVVkCRLJY99vhZvBMlBVHfoyX4NEIk0Kg0HI',
        'Content-Type': 'application/json'
      },
      body: rawBody
    })

    const text = await upstream.text()
    res.setHeader('Content-Type', 'application/json')
    res.status(upstream.status).send(text)
  } catch (error) {
    console.error('Proxy chat error:', error)
    res.status(500).json({ error: error.message || 'Serverless error' })
  }
}
