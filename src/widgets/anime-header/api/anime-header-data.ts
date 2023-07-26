import { useQuery } from "@apollo/client";
import { ANIME_HEADER } from "../query/anime-header-data";
import { AnimeHeaderData } from "../types";

export const getAnimeHeaderData = (id: number) => {
  const { data, loading } = useQuery<AnimeHeaderData>(ANIME_HEADER, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
  };
};
