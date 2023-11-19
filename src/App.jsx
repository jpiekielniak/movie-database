// App.js
import React from "react";
import "./App.css";
import { films } from "./filmsData";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <div className="header-left">
          <img src="movie_club.png" alt="Movie Logo" className="logo" />
        </div>
        <div className="header-right">
          <LoginButton />
        </div>
      </div>
      <div className="main-content">
        <SearchBar />
        <MovieList films={films} />
      </div>
    </div>
  );
}

export default App;
