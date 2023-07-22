import { getAnimeTrendingsListOverview } from "../../api";

export const useTrendingOverview = () => {
  const { data, loading } = getAnimeTrendingsListOverview();

  return { trendings: data?.trending?.media, loading };
};
