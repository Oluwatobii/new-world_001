export const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

const readRequiredEnv = name => {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const getConfig = () => {
  const baseUrl = readRequiredEnv('HUB_BASE_URL')
  const apiKey = readRequiredEnv('HUB_API_KEY')
  const personalEmail = process.env.PERSONAL_EMAIL?.trim()

  return {
    apiKey,
    baseUrl: baseUrl.replace(/\/+$/, ''),
    personalEmail
  }
}

export const request = async (path, init = {}) => {
  const { baseUrl } = getConfig()

  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(init.headers ?? {})
    }
  })
}
