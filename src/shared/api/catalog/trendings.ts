import { useQuery } from "@apollo/client";
import { Trending } from "~entities/home/types";
import { GET_TRENDINGS_LIST } from "~shared/query";

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
