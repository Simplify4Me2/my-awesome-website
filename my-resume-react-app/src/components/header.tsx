import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { DeveloperMode } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Header: React.FC = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="sticky top-0 z-50">
      <AppBar position="static">
        <Toolbar>
          <DeveloperMode className="pr-1" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Simon Vereecke</Link>
          </Typography>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
