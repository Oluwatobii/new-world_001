export const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

const getRequiredEnv = name => {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const getHubConfig = () => {
  const baseUrl = getRequiredEnv('HUB_BASE_URL')
  const appId = getRequiredEnv('HUB_APP_ID')
  const personalEmail = process.env.PERSONAL_EMAIL?.trim()

  return {
    appId,
    baseUrl: baseUrl.replace(/\/+$/, ''),
    personalEmail
  }
}

export const getHubHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export const hubFetch = async (path, init = {}) => {
  const { baseUrl } = getHubConfig()

  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      ...getHubHeaders(),
      ...(init.headers ?? {})
    }
  })
}
