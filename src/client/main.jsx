import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Router from "./Router";
import { AuthContextProvider } from "./state/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>
);
