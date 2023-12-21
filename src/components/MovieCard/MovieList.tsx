import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { Link } from "react-router-dom";
import { MovieListProps } from "./types/MovieListProps";
import axios from "axios";
import { TMovie } from "./types/Movie";

const MovieList: React.FC<MovieListProps> = ({ searchTerm }) => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
        .then(res => setMovies(res.data))
        .catch(err => console.log(err));
  }, []);

  const filteredFilms = movies.filter(film =>
      film.title.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  const containerClass = filteredFilms.length === 1 ? `${styles.container} ${styles.singleMovie}` : styles.container;

  return (
      <div className={containerClass}>
        {filteredFilms.map((film, index) => (
            <Link to={`/details/${film.id}`} key={`${index}`}>
              <MovieCard {...film} />
            </Link>
        ))}
      </div>
  );
};

export default MovieList;
