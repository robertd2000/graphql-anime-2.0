import { useQuery } from '@apollo/client'
import { ANIME_WATCH } from '../query'
import { AnimeWatchData } from '../types/anime-watch'

export const getAnimeWatch = (id: number, page: number) => {
  const { data, loading } = useQuery<AnimeWatchData>(ANIME_WATCH, {
    variables: {
      id,
      page,
    },
  })

  return {
    data: data?.Media,
    loading,
  }
}
