"use client";

import { TButton } from "@/types";
import { useCallback } from "react";

const MainButton = (props: TButton) => {
  const checkIcon = useCallback(() => {
    if (props.iconSrc) return <props.iconSrc />;
  }, []);
  return (
    <button
      className={`${props.className} font-semibold flex ${
        props.iconSrc && "gap-2"
      } items-center justify-center border-2 text-lg border-orange-200 shadow-sm drop-shadow bg-[var(--orange-color)] p-2 rounded-lg text-white`}
    >
      {checkIcon()}
      <span>{props.value}</span>
    </button>
  );
};

export default MainButton;
