"use client";
import { TInput } from "@/types";
import React, { ChangeEvent, forwardRef } from "react";
import { useCallback, useMemo } from "react";
import OpenEyeICon from "/public/svg/eye.svg";
import CloseEyeICon from "/public/svg/eye-slash.svg";

const MainInput = forwardRef<
  HTMLInputElement,
  TInput & { onChange?: (event: ChangeEvent<HTMLInputElement>) => void }
>((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const checkFirstIcon = useCallback(() => {
    if (props.firsticonsrc) return <props.firsticonsrc />;
  }, []);

  const eyeIconMemo = useCallback(() => {
    if (props.type === "password") {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <CloseEyeICon /> : <OpenEyeICon />}
        </div>
      );
    }
  }, [showPassword]);

  return (
    <div
      className={`flex shadow-md rounded-xl ${props.className} items-center shadow-[var(--shadow-input)] shadow-inner bg-[var(--new-gray)] gap-2 p-2 px-4`}
    >
      {checkFirstIcon()}
      <input
        {...props.register}
        {...props}
        ref={ref}
        className="outline-none placeholder:text-[var(--second-gray)] w-full placeholder:xl:text-lg  placeholder:text-base bg-transparent border-none"
        type={showPassword ? "text" : props.type}
      />
      {eyeIconMemo()}
    </div>
  );
});

export default MainInput;
