import React from "react";

export const SelectGameMode = ({ setMode }) => {
  return (
    <div className="selectModeWrapper">
      <img className="chessImg" src="chess.png" alt="" />
      <button
        className="controlButton"
        onClick={() => {
          setMode(1);
        }}
      >
        Player Vs Player
      </button>
      <button
        className="controlButton"
        onClick={() => {
          setMode(2);
        }}
      >
        Player vs Computer
      </button>
    </div>
  );
};
