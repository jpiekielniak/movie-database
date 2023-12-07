import { FaStar } from 'react-icons/fa';
import React from 'react';
import { TFilm } from './types/Film';
import { useParams } from 'react-router-dom';
import { films } from '../../data/filmsData';
import styles from './styles/movieDetails.module.css';

interface MovieDetailsProps {
  movie?: TFilm;
  onGoBack?: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { title } = useParams<{ title: string }>();
  const selectedMovie = films.find((film) => film.title === title);

  const renderStars = (numberOfStars: number) => {
    const stars = [];
    const totalStars = 10;

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        i < numberOfStars ? <FaStar key={i} color="gold" /> : <FaStar key={i} color="gray" />
      );
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={selectedMovie?.image} alt={title} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{selectedMovie?.description}</p>
          <div className={styles.rating}>{renderStars(selectedMovie?.rating || 0)}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
