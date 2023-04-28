import React, { useEffect, useRef, useTransition } from "react";
import { Header } from "../components/header";
import { Container } from "@mui/material";
import { IntroductionCard } from "./introduction-card";
import { Certificates } from "./certificates";
import { Portfolio } from "./portfolio";
import { MyToolkit } from "./my-toolkit";

export function Home() {
  const myToolkitRef = useRef<HTMLDivElement | null>(null);
  const myPortfolioRef = useRef<HTMLDivElement | null>(null);

  function handleClick(ref: React.MutableRefObject<HTMLElement | null>) {
      ref && ref.current?.scrollIntoView();
  }

  return (
    <>
      <Header />
      <Container>
        <Container className="relative h-screen">
          <IntroductionCard
            onMyPortfolioButtonClicked={() => handleClick(myPortfolioRef)}
            onMyToolKitButtonClicked={() => handleClick(myToolkitRef)}
          />
          <Certificates />
        </Container>
        <MyToolkit elementRef={myToolkitRef} />
        <Portfolio elementRef={myPortfolioRef} />
      </Container>
    </>
  );
};
