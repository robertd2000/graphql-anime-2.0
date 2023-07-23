import { useLocation, useNavigate } from "react-router";
import { formatOptions } from "~features/anime-search/constants";
import {
  getLocationTags,
  replaceQueryLocation,
} from "~features/anime-search/lib";

export const useFormat = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const currentFormats = getLocationTags("format", search);

  const onSelect = (e: string) => {
    const queryParams = `${search}&format=${e}`;
    if (!search) navigate(`/search-anime?format=${e}`);
    else navigate(`/search-anime/${queryParams}`);
  };

  const onClear = () => {
    const { queryParams } = replaceQueryLocation("format", search, "");

    navigate(queryParams.startsWith("?") ? queryParams : `?${queryParams}`);
  };

  return {
    formatOptions,
    currentFormats,
    onSelect,
    onClear,
  };
};
