import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getAnimeStaff } from "~pages/anime/api";
import { AnimeStaff } from "~pages/anime/types";

export const useAnimeStaff = () => {
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<AnimeStaff[]>();

  const {
    data: animeStaff,
    loading,
    fetchMore,
  } = getAnimeStaff(+id!, currentPage);

  const lastRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (animeStaff?.Media.staff.edges.length) {
      setData((prev) => [...(prev || []), ...animeStaff.Media.staff.edges]);
    }
  }, [animeStaff]);

  useEffect(() => {
    if (entry?.isIntersecting && animeStaff?.Media.staff.pageInfo.hasNextPage) {
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
