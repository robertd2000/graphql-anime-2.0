import { useQuery } from "@apollo/client";
import { Top } from "~entities/home/types";
import { GET_TOP_ANIME_LIST } from "~shared/query";

export const getAnimeTopList = (page: number) => {
  const { data, loading } = useQuery<{
    top: Top;
  }>(GET_TOP_ANIME_LIST, {
    variables: {
      type: "ANIME",
      page,
    },
  });

  return { data, loading };
};
