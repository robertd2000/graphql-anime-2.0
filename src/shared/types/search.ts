export interface SearchVariables {
  page: number;
  search?: string;
  sort?: string;
  type?: string;
  year?: string;
  season?: string;
  seasonYear?: number;
  genres?: string[];
  format?: string[];
}
