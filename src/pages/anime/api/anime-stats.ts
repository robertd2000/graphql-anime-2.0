import { useQuery } from '@apollo/client'
import { ANIME_STATS } from '../query/anime-stats'
import { AnimeStatsData } from '../types/anime-states'

export const getAnimeStats = (id: number) => {
  const { data, loading, fetchMore } = useQuery<AnimeStatsData>(ANIME_STATS, {
    variables: {
      id,
    },
  })

  return { data, loading, fetchMore }
}
