import styles from "./styles/movieCard.module.css";
import { Film } from "./types/Film";

function MovieCard({ title, rating, image, description }: Film) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="movie_image" />
      <div className={styles.info}>
        <p>{title}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
