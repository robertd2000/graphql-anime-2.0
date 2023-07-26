import { useQuery } from "@apollo/client";
import { CATALOG } from "~shared/query";
import { Catalog, SearchVariables } from "~shared/types";

export const getCatalog = (searchVariables: SearchVariables) => {
  const { data, loading, fetchMore } = useQuery<Catalog>(CATALOG, {
    variables: searchVariables,
  });

  return { data, loading, fetchMore };
};
