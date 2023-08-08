import { gql } from '@apollo/client'

export const ANIME_WATCH = gql`
  query media($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id

      streamingEpisodes {
        site
        title
        thumbnail
        url
      }
    }
  }
`
