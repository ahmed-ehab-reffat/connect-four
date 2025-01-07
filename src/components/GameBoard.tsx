type Props = {
  board: ("red" | "yellow" | null)[][];
  handleTurn: (colIndex: number) => void;
};

function GameBoard({ board, handleTurn }: Props) {
  return (
    <div className="z-10 aspect-[632/594] pb-5 relative after:bg-board-white after:absolute after:inset-0 after:bg-contain after:bg-no-repeat after:z-30 after:pointer-events-none before:pointer-events-none before:bg-board-black before:absolute before:inset-0 before:bg-contain before:bg-no-repeat">
      <ol id="game-board" className="flex p-[5px] aspect-[632/594]">
        {board.map((col, colIndex) => (
          <li key={colIndex}>
            <ol onClick={() => handleTurn(colIndex)} className="cursor-pointer">
              {col.map((el, rowIndex) => {
                let className =
                  "w-10 sm:w-12 z-20 bg-contain bg-no-repeat aspect-[70/75]";
                if (el) {
                  className +=
                    el === "red" ? " bg-counter-red" : " bg-counter-yellow";
                }
                return (
                  <li
                    key={rowIndex}
                    className="size-12 sm:size-[3.75rem] flex justify-center items-end"
                  >
                    <div className={className}></div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GameBoard;
