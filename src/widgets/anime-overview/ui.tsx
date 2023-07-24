import { FC } from "react";
import { useHome } from "~entities/home/model/hooks/useHome";
import { Medum } from "~entities/home/types";
import { Overview } from "~entities/overview/ui";
import { TopOverview } from "~entities/top-overview";
import { Spinner } from "~shared/ui/spinner";

export const AnimeOverview: FC = () => {
  const {
    trendingAnimeList,
    currentSeasonAnimeList,
    nextSeasonAnimeList,
    popularAnimeList,
    topAnimeList,
    loading,
  } = useHome();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <>
      <Overview
        data={trendingAnimeList as Medum[]}
        title="TRENDING NOW"
        href="/trendings"
      />
      <Overview
        data={currentSeasonAnimeList as Medum[]}
        title="POPULAR THIS SEASON"
        href="/season-popular"
      />
      <Overview
        data={nextSeasonAnimeList as Medum[]}
        title="UPCOMING NEXT SEASON"
        href="/upcoming"
      />
      <Overview
        data={popularAnimeList as Medum[]}
        title="ALL TIME POPULAR"
        href="/popular"
      />
      <TopOverview data={topAnimeList as Medum[]} />
    </>
  );
};
