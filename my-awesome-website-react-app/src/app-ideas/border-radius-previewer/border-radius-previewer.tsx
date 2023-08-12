import React from "react";
import { Header } from "../../components/header";
import { Box, Container } from "@mui/material";

export function BorderRadiusPreviewer() {
  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Border-radius Previewer
      </h1>
      <Container
        sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <Box
          sx={{
            border: "solid",
            height: "15rem",
            width: "15rem",
            borderRadius: "16px",
          }}
        ></Box>
      </Container>
    </>
  );
}
