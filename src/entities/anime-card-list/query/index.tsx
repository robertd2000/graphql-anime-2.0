import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query Page($page: Int) {
    Page(page: $page, perPage: 24) {
      pageInfo {
        total
      }
      media {
        id
        title {
          userPreferred
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
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;
