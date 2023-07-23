import { useQuery } from "@apollo/client";
import { GENRE_COLLECTION } from "../query";
import { Genres } from "../types";

export const getGenreCollection = () => {
  const { data, loading } = useQuery<Genres>(GENRE_COLLECTION);

  return { data, loading };
};
