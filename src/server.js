import { Server } from "boardgame.io/server";
import NoThanks from "./game";

const server = Server({ games: [NoThanks] });

server.run(8000);
