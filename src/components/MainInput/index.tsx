"use client";
import { TInput } from "@/types";
import React from "react";
import { InputHTMLAttributes, ReactNode, useCallback, useMemo } from "react";
import OpenEyeICon from "/public/eye.svg";
import CloseEyeICon from "/public/eye-slash.svg";

const MainInput = (props: TInput) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const checkFirstIcon = useCallback(() => {
    if (props.firstIconSrc) return <props.firstIconSrc />;
  }, []);

  const eyeIconMemo = useMemo(() => {
    if (props.type === "password" && !showPassword) {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          <CloseEyeICon />
        </div>
      );
    } else if (showPassword && props.type === "password") {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          <OpenEyeICon />
        </div>
      );
    }
  }, [showPassword]);

  return (
    <div
      className={`flex rounded-2xl items-center shadow-sm drop-shadow bg-[var(--new-gray)] gap-2 p-2 px-4`}
    >
      {checkFirstIcon()}
      <input
        {...props}
        className=" outline-none w-full placeholder:text-sm bg-transparent border-none"
        type={showPassword ? "text" : props.type}
        name=""
        id=""
      />
      {eyeIconMemo}
    </div>
  );
};
export default MainInput;
