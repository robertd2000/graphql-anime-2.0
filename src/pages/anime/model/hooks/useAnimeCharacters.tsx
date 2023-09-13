import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getAnimeCharacters } from "~pages/anime/api";
import { CharacterPreviewEdge } from "~shared/types/anime";

export const useAnimeCharacters = () => {
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<CharacterPreviewEdge[]>();

  const {
    data: animeCharacters,
    loading,
    fetchMore,
  } = getAnimeCharacters(+id!, currentPage);

  const lastRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (animeCharacters?.Media.characters.edges.length) {
      setData((prev) => [
        ...(prev || []),
        ...animeCharacters.Media.characters.edges,
      ]);
    }
  }, [animeCharacters]);

  useEffect(() => {
    if (
      entry?.isIntersecting &&
      animeCharacters?.Media.characters.pageInfo.hasNextPage
    ) {
      const page = currentPage + 1;
      setCurrentPage(page);
      fetchMore({
        variables: {
          id,
          currentPage: page,
        },
      });
    }
  }, [entry, fetchMore]);

  return {
    data,
    loading,
    ref,
  };
};
