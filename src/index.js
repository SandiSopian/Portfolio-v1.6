import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Change <React.StrictMode> to <React.Fragment> for remove warning issue
  <React.Fragment>
    <App />
  </React.Fragment>
);
