import { useQuery } from '@apollo/client'
import { ANIME_STAFF } from '../query/anime-staff'
import { AnimeStaffData } from '../types/anime-staff'

export const getAnimeStaff = (id: number, page: number) => {
  const { data, loading, fetchMore } = useQuery<AnimeStaffData>(ANIME_STAFF, {
    variables: {
      id,
      page,
    },
  })

  return { data, loading, fetchMore }
}
