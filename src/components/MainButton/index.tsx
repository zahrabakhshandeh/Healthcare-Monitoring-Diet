import { ButtonHTMLAttributes } from "react";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
};

const MainButton = (props: TButton) => {
  return (
    <button
      className={`${props.className} font-semibold flex items-center justify-center bg-[var(--orange-color)] p-2 rounded-lg text-white`}
    >
      {props.value}
    </button>
  );
};

export default MainButton;
