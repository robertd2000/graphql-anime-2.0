import { useParams } from "react-router";
import { getAnimeMain } from "~widgets/anime-main/api";

export const useAnimeMain = () => {
  const { id } = useParams();

  const { data, loading } = getAnimeMain(+id!);

  return {
    data: data?.Media,
    loading,
  };
};
