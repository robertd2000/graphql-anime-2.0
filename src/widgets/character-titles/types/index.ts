export interface CharacterTitlesData {
  Character: Character;
}

export interface Character {
  id: number;
  media: Media;
}

export interface Media {
  pageInfo: PageInfo;
  edges: Edge[];
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface Edge {
  id: number;
  characterRole: string;
  voiceActorRoles: VoiceActorRole[];
  node: Node;
}

export interface VoiceActorRole {
  roleNotes: any;
  voiceActor: VoiceActor;
}

export interface VoiceActor {
  id: number;
  name: Name;
  image: Image;
  language: string;
}

export interface Name {
  userPreferred: string;
}

export interface Image {
  large: string;
}

export interface Node {
  id: number;
  type: string;
  isAdult: boolean;
  bannerImage?: string;
  title: Title;
  coverImage: CoverImage;
  startDate: StartDate;
  mediaListEntry: any;
}

export interface Title {
  userPreferred: string;
}

export interface CoverImage {
  large: string;
}

export interface StartDate {
  year: number;
}
