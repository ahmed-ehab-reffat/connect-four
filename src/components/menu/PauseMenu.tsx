import { createPortal } from "react-dom";

import MenuItem from "./MenuItem";

type Props = {
  ref: React.LegacyRef<HTMLDialogElement>;
  onResume: () => void;
  onRestart: () => void;
  onQuit: () => void;
};

export default function PauseMenu({ ref, onResume, onRestart, onQuit }: Props) {
  return createPortal(
    <dialog
      ref={ref}
      className="max-w-md p-8 bg-purple absolute rounded-3xl border-none sm:border-solid border-[3px] border-b-[9px] border-black"
    >
      <h2 className="uppercase">pause</h2>
      <menu>
        <MenuItem onClick={onResume} className="">
          resume
        </MenuItem>
        <MenuItem onClick={onRestart} className="">
          restart
        </MenuItem>
        <MenuItem onClick={onQuit} className="">
          quit game
        </MenuItem>
      </menu>
    </dialog>,
    document.getElementById("modal") as Element
  );
}
