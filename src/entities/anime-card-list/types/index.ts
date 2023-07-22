export interface AnimeList {
  Page: {
    __typename: string;
    pageInfo: PageInfo;
    media: Media[];
  };
}

export interface PageInfo {
  __typename: string;
  total: number;
}

export interface Media {
  __typename: string;
  id: number;
  title: Title;
  status: string;
  type: string;
  season: string;
  genres: string[];
  episodes?: number;
  seasonYear: number;
  coverImage: CoverImage;
  averageScore: number;
  studios: Studios;
}

export interface Title {
  __typename: string;
  userPreferred: string;
  english?: string;
  native: string;
}

export interface CoverImage {
  __typename: string;
  large: string;
}

export interface Studios {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: number;
  name: string;
}
