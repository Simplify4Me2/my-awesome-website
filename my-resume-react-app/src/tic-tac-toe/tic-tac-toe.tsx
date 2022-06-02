import React from "react";

export const TicTacToe: React.FC = () => {
  return (
      <>
    <span>Tic Tac ToDo</span>
    <div className="grid grid-cols-3">
        <div className="border-2">x1</div>
        <div className="border-2">x2</div>
        <div className="border-2">x3</div>
        <div className="border-2">x4</div>
        <div className="border-2">x5</div>
        <div className="border-2">x6</div>
        <div className="border-2">x7</div>
        <div className="border-2">x8</div>
        <div className="border-2">x9</div>
    </div>
      </>
  );
};
