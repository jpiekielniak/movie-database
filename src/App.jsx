import React from "react";
import "./App.css";
import { films } from "./filmsData";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <SearchBar />
      </div>
      <MovieList films={films} />
    </div>
  );
}

export default App;
