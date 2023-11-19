import React from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { films } from "./filmsData";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search movies" />
        </div>
      </div>
      <div className="movie-container">
        {films.map((film, index) => (
          <div className="cards" key={index}>
            <MovieCard film={film} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
