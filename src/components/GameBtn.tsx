type Props = {
  children: string;
};

function GameBtn({ children }: Props) {
  return (
    <button className="bg-dark-purple text-white rounded-full w-28 py-2 px-6 uppercase hover:bg-red duration-200">
      {children}
    </button>
  );
}

export default GameBtn;
