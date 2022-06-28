import { Button } from "@mui/material";
import React from "react";

import { GridSpace } from "./grid-space";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe: React.FC = () => {
  const { spaces, mark, gameOver, getSpaceMark, markBoardSpace, resetGame } =
    useTicTacToe();


  const handleClick = (position: number) => {
    markBoardSpace(mark, position);
  };

  return (
    <>
      <span className="block">Tic Tac ToDo</span>
      <div className="inline-grid grid-cols-3 gap-12 m-12 min-w-0 bg-orange-200">
        {[...Array(spaces)].map((value, index) => {
          return (
            <GridSpace
              key={index}
              mark={getSpaceMark(index)}
              onClick={() => handleClick(index)}
              disabled={gameOver}
            />
          );
        })}
      </div>
      <h2>
        Currently playing: <span>{mark}</span>
      </h2>
      {gameOver && <h3>Winner !!!</h3>}
      <div className="m-2">
        <Button variant="outlined" onClick={resetGame}>Restart Game</Button>
      </div>
    </>
  );
};
