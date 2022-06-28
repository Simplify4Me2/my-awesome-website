import { useEffect, useState } from "react";
import { Mark } from "./mark.model";

const BOARD_SIZE: number = 9;

const newGame: (Mark | undefined)[] = new Array<Mark | undefined>(BOARD_SIZE);

export function useTicTacToe() {
  const [boardState, setBoardState] = useState<(Mark | undefined)[]>(newGame);
  const [markState, setMarkState] = useState<Mark>(Mark.nought);
  const [gameOverState, setGameOverState] = useState<boolean>(false);

  const getSpaceMark = (position: number) => {
    return boardState[position];
  };

  const markBoardSpace = (mark: Mark, position: number) => {
    setBoardState({ ...boardState, [position]: mark });
  };

  const verifyWinner = (board: (Mark | undefined)[]): boolean =>
    verifyWinnerHorizontal(board) ||
    verifyWinnerVertical(board) ||
    verifyWinnerDiagonal(board);

  const verifyWinnerHorizontal = (board: (Mark | undefined)[]): boolean =>
    (board[0] !== undefined &&
      board[0] === board[1] &&
      board[1] === board[2]) ||
    (board[3] !== undefined &&
      board[3] === board[4] &&
      board[4] === board[5]) ||
    (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]);

  const verifyWinnerVertical = (board: (Mark | undefined)[]): boolean =>
    (board[0] !== undefined &&
      board[0] === board[3] &&
      board[3] === board[6]) ||
    (board[1] !== undefined &&
      board[1] === board[4] &&
      board[4] === board[7]) ||
    (board[2] !== undefined && board[2] === board[5] && board[5] === board[8]);

  const verifyWinnerDiagonal = (board: (Mark | undefined)[]): boolean => {
    if (board[4] !== undefined)
      return (
        (board[0] === board[4] && board[4] === board[8]) ||
        (board[2] === board[4] && board[4] === board[6])
      );
    return false;
  };

  const resetGame = () => {
    setBoardState(newGame);
    setMarkState(Mark.nought);
    setGameOverState(false);
  };

  useEffect(() => {
    if (verifyWinner(boardState)) 
      setGameOverState(true);
    else setMarkState(markState === Mark.nought ? Mark.cross : Mark.nought);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardState]);

  return {
    spaces: BOARD_SIZE,
    mark: markState,
    winner: markState,
    gameOver: gameOverState,
    getSpaceMark,
    markBoardSpace,
    resetGame,
  };
};
