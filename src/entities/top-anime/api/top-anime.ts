import { useQuery } from "@apollo/client";
import { GET_TOP_ANIME_LIST } from "../query";
import { Top } from "~entities/home/types";

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
