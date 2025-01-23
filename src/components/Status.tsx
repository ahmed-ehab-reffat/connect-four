import { Color } from "./Game";
import GameBtn from "./GameBtn";

type Props = {
  winner: Color;
  activePlayer: Color;
  onStart: () => void;
  onRestart: () => void;
};

export default function Status({
  activePlayer,
  winner,
  onStart,
  onRestart,
}: Props) {
  let content: React.ReactElement;

  if (winner) {
    content = (
      <>
        <h3 className="-my-1 text-sm">{winner}</h3>
        <p className="text-4xl -my-1">wins</p>
        <GameBtn onClick={onRestart}>play again</GameBtn>
      </>
    );
  } else {
    content = (
      <>
        <h3 className="mb-2 text-lg whitespace-nowrap">
          {activePlayer} starts
        </h3>
        <GameBtn onClick={onStart}>ready?</GameBtn>
      </>
    );
  }

  return (
    <div className="bg-white text-center uppercase font-bold px-5 py-3 w-48 border-solid border-black border-[3px] border-b-[9px] rounded-2xl absolute -bottom-[20%] sm:-bottom-[15%] left-1/2 -translate-x-1/2 z-40">
      {content}
    </div>
  );
}
