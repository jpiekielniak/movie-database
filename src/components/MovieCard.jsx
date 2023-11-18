import React from "react";
import "../styles/MovieCard.css";

function MovieCard(props) {
  const { title, rating, image, description } = props.film;

  return (
    <div className="movie-card">
      <img className="movie-card-image" src={image} alt="movie_image" />
      <div className="movie-card-info">
        <p>{title}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
