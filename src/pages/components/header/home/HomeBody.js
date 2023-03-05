import React from "react";
import { Container } from "@mui/system";

export default function HomeBody() {
  return (
    <div className="home-container">
      <div className="grid-items">
        <div className="favorite-team">
          <div className="current-game">
            <div className="home-team">
              <div>
                <img src="" alt="" />
                <h2>Home</h2>
              </div>
              <div className="current-score">Score</div>
            </div>
            <div className="away-team">
              <div>
                <img src="" alt="" />
                <h2>Away</h2>
              </div>
              <div className="current-score">Score</div>
            </div>
          </div>
          <div className="game-start">
            <p className="live">Live</p>
            <p className="home-pitcher">Webb 10-0, 2.34 ERA</p>
            <p className="away-pitcher">Kershaw 1-700, 678.34 ERA</p>
          </div>
          <div>
            <button>Get Content</button>
          </div>
        </div>
      </div>
      <div className="grid-items"></div>
    </div>
  );
}
