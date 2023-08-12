import React from "react";
import { BorderRadius } from "./border-radius-previewer";
import { Box } from "@mui/material";

interface IPreviewBoxProps {
    radius: BorderRadius;
  }
  
  export function PreviewBox({ radius }: IPreviewBoxProps) {
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