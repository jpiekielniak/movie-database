import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { NotFound } from "./components/notFound/NotFound";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import SignInLayout from "./components/auth/SignIn/SignInLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MantineProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<SignInLayout/>} />
    </Routes>
    </BrowserRouter>
  </MantineProvider>
);
