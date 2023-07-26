import { FC } from "react";
import { getNextSeason, getNextYear, getYear } from "~entities/home/lib";
import { useHome } from "~entities/home/model/hooks/useHome";
import { Overview } from "~entities/overview/ui";
import { TopOverview } from "~entities/top-overview";
import { Spinner } from "~shared/ui/spinner";
import { Media } from "~shared/types";

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
        data={trendingAnimeList as Media[]}
        title="TRENDING NOW"
        href="&sort=TRENDING_DESC"
      />
      <Overview
        data={currentSeasonAnimeList as Media[]}
        title="POPULAR THIS SEASON"
        href={`year=${getYear()}&season=SUMMER`}
      />
      <Overview
        data={nextSeasonAnimeList as Media[]}
        title="UPCOMING NEXT SEASON"
        href={`&year=${getNextYear}&season=${getNextSeason()}`}
      />
      <Overview
        data={popularAnimeList as Media[]}
        title="ALL TIME POPULAR"
        href="sort=POPULARITY_DESC"
      />
      <TopOverview data={topAnimeList as Media[]} />
    </>
  );
};
