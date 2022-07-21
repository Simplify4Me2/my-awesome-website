import React from "react";
import { Mark } from "./mark.model";
import { ReactComponent as Cross } from "./Cross.svg";
import { ReactComponent as Nought } from "./Nought.svg";

interface IGridSpaceProps {
  mark?: Mark;
  disabled?: boolean;
  onClick: () => void;
}

export const GridSpace: React.FC<IGridSpaceProps> = ({
  mark,
  disabled,
  onClick,
}) => {
  // custom animation for the mark to appear: https://blog.logrocket.com/creating-custom-animations-tailwind-css/
  return (
    <>
      {!disabled && (
        <div
          onClick={onClick}
          className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full hover:bg-violet-600 hover:cursor-pointer"
        ></div>
      )}
      {disabled && (
        <div className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full animate-waving-hand">
          {mark === Mark.cross && <Cross />}
          {mark === Mark.nought && <Nought />}
        </div>
      )}
    </>
  );
};
