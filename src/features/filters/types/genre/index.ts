export interface Genres {
  genres: string[];
  tags: Tag[];
}

export interface Tag {
  __typename: string;
  name: string;
  description: string;
  category: string;
  isAdult: boolean;
}
