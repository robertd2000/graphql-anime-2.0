import { useQuery } from "@apollo/client";
import { Season } from "~entities/home/types";
import { getSeason, getYear } from "~entities/home/lib";
import { GET_SEASON_POPULAR_LIST } from "~shared/query";

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
