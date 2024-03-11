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
      } items-center justify-center  drop-shadow-md  p-2 rounded-lg `}
    >
      {checkIcon()}
      <span className="!text-white font-semibold  text-2xl ">
        {props.value}
      </span>
    </button>
  );
};
export default MainButton;