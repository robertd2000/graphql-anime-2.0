import { useQuery } from "@apollo/client";
import { ANIME_MAIN } from "../query/anime-main";
import { AnimeMain } from "../types";

export const getAnimeMain = (id: number) => {
  const { data, loading } = useQuery<AnimeMain>(ANIME_MAIN, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
  };
};
