import MovieCard from "./MovieCard";
import "../styles/movieList.css";
import React from "react";

interface Film {
  title: string;
  rating: number;
  image: string;
  description: string;
}

interface MovieListProps {
  films: Film[];
}

const MovieList : React.FC<MovieListProps> = ({ films }) => {
  return (
    <div className="movie-container">
      {films.map((film, index) => (
        <div key={index}>
          <MovieCard film={film} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;