import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import "./src/scss/styles.scss";
import App from "./src/app";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
