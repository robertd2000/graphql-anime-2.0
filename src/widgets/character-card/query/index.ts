import { gql } from "@apollo/client";

export const CHARACTER_CARD = gql(`
  query character($id: Int) {
    Character(id: $id) {
      id
      name {
        first
        middle
        last
        full
        native
        userPreferred
        alternative
        alternativeSpoiler
      }
      image {
        large
      }
      favourites
      isFavourite
      isFavouriteBlocked
      description
      age
      gender
      bloodType
      dateOfBirth {
        year
        month
        day
      }
    }
  }
`);
