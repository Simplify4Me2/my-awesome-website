import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Mark } from './mark.model';
import { useTicTacToe } from './useTicTacToe';

describe("useTicTacToe", () => {
    it("has a winner if there are 3 horizontal noughts in a row", () => {
        const { result } = renderHook(() => useTicTacToe());

        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);

        act(() => {
            result.current.setMark(Mark.nought, 0);
            result.current.setMark(Mark.nought, 1);
            result.current.setMark(Mark.nought, 2);
        });

        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
    });
});