import { CharacterPreview } from '~shared/types/anime'

export interface AnimeCharacters {
  Media: Media
}

export interface Media {
  id: number
  characters: CharacterPreview
}
