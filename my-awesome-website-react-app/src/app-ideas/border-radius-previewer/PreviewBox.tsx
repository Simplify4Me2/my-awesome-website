import React from "react";
import { Box } from "@mui/material";
import { BorderRadius } from "./border-radius.model";

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
          // borderStartStartRadius: '100px',
          // borderStartEndRadius: '200px',
          // borderEndStartRadius: '100px',
          // borderEndEndRadius: '100px',
        }}
      />
    );
  }