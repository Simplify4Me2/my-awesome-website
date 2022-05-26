import React from "react";
import { Header } from "./header";
import { CareerTimeline } from "./career-timeline";
import { IntroductionCard } from "./introduction-card";

export const Home: React.FC = (props) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <IntroductionCard />
        <CareerTimeline />
      </div>
    </>
  );
};
