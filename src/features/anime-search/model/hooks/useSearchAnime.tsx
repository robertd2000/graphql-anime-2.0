import { useState } from "react";
import { useLocation } from "react-router";
import { searchByName } from "~features/anime-search/api";
import { getLocationTag, getLocationTags } from "~features/anime-search/lib";

export const useSearchAnime = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { search } = useLocation();

  const year = getLocationTag("year", search);
  const season = getLocationTag("season", search);
  const seasonYear = getLocationTag("season", search);
  const searchInput = getLocationTag("search", search);
  const genres = getLocationTags("genres", search) || [];
  const format = getLocationTags("format", search);

  const { data, loading, fetchMore } = searchByName({
    page: currentPage,
    search: searchInput || undefined,
    sort: searchInput ? "SEARCH_MATCH" : undefined,
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
