import { FC } from "react";
import { getNextSeason, getNextYear, getYear } from "~entities/home/lib";
import { useHome } from "~entities/home/model/hooks/useHome";
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
        data={trendingAnimeList}
        title="TRENDING NOW"
        href="&sort=TRENDING_DESC"
      />
      <Overview
        data={currentSeasonAnimeList}
        title="POPULAR THIS SEASON"
        href={`year=${getYear()}&season=SUMMER`}
      />
      <Overview
        data={nextSeasonAnimeList}
        title="UPCOMING NEXT SEASON"
        href={`&year=${getNextYear}&season=${getNextSeason()}`}
      />
      <Overview
        data={popularAnimeList}
        title="ALL TIME POPULAR"
        href="sort=POPULARITY_DESC"
      />
      <TopOverview data={topAnimeList} />
    </>
  );
};
