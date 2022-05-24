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

export const IntroductionCard: React.FC = (props) => {
    return <Card sx={{ minWidth: 275 }}>
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
      <Typography variant="body2">
        I like to craft solid and scalable frontend products with
        <br />
        great user experience.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">See my work experience</Button>
    </CardActions>
  </Card>
}