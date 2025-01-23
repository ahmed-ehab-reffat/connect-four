import player_one_img from "../assets/images/player-one.svg";
import player_two_img from "../assets/images/player-two.svg";
import cpu_img from "../assets/images/cpu.svg";

type Props = { id: string; children: number };

function Player({ id, children }: Props) {
  const img: string =
    id === "red" ? player_one_img : id === "yellow" ? player_two_img : cpu_img;
  const dir = id === "red" ? "ltr" : "rtl";
  const imgCss: string = id === "red" ? "left-[-15%]" : "right-[-15%]";

  return (
    <div
      dir={dir}
      className="bg-white text-center font-bold border-solid border-[3px] border-b-[9px] border-black rounded-2xl relative my-8 ltr:ml-3 rtl:mr-3 px-10 py-2 sm:flex sm:items-center sm:justify-between sm:w-44 sm:px-6 sm:ltr:ml-5 sm:rtl:mr-5 md:block md:w-fit md:px-4 md:py-6 md:ltr:ml-0 md:rtl:mr-0"
    >
      <img
        src={img}
        className={`w-10 aspect-[54/59] absolute ${imgCss} top-1/2 -translate-y-1/2 md:-top-1/4 md:translate-y-0 md:right-auto md:left-1/2 md:-translate-x-1/2`}
      />
      <h6 className="uppercase w-16 text-sm md:text-base">{id}</h6>
      <span className="text-3xl md:text-5xl">{children}</span>
    </div>
  );
}

export default Player;
