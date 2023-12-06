import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import { films } from "../../data/filmsData";


const MovieList = () => {
  return (
    <div className={styles.container}>
      {films.map((film, index) => (
        <div key={`${index}_${film.title}`}>
        <MovieCard {...film} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;