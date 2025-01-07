function Rules() {
  return (
    <div className="p-8 bg-white rounded-[2.5rem] max-w-xs sm:max-w-lg border-none sm:border-solid border-[3px] border-b-[12px] border-black ${cssClasses}">
      <h1 className="text-5xl font-bold text-center uppercase mb-8">rules</h1>
      <h3 className="text-purple font-bold uppercase mb-4">objective</h3>
      <p>
        Be the first player to connect four of the same colored discs in a row
        (vertically, horizontally or diagonally).
      </p>
      <h3 className="text-purple font-bold uppercase mt-6 mb-4">how to play</h3>
      <ol className="list-decimal ml-4 *:mb-3 *:ml-3">
        <li>Red goes first in first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li>The game ends when ther is a 4-in-a-row or a stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>
      <button
        type="button"
        className={`w-[70px] h-[75px] absolute left-1/2 -translate-x-1/2 -translate-y-[15%] bg-icon-check hover:bg-icon-check-hover`}
      ></button>
    </div>
  );
}

export default Rules;
