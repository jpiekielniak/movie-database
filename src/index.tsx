import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import SignInLayout from "./components/auth/SignIn/SignInLayout";
import SignUpLayout from "./components/auth/signUp/SignUpLayout";
import MovieDetails from "./components/MovieCard/MovieDetails";
import NotFound  from "./components/notFound/NotFound";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MantineProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/sign-in" element={<SignInLayout/>} />
      <Route path="/sign-up" element={<SignUpLayout/>} />
      <Route path="/details/:title" element={<MovieDetails />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </MantineProvider>
);
