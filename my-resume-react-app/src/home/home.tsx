import React from "react";
import { Header } from "./header";
import { CareerTimeline } from "./career-timeline";
import { IntroductionCard } from "./introduction-card";

interface Props {}

export const Home: React.FC = (props) => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-5">
        <IntroductionCard />
      </div>
      <CareerTimeline />
    </>
  );
};
