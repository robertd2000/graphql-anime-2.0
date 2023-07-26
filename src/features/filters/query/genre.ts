import { gql } from "@apollo/client";

export const GENRE_COLLECTION = gql`
  query {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
      description
      category
      isAdult
    }
  }
`;
