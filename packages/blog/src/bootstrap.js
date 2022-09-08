import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.hydrateRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
