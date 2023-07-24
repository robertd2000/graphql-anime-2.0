import { AnimeList } from "~entities/anime-list";
import { Medum } from "~entities/home/types";
import { useTopAnime } from "~entities/top-anime";

export const TopAnime = () => {
  const { top, loading, currentPage, onChangePage, totalPages } = useTopAnime();

  return (
    <AnimeList
      data={top as Medum[]}
      currentPage={currentPage}
      onChangePage={onChangePage}
      loading={loading}
      totalPages={totalPages as number}
    />
  );
};
