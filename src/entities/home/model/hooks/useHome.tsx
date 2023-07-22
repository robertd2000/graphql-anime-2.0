import { getHomeData } from "~entities/home/api";

export const useHome = () => {
  const { data, loading } = getHomeData();
  return {
    currentSeasonAnimeList: data?.season.media,
    nextSeasonAnimeList: data?.nextSeason.media,
    popularAnimeList: data?.popular.media,
    trendingAnimeList: data?.trending.media,
    topAnimeList: data?.top.media,
    loading,
  };
};
