import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Navigations from "./routes/navigations";

const router = createBrowserRouter(Navigations);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
