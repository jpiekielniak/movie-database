import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/movieDetails.module.css';
import { MovieDetailsProps } from './types/MovieDetailsProps';
import { UUID } from 'node:crypto';
import useFetchMovie from './hooks/useFetchMovie';
import useDecodeToken from './hooks/useDecodeToken';
import useDeleteMovie from "./hooks/useDeleteMovie";

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { movieId } = useParams<{ movieId: UUID }>();
  const [isAdmin, setIsAdmin] = useState(false);
  const movie = useFetchMovie(movieId);
  const token = localStorage.getItem('token');
  const decodedToken: any = useDecodeToken(token);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(true);
  const deleteMovie = useDeleteMovie();

  useEffect(() => {
    if (decodedToken && decodedToken.role === 'admin') {
      setIsAdmin(true);
    }
  }, [decodedToken]);

  const handleDeleteMovie = () => {
    setShowConfirmation(true);
    setIsDeleteButtonVisible(false);
  };

  const confirmDelete = () => {
    deleteMovie(movieId, token);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setIsDeleteButtonVisible(true);
  };

  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={movie?.image} alt={movie?.title} className={styles.image} />
          </div>
          <div className={styles.details}>
            <h2 className={styles.title}>{movie ? movie.title : 'Loading...'}</h2>
            <p className={styles.description}>{movie ? movie.content : 'Loading...'}</p>
            {isAdmin && isDeleteButtonVisible && (
                <button onClick={handleDeleteMovie} className={`${styles.deleteButton} ${styles.redButton}`}>
                  Usuń film
                </button>
            )}
            {showConfirmation && (
                <div className={styles.confirmationBox}>
                  <p>Czy na pewno chcesz usunąć ten film?</p>
                  <button onClick={confirmDelete} className={styles.confirmButton}>Tak</button>
                  <button onClick={cancelDelete} className={styles.cancelButton}>Anuluj</button>
                </div>
            )}
            {/*<div className={styles.rating}>{stars}</div>*/}
          </div>
        </div>
      </div>
  );
};

export default MovieDetails;
