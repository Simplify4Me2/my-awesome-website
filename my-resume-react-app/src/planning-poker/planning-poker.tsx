import { Stack } from "@mui/material";
import React from "react";
import { Header } from "../components/header";
import { PlanningPokerCard } from "./planning-poker-card";

export const PlanningPoker: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Planning Poker</h1>
      <Stack direction="row" spacing={2} className="m-6">
        <PlanningPokerCard value={0} />
        <PlanningPokerCard value={1} />
        <PlanningPokerCard value={2} />
        <PlanningPokerCard value={3} />
        <PlanningPokerCard value={5} />
        <PlanningPokerCard value={8} />
        <PlanningPokerCard value={13} />
        <PlanningPokerCard value={20} />
        <PlanningPokerCard value={40} />
        <PlanningPokerCard value={100} />
      </Stack>
    </>
  );
};
