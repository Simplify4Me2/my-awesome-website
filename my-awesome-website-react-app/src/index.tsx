import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "bin-2-dec",
    lazy: () => import('./app-ideas/bin2dec/bin-2-dec')
  },
  {
    path: "book-finder",
    lazy: () => import('./app-ideas/book-finder/book-finder')
  },
  {
    path: "border-radius-previewer",
    lazy: () => import('./app-ideas/border-radius-previewer/border-radius-previewer')
  },
  {
    path: "tic-tac-toe",
    lazy: () => import('./app-ideas/tic-tac-toe/tic-tac-toe')
  },
  {
    path: "*",
    element: <Home />
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
