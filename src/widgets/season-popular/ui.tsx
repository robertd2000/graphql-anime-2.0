import { AnimeList } from "~entities/anime-list";
import { Medum } from "~entities/home/types";
import { useSeasonPopular } from "~entities/season-popular/model";

export const SeasonPopular = () => {
  const { season, loading, currentPage, onChangePage, totalPages } =
    useSeasonPopular();

  return (
    <AnimeList
      data={season as Medum[]}
      currentPage={currentPage}
      onChangePage={onChangePage}
      loading={loading}
      totalPages={totalPages as number}
    />
  );
};
