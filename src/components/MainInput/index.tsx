"use client";
import { TInput } from "@/types";
import React, { ChangeEvent, forwardRef } from "react";
import { InputHTMLAttributes, ReactNode, useCallback, useMemo } from "react";
import OpenEyeICon from "/public/eye.svg";
import CloseEyeICon from "/public/eye-slash.svg";

const MainInput = forwardRef<HTMLInputElement, TInput & { onChange: (event: ChangeEvent<HTMLInputElement>) => void }>((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const checkFirstIcon = useCallback(() => {
    if (props.firstIconSrc) return <props.firstIconSrc />;
  }, []);

  const eyeIconMemo = useMemo(() => {
    if (props.type === "password") {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <OpenEyeICon /> : <CloseEyeICon />}
        </div>
      );
    }
  }, [showPassword]);

  return (
    <div className={`flex rounded-2xl items-center shadow-sm drop-shadow bg-[var(--new-gray)] gap-2 p-2 px-4`}>
      {checkFirstIcon()}
      <input
        {...props}
        ref={ref}
        className="outline-none w-full placeholder:text-sm bg-transparent border-none"
        type={showPassword ? "text" : props.type}
        onChange={props.onChange}
      />
      {eyeIconMemo}
    </div>
  );
});
export default MainInput;
