import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'api-chat-dev-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const isChat = req.url === '/api/chat' || req.url?.startsWith('/api/chat?') ||
                         req.url === '/v1/chat/completions' || req.url?.startsWith('/v1/chat/completions?')
          if (isChat) {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

            if (req.method === 'OPTIONS') {
              res.statusCode = 204
              res.end()
              return
            }

            if (req.method === 'POST') {
              const clientAuth = req.headers['authorization'] || req.headers['Authorization'] || ''
              const isPasskey = clientAuth.includes('passkey-razaan2026') || clientAuth.includes('razaan2026')
              const isBearer = clientAuth.startsWith('Bearer ') && clientAuth.length > 15

              if (!isPasskey && !isBearer) {
                res.statusCode = 401
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({
                  error: 'Unauthorized: Akses dibatasi untuk Administrator. Silakan login terlebih dahulu.'
                }))
                return
              }

              let body = ''
              req.on('data', chunk => { body += chunk })
              req.on('end', async () => {
                try {
                  const upstream = await fetch('https://shiteru.id/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                      'Authorization': 'Bearer sk_live_71Bj_fbjVVkCRLJY99vhZvBMlBVHfoyX4NEIk0Kg0HI',
                      'Content-Type': 'application/json'
                    },
                    body
                  })

                  const text = await upstream.text()
                  res.statusCode = upstream.status
                  res.setHeader('Content-Type', 'application/json')
                  res.end(text)
                } catch (err) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: err.message }))
                }
              })
              return
            }
          }
          next()
        })
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
