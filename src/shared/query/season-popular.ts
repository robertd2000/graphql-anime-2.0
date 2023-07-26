import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_SEASON_POPULAR_LIST = gql`
  ${MEDIA}
  query ($page: Int = 1, $season: MediaSeason, $seasonYear: Int) {
    data: Page(page: $page, perPage: 24) {
      pageInfo {
        total
      }
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
