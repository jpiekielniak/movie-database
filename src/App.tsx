import "./App.css";
import { films } from "./filmsData";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header /> 
      <div className="main-content">
        <SearchBar />
        <MovieList films={films} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
