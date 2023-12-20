import styles from "./styles/movieCard.module.css";
import { TMovie } from "./types/Movie";

function MovieCard({ title, image }: TMovie) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="movie_image" />
      <div className={styles.info}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
