import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
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
