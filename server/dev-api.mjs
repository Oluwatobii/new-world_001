/**
 * Local dev API: runs the same Netlify-style handlers as production on 127.0.0.1.
 * Start with `yarn dev` (runs this + Vite). The app calls `/api/*` on the Vite origin;
 * Vite proxies those requests here (see vite.config.ts).
 */
import http from 'node:http'
import { loadDotEnv } from './lib/load-dot-env.mjs'
import { handler as portfolio } from './functions/portfolio.js'
import { handler as resume } from './functions/resume.js'
import { handler as sendEmail } from './functions/send-email.js'

loadDotEnv()

const HOST = '127.0.0.1'
const PORT = Number(process.env.DEV_API_PORT) || 8787

/** Maps "METHOD /path" → handler (same modules as `server/functions/` on Netlify). */
const routes = new Map([
  ['GET /api/portfolio', portfolio],
  ['GET /api/resume', resume],
  ['POST /api/send-email', sendEmail]
])

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', chunk => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function writeNetlifyResponse(res, nf) {
  const status = nf.statusCode ?? 500
  const headers = { ...nf.headers }
  let body = nf.body ?? ''

  if (nf.isBase64Encoded && typeof body === 'string') {
    body = Buffer.from(body, 'base64')
  }

  res.writeHead(status, headers)
  res.end(body)
}

function normalizePathname(url) {
  const pathname = url.pathname.replace(/\/$/, '') || '/'
  return pathname
}

http
  .createServer(async (req, res) => {
    try {
      const host = req.headers.host ?? 'localhost'
      const url = new URL(req.url ?? '/', `http://${host}`)
      const pathname = normalizePathname(url)
      const routeKey = `${req.method ?? 'GET'} ${pathname}`
      const handler = routes.get(routeKey)

      if (!handler) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Not found' }))
        return
      }

      const body = req.method === 'POST' ? await readRequestBody(req) : undefined
      const result = await handler({
        httpMethod: req.method,
        path: pathname,
        rawUrl: req.url,
        body,
        headers: req.headers
      })

      writeNetlifyResponse(res, result)
    } catch (error) {
      console.error('[dev-api]', error)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Dev API server error' }))
    }
  })
  .listen(PORT, HOST, () => {
    console.log(`[dev-api] http://${HOST}:${PORT}  ← Vite proxies /api here`)
  })
