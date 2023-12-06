import { Grid, Image, Container } from "@mantine/core";
import MovieList from "../components/MovieCard/MovieList";
import Footer from "../components/footer/Footer";
import SignIn from "../components/Header/SignInButton";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "./styles/App.module.css";

function App() {
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
            <MovieList />
          </Container>
        </div>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
