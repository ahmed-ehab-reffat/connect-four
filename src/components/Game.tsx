import { useState } from "react";

import { WINNING_COMBINATIONS } from "./winning-combinations.ts";
import GameOptions from "./GameOptions.tsx";
import GameBoard from "./GameBoard.tsx";
import Timer from "./Timer.tsx";
import Player from "./Player.tsx";

type Color = "red" | "yellow" | null;
type Board = Color[][];

const INITIAL_BOARD: Board = new Array(7).fill(new Array(6).fill(null));

function checkWinner(board: Board): Color {
  for (const compination of WINNING_COMBINATIONS) {
    const [a, b, c, d] = compination;
    if (
      board[a.col][a.row] &&
      board[a.col][a.row] === board[b.col][b.row] &&
      board[a.col][a.row] === board[c.col][c.row] &&
      board[a.col][a.row] === board[d.col][d.row]
    ) {
      return board[a.col][a.row];
    }
  }
  return null;
}

function Game() {
  const [board, setBoard] = useState<Board>([...INITIAL_BOARD]);
  const [activePlayer, setActivePlayer] = useState<Color>("red");

  const winner: Color = checkWinner(board);

  function handleTurn(row: number): void {
    for (let col = 5; col >= 0; col--) {
      if (!board[row][col]) {
        setBoard((prevBoard) => {
          const newBoard: Board = [...prevBoard.map((arr) => [...arr])];
          newBoard[row][col] = activePlayer;
          return newBoard;
        });

        setActivePlayer((prevPlayer) =>
          prevPlayer === "red" ? "yellow" : "red"
        );

        return;
      }
    }
  }

  return (
    <main>
      <GameOptions />
      <div
        id="players"
        className="flex justify-between md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[45rem]"
      >
        <Player id="1">0</Player>
        <Player id="2">0</Player>
      </div>
      <div className="relative">
        <GameBoard board={board} handleTurn={handleTurn} />
        <Timer />
      </div>
      <div
        className={`absolute bottom-0 left-0 rounded-t-[3.5rem] w-full h-1/5 bg-${
          winner ? winner : "dark-purple"
        }`}
      ></div>
    </main>
  );
}

export default Game;
