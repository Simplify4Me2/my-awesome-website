import React from "react";
import { Header } from "../../components/header";

export const WasteSnake: React.FC = () => {
  return (
    <>
      <Header />
      <img src="/waste-snake.png" className="h-screen" />
      <h2>Waste Types</h2>
      <h3>Copy a sticky, write your item, add it to the snake</h3>
      <ul>
        <li>1. Transportation</li>
        <li>2. Inventory</li>
        <li>3. Motion</li>
        <li>4. Waiting</li>
        <li>5. Over-processing</li>
        <li>6. Over-production</li>
        <li>7. Defects</li>
        <li>8. Wasted talent</li>
        <li>9. Knowledge</li>
      </ul>
    </>
  );
};
