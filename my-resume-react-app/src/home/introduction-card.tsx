import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface IntroductionCardProps {
  onMyPortfolioButtonClicked: () => void;
  onMyToolKitButtonClicked: () => void;
}


export function IntroductionCard({ onMyPortfolioButtonClicked, onMyToolKitButtonClicked } : IntroductionCardProps) {
  return (
    <Card className="justify-content m-3 pt-5" sx={{ minWidth: 275 }}>
      <div className="flex">
        <CardContent className="mt-12">
          <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi
          </Typography>
          <Typography variant="h5" component="div">
            I'm Simon
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Full-stack software developer
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
        <img
          className="h-72 m-5"
          src="/index-hero.jpg"
          alt="azure-themed-hero"
        />
      </div>
      <CardActions className="flex justify-center">
        <Button size="small" onClick={onMyPortfolioButtonClicked}>See my work experience</Button>
        <Button size="small" onClick={onMyToolKitButtonClicked}>See my dev toolkit</Button>
      </CardActions>
    </Card>
  );
};
