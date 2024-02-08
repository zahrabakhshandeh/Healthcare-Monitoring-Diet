"use client";
import { InputHTMLAttributes, ReactNode, useCallback, useMemo } from "react";

type TInput = InputHTMLAttributes<HTMLDivElement> & {
  className?: string;
  firstIconSrc?: any;
};
const MainInput = (props: TInput) => {
  const checkFirstIcon = useCallback(() => {
    if (props.firstIconSrc) return <props.firstIconSrc/>;
  }, []);
  return (
    <div
      className={`flex rounded-2xl items-center shadow-sm drop-shadow bg-[var(--second-white-color)] gap-2 p-2 px-4`}
    >
      {checkFirstIcon()}
      <input
        {...props}
        className=" outline-none  w-full placeholder:text-sm bg-transparent border-none"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};
export default MainInput;
