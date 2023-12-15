import React from 'react';
import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { films } from "../../data/filmsData";
import { Link } from "react-router-dom";
import { MovieListProps } from "./types/MovieListProps";

const MovieList: React.FC<MovieListProps> = ({ searchTerm }) => {
  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchTerm || ''.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {filteredFilms.map((film, index) => (
        <Link to={`/details/${film.title}`} key={`${index}_${film.title}`} className={styles.link}>
          <MovieCard {...film} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
