import React from "react";
import { Lobby } from "boardgame.io/react";
import NoThanks from "./game";
import NoThanksBoard from "./components/Board";

const App = () => (
  <Lobby
    gameServer="http://localhost:8000"
    lobbyServer="http://localhost:8000"
    gameComponents={[{ game: NoThanks, board: NoThanksBoard }]}
  />
);

export default App;
