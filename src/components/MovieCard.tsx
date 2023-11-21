import "../styles/movieCard.css";

interface Film {
  title: string;
  rating: number;
  image: string;
  description: string;
}

interface MovieCardProps {
  film: Film;
}

function MovieCard(props: MovieCardProps) {
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
