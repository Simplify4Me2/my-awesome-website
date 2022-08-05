import { Paper } from "@mui/material";
import React from "react";

interface IPlanningPokerCardProps {
  value: number;
}

export const PlanningPokerCard: React.FC<IPlanningPokerCardProps> = ({
  value,
}) => {
  return (
    <Paper elevation={3} className="h-36 w-24 flex justify-center items-center hover:bg-violet-600 hover:cursor-pointer">
      <span className="p-1 m-2">{value}</span>
    </Paper>
  );
};
