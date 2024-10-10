import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import Company from "./Components/Pages/Company.jsx";
import Home from "./Components/Home/Home.jsx";
import React_Assignment from "./Components/React_Assignment.jsx";
import Service from "./Components/Pages/Service.jsx";
import HireDeveloper from "./Components/Pages/HireDeveloper.jsx";
import Industrires from "./Components/Pages/Industrires.jsx";
import Portfolio from "./Components/Pages/Portfolio.jsx";
import Academy from "./Components/Pages/Academy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/hireDev",
        element: <HireDeveloper />,
      },
      {
        path: "/industries",
        element: <Industrires />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },

      {
        path: "/startFree",
        element: <React_Assignment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
