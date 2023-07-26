import { useLocation, useNavigate } from "react-router";
import { seasonsOptions } from "~features/filters/constants";
import { getLocationTag, replaceQueryLocation } from "~features/filters/lib";

export const useSeason = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const yearLocation = getLocationTag("season", search);

  const onSelect = (e: string) => {
    const { queryParams, isQueryLocation } = replaceQueryLocation(
      "season",
      search,
      e
    );

    if (isQueryLocation) navigate(`/search-anime?season=${e}`);
    if (!search) navigate(`/search-anime?season=${e}`);
    else navigate(`/search-anime/?${queryParams}`);
  };

  const onClear = () => {
    const { queryParams } = replaceQueryLocation("season", search, "");

    navigate(queryParams.startsWith("?") ? queryParams : `?${queryParams}`);
  };

  return {
    seasonsOptions,
    yearLocation,
    onSelect,
    onClear,
  };
};
