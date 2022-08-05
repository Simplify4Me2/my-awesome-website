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
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={0} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={1} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={2} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={3} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={5} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={8} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={13} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={20} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={40} />
        <PlanningPokerCard onClick={() => console.log("Card clicked")} value={100} />
      </Stack>
    </>
  );
};
