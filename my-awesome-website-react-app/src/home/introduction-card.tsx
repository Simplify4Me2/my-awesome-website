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

export function IntroductionCard({
  onMyPortfolioButtonClicked,
  onMyToolKitButtonClicked,
}: IntroductionCardProps) {
  return (
    <Card className="justify-content pt-5" sx={{ minWidth: 275 }}>
      <div className="flex flex-col-reverse lg:flex-row">
        <CardContent className="mt-12">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi
          </Typography>
          <Typography variant="h5" component="div">
            I'm Simon
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 36 }} color="text.secondary">
            Full-stack software developer
          </Typography>
          <Typography variant="body1">
            My main areas of expertise include C#, Angular and React.
            <br />I like to craft solid and scalable frontend products with
            great user experience.
          </Typography>
          <CardActions className="flex justify-center mt-8">
            <Button size="small" onClick={onMyPortfolioButtonClicked}>
              See my work experience
            </Button>
            <Button size="small" onClick={onMyToolKitButtonClicked}>
              See my dev toolkit
            </Button>
          </CardActions>
        </CardContent>
        <img
          className="w-72 lg:w-4/12 m-5"
          src="/index-hero.jpg"
          alt="azure-themed-hero"
        />
      </div>
    </Card>
  );
}
