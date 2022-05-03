import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";
import { DeveloperMode } from "@mui/icons-material";

interface Props {}

export const Home: React.FC = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
      <div className="flex justify-center pt-5">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Hi
            </Typography>
            <Typography variant="h5" component="div">
              I'm Simon
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Full-stack developer
            </Typography>
            <Typography variant="body2">
              My main areas of expertise
              <br />
              include C#, Angular and React.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">See my work experience</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
