import { useState } from "react";
import { getSeasonPopularList } from "../api";

export const useSeasonPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = getSeasonPopularList(currentPage);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.season?.pageInfo?.total;

  return {
    season: data?.season?.media,
    loading,
    currentPage,
    onChangePage,
    totalPages,
  };
};
