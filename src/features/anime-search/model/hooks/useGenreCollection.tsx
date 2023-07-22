import { useLocation, useNavigate } from "react-router";
import { getGenreCollection } from "~features/anime-search/api";

export const useGenreCollection = () => {
  const { data, loading } = getGenreCollection();

  const navigate = useNavigate();
  const { search } = useLocation();

  const genreCollectionOptions = data?.GenreCollection.map((genre) => ({
    value: genre,
    label: genre,
  }));

  const onSelect = (e: string) => {
    const queryParams = `${search}&genres=${e}`;
    if (!search) navigate(`/search-anime?genres=${e}`);
    else navigate(`/search-anime/${queryParams}`);
  };

  return {
    genreCollectionOptions,
    loading,
    onSelect,
  };
};
