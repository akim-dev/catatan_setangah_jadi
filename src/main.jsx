import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "../src/components/index.css";
import { getInitialData } from "./data.js";

const DATA = getInitialData();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>
);
