import { useState } from "react";
import { Grid, Image, Container } from "@mantine/core";
import MovieList from "../components/MovieCard/MovieList";
import Footer from "../components/footer/Footer";
import SignIn from "../components/Header/SignInButton";
import { SearchBar } from "../components/SearchBar/SearchBar";
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
                <MovieDetails movie={selectedMovie} />
              )}
            </Container>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
