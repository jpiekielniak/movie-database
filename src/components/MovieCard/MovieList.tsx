import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { films } from "../../data/filmsData";
import { Link } from "react-router-dom";
import { MovieListProps } from "./types/MovieListProps";

const MovieList: React.FC<MovieListProps> = () => {
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