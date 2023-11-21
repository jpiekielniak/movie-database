import { Grid, Image, Container } from "@mantine/core";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Grid
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div style={{ justifySelf: 'start' }}>
            <Image src="movie_club.png" alt="Movie Logo" width={120} height={50} />
          </div>
          <div style={{ justifySelf: 'end' }}>
            <SignIn />
          </div>
          <div style={{ justifySelf: 'center', width: '100%' }}>
            <Container>
              <SearchBar />
            </Container>
            <Container style={{ marginTop: '20px' }}>
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
