import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Experiment, PlanningPoker, TicTacToe, WasteSnake } from "./app-ideas";

// TODO: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/planning-poker" element={<PlanningPoker />} />
        <Route path="/waste-snake" element={<WasteSnake />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
