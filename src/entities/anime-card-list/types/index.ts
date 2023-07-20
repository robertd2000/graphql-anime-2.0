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
  studios: {
    nodes: {
      name: string;
    }[];
  };
}

export interface Title {
  __typename: string;
  english?: string;
  native: string;
}

export interface CoverImage {
  __typename: string;
  large: string;
}
