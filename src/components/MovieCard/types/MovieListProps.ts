import { TMovie } from "./Movie";

export type MovieListProps = {
    onMovieSelect: (movie: TMovie) => void;
    searchTerm?: string;
  };