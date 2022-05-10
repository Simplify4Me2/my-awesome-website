import React from "react";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { DeveloperMode } from "@mui/icons-material";

export const Header: React.FC = (props) => {
    return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <DeveloperMode className="pr-1" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simon Vereecke
        </Typography>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  </Box>
}