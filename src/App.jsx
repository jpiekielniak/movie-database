import React from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { films } from "./filmsData";

function App() {
  return (
    <div className="movie-container">
      {films.map((film, index) => (
        <div className="cards" key={index}>
          <MovieCard film={film} />
        </div>
      ))}
    </div>
  );
}

export default App;
