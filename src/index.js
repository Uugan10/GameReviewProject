import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextDataProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
