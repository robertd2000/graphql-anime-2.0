import { useLocation, useNavigate } from "react-router";
import { getLocationTag, replaceQueryLocation } from "~features/filters/lib";

export const useSearchByName = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const searchLocation = getLocationTag("search", search);

  const onInput = (e: string) => {
    const { queryParams } = replaceQueryLocation("search", search, e);

    if (!search) navigate(`/search-anime?search=${e}`);
    else navigate(`/search-anime/${queryParams}`);
  };

  return {
    onInput,
    searchLocation,
  };
};
