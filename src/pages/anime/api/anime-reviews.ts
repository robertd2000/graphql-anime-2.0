import { useQuery } from '@apollo/client'
import { ANIME_REVIEWS } from '../query'
import { AnimeReviewData } from '../types/anime-reviews'

export const getAnimeReviews = (id: number, page: number) => {
  const { data, loading, fetchMore } = useQuery<AnimeReviewData>(
    ANIME_REVIEWS,
    {
      variables: {
        id,
        page,
      },
    }
  )

  return {
    data,
    loading,
    fetchMore,
  }
}
