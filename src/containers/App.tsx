import React, { useState } from "react";
import { Grid, Container } from "@mantine/core";
import MovieList from "../components/MovieCard/MovieList";
import styles from "./styles/App.module.css";
import MovieDetails from "../components/MovieCard/MovieDetails";
import SearchBar from "../components/SearchBar/SearchBar";
import {UUID} from "node:crypto";

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<UUID>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleMovieSelect = (id : UUID) => {
    setSelectedMovie(id);
  };

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Grid className={styles.section}>
          <div className={styles.contentContainer}>
            <Container>
              <SearchBar onSearch={handleSearch} />
            </Container>
            <Container className={styles.movieContainer}>
              {!selectedMovie ? (
                <MovieList onMovieSelect={handleMovieSelect} searchTerm={searchTerm} /> 
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
