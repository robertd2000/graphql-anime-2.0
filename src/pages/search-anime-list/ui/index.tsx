import { LayoutCustom } from "~shared/ui/layout";
import { Catalog } from "~widgets/catalog";
import { AnimeSearch } from "~widgets/filter";

export const AnimeList = () => {
  return (
    <LayoutCustom>
      <AnimeSearch />
      <Catalog />
    </LayoutCustom>
  );
};
