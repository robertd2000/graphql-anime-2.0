import { AnimeList } from "~entities/anime-list";
import { Medum } from "~entities/home/types";
import { useSearchAnime } from "~features/anime-search/model/hooks/useSearchAnime";

export const AnimeCardList = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useSearchAnime();

  return (
    <AnimeList
      data={data as Medum[]}
      currentPage={currentPage}
      onChangePage={onChangePage}
      loading={loading}
      totalPages={totalPages as number}
    />
  );
};
