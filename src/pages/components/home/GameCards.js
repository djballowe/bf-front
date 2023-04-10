import React from "react";
import Image from "next/image";
import BOS from "src/media/PlaceHolders/boston-red-sox-b-logo-cap-transparent.png";
import NYM from "src/media/PlaceHolders/new-york-mets-hat-logo.png";
import { teamColors } from "../utils/data";
import { statusOptions } from "../utils/data";

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

  const getTime = () => {
    const time = date.slice(11, 16);
    let hour = parseInt(time.slice(0, 2));
    let minute = time.slice(3);
    let anteMeridiem = "AM";
    if (hour > 12) {
      hour = hour - 12;
      anteMeridiem = "PM";
    }
    return (
      <div className="card-live">
        <p
          style={{ backgroundColor: status === "InProgress" ? "#dc002a" : "" }}
        >
          {status === "Scheduled"
            ? `${hour}:${minute} ${anteMeridiem}`
            : statusOptions[status]}
        </p>
        <p>Starting Pitcher</p>
      </div>
    );
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
          <h3>{awayTeamRuns}</h3>
          <h3>{homeTeamRuns === null ? "@" : "-"}</h3>
          <h3>{homeTeamRuns}</h3>
        </div>
        <div className="card-team-name">
          <Image src={NYM} alt="" style={imageStyles} />
          <p>{homeTeam}</p>
        </div>
      </div>
      {getTime()}
    </div>
  );
}
