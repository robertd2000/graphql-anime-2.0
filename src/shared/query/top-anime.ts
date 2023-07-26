import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_TOP_ANIME_LIST = gql`
  ${MEDIA}
  query ($page: Int = 1) {
    data: Page(page: $page, perPage: 24) {
      pageInfo {
        total
      }
      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
