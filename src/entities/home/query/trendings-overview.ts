import { gql } from "@apollo/client";
import { MEDIA } from "./media";

export const GET_TRENDINGS_OVERVIEW_LIST = gql`
  ${MEDIA}
  query {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
`;
