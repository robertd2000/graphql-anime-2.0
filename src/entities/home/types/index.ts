export interface HomeData {
  trending: Trending;
  season: Season;
  nextSeason: NextSeason;
  popular: Popular;
  top: Top;
}

export interface Trending {
  pageInfo: {
    total: number;
  };
  media: Medum[];
}

export interface Medum {
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
  mediaListEntry: any;
  nextAiringEpisode: NextAiringEpisode;
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
  color: string;
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
  name: string;
}

export interface Node {
  id: number;
  name: string;
}

export interface Season {
  pageInfo: {
    total: number;
  };
  media: Medum2[];
}

export interface Medum2 {
  id: number;
  title: Title2;
  coverImage: CoverImage2;
  startDate: StartDate2;
  endDate: EndDate2;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: any;
  nextAiringEpisode: any;
  studios: Studios2;
}

export interface Title2 {
  userPreferred: string;
  english: string;
  native: string;
}

export interface CoverImage2 {
  extraLarge: string;
  large: string;
  color?: string;
}

export interface StartDate2 {
  year: number;
  month: number;
  day: number;
}

export interface EndDate2 {
  year: number;
  month: number;
  day: number;
}

export interface Studios2 {
  edges: Edge2[];
}

export interface Edge2 {
  isMain: boolean;
  node: Node2;
}

export interface Node2 {
  id: number;
  name: string;
}

export interface NextSeason {
  media: Medum3[];
}

export interface Medum3 {
  id: number;
  title: Title3;
  coverImage: CoverImage3;
  startDate: StartDate3;
  endDate: EndDate3;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: any;
  nextAiringEpisode: any;
  studios: Studios3;
}

export interface Title3 {
  userPreferred: string;
  english: string;
  native: string;
}

export interface CoverImage3 {
  extraLarge: string;
  large: string;
  color?: string;
}

export interface StartDate3 {
  year: number;
  month: number;
  day: number;
}

export interface EndDate3 {
  year: number;
  month: number;
  day: number;
}

export interface Studios3 {
  edges: Edge3[];
}

export interface Edge3 {
  isMain: boolean;
  node: Node3;
}

export interface Node3 {
  id: number;
  name: string;
}

export interface Popular {
  pageInfo: {
    total: number;
  };
  media: Medum4[];
}

export interface Medum4 {
  id: number;
  title: Title4;
  coverImage: CoverImage4;
  startDate: StartDate4;
  endDate: EndDate4;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: any;
  nextAiringEpisode: any;
  studios: Studios4;
}

export interface Title4 {
  userPreferred: string;
}

export interface CoverImage4 {
  extraLarge: string;
  large: string;
  color?: string;
}

export interface StartDate4 {
  year: number;
  month: number;
  day: number;
}

export interface EndDate4 {
  year: number;
  month: number;
  day: number;
}

export interface Studios4 {
  edges: Edge4[];
}

export interface Edge4 {
  isMain: boolean;
  node: Node4;
}

export interface Node4 {
  id: number;
  name: string;
}

export interface Top {
  pageInfo: {
    total: number;
  };
  media: Medum5[];
}

export interface Medum5 {
  id: number;
  title: Title5;
  coverImage: CoverImage5;
  startDate: StartDate5;
  endDate: EndDate5;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: any;
  volumes: any;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: any;
  nextAiringEpisode: any;
  studios: Studios5;
}

export interface Title5 {
  userPreferred: string;
}

export interface CoverImage5 {
  extraLarge: string;
  large: string;
  color: string;
}

export interface StartDate5 {
  year: number;
  month: number;
  day: number;
}

export interface EndDate5 {
  year: number;
  month: number;
  day: number;
}

export interface Studios5 {
  edges: Edge5[];
}

export interface Edge5 {
  isMain: boolean;
  node: Node5;
}

export interface Node5 {
  id: number;
  name: string;
}
