import React from 'react';
import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { films } from "../../data/filmsData";
import { Link } from "react-router-dom";
import { MovieListProps } from "./types/MovieListProps";

const MovieList: React.FC<MovieListProps> = ({ searchTerm }) => {
  const filteredFilms = films.filter(film =>
      film.title.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  const containerClass = filteredFilms.length === 1 ? `${styles.container} ${styles.singleMovie}` : styles.container;

  return (
      <div className={containerClass}>
        {filteredFilms.map((film, index) => (
            <Link to={`/details/${film.title}`} key={`${index}_${film.title}`}>
              <MovieCard {...film} />
            </Link>
        ))}
      </div>
  );
};

export default MovieList;
