import { AnimeList } from "~entities/anime-list";
import { useTrendings } from "~entities/trendings";
import { Medum } from "~entities/home/types";

export const Trendings = () => {
  const { trendings, loading, currentPage, onChangePage, totalPages } =
    useTrendings();

  return (
    <AnimeList
      data={trendings as Medum[]}
      currentPage={currentPage}
      onChangePage={onChangePage}
      loading={loading}
      totalPages={totalPages as number}
    />
  );
};
