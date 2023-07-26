import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_TRENDINGS_LIST = gql`
  ${MEDIA}
  query ($page: Int = 1) {
    data: Page(page: $page, perPage: 24) {
      pageInfo {
        total
      }
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
