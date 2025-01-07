type Props = {
  children: string;
  className: string;
  img?: string;
};

function MenuItem({ children, className, img }: Props) {
  return (
    <li
      className={`${className} w-72 p-3 mt-3 flex justify-between items-center rounded-2xl border-solid border-2 border-b-8 border-black duration-200 hover:cursor-pointer hover:border-dark-purple`}
    >
      <p className="uppercase font-bold">{children}</p>
      {img ? <img src={img} alt={children} className="w-14" /> : null}
    </li>
  );
}

export default MenuItem;
