import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../query";
import { AnimeList } from "../types";

export const getAnimeList = (page: number) => {
  const { data, loading, fetchMore } = useQuery<AnimeList>(GET_ANIME_LIST, {
    variables: {
      page,
    },
  });

  return { data, loading, fetchMore };
};
