import GameBtn from "./GameBtn.tsx";

import logo from "../assets/images/logo.svg";

function GameOptions() {
  return (
    <header className="w-full flex justify-between items-center md:mb-12">
      <GameBtn>menu</GameBtn>
      <img src={logo} alt="Connect Four Logo" className="size-10" />
      <GameBtn>restart</GameBtn>
    </header>
  );
}

export default GameOptions;
