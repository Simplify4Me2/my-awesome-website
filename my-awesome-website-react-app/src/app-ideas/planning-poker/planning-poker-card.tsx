import { Paper } from "@mui/material";
import React from "react";

interface IPlanningPokerCardProps {
  value: number;
  onClick: () => void;
}

export const PlanningPokerCard: React.FC<IPlanningPokerCardProps> = ({
  value, onClick
}) => {
  return (
    <Paper elevation={3} className="h-36 w-24 flex justify-center items-center hover:bg-violet-600 hover:cursor-pointer" onClick={onClick}>
      <span className="p-1 m-2">{value}</span>
    </Paper>
  );
};
