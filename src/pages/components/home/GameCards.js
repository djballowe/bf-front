import React from "react";
import Image from "next/image";
import BOS from "src/media/PlaceHolders/boston-red-sox-b-logo-cap-transparent.png";
import NYM from "src/media/PlaceHolders/new-york-mets-hat-logo.png";
import { teamColors } from "../utils/data";

export default function GameCards({
  awayTeam,
  homeTeam,
  date,
  homeStarter,
  awayStarter,
  inning,
  homeTeamRuns,
  awayTeamRuns,
  outs,
  status,
  winningPitcher,
  runnerOnFirst,
  runnerOnSecond,
  runnerOnThird,
  onClick,
}) {
  const imageStyles = {
    width: "70px",
    height: "auto",
  };

  const cardStyles = {
    background: `linear-gradient(134deg, ${teamColors[awayTeam]} 50%, ${teamColors[homeTeam]} 50%)`,
  };

  return (
    <div className="card-body">
      <div className="card-teams" style={cardStyles}>
        <div className="card-team-name">
          <Image src={BOS} alt="" style={imageStyles} />
          <p>{awayTeam}</p>
        </div>
        <div className="card-score">
          <h3>{homeTeamRuns}</h3>
          <h3>{homeTeamRuns === null ? "@" : "-"}</h3>
          <h3>{awayTeamRuns}</h3>
        </div>
        <div className="card-team-name">
          <Image src={NYM} alt="" style={imageStyles} />
          <p>{homeTeam}</p>
        </div>
      </div>
      <div className="card-live">
        <p>Live</p>
        <p>Pitcher</p>
      </div>
    </div>
  );
}
