import { useQuery } from "@apollo/client";
import { ANIME_INFO } from "../query";
import { AnimeInfo } from "../types";

export const getAnimeInfo = (id: number) => {
  const { data, loading } = useQuery<AnimeInfo>(ANIME_INFO, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
  };
};
