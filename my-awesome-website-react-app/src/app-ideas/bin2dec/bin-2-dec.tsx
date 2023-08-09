import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Box, Button, TextField } from "@mui/material";

export const Bin2Dec: React.FC = () => {
    const [inputState, setInputState] = useState<string>("");
    const [isValid, setIsValid] = useState(true);
    const [resultState, setResultState] = useState<number | null>(null)

    const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputState(event.target.value);
    }

    const onConvertButtonClick = () => {
      if (isValid) {
        const result = parseInt(inputState, 2);
        setResultState(result);
      } 
    }

    useEffect(() => {
      setResultState(null);
        const regex = new RegExp('^[0-1]*$');
        setIsValid(regex.test(inputState));
    }, [inputState]);

  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Binary to Decimal Converter
      </h1>
      <Box className="flex flex-col items-center" >
        <TextField label="Enter binary digits here" onChange={onValueChange} variant="standard" className="max-w-fit mb-5" helperText={!isValid && "incorrect entry"} error={!isValid} inputProps={{ maxLength: 8, inputMode: 'numeric', pattern: '[0-1]*' }}  />
        <Button onClick={onConvertButtonClick} disabled={!isValid} variant="contained" sx={{ marginTop: '2rem' }}>Convert</Button>
        {resultState && <Box component="div" sx={{ display: 'inline', marginTop: '2rem' }} >Result: {resultState}</Box>}
      </Box>
    </>
  );
};
