import { gql } from '@apollo/client'

export const ANIME_STATS = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      trends(sort: ID_DESC) {
        nodes {
          averageScore
          date
          trending
          popularity
        }
      }
      airingTrends: trends(releasing: true, sort: EPISODE_DESC) {
        nodes {
          averageScore
          inProgress
          episode
        }
      }
      distribution: stats {
        status: statusDistribution {
          status
          amount
        }
        score: scoreDistribution {
          score
          amount
        }
      }
    }
  }
`
