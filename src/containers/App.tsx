import { useState } from "react";
import { Grid, Container } from "@mantine/core";
import MovieList from "../components/MovieCard/MovieList";
import styles from "./styles/App.module.css";
import { TMovie } from "../components/MovieCard/types/Movie";
import MovieDetails from "../components/MovieCard/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null);

  const handleMovieSelect = (movie: TMovie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Grid className={styles.section}>
          <div className={styles.contentContainer}>
            <Container>
            </Container>
            <Container className={styles.movieContainer}>
              {!selectedMovie ? (
                <MovieList onMovieSelect={handleMovieSelect} />
              ) : (
                <MovieDetails movie={selectedMovie} />
              )}
            </Container>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default App;
