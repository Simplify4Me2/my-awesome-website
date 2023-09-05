import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Header } from "../../components/header";
import { Search } from "@mui/icons-material";
import { useState } from "react";

export function BookFinder() {
  const [state, setState] = useState<string>("");

  const handleClickSearchButton = () => {
    console.log("yolo: ", state);
  };

  const handleSearchInputValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Book Finder
      </h1>
      <Box className="flex flex-col items-center">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type="text"
            onChange={handleSearchInputValue}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search for book"
                  onClick={handleClickSearchButton}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </>
  );
}
