import { getAnimeStats } from '~pages/anime/api/anime-stats'
import { useParams } from 'react-router'

export const useAnimeStats = () => {
  const { id } = useParams()

  const { data, loading } = getAnimeStats(+id!)

  const trendsData = {
    labels:
      [...(data?.Media.trends.nodes || [])]
        ?.reverse()
        ?.map((i) => new Date(i.date * 1000).getDate() + 'th') || [],
    datasets: [
      {
        label: 'Recent Activity Per Day',
        data:
          [...(data?.Media.trends.nodes || [])]
            ?.reverse()
            ?.map((i) => i.trending) || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const airingTrendsData = {
    labels:
      [...(data?.Media.airingTrends.nodes || [])]
        ?.reverse()
        ?.map((i) => i.episode) || [],
    datasets: [
      {
        label: 'Airing Score Progression',
        data:
          [...(data?.Media.airingTrends.nodes || [])]
            ?.reverse()
            ?.map((i) => i.averageScore) || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const watchData = {
    labels:
      [...(data?.Media.airingTrends.nodes || [])]
        ?.reverse()
        ?.map((i) => i.episode) || [],
    datasets: [
      {
        label: 'Airing Watchers Progression',
        data:
          [...(data?.Media.trends.nodes || [])]
            ?.reverse()
            ?.map((i) => i.popularity) || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return {
    data,
    loading,
    airingTrendsData,
    trendsData,
    watchData,
  }
}
