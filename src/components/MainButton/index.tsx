"use client";
import { ButtonHTMLAttributes, ReactNode, useCallback } from "react";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
  iconSrc?: any;
};

const MainButton = (props: TButton) => {
  const checkIcon = useCallback(() => {
    if (props.iconSrc) return <props.iconSrc />;
  }, []);
  return (
    <button
      className={`${props.className} font-semibold flex ${
        props.iconSrc && "gap-2"
      } items-center justify-center bg-[var(--orange-color)] p-2 rounded-lg text-white`}
    >
      {checkIcon()}
      <span>{props.value}</span>
    </button>
  );
};

export default MainButton;
