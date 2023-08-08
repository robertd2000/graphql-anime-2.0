export interface ReviewNode {
  id: number
  summary: string
  rating: number
  ratingAmount: number
  user: User
}

export interface User {
  id: number
  name: string
  avatar: Avatar
}

export interface Avatar {
  large: string
}
