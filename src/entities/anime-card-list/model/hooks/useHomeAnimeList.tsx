import { useState } from "react";
import { getAnimeList } from "../../api";

export const useHomeAnimeList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, fetchMore } = getAnimeList(currentPage);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.Page.pageInfo.total;

  return {
    currentPage,
    onChangePage,
    data: data?.Page?.media,
    loading,
    fetchMore,
    totalPages,
  };
};
