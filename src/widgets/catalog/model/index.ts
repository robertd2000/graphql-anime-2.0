import { useState } from "react";
import { useFilter } from "~features/filters";
import { getCatalog } from "~shared/api";

export const useCatalogData = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { year, season, seasonYear, searchInput, genres, format, sort } =
    useFilter();

  const { data, loading, fetchMore } = getCatalog({
    page: currentPage,
    search: searchInput || undefined,
    sort: searchInput ? "SEARCH_MATCH" : sort,
    type: "ANIME",
    year: year ? year + "%" : undefined,
    season,
    seasonYear: +seasonYear! || undefined,
    genres: genres.length ? (genres as string[]) : undefined,
    format: format.length ? (format as string[]) : undefined,
  });

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.Page?.pageInfo?.total;

  return {
    data: data?.Page?.media,
    loading,
    currentPage,
    onChangePage,
    totalPages,
    fetchMore,
  };
};
