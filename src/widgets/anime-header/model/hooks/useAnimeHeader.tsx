import { useParams } from "react-router";
import { getAnimeHeaderData } from "~widgets/anime-header/api/anime-header-data";

export const useAnimeHeader = () => {
  const { id } = useParams();

  const { data, loading } = getAnimeHeaderData(+id! as number);

  return {
    data: data?.Media,
    loading,
  };
};
