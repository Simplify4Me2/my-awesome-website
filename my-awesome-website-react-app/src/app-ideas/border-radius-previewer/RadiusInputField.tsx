import { TextField } from "@mui/material";
import React from "react";

interface IRadiusInputFieldProps {
  label: string;
  onChange: (value: string) => void;
}

export function RadiusInputField({ label, onChange }: IRadiusInputFieldProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const regex = new RegExp("^[0-9]*$");
    if (regex.test(event.target.value)) onChange(`${event.target.value}px`);
  };

  return (
    <TextField
      label={label}
      onChange={handleChange}
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      sx={{ margin: "0.5rem" }}
    />
  );
}
