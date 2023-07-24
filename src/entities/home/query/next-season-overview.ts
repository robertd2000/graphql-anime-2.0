import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_NEXT_SEASON_OVERVIEW_LIST = gql`
  ${MEDIA}
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
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
  }
`;
