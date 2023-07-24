import { AnimeList } from "~entities/anime-list";
import { Medum } from "~entities/home/types";
import { usePopular } from "~entities/popular";

export const Popular = () => {
  const { popular, loading, currentPage, onChangePage, totalPages } =
    usePopular();

  return (
    <AnimeList
      data={popular as Medum[]}
      currentPage={currentPage}
      onChangePage={onChangePage}
      loading={loading}
      totalPages={totalPages as number}
    />
  );
};
