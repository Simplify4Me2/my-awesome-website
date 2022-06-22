import React from "react";
import { Mark } from "./mark.model";

interface IGridSpaceProps {
    mark?: Mark;
    position: number;
    onClick: () => void;
}

export const GridSpace: React.FC<IGridSpaceProps> = ({position, mark, onClick}) => {
  
  return (
    <div onClick={onClick} className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full hover:bg-violet-600 hover:cursor-pointer">
      {/* {`${mark || ''}${position}`} */}
      {`${mark || ''}`}
    </div>
  );
};
