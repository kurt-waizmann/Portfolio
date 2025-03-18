import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
// Import i18n instance
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
