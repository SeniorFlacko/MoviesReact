export interface IMoviesList {
  data: IMovie[];
  total: number;
  offset: number;
  limit: number;
}

export interface IMovie {
  title?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  release_date?: Date;
  poster_path?: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  genres?: string[];
  id?: number;
}
