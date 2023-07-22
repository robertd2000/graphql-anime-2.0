import { useQuery } from "@apollo/client";
import {
  getNextSeason,
  getNextYear,
  getSeason,
  getYear,
} from "~entities/home/lib";
import { GET_HOME_LIST } from "~entities/home/query";
import { HomeData } from "~entities/home/types";

export const getHomeData = () => {
  const { data, loading } = useQuery<HomeData>(GET_HOME_LIST, {
    variables: {
      nextSeason: getNextSeason(),
      nextYear: getNextYear(),
      season: getSeason(),
      seasonYear: getYear(),
      type: "ANIME",
    },
  });

  return { data, loading };
};

export { getAnimeTrendingsListOverview } from "./trendings-overview";
