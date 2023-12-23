import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";
import SignInLayout from "./components/auth/SignIn/SignInLayout";
import SignUpLayout from "./components/auth/signUp/SignUpLayout";
import MovieDetails from "./components/MovieCard/MovieDetails";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreateMovieLayout from "./components/createMovie/CreateMovieLayout";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <MantineProvider>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/sign-in" element={<SignInLayout/>}/>
                <Route path="/sign-up" element={<SignUpLayout/>}/>
                <Route path="/details/:id" element={<MovieDetails/>}/>
                <Route path="/add" element={<CreateMovieLayout/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </MantineProvider>
);
