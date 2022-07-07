import React from "react";
import { Mark } from "./mark.model";

interface IGridSpaceProps {
    mark?: Mark;
    disabled?: boolean;
    onClick: () => void;
}

export const GridSpace: React.FC<IGridSpaceProps> = ({mark, disabled, onClick}) => {
  // custom animation for the mark to appear: https://blog.logrocket.com/creating-custom-animations-tailwind-css/
  return (
    <>
    {!disabled && (<div onClick={onClick} className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full hover:bg-violet-600 hover:cursor-pointer">
      <h1>{`${mark || ''}`}</h1>
    </div>)}
    {disabled && (<div className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full animate-waving-hand">
      <h1>{`${mark || ''}`}</h1>
    </div>)}
    </>
  );
};
