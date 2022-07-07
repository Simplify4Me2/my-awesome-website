import React from "react";
import { Header } from "../components/header";
import { CareerTimeline } from "./career-timeline";
import { IntroductionCard } from "./introduction-card";
import { Certificates } from "./certificates";
import { Portfolio } from "./portfolio";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <IntroductionCard />
        <Certificates />
        <CareerTimeline />
        <Portfolio />
      </div>
    </>
  );
};
