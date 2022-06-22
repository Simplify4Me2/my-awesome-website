import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Mark } from "./mark.model";
import { useTicTacToe } from "./useTicTacToe";

describe("useTicTacToe", () => {
  describe("verifyWinner", () => {
    it("has a winner if there are 3 identical horizontal marks on the first row", () => {
      const { result } = renderHook(() => useTicTacToe());

      const initialResult = result.current.verifyWinner();
      expect(initialResult).toBe(false);

      act(() => {
        result.current.setMark(Mark.nought, 0);
      });
      act(() => {
        result.current.setMark(Mark.nought, 1);
      });
      act(() => {
        result.current.setMark(Mark.nought, 2);
      });

      const endResult = result.current.verifyWinner();
      expect(endResult).toBe(true);
    });

    it("has a winner if there are 3 identical horizontal marks on the second row", () => {
      const { result } = renderHook(() => useTicTacToe());

      const initialResult = result.current.verifyWinner();
      expect(initialResult).toBe(false);

      act(() => {
        result.current.setMark(Mark.cross, 3);
      });
      act(() => {
        result.current.setMark(Mark.cross, 4);
      });
      act(() => {
        result.current.setMark(Mark.cross, 5);
      });

      const endResult = result.current.verifyWinner();
      expect(endResult).toBe(true);
    });

    it("has a winner if there are 3 identical horizontal marks on the third row", () => {
      const { result } = renderHook(() => useTicTacToe());

      const initialResult = result.current.verifyWinner();
      expect(initialResult).toBe(false);

      act(() => {
        result.current.setMark(Mark.nought, 6);
      });
      act(() => {
        result.current.setMark(Mark.nought, 7);
      });
      act(() => {
        result.current.setMark(Mark.nought, 8);
      });

      const endResult = result.current.verifyWinner();
      expect(endResult).toBe(true);
    });

    it("has a winner if there are 3 identical vertical marks in the first column", () => {
        const { result } = renderHook(() => useTicTacToe());
  
        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);
  
        act(() => {
          result.current.setMark(Mark.cross, 0);
        });
        act(() => {
          result.current.setMark(Mark.cross, 3);
        });
        act(() => {
          result.current.setMark(Mark.cross, 6);
        });
  
        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
      });

      it("has a winner if there are 3 identical vertical marks in the second column", () => {
        const { result } = renderHook(() => useTicTacToe());
  
        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);
  
        act(() => {
          result.current.setMark(Mark.nought, 1);
        });
        act(() => {
          result.current.setMark(Mark.nought, 4);
        });
        act(() => {
          result.current.setMark(Mark.nought, 7);
        });
  
        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
      });

      it("has a winner if there are 3 identical vertical marks in the third column", () => {
        const { result } = renderHook(() => useTicTacToe());
  
        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);
  
        act(() => {
          result.current.setMark(Mark.cross, 2);
        });
        act(() => {
          result.current.setMark(Mark.cross, 5);
        });
        act(() => {
          result.current.setMark(Mark.cross, 8);
        });
  
        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
      });

      it("has a winner if there are 3 identical diagonal marks from the top left corner", () => {
        const { result } = renderHook(() => useTicTacToe());
  
        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);
  
        act(() => {
          result.current.setMark(Mark.nought, 0);
        });
        act(() => {
          result.current.setMark(Mark.nought, 4);
        });
        act(() => {
          result.current.setMark(Mark.nought, 8);
        });
  
        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
      });

      it("has a winner if there are 3 identical diagonal marks from the top right corner", () => {
        const { result } = renderHook(() => useTicTacToe());
  
        const initialResult = result.current.verifyWinner();
        expect(initialResult).toBe(false);
  
        act(() => {
          result.current.setMark(Mark.cross, 2);
        });
        act(() => {
          result.current.setMark(Mark.cross, 4);
        });
        act(() => {
          result.current.setMark(Mark.cross, 6);
        });
  
        const endResult = result.current.verifyWinner();
        expect(endResult).toBe(true);
      });
  });
});
