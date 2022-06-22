import React from "react";

import { GridSpace } from "./grid-space";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe: React.FC = () => {

  const { spaces, mark, getSpaceMark, markBoardSpace, toggleMark, verifyWinner} = useTicTacToe();

  let won: boolean = false;

  const handleClick = (position: number) => {
    console.log(`${position} clicked`);
    markBoardSpace(mark, position);
    won = verifyWinner();
    console.log(won);
    toggleMark();
  };

  return (
    <>
      <span className="block">Tic Tac ToDo</span>
      <div className="inline-grid grid-cols-3 gap-12 m-12 min-w-0 bg-orange-200">
        {[...Array(spaces)].map((value, index) => {
          return <GridSpace key={index} mark={getSpaceMark(index)} position={index} onClick={() => handleClick(index)} />
        })}
      </div>
      <h2>Currently playing: <span>{mark}</span></h2>
      {won && <h3>Winner !!!</h3>}
    </>
  );
};
