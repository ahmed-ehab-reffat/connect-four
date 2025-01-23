import MenuItem from "./MenuItem";

import logo from "../../assets/images/logo.svg";
import cpuSvg from "../../assets/images/player-vs-cpu.svg";
import playerSvg from "../../assets/images/player-vs-player.svg";

type Props = {
  onCpu: () => void;
  onPlayer: () => void;
  onRules: () => void;
};

function StartMenu({ onCpu, onPlayer, onRules }: Props) {
  return (
    <div className="max-w-md p-8 bg-purple absolute rounded-3xl border-none sm:border-solid border-[3px] border-b-[9px] border-black">
      <img
        src={logo}
        alt="Connect Four Logo"
        className="size-12 mx-auto mt-8 mb-12"
      />
      <menu>
        <MenuItem
          onClick={onCpu}
          img={cpuSvg}
          className="bg-red hover:bg-dark-red text-white"
        >
          player vs cpu
        </MenuItem>
        <MenuItem
          onClick={onPlayer}
          img={playerSvg}
          className="bg-yellow hover:bg-dark-yellow"
        >
          player vs player
        </MenuItem>
        <MenuItem onClick={onRules} className="bg-white hover:bg-slate-200">
          game rules
        </MenuItem>
      </menu>
    </div>
  );
}

export default StartMenu;
