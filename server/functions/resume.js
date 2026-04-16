import { hubFetch, json } from '../lib/hub.js'

export const handler = async () => {
  try {
    const response = await hubFetch('/api/hub/resume')

    if (!response.ok) {
      return json(response.status, { error: 'Failed to fetch resume URL' })
    }

    const payload = await response.json()
    return json(200, { url: payload?.url ?? null })
  } catch (error) {
    return json(500, { error: error.message || 'Unexpected server error' })
  }
}
