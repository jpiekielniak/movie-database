import MovieCard from "./MovieCard";
import "../styles/movieList.css";
import { films } from "../filmsData";


const MovieList = () => {
  return (
    <div className="movie-container">
      {films.map((film, index) => (
        <div key={`${index}_${film.title}`}>
        <MovieCard {...film} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;