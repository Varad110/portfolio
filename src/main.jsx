/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import App from "./App.jsx";
import LazyPage from "./LazyPage.jsx";

const Projects = lazy(() => import("./pages/Projects.jsx"));
const Certificates = lazy(() => import("./pages/Certificates.jsx"));
const ErrorPage = lazy(() => import("./component/ErrorPage.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route
        path="/projects"
        element={
          <LazyPage>
            <Projects />
          </LazyPage>
        }
      />
      <Route
        path="/certificates"
        element={
          <LazyPage>
            <Certificates />
          </LazyPage>
        }
      />

      {/* Handle invalid path */}
      <Route
        path="*"
        element={
          <LazyPage>
            <ErrorPage />
          </LazyPage>
        }
      />
    </>
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
