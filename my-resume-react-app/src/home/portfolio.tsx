import React from "react";
import { Link } from "react-router-dom";

export const Portfolio: React.FC = () => {
  return (
    <div className="m-6">
      <h1>Portfolio</h1>
      <span>
        TODO: Add some small fun projects like{" "}
        <a className="underline" href="https://michaellackey.com/" target="_blank" rel="noreferrer">
          this
        </a>
      </span>
      <ul>
          <li className="underline"><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
          <li className="underline"><Link to="/planning-poker">Planning Poker</Link></li>
          <li className="underline"><Link to="/tic-tac-toe">Waste snake</Link></li>
      </ul>
    </div>
  );
};
