import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme({});

root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
