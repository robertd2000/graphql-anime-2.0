import { useLocation, useNavigate } from "react-router";
import { formatOptions } from "~features/filters/constants";
import {
  constructLocationTags,
  getLocationTags,
  replaceQueryLocation,
} from "~features/filters/lib";

export const useFormat = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const currentFormats = getLocationTags("format", search);

  const onSelect = (e: string) => {
    const queryParams = `${search}&format=${e}`;
    if (!search) navigate(`/search-anime?format=${e}`);
    else navigate(`/search-anime/?${queryParams}`);
  };

  const onChange = (e: (string | undefined)[]) => {
    const link = constructLocationTags("format", search, e);
    navigate(link);
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
    onChange,
  };
};
