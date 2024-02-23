"use client";

import { TButton } from "@/types";
import { useCallback } from "react";

const MainButton = (props: TButton) => {
  const checkIcon = useCallback(() => {
    if (props.iconSrc) return <props.iconSrc />;
  }, []);

  return (
    <button
      className={`${props.className} flex  ${
        props.iconSrc && "gap-2"
      } items-center justify-center shadow-button drop-shadow-md bg-[var(--orange-color)] p-2 rounded-lg h-12`}
    >
      {checkIcon()}
      <span className="!text-white font-semibold  text-2xl ">
        {props.value}
      </span>
    </button>
  );
};

export default MainButton;
