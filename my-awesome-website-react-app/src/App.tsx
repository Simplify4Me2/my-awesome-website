import { Route } from "react-router-dom";
import "./App.css";
import { Home } from "./home/home";
import { Navigate, Routes } from "react-router-dom";
import { Contact } from "./contact/contact";
import { Experiment, PlanningPoker, TicTacToe, WasteSnake } from "./app-ideas";
import { Bin2Dec } from "./app-ideas/bin2dec/bin-2-dec";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experiment" element={<Experiment />} />
      <Route path="/planning-poker" element={<PlanningPoker />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/waste-snake" element={<WasteSnake />} />
      <Route path="/bin-2-dec" element={<Bin2Dec />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
