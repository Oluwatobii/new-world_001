import { getConfig, json, request } from '../lib/service.js'

export const handler = async event => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  try {
    const { personalEmail } = getConfig()
    if (!personalEmail) {
      throw new Error('Missing required environment variable: PERSONAL_EMAIL')
    }

    const payload = JSON.parse(event.body || '{}')
    const response = await request('/api/hub/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
        to: personalEmail
      })
    })

    const body = await response.json().catch(() => null)

    if (!response.ok) {
      return json(response.status, body ?? { error: 'Failed to send email' })
    }

    return json(200, body ?? { success: true })
  } catch (error) {
    return json(500, { error: error.message || 'Unexpected server error' })
  }
}
