type Props = {
  children: string;
  onClick: () => void;
};

function GameBtn({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-dark-purple text-white text-sm rounded-full min-w-24 py-2 px-4 uppercase hover:bg-red duration-200"
    >
      {children}
    </button>
  );
}

export default GameBtn;
