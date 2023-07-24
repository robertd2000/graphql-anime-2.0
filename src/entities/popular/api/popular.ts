import { useQuery } from "@apollo/client";
import { GET_POPULAR_LIST } from "../query";
import { Popular } from "~entities/home/types";

export const getPopularList = (page: number) => {
  const { data, loading } = useQuery<{
    popular: Popular;
  }>(GET_POPULAR_LIST, {
    variables: {
      type: "ANIME",
      page,
    },
  });

  return { data, loading };
};
