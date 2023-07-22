import { gql } from "@apollo/client";
import { MEDIA } from "./media";

export const GET_HOME_LIST = gql`
  ${MEDIA}
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
    season: Page(page: 1, perPage: 6) {
      media(
        season: $season
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    nextSeason: Page(page: 1, perPage: 6) {
      media(
        season: $nextSeason
        seasonYear: $nextYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    popular: Page(page: 1, perPage: 6) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
    top: Page(page: 1, perPage: 10) {
      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;

export { GET_TRENDINGS_OVERVIEW_LIST } from "./trendings-overview";
export { GET_NEXT_SEASON_OVERVIEW_LIST } from "./next-season-overview";
export { GET_POPULAR_OVERVIEW_LIST } from "./popular-overview";
export { GET_SEASON_OVERVIEW_LIST } from "./season-overview";
export { GET_TOP_OVERVIEW_LIST } from "./top-overview";
