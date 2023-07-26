import { AnimeOverview } from "~widgets/anime-overview";
import { AnimeSearch } from "~widgets/filter";

export const HomePage = () => {
  return (
    <>
      <AnimeSearch />
      <AnimeOverview />
    </>
  );
};
