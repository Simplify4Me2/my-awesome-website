import React from "react";
import { GridSpace } from "./grid-space";

export const TicTacToe: React.FC = () => {
  return (
    <>
      <span>Tic Tac ToDo</span>
      <div className="grid grid-cols-3 gap-12 m-12">
        <GridSpace mark="x1" />
        <GridSpace mark="x2" />
        <GridSpace mark="x3" />
        <GridSpace mark="x4" />
        <GridSpace mark="x5" />
        <GridSpace mark="x6" />
        <GridSpace mark="x7" />
        <GridSpace mark="x8" />
        <GridSpace mark="x9" />
      </div>
    </>
  );
};
