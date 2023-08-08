import { ReviewNode } from '~shared/types'

export interface AnimeReviewData {
  Media: Media
}

interface Media {
  id: number
  title: Title
  reviews: Reviews
}

export interface Title {
  userPreferred: string
}

export interface Reviews {
  pageInfo: PageInfo
  nodes: ReviewNode[]
}

export interface PageInfo {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
}
