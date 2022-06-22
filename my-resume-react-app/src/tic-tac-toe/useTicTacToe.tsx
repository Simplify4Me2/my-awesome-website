import { useState } from "react";
import { Mark } from "./mark.model";

const BOARD_SIZE: number = 9;

const newGame: (Mark | undefined)[] = new Array<Mark | undefined>(BOARD_SIZE);

export const useTicTacToe = () => {
  const [state, setState] = useState<(Mark | undefined)[]>(newGame);

  const setMark = (mark: Mark, position: number) => {
    setState({ ...state, [position]: mark });
  };

  const verifyWinner = (): boolean => {
    return (
      verifyWinnerHorizontal() ||
      verifyWinnerVertical() ||
      verifyWinnerDiagonal()
    );
  };

  const verifyWinnerHorizontal = (): boolean => {
    if (state[0] !== undefined)
      return state[0] === state[1] && state[1] === state[2];
    if (state[3] !== undefined)
      return state[3] === state[4] && state[4] === state[5];
    if (state[6] !== undefined)
      return state[6] === state[7] && state[7] === state[8];
    return false;
  };

  const verifyWinnerVertical = (): boolean => {
    if (state[0] !== undefined)
      return state[0] === state[3] && state[3] === state[6];
    if (state[1] !== undefined)
      return state[1] === state[4] && state[4] === state[7];
    if (state[2] !== undefined)
      return state[2] === state[5] && state[5] === state[8];
    return false;
  };

  const verifyWinnerDiagonal = (): boolean => {
    if (state[4] !== undefined)
      return (state[0] === state[4] && state[4] === state[8]) || (state[2] === state[4] && state[4] === state[6]);
    return false;
  };

  return { spaces: BOARD_SIZE, setMark, verifyWinner };
};
