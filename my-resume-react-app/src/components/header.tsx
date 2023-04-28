import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className="sticky top-0 z-50">
      <AppBar position="static">
        <Toolbar>
          <Code className="pr-2" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Simon Vereecke</Link>
          </Typography>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
