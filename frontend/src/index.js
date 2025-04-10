import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/App";
import { AuthProvider } from "./context/AuthContext";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
</React.StrictMode>
);
