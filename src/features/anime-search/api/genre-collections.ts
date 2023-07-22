import { useQuery } from "@apollo/client";
import { GENRE_COLLECTION } from "../query";

export const getGenreCollection = () => {
  const { data, loading } = useQuery<{ GenreCollection: string[] }>(
    GENRE_COLLECTION
  );

  return { data, loading };
};
