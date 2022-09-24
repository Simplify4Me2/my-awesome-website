import React from "react";
import { Header } from "../components/header";
import { Container } from "@mui/material";
import { IntroductionCard } from "./introduction-card";
import { Certificates } from "./certificates";
import { Portfolio } from "./portfolio";
import { MyToolkit } from "./my-toolkit";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <IntroductionCard />
        <Certificates />
        <MyToolkit />
        <Portfolio />
      </Container>
    </>
  );
};
