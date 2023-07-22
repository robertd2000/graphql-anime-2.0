import { AnimeOverview } from "~widgets/anime-overview";
import { AnimeSearch } from "~widgets/search";

export const HomePage = () => {
  return (
    <>
      <AnimeSearch />
      <AnimeOverview />
    </>
  );
};
