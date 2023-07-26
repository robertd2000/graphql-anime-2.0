import { LayoutCustom } from "~shared/ui/layout";
import { AnimeOverview } from "~widgets/anime-overview";
import { AnimeSearch } from "~widgets/filter";

export const HomePage = () => {
  return (
    <LayoutCustom>
      <AnimeSearch />
      <AnimeOverview />
    </LayoutCustom>
  );
};
