import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

export const Battle = () => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [playerOneImage, setPlayerOneImage] = useState("");
  const [playerTwoImage, setPlayerTwoImage] = useState("");

  const location = useLocation();

  const handleSubmit = (id, userName) => {
    if (id === "playerOne") {
      setPlayerOneName(userName);
      setPlayerOneImage(`https://github.com/${userName}.png?size=200`);
    } else {
      setPlayerTwoName(userName);
      setPlayerTwoImage(`https://github.com/${userName}.png?size=200`);
    }
  };

  const handleReset = (id) => {
    if (id === "playerOne") {
      setPlayerOneName("");
      setPlayerOneImage("");
    } else {
      setPlayerTwoName("");
      setPlayerTwoImage("");
    }
  };

  return (
    <div>
      <div className="row">
        {!playerOneImage ? (
          <PlayerInput
            label="Player 1"
            id="playerOne"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview avatar={playerOneImage} username={playerOneName}>
            <button className="reset" onClick={() => handleReset("playerOne")}>
              Reset
            </button>
          </PlayerPreview>
        )}
        {!playerTwoImage ? (
          <PlayerInput
            label="Player 2"
            id="playerTwo"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
            <button className="reset" onClick={() => handleReset("playerTwo")}>
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
      {playerOneImage && playerTwoImage && (
        <Link
          className="button"
          to={{
            pathname: `${location.pathname}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
        >
          Battle
        </Link>
      )}
    </div>
  );
};
