import { useQuery } from '@apollo/client'
import { ANIME_CHARACTERS } from '../query'
import { AnimeCharacters } from '../types/anime-characters'

export const getAnimeCharacters = (id: number, page: number) => {
  const { data, loading, fetchMore } = useQuery<AnimeCharacters>(
    ANIME_CHARACTERS,
    {
      variables: {
        id,
        page,
      },
    }
  )

  return { data, loading, fetchMore }
}
