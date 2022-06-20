import { useState } from "react";
import { Mark } from "./mark.model";

const BOARD_SIZE: number = 9;

const newGame: (Mark | undefined)[] = new Array<Mark | undefined>(BOARD_SIZE);

export const useTicTacToe = () => {
  const [state, setState] = useState< (Mark | undefined)[]>(newGame);

  const setMark = (mark: Mark, position: number) => {
    setState({ ...state, [position]: mark });
  };

  const verifyWinner = (): boolean => {
    if (state[2] === Mark.nought) return true;
    return false;
  };

  return { spaces: BOARD_SIZE, setMark, verifyWinner };
};
