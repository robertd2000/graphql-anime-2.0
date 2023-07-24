import { gql } from "@apollo/client";

const MEDIA_QUERY = `
  fragment media on Media {
    id
    title {
      userPreferred
      english
      native
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry {
      id
      status
    }
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }
`;

export const MEDIA = gql`
  ${MEDIA_QUERY}
`;
