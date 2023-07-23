import { useLocation, useNavigate } from "react-router";
import {
  getLocationTag,
  replaceQueryLocation,
} from "~features/anime-search/lib";
import { getYearsSelectOptions } from "~shared/lib";

export const useYear = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const yearOptions = getYearsSelectOptions();

  const yearLocation = getLocationTag("year", search);

  const onSelect = (e: string) => {
    const { queryParams, isQueryLocation } = replaceQueryLocation(
      "year",
      search,
      e
    );

    if (isQueryLocation) navigate(`/search-anime?year=${e}`);
    else if (!search) navigate(`/search-anime?year=${e}`);
    else navigate(`/search-anime/${queryParams}`);
  };

  const onClear = () => {
    const { queryParams } = replaceQueryLocation("year", search, "");

    navigate(queryParams.startsWith("?") ? queryParams : `?${queryParams}`);
  };

  return {
    yearOptions,
    onSelect,
    yearLocation,
    onClear,
  };
};
