export interface AnimeWatchData {
  Media: AnimeWatchMedia
}

export interface AnimeWatchMedia {
  id: number
  streamingEpisodes: StreamingEpisode[]
}

export interface StreamingEpisode {
  site: string
  title: string
  thumbnail: string
  url: string
}
