"use client";
import { TInput } from "@/types";
import React, { forwardRef } from "react";
import { InputHTMLAttributes, ReactNode, useCallback, useMemo } from "react";
import OpenEyeICon from "/public/eye.svg";
import CloseEyeICon from "/public/eye-slash.svg";

//forward Ref is function that get both props and ref and make them into one component, basicly it just pass the ref to the input element.  
const MainInput = forwardRef((props: TInput, ref:any) => {
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
      />
      {eyeIconMemo}
    </div>
  );
});

export default MainInput;