import { useState, useEffect, useRef } from "react";

import { WINNING_COMBINATIONS } from "./winning-combinations.ts";
import GameOptions from "./GameOptions.tsx";
import PauseMenu from "./menu/PauseMenu.tsx";
import GameBoard from "./GameBoard.tsx";
import Players from "./Players.tsx";
import Status from "./Status.tsx";
import Timer from "./Timer.tsx";

type Props = {
  onQuit: () => void;
};

export type Color = "red" | "yellow" | null;
export type Board = Color[][];

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

function Game({ onQuit }: Props) {
  const [board, setBoard] = useState<Board>([...INITIAL_BOARD]);
  const [activePlayer, setActivePlayer] = useState<Color>("red");
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const pauseMenuRef = useRef<HTMLDialogElement>(null!);

  const winner: Color = checkWinner(board);

  useEffect(() => {
    if (winner) {
      setIsStarted(false);
    }
  }, [winner]);

  function handleStart(): void {
    setIsStarted(true);
  }

  function handleRestart(): void {
    setBoard([...INITIAL_BOARD]);
    pauseMenuRef.current.close();
  }

  function handlePuase() {
    pauseMenuRef.current.showModal();
  }
  function handleResume() {
    pauseMenuRef.current.close();
  }

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

  let cssClass = `after:absolute after:bottom-0 after:left-0 after:rounded-t-[3.5rem] after:w-full after:h-1/5 after:bg-${
    winner ? winner : "dark-purple"
  }`;

  return (
    <main className={cssClass}>
      <PauseMenu
        ref={pauseMenuRef}
        onResume={handleResume}
        onRestart={handleRestart}
        onQuit={onQuit}
      />
      <GameOptions onPause={handlePuase} onRestart={handleRestart} />
      <Players redScore={0} yellowScore={0} />
      <div className="relative">
        <GameBoard board={board} handleTurn={handleTurn} />
        {isStarted ? (
          <Timer activePlayer={activePlayer} />
        ) : (
          <Status
            activePlayer={activePlayer}
            winner={winner}
            onStart={handleStart}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}

export default Game;
