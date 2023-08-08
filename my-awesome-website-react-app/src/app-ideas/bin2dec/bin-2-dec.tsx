import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Box, TextField } from "@mui/material";

export const Bin2Dec: React.FC = () => {
    const [state, setState] = useState<string>("");
    const [validationState, setValidationState] = useState(false);

    function onValueChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setState(event.target.value);
    }

    useEffect(() => {
        const regex = new RegExp('^[0-1]*$');
        setValidationState(!regex.test(state));
    }, [state]);

  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Bin 2 Dec
      </h1>
      <Box className="flex flex-col items-center" >
        <TextField label="Enter binary digits here" onChange={onValueChange} variant="standard" className="max-w-fit mb-5" helperText={validationState && "incorrect entry"} error={validationState} inputProps={{ maxLength: 8, inputMode: 'numeric', pattern: '[0-1]*' }}  />
        <Box component="div" sx={{ display: 'inline', marginTop: '2rem' }} >Result: </Box>
      </Box>
    </>
  );
};
