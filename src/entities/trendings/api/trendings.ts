import { useQuery } from "@apollo/client";
import { GET_TRENDINGS_LIST } from "../query";
import { Trending } from "~entities/home/types";

export const getAnimeTrendingsList = (page: number) => {
  const { data, loading } = useQuery<{
    trending: Trending;
  }>(GET_TRENDINGS_LIST, {
    variables: {
      type: "ANIME",
      page,
    },
  });

  return { data, loading };
};
