import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { NotFound } from "./components/NotFound/NotFound";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MantineProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  </MantineProvider>
);
