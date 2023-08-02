import { gql } from '@apollo/client'

export const ANIME_CHARACTERS = gql`
  query media($id: Int, $page: Int) {
    Media(id: $id) {
      id
      characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {
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
          name
          voiceActorRoles(sort: [RELEVANCE, ID]) {
            roleNotes
            dubGroup
            voiceActor {
              id
              name {
                userPreferred
              }
              language: languageV2
              image {
                large
              }
            }
          }
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
