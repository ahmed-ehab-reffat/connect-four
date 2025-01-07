function Timer() {
  return (
    <div className="text-white text-center font-bold absolute -bottom-[20%] sm:-bottom-[12%] left-1/2 -translate-x-1/2 z-40 w-32 bg-turn-red bg-contain bg-no-repeat aspect-[197/165]">
      <h6 className="mt-6 mb-1 text-xs uppercase">player 1's turn</h6>
      <span className="text-4xl">15s</span>
    </div>
  );
}

export default Timer;
