import React from "react";

import { GridSpace } from "./grid-space";
import { Mark } from "./mark.model";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe: React.FC = () => {

  const { spaces, setMark, verifyWinner} = useTicTacToe();

  const handleClick = (position: number) => {
    console.log(`${position} clicked`);
    setMark(Mark.cross, position);
    verifyWinner();
  };

  return (
    <>
      <span className="block">Tic Tac ToDo</span>
      <div className="inline-grid grid-cols-3 gap-12 m-12 min-w-0 bg-orange-200">
        {[...Array(spaces)].map((value, index) => {
          return <GridSpace key={index} position={index} onClick={() => handleClick(index)} />
        })}
      </div>
    </>
  );
};
