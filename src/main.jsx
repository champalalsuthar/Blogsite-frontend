import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import { Toaster } from "react-hot-toast";
import BlogDetailsPage from "./Pages/BlogDetailsPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "blogpost/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "blogs",
        element: <BlogPage />
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      }
    ],
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
