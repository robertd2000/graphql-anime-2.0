import { useQuery } from "@apollo/client";
import { SEARCH } from "../query";
import { Search, SearchVariables } from "../types";

export const searchByName = (searchVariables: SearchVariables) => {
  const { data, loading, fetchMore } = useQuery<Search>(SEARCH, {
    variables: searchVariables,
  });

  return { data, loading, fetchMore };
};
