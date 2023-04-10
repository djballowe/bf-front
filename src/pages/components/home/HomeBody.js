import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import GameCards from "./GameCards";
import { apiKey } from "../utils/axios";
import { apiInstanceSchedule } from "../utils/axios";
import { monthsShort } from "../utils/data";
import { teamValues } from "../utils/data";
import FocusedGame from "./FocusedGame";
import ArrowRight from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";

export default function HomeBody() {
  const [favoriteTeam, setFavoriteTeam] = useState([]);
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${day}-${monthsShort[month]}`;

  const handleCardClick = () => {};

  const fetchScores = () => {
    apiInstanceSchedule
      .get(`/GamesByDate/${currentDate}?key=${apiKey}`)
      .then((res) => {
        let scoresArray = res.data;
        setFavoriteTeam(scoresArray[0]);
        setScores(scoresArray.splice(1));
        setIsLoading(false);
      });
  };

  const games = scores.length
    ? scores.map((game, i) => {
        return (
          <GameCards
            key={i}
            awayTeam={game.AwayTeam}
            homeTeam={game.HomeTeam}
            date={game.DateTime}
            homeStarter={game.HomeTeamStartingPitcher}
            awayStarter={game.AwayTeamStartingPitcher}
            inning={game.Inning}
            homeTeamRuns={game.HomeTeamRuns}
            awayTeamRuns={game.AwayTeamRuns}
            outs={game.Outs}
            status={game.Status}
            winningPitcher={game.WinningPitcher}
            runnerOnFirst={game.RunnerOnFirst}
            runnerOnSecond={game.RunnerOnSecond}
            runnerOnThird={game.RunnerOnThird}
            onClick={handleCardClick}
          />
        );
      })
    : null;

  useEffect(() => {
    setIsLoading(true);
    fetchScores();
    let interval = setInterval(() => {
      fetchScores();
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="grid-items">
        <div className="favorite-team">
          <div className="banner-title">
            <h1>GET CURATED CONTENT</h1>
            <h1>FOR YOUR TEAM</h1>
            <h1>ANYWHERE</h1>
            <button>Get Content</button>
          </div>
          {isLoading ? (
            "LOADING SCORES"
          ) : (
            <FocusedGame favoriteTeam={favoriteTeam} />
          )}
        </div>
      </div>
      <div className="grid-items">
        <div className="games">
          <p>Games</p>
        </div>
        <div className="live-games-carousel">
          {isLoading ? "LOADING SCORES" : games}
        </div>
      </div>
    </div>
  );
}
