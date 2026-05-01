import { api } from '@/lib/api'

export interface PortfolioProject {
  id: string
  title: string
  description: string
  image: string
  color: string
  url: string
  active: boolean
  stack?: string[]
}

export interface PortfolioStat {
  id: string
  subject: string
  stat: string
  active: boolean
}

interface PortfolioPayload {
  projects?: PortfolioProject[]
  stats?: PortfolioStat[]
}

let portfolioRequest: Promise<PortfolioPayload> | null = null

export const getPortfolioData = async () => {
  if (!portfolioRequest) {
    portfolioRequest = fetch(api.portfolio)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data')
        }

        return response.json() as Promise<PortfolioPayload>
      })
      .catch(error => {
        portfolioRequest = null
        throw error
      })
  }

  return portfolioRequest
}
