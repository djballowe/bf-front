import React from "react";
import { Container } from "@mui/system";
import Image from "next/image";
import placeHolder from "src/media/PlaceHolders/seattle-mariners-s-logo.png";
import placeHolder2 from "src/media/PlaceHolders/toronto-blue-jays-logo-new.png";

export default function HomeBody() {
  const imageStyles = {
    width: "70px",
    height: "auto",
  };

  return (
    <div className="home-container">
      <div className="grid-items">
        <div className="favorite-team">
          <div className="">
            <h1>GET CURATED CONTENT FOR YOUR TEAM ANYWHERE</h1>
            <button>Get Content</button>
          </div>
          <div className="current-game">
            <h3>Live Game</h3>
            <div className="current-teams">
              <div className="team-name">
                <Image src={placeHolder} alt="" style={imageStyles} />
                <h2>Mariners</h2>
              </div>
              <div className="current-score">20</div>
            </div>
            <div className="current-teams">
              <div className="team-name">
                <Image src={placeHolder2} alt="" style={imageStyles} />
                <h2>Blue Jays</h2>
              </div>
              <div className="current-score">3</div>
            </div>
          </div>
          <div className="current-game-info-container">
            <div className="game-start">
              <p>Live</p>
              <p>8:10PM Game Time</p>
            </div>
            <div className="current-game-pitchers">
              <p className="home-pitcher">Webb 10-0, 0.21 ERA</p>
              <p className="away-pitcher">Kershaw 1-20, 678.34 ERA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-items"></div>
    </div>
  );
}
