import MenuItem from "./MenuItem";

import logo from "../assets/images/logo.svg";
import cpuSvg from "../assets/images/player-vs-cpu.svg";
import playerSvg from "../assets/images/player-vs-player.svg";

function StartMenu() {
  return (
    <div className="max-w-md p-8 bg-purple absolute rounded-3xl border-none sm:border-solid border-2 border-b-8 border-black">
      <img
        src={logo}
        alt="Connect Four Logo"
        className="size-12 mx-auto mt-8 mb-12"
      />
      <menu>
        <MenuItem img={cpuSvg} className="bg-red hover:bg-dark-red text-white">
          player vs cpu
        </MenuItem>
        <MenuItem img={playerSvg} className="bg-yellow hover:bg-dark-yellow">
          player vs player
        </MenuItem>
        <MenuItem className="bg-white hover:bg-slate-200">game rules</MenuItem>
      </menu>
    </div>
  );
}

export default StartMenu;
