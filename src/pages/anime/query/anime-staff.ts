import { gql } from '@apollo/client'

export const ANIME_STAFF = gql`
  query media($id: Int, $page: Int) {
    Media(id: $id) {
      id
      staff(page: $page, sort: [RELEVANCE, ID]) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          id
          role
          node {
            id
            name {
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
    }
  }
`
