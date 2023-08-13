export interface AnimeStatsData {
  Media: Media
}

export interface Media {
  id: number
  rankings: Ranking[]
  trends: Trends
  airingTrends: AiringTrends
  distribution: Distribution
}

export interface Ranking {
  id: number
  rank: number
  type: string
  format: string
  year?: number
  season: any
  allTime: boolean
  context: string
}

export interface Trends {
  nodes: Node[]
}

export interface Node {
  averageScore: number
  date: number
  trending: number
  popularity: number
}

export interface AiringTrends {
  nodes: AiringTrendsNode[]
}

export interface AiringTrendsNode {
  averageScore: number
  inProgress: number
  episode: number
}

export interface Distribution {
  status: Status[]
  score: Score[]
}

export interface Status {
  status: string
  amount: number
}

export interface Score {
  score: number
  amount: number
}
