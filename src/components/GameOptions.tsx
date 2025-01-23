import GameBtn from "./GameBtn.tsx";
import logo from "../assets/images/logo.svg";

type Props = {
  onPause: () => void;
  onRestart: () => void;
};

function GameOptions({ onPause, onRestart }: Props) {
  return (
    <header className="w-full flex justify-between items-center md:mb-12">
      <GameBtn onClick={onPause}>menu</GameBtn>
      <img src={logo} alt="Connect Four Logo" className="size-10" />
      <GameBtn onClick={onRestart}>restart</GameBtn>
    </header>
  );
}

export default GameOptions;
