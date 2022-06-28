import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Mark } from "./mark.model";
import { useTicTacToe } from "./useTicTacToe";

describe("useTicTacToe", () => {
  describe("verifyWinner", () => {
    it("has a winner if there are 3 identical horizontal marks on the first row", () => {
      const mockHandleWin = jest.fn();
      const { result } = renderHook(() => useTicTacToe(mockHandleWin));

      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 2);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.nought);
    });

    it("has a winner if there are 3 identical horizontal marks on the second row", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.cross);
    });

    it("has a winner if there are 3 identical horizontal marks on the third row", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

        act(() => {
            result.current.markBoardSpace(Mark.cross, 5);
          });
          expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 6);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.nought);
    });

    it("has a winner if there are 3 identical vertical marks in the first column", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.cross);
    });

    it("has a winner if there are 3 identical vertical marks in the second column", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

        act(() => {
            result.current.markBoardSpace(Mark.cross, 8);
          });
          expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 1);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 3);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 7);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.nought);
    });

    it("has a winner if there are 3 identical vertical marks in the third column", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 2);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      expect(mockHandleWin).not.toBeCalled();
      
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      expect(mockHandleWin).not.toBeCalled();
      
      act(() => {
        result.current.markBoardSpace(Mark.cross, 8);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.cross);
    });

    it("has a winner if there are 3 identical diagonal marks from the top left corner", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

        act(() => {
            result.current.markBoardSpace(Mark.cross, 2);
          });
          expect(mockHandleWin).not.toBeCalled();
    
      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      expect(mockHandleWin).not.toBeCalled();
    
      act(() => {
        result.current.markBoardSpace(Mark.cross, 1);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 4);
      });
      expect(mockHandleWin).not.toBeCalled();
    
      act(() => {
        result.current.markBoardSpace(Mark.cross, 5);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 8);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.nought);
    });

    it("has a winner if there are 3 identical diagonal marks from the top right corner", () => {
        const mockHandleWin = jest.fn();
        const { result } = renderHook(() => useTicTacToe(mockHandleWin));
  
        expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 2);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 5);
      });
      expect(mockHandleWin).not.toBeCalled();
    
      act(() => {
        result.current.markBoardSpace(Mark.cross, 4);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.nought, 0);
      });
      expect(mockHandleWin).not.toBeCalled();

      act(() => {
        result.current.markBoardSpace(Mark.cross, 6);
      });
      expect(mockHandleWin).toBeCalledWith(Mark.cross);
    });
  });
});
