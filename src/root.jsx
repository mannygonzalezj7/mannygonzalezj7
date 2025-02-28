import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const path = location.pathname.substring(1);

if (path && path !== "404.html") {
  sessionStorage.setItem("redirect", "/" + path);
  location.replace("/");
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
