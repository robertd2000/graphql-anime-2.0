import { useLocation, useNavigate } from "react-router";
import { getGenreCollection } from "~features/anime-search/api";
import {
  getLocationTags,
  replaceQueryLocation,
} from "~features/anime-search/lib";

export const useGenreCollection = () => {
  const { data, loading } = getGenreCollection();

  const navigate = useNavigate();
  const { search } = useLocation();

  const genreCollectionOptions = [
    {
      label: "GENRES",
      options:
        data?.genres.map((genre) => ({
          value: genre as string,
          label: genre as string,
        })) || [],
    },
    {
      label: "TAGS",
      options:
        data?.tags.map((tag) => ({
          value: tag.name as string,
          label: tag.name as string,
        })) || [],
    },
  ];

  const currentTags = getLocationTags("genre", search);

  const onSelect = (e: string) => {
    const queryParams = `${search}&genres=${e}`;
    if (!search) navigate(`/search-anime?genres=${e}`);
    else navigate(`/search-anime/${queryParams}`);
  };

  const onClear = () => {
    const { queryParams } = replaceQueryLocation("genres", search, "");

    navigate(queryParams.startsWith("?") ? queryParams : `?${queryParams}`);
  };

  return {
    genreCollectionOptions,
    loading,
    onSelect,
    onClear,
    currentTags,
  };
};
