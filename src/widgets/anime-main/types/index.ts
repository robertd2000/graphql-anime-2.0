import {
  CharacterPreview,
  Ranking,
  Recommendations,
  Relations,
  ReviewPreview,
  StaffPreview,
  Stats,
  StreamingEpisode,
} from "~shared/types/anime";

export interface AnimeMain {
  Media: AnimeMainMedia;
}
export interface AnimeMainMedia {
  id: number;
  relations: Relations;
  characterPreview: CharacterPreview;
  staffPreview: StaffPreview;
  reviewPreview: ReviewPreview;
  recommendations: Recommendations;
  streamingEpisodes: StreamingEpisode[];
  trailer: any;
  rankings: Ranking[];
  mediaListEntry: any;
  stats: Stats;
}
