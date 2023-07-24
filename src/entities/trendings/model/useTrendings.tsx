import { useState } from "react";
import { getAnimeTrendingsList } from "../api";

export const useTrendings = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = getAnimeTrendingsList(currentPage);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.trending?.pageInfo?.total;

  return {
    trendings: data?.trending?.media,
    loading,
    currentPage,
    onChangePage,
    totalPages,
  };
};
