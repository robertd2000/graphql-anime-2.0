import { useState } from 'react'
import { useParams } from 'react-router'
import { getAnimeReviews } from '~pages/anime/api'

export const useAnimeReviews = () => {
  const { id } = useParams()

  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading } = getAnimeReviews(+id!, currentPage)

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }

  return {
    data: data?.Media.reviews.nodes,
    loading,
    onChangePage,
  }
}
