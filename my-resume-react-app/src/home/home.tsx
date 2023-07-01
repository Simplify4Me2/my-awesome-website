import React, { useRef } from "react";
import { Header } from "../components/header";
import { Container } from "@mui/material";
import { IntroductionCard } from "./introduction-card";
import { Certificates } from "./certificates";
import { Portfolio } from "./portfolio";
import { MyToolkit } from "./my-toolkit";
import { Footer } from "./footer";

export function Home() {
  const myToolkitRef = useRef<HTMLDivElement | null>(null);
  const myPortfolioRef = useRef<HTMLDivElement | null>(null);

  function scrollIntoView(ref: React.MutableRefObject<HTMLElement | null>) {
    const headerHeight = "88px";
    if (ref && ref.current) {
      ref.current.style.scrollMargin = headerHeight;
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Container className="relative h-screen">
          <IntroductionCard
            onMyPortfolioButtonClicked={() => scrollIntoView(myPortfolioRef)}
            onMyToolKitButtonClicked={() => scrollIntoView(myToolkitRef)}
          />
          <Certificates />
        </Container>
        <MyToolkit elementRef={myToolkitRef} />
        <Portfolio elementRef={myPortfolioRef} />
      </Container>
      <Footer />
    </>
  );
};
