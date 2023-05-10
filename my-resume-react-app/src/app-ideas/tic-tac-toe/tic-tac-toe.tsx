import { Button } from "@mui/material";
import React from "react";
import { Header } from "../../components/header";

import { GridSpace } from "./grid-space";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe: React.FC = () => {
  const {
    spaces,
    mark,
    winner,
    gameOver,
    getSpaceMark,
    markBoardSpace,
    resetGame,
  } = useTicTacToe();

  const handleClick = (position: number) => {
    markBoardSpace(mark, position);
  };

  return (
    <>
      <Header />
      <div className="inline-grid grid-cols-3 gap-12 m-12 min-w-0 bg-orange-200">
        {[...Array(spaces)].map((value, index) => {
          return (
            <GridSpace
              key={index}
              mark={getSpaceMark(index)}
              onClick={() => !getSpaceMark(index) && handleClick(index)}
              disabled={gameOver || !!getSpaceMark(index)}
            />
          );
        })}
      </div>
      <h2>
        Currently playing: <span>{mark}</span>
      </h2>
      {gameOver && <h3>Winner is {winner} !!!</h3>}
      <div className="m-2">
        <Button variant="outlined" onClick={resetGame}>
          Restart Game
        </Button>
      </div>
    </>
  );
};
