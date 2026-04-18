import { json, request } from '../lib/service.js'

const FALLBACK_RESUME_URL = 'https://awss3resume.s3.ca-central-1.amazonaws.com/Resume.pdf'

async function resolveResumePdfUrl() {
  try {
    const response = await request('/api/hub/resume')

    if (!response.ok) {
      return FALLBACK_RESUME_URL
    }

    const payload = await response.json()
    const raw = payload?.url

    if (typeof raw === 'string' && raw.trim()) {
      return raw.trim()
    }
  } catch {
    /* upstream unavailable */
  }
  return FALLBACK_RESUME_URL
}

export const handler = async () => {
  try {
    const location = await resolveResumePdfUrl()
    return {
      statusCode: 302,
      headers: {
        Location: location,
        'Cache-Control': 'public, max-age=60'
      },
      body: ''
    }
  } catch (error) {
    return json(500, { error: error.message || 'Unexpected server error' })
  }
}
