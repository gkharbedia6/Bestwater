import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/config";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeWater from "./pages/filters/HomeWater.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Contact from "./pages/Contact.tsx";
import HomeWine from "./pages/filters/HomeWine.tsx";
import IndustryWater from "./pages/filters/IndustryWater.tsx";
import IndustryWine from "./pages/filters/IndustryWine.tsx";
import IndustryVodka from "./pages/filters/IndustryVodka.tsx";
import History from "./pages/History.tsx";
import Articles from "./pages/science/Articles.tsx";
import ScienceProjects from "./pages/science/ScienceProjects.tsx";
import Textbooks from "./pages/science/Textbooks.tsx";
import Patents from "./pages/science/Patents.tsx";
import Conferences from "./pages/science/Conferences.tsx";
import ManufacturingMembranes from "./pages/technology/ManufacturingMembranes.tsx";
import Production from "./pages/technology/Production.tsx";
import Laboratory from "./pages/technology/Laboratory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "filters",
        children: [
          {
            index: true,
            element: <Navigate to="home-water" replace />,
          },
          {
            path: "home-water",
            element: <HomeWater />,
          },
          {
            path: "home-wine",
            element: <HomeWine />,
          },
          {
            path: "industry-water",
            element: <IndustryWater />,
          },
          {
            path: "industry-wine",
            element: <IndustryWine />,
          },
          {
            path: "industry-vodka",
            element: <IndustryVodka />,
          },
        ],
      },
      {
        path: "science",
        children: [
          {
            index: true,
            element: <Navigate to="articles" replace />,
          },
          {
            path: "articles",
            element: <Articles />,
          },
          {
            path: "science-projects",
            element: <ScienceProjects />,
          },
          {
            path: "textbooks",
            element: <Textbooks />,
          },
          {
            path: "patents",
            element: <Patents />,
          },
          {
            path: "conferences",
            element: <Conferences />,
          },
        ],
      },
      {
        path: "technology",
        children: [
          {
            index: true,
            element: <Navigate to="manufacturing-membranes" replace />,
          },
          {
            path: "manufacturing-membranes",
            element: <ManufacturingMembranes />,
          },
          {
            path: "production",
            element: <Production />,
          },
          {
            path: "laboratory",
            element: <Laboratory />,
          },
        ],
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
