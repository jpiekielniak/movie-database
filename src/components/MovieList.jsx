import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movieList.css";

const MovieList = ({ films }) => {
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