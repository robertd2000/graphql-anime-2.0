import { gql } from "@apollo/client";
import { MEDIA } from "./media";

export const GET_POPULAR_OVERVIEW_LIST = gql`
  ${MEDIA}
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
    popular: Page(page: 1, perPage: 6) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
