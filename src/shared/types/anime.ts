import { Media } from ".";

export interface AnimeData {
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
  nextAiringEpisode: any;
  relations: Relations;
  characterPreview: CharacterPreview;
  staffPreview: StaffPreview;
  studios: Studios;
  reviewPreview: ReviewPreview;
  recommendations: Recommendations;
  externalLinks: ExternalLink[];
  streamingEpisodes: StreamingEpisode[];
  trailer: any;
  rankings: Ranking[];
  tags: Tag[];
  mediaListEntry: any;
  stats: Stats;
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

export interface StartDate {
  year: number;
  month: number;
  day: number;
}

export interface EndDate {
  year: number;
  month: number;
  day: number;
}

export interface Relations {
  edges: RelationsEdge[];
}

export interface RelationsEdge {
  id: number;
  relationType: string;
  node: AnimeMiniCard;
}

export interface AnimeMiniCard {
  id: number;
  title: Title2;
  format: string;
  type: string;
  status: string;
  bannerImage?: string;
  coverImage: CoverImage2;
}

export interface Title2 {
  userPreferred: string;
}

export interface CoverImage2 {
  large: string;
}

export interface CharacterPreview {
  pageInfo: PageInfo;
  edges: CharacterPreviewEdge[];
}

export interface CharacterPreviewEdge {
  id: number;
  role: string;
  name: any;
  voiceActors: VoiceActor[];
  voiceActorRoles: VoiceActorRole[];
  node: CharacterPreviewNode;
}

export interface VoiceActorRole {
  roleNotes?: string;
  dubGroup?: string;
  voiceActor: VoiceActor;
}

export interface CharacterPreviewNode {
  id: number;
  name: Name;
  image: Image;
}

export interface Name {
  userPreferred: string;
}

export interface Image {
  large: string;
}

export interface StaffPreview {
  edges: StaffPreviewEdge[];
}

export interface StaffPreviewEdge {
  id: number;
  role: string;
  node: Node3;
}

export interface Node3 {
  id: number;
  name: Name2;
  language: string;
  image: Image2;
}

export interface Name2 {
  userPreferred: string;
}

export interface Image2 {
  large: string;
}

export interface Studios {
  edges: StudioEdge[];
}

export interface StudioEdge {
  isMain: boolean;
  node: StudioNode;
}

export interface StudioNode {
  id: number;
  name: string;
}

export interface ReviewPreview {
  pageInfo: PageInfo;
  nodes: Node4[];
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface Node4 {
  id: number;
  summary: string;
  rating: number;
  ratingAmount: number;
  user: User;
}

export interface User {
  id: number;
  name: string;
  avatar: Avatar;
}

export interface Avatar {
  large: string;
}

export interface Recommendations {
  pageInfo: PageInfo2;
  nodes: RecommendationsNode[];
}

export interface PageInfo2 {
  total: number;
}

export interface RecommendationsNode {
  id: number;
  rating: number;
  userRating: string;
  mediaRecommendation: Media;
  user: User2;
}

export interface MediaRecommendation {
  id: number;
  title: Title3;
  format: string;
  type: string;
  status: string;
  bannerImage: string;
  coverImage: CoverImage3;
}

export interface Title3 {
  userPreferred: string;
}

export interface CoverImage3 {
  large: string;
}

export interface User2 {
  id: number;
  name: string;
  avatar: Avatar2;
}

export interface Avatar2 {
  large: string;
}

export interface ExternalLink {
  id: number;
  site: string;
  url: string;
  type: string;
  language: any;
  color: any;
  icon: any;
  notes: any;
  isDisabled: boolean;
}

export interface Ranking {
  id: number;
  rank: number;
  type: string;
  format: string;
  year?: number;
  season: any;
  allTime: boolean;
  context: string;
}

export interface Tag {
  id: number;
  name: string;
  description: string;
  rank: number;
  isMediaSpoiler: boolean;
  isGeneralSpoiler: boolean;
  userId?: number;
}

export interface Stats {
  statusDistribution: StatusDistribution[];
  scoreDistribution: ScoreDistribution[];
}

export interface StatusDistribution {
  status: string;
  amount: number;
}

export interface ScoreDistribution {
  score: number;
  amount: number;
}

export interface StreamingEpisode {
  site: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface VoiceActor {
  id: number;
  name: VoiceActorName;
  language: string;
  image: VoiceActorImage;
}

export interface VoiceActorName {
  userPreferred: string;
}

export interface VoiceActorImage {
  large: string;
}
