import { useLocation, useNavigate } from "react-router";
import { filterByOptions } from "~features/filters/constants/filter";
import { getLocationTag, replaceQueryLocation } from "~features/filters/lib";

export const useFilterBy = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const filterBy = getLocationTag("sort", search);

  const onSelect = (e: string) => {
    const { queryParams, isQueryLocation } = replaceQueryLocation(
      "sort",
      search,
      e
    );

    if (isQueryLocation) navigate(`/search-anime?sort=${e}`);
    if (!search) navigate(`/search-anime?sort=${e}`);
    else navigate(`/search-anime/?${queryParams}`);
  };

  const onClear = () => {
    const { queryParams } = replaceQueryLocation("sort", search, "");

    navigate(queryParams.startsWith("?") ? queryParams : `?${queryParams}`);
  };

  return {
    filterByOptions,
    filterBy,
    onSelect,
    onClear,
  };
};
