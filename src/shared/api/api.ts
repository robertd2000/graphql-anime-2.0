import { CatalogName } from "~shared/constants";
import {
  getAnimeTopList,
  getAnimeTrendingsList,
  getPopularList,
  getSeasonPopularList,
} from "./catalog";

export const catalogApi: {
  [key in CatalogName]: any;
} = {
  popular: getPopularList,
  "season-popular": getSeasonPopularList,
  "top-anime": getAnimeTopList,
  trendings: getAnimeTrendingsList,
};

export * from "./catalog";
