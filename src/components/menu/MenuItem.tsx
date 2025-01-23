type Props = {
  children: string;
  className: string;
  onClick: () => void;
  img?: string;
};

function MenuItem({ children, className, onClick, img }: Props) {
  return (
    <li
      onClick={onClick}
      className={`${className} w-72 p-3 mt-3 flex justify-between items-center rounded-2xl border-solid border-[3px] border-b-[9px] border-black duration-200 hover:cursor-pointer hover:border-dark-purple`}
    >
      <p className="uppercase font-bold">{children}</p>
      {img ? <img src={img} alt={children} className="w-14" /> : null}
    </li>
  );
}

export default MenuItem;
