import { gql } from "@apollo/client";

export const CHARACTER_TITLES = gql`
  query character(
    $id: Int
    $page: Int
    $sort: [MediaSort]
    $onList: Boolean
    $withRoles: Boolean = false
  ) {
    Character(id: $id) {
      id
      media(page: $page, sort: $sort, onList: $onList)
        @include(if: $withRoles) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          id
          characterRole
          voiceActorRoles(sort: [RELEVANCE, ID]) {
            roleNotes
            voiceActor {
              id
              name {
                userPreferred
              }
              image {
                large
              }
              language: languageV2
            }
          }
          node {
            id
            type
            isAdult
            bannerImage
            title {
              userPreferred
            }
            coverImage {
              large
            }
            startDate {
              year
            }
            mediaListEntry {
              id
              status
            }
          }
        }
      }
    }
  }
`;
