import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_SEASON_OVERVIEW_LIST = gql`
  ${MEDIA}
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
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
  }
`;
