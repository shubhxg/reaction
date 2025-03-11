import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// entry point of the react app
createRoot(document.getElementById("root")).render(
  // <StrictMode> development mode
    <App />
  // </StrictMode>
);
