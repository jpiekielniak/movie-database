import { useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { films } from "../../data/filmsData";
import { TFilm } from "./types/Film";
import { Link } from "react-router-dom";

type MovieListProps = {
  onMovieSelect: (movie: TFilm) => void;
};


const MovieList: React.FC<MovieListProps> = ({onMovieSelect}) => {
  return (
    <div className={styles.container}>
      {films.map((film, index) => (
        <Link to={`/details/${film.title}`} key={`${index}_${film.title}`} className={styles.link}>
          <MovieCard {...film} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;