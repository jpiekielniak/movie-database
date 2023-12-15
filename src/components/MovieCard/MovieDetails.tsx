import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from '../../data/filmsData';
import styles from './styles/movieDetails.module.css';
import useStarRating from './hooks/useStarRating';
import { MovieDetailsProps } from './types/MovieDetailsProps';

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { title } = useParams<{ title: string }>();
  const selectedMovie = films.find((film) => film.title === title);
  const stars = useStarRating(selectedMovie?.rating || 0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={selectedMovie?.image} alt={title} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{selectedMovie?.description}</p>
          <div className={styles.rating}>{stars}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
