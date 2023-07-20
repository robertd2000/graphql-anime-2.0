import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query Page($page: Int) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
      }
      media {
        id
        title {
          english
          native
        }
        status
        type
        season
        genres
        episodes
        seasonYear
        coverImage {
          large
        }
        averageScore
        studios {
          nodes {
            name
          }
        }
      }
    }
  }
`;
