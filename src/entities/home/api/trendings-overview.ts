import { useQuery } from "@apollo/client";
import { Trending } from "../types";
import { GET_TRENDINGS_OVERVIEW_LIST } from "../query";

export const getAnimeTrendingsListOverview = () => {
  const { data, loading } = useQuery<{ trending: Trending }>(
    GET_TRENDINGS_OVERVIEW_LIST,
    {
      variables: {
        type: "ANIME",
      },
    }
  );

  return { data, loading };
};
