import { gql } from "@apollo/client";
import { MEDIA } from "~shared/query";

export const GET_TRENDINGS_LIST = gql`
  ${MEDIA}
  query ($page: Int = 1) {
    trending: Page(page: $page, perPage: 24) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
