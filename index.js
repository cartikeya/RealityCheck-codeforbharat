import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";


import ReactDOM from "react-dom/client";
import TextAnalyzer from "./src/features/TextAnalyzer";
import Home from "./src/components/Home";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/realAI",
    element: <TextAnalyzer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

