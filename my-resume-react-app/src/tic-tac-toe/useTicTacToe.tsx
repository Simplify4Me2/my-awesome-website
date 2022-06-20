import { useState } from "react";
import { Mark } from "./mark.model";

const BOARD_SIZE: number = 9;

const newGame: string[] = new Array<string>(BOARD_SIZE);

export const useTicTacToe = () => {
    const [state, setState] = useState<string[]>(newGame);

    const setMark = (mark: Mark, position: number) => {
        setState({...state, [position]: mark});
    };

    const verifyWinner = (): boolean => false;

    return {spaces: BOARD_SIZE, setMark, verifyWinner};
}