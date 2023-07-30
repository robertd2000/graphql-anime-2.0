import {
  CoverImage,
  EndDate,
  ExternalLink,
  Ranking,
  StartDate,
  Studios,
  Tag,
  Title,
} from "~shared/types/anime";

export interface AnimeInfo {
  Media: AnimeMedia;
}

export interface AnimeMedia {
  id: number;
  title: Title;
  coverImage: CoverImage;
  bannerImage: string;
  startDate: StartDate;
  endDate: EndDate;
  description: string;
  season: any;
  seasonYear: any;
  type: string;
  format: string;
  status: string;
  episodes: any;
  duration: any;
  chapters: number;
  volumes: number;
  genres: string[];
  synonyms: string[];
  source: string;
  isAdult: boolean;
  isLocked: boolean;
  meanScore: number;
  averageScore: number;
  popularity: number;
  favourites: number;
  isFavouriteBlocked: boolean;
  hashtag: any;
  countryOfOrigin: string;
  isLicensed: boolean;
  isFavourite: boolean;
  isRecommendationBlocked: boolean;
  isReviewBlocked: boolean;
  nextAiringEpisode: {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
  };
  externalLinks: ExternalLink[];
  rankings: Ranking[];
  tags: Tag[];
  studios: Studios;
}
