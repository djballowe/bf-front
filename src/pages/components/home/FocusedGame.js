import React from "react";
import Image from "next/image";
import SEA from "src/media/PlaceHolders/seattle-mariners-s-logo.png";
import TOR from "src/media/PlaceHolders/toronto-blue-jays-logo-new.png";
import { teamValues } from "../utils/data";
import { statusOptions } from "../utils/data";

export default function FocusedGame({ favoriteTeam }) {
  const imageStyles = {
    width: "70px",
    height: "auto",
  };

  const getTime = () => {
    const time = favoriteTeam.DateTime.slice(11, 16);
    let hour = parseInt(time.slice(0, 2));
    let minute = time.slice(3);
    let anteMeridiem = "AM";
    if (hour > 12) {
      hour = hour - 12;
      anteMeridiem = "PM";
    }
    return <p>{`${hour}:${minute} ${anteMeridiem}`}</p>;
  };

  console.log(favoriteTeam);

  return (
    <div>
      <div className="current-game">
        <div className="current-teams">
          <div className="team-name">
            <Image src={SEA} alt="" style={imageStyles} />
            <h2>{teamValues[favoriteTeam.AwayTeam]}</h2>
          </div>
          <div className="current-score">
            {favoriteTeam.AwayTeamRuns ? favoriteTeam.AwayTeamRuns : 0}
          </div>
        </div>
        <div className="current-teams">
          <div className="team-name">
            <Image src={TOR} alt="" style={imageStyles} />
            <h2>{teamValues[favoriteTeam.HomeTeam]}</h2>
          </div>
          <div className="current-score">
            {favoriteTeam.HomeTeamRuns ? favoriteTeam.HomeTeamRuns : 0}
          </div>
        </div>
      </div>
      <div className="current-game-info-container">
        <div className="game-start">
          <p
            style={{
              backgroundColor:
                favoriteTeam.Status === "InProgress"
                  ? "#dc002a"
                  : "transparent",
            }}
          >
            {statusOptions[favoriteTeam.Status]}
          </p>
          {favoriteTeam.Status === "Scheduled"
            ? getTime()
            : favoriteTeam.InningDescription}
        </div>
        <div className="current-game-pitchers">
          <p className="home-pitcher">Webb 10-0, 0.21 ERA</p>
          <p className="away-pitcher">Kershaw 1-20, 678.34 ERA</p>
        </div>
      </div>
    </div>
  );
}
