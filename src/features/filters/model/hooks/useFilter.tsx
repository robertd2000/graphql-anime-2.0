import { useLocation } from "react-router";
import { getLocationTag, getLocationTags } from "~features/filters/lib";

export const useFilter = () => {
  const { search } = useLocation();

  const year = getLocationTag("year", search);
  const season = getLocationTag("season", search);
  const seasonYear = getLocationTag("season", search);
  const searchInput = getLocationTag("search", search);
  const genres = getLocationTags("genres", search) || [];
  const format = getLocationTags("format", search);
  const sort = getLocationTag("sort", search);

  return {
    year,
    season,
    seasonYear,
    searchInput,
    genres,
    format,
    sort,
  };
};
