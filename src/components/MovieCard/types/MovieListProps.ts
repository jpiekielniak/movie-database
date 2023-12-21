import {UUID} from "node:crypto";

export type MovieListProps = {
    onMovieSelect: (id : UUID) => void;
    searchTerm?: string;
  };