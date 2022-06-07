import React from "react";

interface IGridSpaceProps {
    mark?: string;
}

export const GridSpace: React.FC<IGridSpaceProps> = ({mark}) => {
  return (
    <div className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500">
      {mark}
    </div>
  );
};
