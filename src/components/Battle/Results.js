import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { startBattle } from "../../api";
import { PlayerResult } from "./PlayerResult";

const Results = () => {
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    startBattle([
      searchParams.get("playerOneName"),
      searchParams.get("playerTwoName"),
    ]).then(([winner, loser]) => {
      setLoading(true);
      setWinner(winner);
      setLoser(loser);
    });
  }, []);
  console.log(winner.profile.login);

  return (
    <div className="row">
      <PlayerResult
        avatar={winner.profile.avatar_url}
        username={winner.profile.login}
      >
        <h3 className="score_title">
          Score: <span className="score">{winner.score}</span>
        </h3>
      </PlayerResult>

      <PlayerResult
        avatar={loser.profile.avatar_url}
        username={loser.profile.login}
      >
        <h3 className="score_title">
          Score: <span className="score">{loser.score}</span>
        </h3>
      </PlayerResult>
    </div>
  );
};

export default Results;
