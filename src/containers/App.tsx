import React, { useState } from "react";
import { Grid, Image, Container } from "@mantine/core";
import MovieList from "../components/MovieCard/MovieList";
import Footer from "../components/footer/Footer";
import SignIn from "../components/Header/SignInButton";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "./styles/App.module.css";
import { TFilm } from "../components/MovieCard/types/Film";
import MovieDetails from "../components/MovieCard/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<TFilm | null>(null);

  const handleMovieSelect = (movie: TFilm) => {
    setSelectedMovie(movie);
  };

  const handleGoBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Grid className={styles.section}>
          <div className={styles.logo}>
            <Image src="movie_club.png" alt="Movie Logo" width={120} height={50} />
          </div>
          <div className={styles.signIn}>
            <SignIn />
          </div>
          <div className={styles.contentContainer}>
            <Container>
              <SearchBar />
            </Container>
            <Container className={styles.movieContainer}>
              {!selectedMovie ? (
                <MovieList onMovieSelect={handleMovieSelect} />
              ) : (
                <MovieDetails movie={selectedMovie} onGoBack={handleGoBack} />
              )}
            </Container>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default App;
