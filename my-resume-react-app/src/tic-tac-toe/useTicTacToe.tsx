import { useState } from "react";
import { Mark } from "./mark.model";

const newGame: string[] = new Array<string>(9);

export const useTicTacToe = () => {
    const [state, setState] = useState<string[]>(newGame);

    const setMark = (mark: Mark, position: number) => {
        setState({...state, [position]: mark});
    };

    const verifyWinner = (): boolean => false;

    return {setMark, verifyWinner};
}