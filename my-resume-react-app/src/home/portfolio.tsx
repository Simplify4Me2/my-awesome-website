import React from "react";
import { Link } from "react-router-dom";

interface PortFolioProps {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
}

export function Portfolio({ elementRef }: PortFolioProps) {
  return (
    <div ref={elementRef} className="m-6">
      <h1>Portfolio</h1>
      <span>
        TODO: Add some small fun projects like{" "}
        <a
          className="underline"
          href="https://michaellackey.com/"
          target="_blank"
          rel="noreferrer"
        >
          this
        </a>
      </span>
      <ul>
        <li className="underline">
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li className="underline">
          <Link to="/planning-poker">Planning Poker</Link>
        </li>
        <li className="underline">
          <Link to="/waste-snake">Waste snake</Link>
        </li>
        <li className="underline">
          <Link to="/experiment">Experiment</Link>
        </li>
      </ul>
    </div>
  );
}
