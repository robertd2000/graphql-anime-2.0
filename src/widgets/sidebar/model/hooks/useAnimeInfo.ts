import { useParams } from "react-router";
import { getAnimeInfo } from "~widgets/sidebar/api/anime-info";

export const useAnimeInfo = () => {
  const { id } = useParams();

  const { data, loading } = getAnimeInfo(+id!);

  return {
    data: data?.Media,
    loading,
  };
};
