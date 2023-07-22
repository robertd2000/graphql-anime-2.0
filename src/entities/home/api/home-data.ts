import { useQuery } from "@apollo/client";
import { GET_HOME_LIST } from "../query";
import { getNextSeason, getNextYear, getSeason, getYear } from "../lib";
import { HomeData } from "../types";

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
