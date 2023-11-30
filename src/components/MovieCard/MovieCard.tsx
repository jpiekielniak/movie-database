import "./styles/movieCard.css";
import { Film } from "./interfaces/Film";


function MovieCard({ title, rating, image, description }: Film) {

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
