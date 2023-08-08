export interface AnimeStaffData {
  Media: Media
}

interface Media {
  id: number
  staff: Staff
}

export interface Staff {
  pageInfo: PageInfo
  edges: AnimeStaff[]
}

export interface PageInfo {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
}

export interface AnimeStaff {
  id: number
  role: string
  node: Node
}

export interface Node {
  id: number
  name: Name
  image: Image
}

export interface Name {
  userPreferred: string
}

export interface Image {
  large: string
}
