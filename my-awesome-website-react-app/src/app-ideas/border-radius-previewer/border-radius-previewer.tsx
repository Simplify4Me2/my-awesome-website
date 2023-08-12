import React, { useState } from "react";
import { Header } from "../../components/header";
import { Box, Container } from "@mui/material";
import { RadiusInputField } from "./RadiusInputField";

interface BorderRadius {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

const initialRadiusState: BorderRadius = {
  topLeft: "0px",
  topRight: "0px",
  bottomLeft: "0px",
  bottomRight: "0px",
};

export function BorderRadiusPreviewer() {
  const [radius, setRadius] = useState<BorderRadius>(initialRadiusState);

  const handleTopLeftChange = (value: string) => {
    setRadius(prev => {return {...prev, topLeft: value}} );
  };

  const handleTopRightChange = (value: string) => {
    setRadius(prev => {return {...prev, topRight: value}} );
  };

  const handleBottomLeftChange = (value: string) => {
    setRadius(prev => {return {...prev, bottomLeft: value}} );
  };

  const handleBottomRightChange = (value: string) => {
    setRadius(prev => {return {...prev, bottomRight: value}} );
  };

  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Border-radius Previewer
      </h1>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <PreviewBox radius={radius} />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          maxWidth="xs"
        >
          <RadiusInputField label="Border radius top left" onChange={handleTopLeftChange} />
          <RadiusInputField label="Border radius top right" onChange={handleTopRightChange} />
          <RadiusInputField label="Border radius bottom left" onChange={handleBottomLeftChange} />
          <RadiusInputField label="Border radius bottom right" onChange={handleBottomRightChange} />
        </Container>
      </Container>
    </>
  );
}

interface IPreviewBoxProps {
  radius: BorderRadius;
}

function PreviewBox({ radius }: IPreviewBoxProps) {
  return (
    <Box
      sx={{
        border: "solid",
        height: "20rem",
        width: "20rem",
        minWidth: "20rem",
        marginRight: "3rem",
        borderTopLeftRadius: radius.topLeft,
        borderTopRightRadius: radius.topRight,
        borderBottomLeftRadius: radius.bottomLeft,
        borderBottomRightRadius: radius.bottomRight,
      }}
    />
  );
}
