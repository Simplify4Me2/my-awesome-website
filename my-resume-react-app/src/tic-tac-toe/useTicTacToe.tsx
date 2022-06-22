import { useState } from "react";
import { Mark } from "./mark.model";

const BOARD_SIZE: number = 9;

const newGame: (Mark | undefined)[] = new Array<Mark | undefined>(BOARD_SIZE);

export const useTicTacToe = () => {
  const [boardState, setBoardState] = useState<(Mark | undefined)[]>(newGame);
  const [markState, setMarkState] = useState<Mark>(Mark.nought);

  const getSpaceMark = (position: number) => {
    return boardState[position];
   }

  const markBoardSpace = (mark: Mark, position: number) => {
    setBoardState({ ...boardState, [position]: mark });
  };

  const toggleMark = () => {
    setMarkState(markState === Mark.nought ? Mark.cross : Mark.nought);
  }

  const verifyWinner = (): boolean => {
    return (
      verifyWinnerHorizontal() ||
      verifyWinnerVertical() ||
      verifyWinnerDiagonal()
    );
  };

  const verifyWinnerHorizontal = (): boolean => {
    if (boardState[0] !== undefined)
      return boardState[0] === boardState[1] && boardState[1] === boardState[2];
    if (boardState[3] !== undefined)
      return boardState[3] === boardState[4] && boardState[4] === boardState[5];
    if (boardState[6] !== undefined)
      return boardState[6] === boardState[7] && boardState[7] === boardState[8];
    return false;
  };

  const verifyWinnerVertical = (): boolean => {
    if (boardState[0] !== undefined)
      return boardState[0] === boardState[3] && boardState[3] === boardState[6];
    if (boardState[1] !== undefined)
      return boardState[1] === boardState[4] && boardState[4] === boardState[7];
    if (boardState[2] !== undefined)
      return boardState[2] === boardState[5] && boardState[5] === boardState[8];
    return false;
  };

  const verifyWinnerDiagonal = (): boolean => {
    if (boardState[4] !== undefined)
      return (boardState[0] === boardState[4] && boardState[4] === boardState[8]) || (boardState[2] === boardState[4] && boardState[4] === boardState[6]);
    return false;
  };

  return { spaces: BOARD_SIZE, getSpaceMark, markBoardSpace, toggleMark, verifyWinner };
};
