export interface CharacterCardData {
  Character: Character;
}

export interface Character {
  id: number;
  name: Name;
  image: Image;
  favourites: number;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  description: string;
  age: string;
  gender: string;
  bloodType: string;
  dateOfBirth: DateOfBirth;
}

export interface Name {
  first: string;
  middle: string;
  last: string;
  full: string;
  native: string;
  userPreferred: string;
  alternative: string[];
  alternativeSpoiler: string[];
}

export interface Image {
  large: string;
}

export interface DateOfBirth {
  year: any;
  month: number;
  day: number;
}
