import React, { useState } from "react";
import Game from "./Game";
import { SelectGameMode } from "./SelectMode";

export const App = () => {
  const [selectedGame, setSelectedGame] = useState(0);

  return selectedGame ? (
    <Game setSelectedGame={setSelectedGame} selectedGame={selectedGame} />
  ) : (
    <SelectGameMode setMode={setSelectedGame} />
  );
};
