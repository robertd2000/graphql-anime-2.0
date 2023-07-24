import { getAnimeTrendingsList } from "../api";

export const useTrendings = () => {
  const { data, loading } = getAnimeTrendingsList();

  return { trendings: data?.trending?.media, loading };
};
