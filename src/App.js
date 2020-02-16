import React from "react";
import { Local } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";
import NoThanks from "./game";
import Board from "./components/Board";

const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 3,
  board: Board,
  multiplayer: Local()
});

const App = () => (
  <>
    <NoThanksClient playerID="0" />
    <NoThanksClient playerID="1" />
    <NoThanksClient playerID="2" />
  </>
);

export default App;
