import { useParams } from "react-router";
import { getCharacterTitles } from "../api";
import { useState } from "react";

export const useCharacterTitles = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortTerm, setSortTerm] = useState("TRENDING");

  const { data, loading } = getCharacterTitles(+id!, currentPage, sortTerm);

  return {
    data: data?.Character.media,
    loading,
  };
};
