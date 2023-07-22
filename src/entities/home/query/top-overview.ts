import { gql } from "@apollo/client";
import { MEDIA } from "./media";

export const GET_TOP_OVERVIEW_LIST = gql`
  ${MEDIA}
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
    top: Page(page: 1, perPage: 10) {
      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
