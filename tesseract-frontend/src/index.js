import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NewApp from "./components/appCS.js";

ReactDOM.render(
  <React.StrictMode>
    <NewApp />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
