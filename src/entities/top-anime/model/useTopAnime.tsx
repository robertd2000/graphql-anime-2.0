import { useState } from "react";
import { getAnimeTopList } from "../api";

export const useTopAnime = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = getAnimeTopList(currentPage);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.top?.pageInfo?.total;

  return {
    top: data?.top?.media,
    loading,
    currentPage,
    onChangePage,
    totalPages,
  };
};
