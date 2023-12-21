import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/movieDetails.module.css';
import useStarRating from './hooks/useStarRating';
import { MovieDetailsProps } from './types/MovieDetailsProps';
import axios from 'axios';
import {TMovie} from "./types/Movie";
import {UUID} from "node:crypto";

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: UUID }>();
  const [selectedMovie, setSelectedMovie] = useState<TMovie>();

  useEffect(() => {
    axios
        .get(`https://at.usermd.net/api/movies/${id}`)
        .then(res => setSelectedMovie(res.data))
        .catch(err => console.log(err));
  }, []);
  // const stars = useStarRating(selectedMovie?.rating || 0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={selectedMovie?.image} alt={selectedMovie?.title} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{selectedMovie?.title}</h2>
          <p className={styles.description}>{selectedMovie?.content}</p>
          {/*<div className={styles.rating}>{stars}</div>*/}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
