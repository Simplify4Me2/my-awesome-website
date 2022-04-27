import React from "react";
import "./home.css";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { DeveloperMode } from "@mui/icons-material";

interface Props {}

export const Home: React.FC<Props> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
            <DeveloperMode className="padding-right" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Simon Vereecke
          </Typography>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
