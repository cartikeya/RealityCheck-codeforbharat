// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import TextAnalyzer from "./features/TextAnalyzer";
import Home from "./components/Home";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router";
const App = () => {
  return (
    <div className="logo">
      {/* <h1 className="text-2xl font-bold">RealityCheck</h1> */}
      {/* Your main component goes here */}
      <Outlet />
    </div>
  );
};
