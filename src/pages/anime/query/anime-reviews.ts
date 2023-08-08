import { gql } from '@apollo/client'

export const ANIME_REVIEWS = gql`
  query media($id: Int, $page: Int) {
    Media(id: $id) {
      id
      title {
        userPreferred
      }
      reviews(page: $page, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
    }
  }
`
