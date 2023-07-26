export type CatalogName =
  | "popular"
  | "season-popular"
  | "top-anime"
  | "trendings";

export interface Catalog {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  startDate: StartDate;
  endDate: EndDate;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes?: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  nextAiringEpisode?: NextAiringEpisode;
  mediaListEntry: any;
  studios: Studios;
}

export interface Title {
  userPreferred: string;
  english: string;
  native: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  color?: string;
}

export interface StartDate {
  year: number;
  month: number;
  day: number;
}

export interface EndDate {
  year?: number;
  month?: number;
  day?: number;
}

export interface NextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface Studios {
  edges: Edge[];
}

export interface Edge {
  isMain: boolean;
  node: Node;
}

export interface Node {
  id: number;
  name: string;
}
