import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/movieDetails.module.css';
import { MovieDetailsProps } from './types/MovieDetailsProps';
import { UUID } from 'node:crypto';
import useFetchMovie from './hooks/useFetchMovie';
import useDecodeToken from "./hooks/useDecodeToken";

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: UUID }>();
  const [isAdmin, setIsAdmin] = useState(false);
  const movie = useFetchMovie(id);
  const token = localStorage.getItem('token');
  const decodedToken: any = useDecodeToken(token);

  useEffect(() => {
    if (decodedToken && decodedToken.role === 'admin') {
      setIsAdmin(true);
    }
  }, [decodedToken]);

  const handleDeleteMovie = () => {
    console.log('Usuwanie filmu działa ', id);
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
            {isAdmin && (
                <button onClick={handleDeleteMovie} className={styles.deleteButton}>
                  Usuń film
                </button>
            )}
            {/*<div className={styles.rating}>{stars}</div>*/}
          </div>
        </div>
      </div>
  );
};

export default MovieDetails;