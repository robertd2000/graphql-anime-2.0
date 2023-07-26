export interface AnimeHeaderData {
  Media: Media;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  bannerImage: string;
  description: string;
}

export interface Title {
  userPreferred: string;
  romaji: string;
  english: string;
  native: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
}
