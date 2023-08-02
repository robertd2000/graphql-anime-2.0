import { useState } from 'react'
import { useParams } from 'react-router'
import { getAnimeCharacters } from '~pages/anime/api'

export const useAnimeCharacters = () => {
  const { id } = useParams()

  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading, fetchMore } = getAnimeCharacters(+id!, currentPage)

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const totalPages = data?.Media.characters.pageInfo.total

  return {
    data: data?.Media.characters.edges,
    loading,
    currentPage,
    totalPages,
    onChangePage,
    fetchMore,
  }
}
