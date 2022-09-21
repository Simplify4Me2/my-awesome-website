import React from "react";
import { Header } from "../components/header";
import { CareerTimeline } from "./career-timeline";
import { IntroductionCard } from "./introduction-card";
import { Certificates } from "./certificates";
import { Portfolio } from "./portfolio";
import { Container } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <IntroductionCard />
        <Certificates />
        <CareerTimeline />
        <Portfolio />
      </Container>
    </>
  );
};
