import StartMenu from "./components/menu/StartMenu.tsx";
import Rules from "./components/Rules.tsx";
import Game from "./components/Game.tsx";
import { ReactElement, useState } from "react";

type Pages = "menu" | "rules" | "game";

function App() {
  const [page, setPage] = useState<Pages>("menu");

  function handleRules() {
    setPage("rules");
  }

  function handleGame() {
    setPage("game");
  }

  function handleMenu() {
    setPage("menu");
  }

  let content: ReactElement;

  if (page === "menu") {
    content = (
      <StartMenu
        onCpu={handleGame}
        onPlayer={handleGame}
        onRules={handleRules}
      />
    );
  } else if (page === "rules") {
    content = <Rules onOk={handleMenu} />;
  } else {
    content = <Game onQuit={handleMenu} />;
  }

  return (
    <div
      className={`${
        page === "menu" ? "bg-dark-purple" : "bg-purple"
      } h-screen flex justify-center items-center`}
    >
      {content}
    </div>
  );
}

export default App;
