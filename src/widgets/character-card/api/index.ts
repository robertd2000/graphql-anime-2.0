import { DocumentNode, useQuery } from "@apollo/client";
import { CHARACTER_CARD } from "../query";
import { CharacterCardData } from "../type";

export const getCharacterCard = (characterId: number) => {
  const { data, loading } = useQuery<CharacterCardData>(
    CHARACTER_CARD as DocumentNode,
    {
      variables: {
        id: characterId,
      },
    }
  );

  return {
    data: data?.Character,
    loading,
  };
};
