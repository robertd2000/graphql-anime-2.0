import { useState } from "react";
import { getPopularList } from "../api";

export const usePopular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = getPopularList(currentPage);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.popular?.pageInfo?.total;

  return {
    popular: data?.popular?.media,
    loading,
    currentPage,
    onChangePage,
    totalPages,
  };
};
