import React from "react";
import { Header } from "../components/header";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        {/* <h1>I've been expecting you.</h1>
        <span>
          email:{" "}
          <a href="mailto:saymonfreak@gmail.com">saymonfreak@gmail.com</a>
        </span> */}
        <Box
          sx={{
            width: 1200,
            height: 700,
            backgroundColor: "primary.light",
            backgroundImage: "url(/contact_background.png)",
            borderRadius: 5
          }}
          className="flex justify-center items-center mt-10"
        >
          <Box
            sx={{
              width: 500,
              height: 480,
              backgroundColor: "white",
              opacity: 80,
              borderRadius: 5
            }}
            className="bg-gradient-to-l from-sky-200 to-transparent"
          >
            <Stack spacing={2} padding={2}>
              <h1>Get in Touch</h1>
              <Stack direction="row" spacing={3}>
                <TextField label="First Name" variant="outlined" />
                <TextField label="Last Name" />
              </Stack>
                <TextField label="E-mail address" type="email" inputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>) }} />
                <TextField label="Phone" type="tel" />
                <TextField label="Tell me about you" multiline minRows={4} maxRows={5}/>
                <Button variant="contained" >Send</Button>
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  );
}
