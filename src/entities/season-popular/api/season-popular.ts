import { useQuery } from "@apollo/client";
import { GET_SEASON_POPULAR_LIST } from "../query";
import { Season } from "~entities/home/types";
import { getSeason, getYear } from "~entities/home/lib";

export const getSeasonPopularList = (page: number) => {
  const { data, loading } = useQuery<{
    season: Season;
  }>(GET_SEASON_POPULAR_LIST, {
    variables: {
      type: "ANIME",
      page,
      season: getSeason(),
      seasonYear: getYear(),
    },
  });

  return { data, loading };
};
