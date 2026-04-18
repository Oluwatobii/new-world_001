import { getConfig, json, request } from '../lib/service.js'

export const handler = async () => {
  try {
    const { apiKey } = getConfig()
    const response = await request(`/api/hub/portfolio/${apiKey}`)

    if (!response.ok) {
      return json(response.status, { error: 'Failed to fetch portfolio data' })
    }

    const payload = await response.json()
    const activeProjects = (payload?.data?.projects ?? []).filter(project => project.active)
    const activeStats = (payload?.data?.stats ?? []).filter(stat => stat.active)

    return json(200, {
      projects: activeProjects,
      stats: activeStats
    })
  } catch (error) {
    return json(500, { error: error.message || 'Unexpected server error' })
  }
}
