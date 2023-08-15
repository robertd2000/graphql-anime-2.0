import { useQuery } from "@apollo/client";
import { CHARACTER_TITLES } from "../query";
import { CharacterTitlesData } from "../types";

export const getCharacterTitles = (id: number, page: number, sort: string) => {
  const { data, loading } = useQuery<CharacterTitlesData>(CHARACTER_TITLES, {
    variables: {
      id,
      page,
      sort,
      withRoles: true,
    },
  });

  return { data, loading };
};
