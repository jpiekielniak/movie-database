import "./App.css";
import { films } from "./filmsData";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchBar />
      <div className="main-content">
        <MovieList films={films} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
