import { useEffect } from "react";
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
import { fetchBooks } from "../../api/fetchBooks";
import { Volume } from "../../api/models";

// https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md
export function Component() {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const { fetch, data } = fetchBooks();

  const handleInputOnKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (keyboardEvent.key === "Enter") {
      keyboardEvent.preventDefault();
      handleClickSearchButton();
    }
  };

  const handleClickSearchButton = () => {
    console.log("yolo: ", searchTerm);
    searchTerm && fetch(searchTerm);
  };

  const handleSearchInputValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {data && console.log(data);
  }, [data])

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
            onKeyDown={handleInputOnKeyDown}
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
      {data && data.totalItems}
      {data && <p>list length: {data.items.length}</p>}
      {data && data.items.map(item => <Book volume={item} />)}
    </>
  );
}

Component.displayName = "Book Finder Component";


function Book({volume}: {volume: Volume}) {
  return <>
  <p>{volume.volumeInfo.title} - {volume.volumeInfo.authors}</p>
  {/* <p>{JSON.stringify(volume.volumeInfo)}</p> */}
  </>
}