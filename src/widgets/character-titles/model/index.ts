import { useParams } from "react-router";
import { getCharacterTitles } from "../api";
import { useEffect, useRef, useState } from "react";
import { CharacterTitlesDataEdge } from "../types";
import { useIntersection } from "@mantine/hooks";

export const useCharacterTitles = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<CharacterTitlesDataEdge[]>();

  const [sortTerm, setSortTerm] = useState("TRENDING");

  const {
    data: charactersTitle,
    loading,
    fetchMore,
  } = getCharacterTitles(+id!, currentPage, sortTerm);

  const lastRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (charactersTitle?.Character.media.edges.length) {
      setData((prev) => [
        ...(prev || []),
        ...charactersTitle?.Character.media.edges,
      ]);
    }
  }, [charactersTitle]);

  console.log(
    charactersTitle?.Character.media.pageInfo.hasNextPage,
    currentPage
  );

  useEffect(() => {
    if (
      entry?.isIntersecting &&
      charactersTitle?.Character.media.pageInfo.hasNextPage
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
