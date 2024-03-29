import { Card } from "@mui/material";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

interface PortFolioProps {
}

export const Portfolio = forwardRef(function Portfolio({ }: PortFolioProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} className="m-6">
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Portfolio
      </h1>
      {/* <span>
        TODO: Add some small fun projects like{" "}
        <a
          className="underline"
          href="https://michaellackey.com/"
          target="_blank"
          rel="noreferrer"
        >
          this
        </a>
      </span> */}
      <div className="flex flex-row flex-wrap justify-evenly">
        <PortfolioTile link="/tic-tac-toe" imgSrc="/tictactoe_tile.jpeg" />
        {/* <PortfolioTile link="/planning-poker" imgSrc="/planningpoker_tile.jpeg" /> */}
        {/* <PortfolioTile link="/waste-snake" imgSrc="/wastesnake_tile.jpeg" />
        <PortfolioTile link="/experiment" imgSrc="/3d-experiment_tile.jpeg" />
        <PortfolioTile link="/experiment" imgSrc="/somethingsomething-ai_tile.jpeg" /> */}
        <PortfolioTile link="/bin-2-dec" imgSrc="/bin2dec_tile.jpeg" />
        <PortfolioTile link="/border-radius-previewer" imgSrc="/border-radius-previewer_tile.jpeg" />
        <PortfolioTile link="/book-finder" imgSrc="/book-finder_tile.jpeg" />
        {/* <PortfolioTile link="/birthday-calendar" imgSrc="/book-finder_tile.jpeg" /> */}

      </div>
    </div>
  );
});

interface IPortfolioTileProps {
  link: string;
  imgSrc: string
}

function PortfolioTile({link, imgSrc} : IPortfolioTileProps) {
  return (
    <Card className="m-2" sx={{ maxWidth: 100 }}>
      <Link to={link}>
        <img src={imgSrc} />
      </Link>
    </Card>
  );
}
