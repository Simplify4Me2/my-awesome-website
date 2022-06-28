import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Mark } from "./mark.model";
import { useTicTacToe } from "./useTicTacToe";

describe("useTicTacToe", () => {
  describe("verifyWinner", () => {
    it("nought wins once there are 3 nought marks on the first row", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 2);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.nought);
    });

    it("cross wins once there are 3 cross marks on the second row", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.cross);
    });

    it("nought wins once there are 3 nought marks on the third row", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 6);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.nought);
    });

    it("cross wins once there are 3 cross marks on the first column", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.cross);
    });

    it("nought wins once there are 3 nought marks on the second column", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 8);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.nought);
    });

    it("cross wins once there are 3 cross marks on the third column", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 2);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 8);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.cross);
    });

    it("nought wins once there are 3 nought marks diagonally from the top left corner to the bottom right corner", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 2);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 1);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });

      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.nought);
    });

    it("cross wins once there are 3 cross marks diagonally from the bottom left corner to the top right corner", () => {
      const { result } = renderHook(() => useTicTacToe());

      expect(result.current.gameOver).toBe(false);

      act(() => {
        result.current.markBoardSpace(Mark.cross, 2);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 5);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });
      
      expect(result.current.gameOver).toBe(true);
      expect(result.current.winner).toBe(Mark.cross);
    });
  });
});
