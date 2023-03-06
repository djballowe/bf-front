import React from "react";
import Image from "next/image";
import BOS from "src/media/PlaceHolders/boston-red-sox-b-logo-cap-transparent.png";
import NYM from "src/media/PlaceHolders/new-york-mets-hat-logo.png";

export default function GameCards() {
  const imageStyles = {
    width: "70px",
    height: "auto",
  };

  return (
    <div className="card-body">
      <div className="card-teams">
        <div className="card-team-name">
          <Image src={BOS} alt="" style={imageStyles} />
          <p>BOS</p>
        </div>
        <div className="card-score">
          <h3>5</h3>
          <h3>-</h3>
          <h3>7</h3>
        </div>
        <div className="card-team-name">
          <Image src={NYM} alt="" style={imageStyles} />
          <p>NYM</p>
        </div>
      </div>
      <div className="card-live">
        <p>Live</p>
        <p>Pitcher</p>
      </div>
    </div>
  );
}
