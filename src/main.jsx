import React, { StrictMode } from "react";
import ReactDOM from "react-dom"; // Change this to import from react-dom
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
