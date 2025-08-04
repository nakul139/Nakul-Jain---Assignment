import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="643559928932-9399gg2qggv0cd9k1f67k9nadmgb3ffp.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
