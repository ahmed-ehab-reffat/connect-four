import Player from "./Player.tsx";

type Props = {
  redScore: number;
  yellowScore: number;
};

export default function Players({ redScore, yellowScore }: Props) {
  return (
    <div
      id="players"
      className="flex justify-between md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[45rem]"
    >
      <Player id="red">{redScore}</Player>
      <Player id="yellow">{yellowScore}</Player>
    </div>
  );
}
